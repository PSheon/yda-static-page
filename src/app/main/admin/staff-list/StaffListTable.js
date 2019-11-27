import React, { useEffect, useState } from 'react';
import { Avatar, Checkbox, Icon, IconButton, Typography } from '@material-ui/core';
import clsx from 'clsx';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';
import { FuseUtils, FuseAnimate } from '@fuse';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import ReactTable from "react-table";
import * as Actions from 'app/store/actions';
import StaffListMultiSelectMenu from './StaffListMultiSelectMenu';
import LoadingSpinner from 'app/main/shared/LoadingSpinner';

import { socialLogoConverter, avatarNameToPathConverter } from 'app/utils';

const useStyles = makeStyles(theme => ({
	logoImgWrapper: {
		width: '1.5em',
	},
	unLinkImg: {
		filter: 'grayscale(100%)',
	}
}));
const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

function StaffListTable(props) {
	const classes = useStyles();
	const dispatch = useDispatch();
	const totalPages = useSelector(({ staffList }) => staffList.totalPages);
	const staffs = useSelector(({ staffList }) => staffList.docs);
	const selectedStaffIds = useSelector(({ staffList }) => staffList.selectedStaffIds);
	const searchText = useSelector(({ staffList }) => staffList.searchText);

	const [filteredData, setFilteredData] = useState(null);

	useEffect(() => {
		function getFilteredArray(entities, searchText) {
			const arr = Object.keys(entities).map((id) => entities[id]);
			if (searchText.length === 0) {
				return arr;
			}
			return FuseUtils.filterArrayByString(arr, searchText);
		}

		if (staffs) {
			setFilteredData(getFilteredArray(staffs, searchText));
		}
	}, [staffs, searchText]);

	function handlePageChange(wantedPageIndex) {
		if (staffs.length < 20 * wantedPageIndex) {
			dispatch(Actions.updateStaffListWithPageIndex({
				filter: 'staff',
				fields: 'role',
				page: wantedPageIndex,
				limit: 20,
				sort: 'displayName',
				order: -1
			}));
		}
	}

	const handleChangeUserActivation = ({ _id, displayName, email, active }) => {
		dispatch(Actions.openDialog({
			children: (
				<React.Fragment>
					<DialogTitle id="alert-dialog-title" className="text-center text-lg">{active ? `禁用員工 ${displayName} 的帳號？` : `啟用員工 ${displayName} 的帳號？`}</DialogTitle>
					<DialogContent>
						<DialogContentText id="alert-dialog-description" className="font-semibold text-lg text-center">
							{active ? `請注意，您確定要 禁用員工 ${displayName} 的帳號 嗎？` : `請注意，您確定要 啟用員工 ${displayName} 的帳號 嗎？`}
						</DialogContentText>
					</DialogContent>
					<DialogActions className="justify-center">
						<Button onClick={() => dispatch(Actions.closeDialog())} autoFocus className="text-gray-700 rounded-full">
							取消
            </Button>
						<Button onClick={() => dispatch(Actions.toggleStaffActivation({ userId: _id, email, active: !active }))} className={clsx(active ? "text-red" : "text-green", "rounded-full")}>
							確定
            </Button>
					</DialogActions>
				</React.Fragment>
			),
			TransitionComponent: Transition,
		}))
	}

	if (!filteredData) {
		return (
			<div className="flex justify-center items-center">
				<LoadingSpinner width="128" height="128" />
			</div>
		);
	}

	if (filteredData.length === 0) {
		return (
			<div className="flex flex-1 items-center justify-center h-full">
				<Typography color="textSecondary" variant="h5">
					沒有符合條件的員工 ...
				</Typography>
			</div>
		);
	}

	return (
		<FuseAnimate animation="transition.slideUpIn" delay={300}>
			<ReactTable
				className="-striped -highlight h-full sm:rounded-16 overflow-hidden"
				getTrProps={(state, rowInfo, column) => {
					return {
						className: "cursor-pointer",
						onClick: (e, handleOriginal) => {
							if (rowInfo) {
								const removeOriginalIDProperties = ({
									// eslint-disable-next-line no-unused-vars
									_id,
									// eslint-disable-next-line no-unused-vars
									shortcuts,
									// eslint-disable-next-line no-unused-vars
									google,
									// eslint-disable-next-line no-unused-vars
									facebook,
									// eslint-disable-next-line no-unused-vars
									updatedAt,
									// eslint-disable-next-line no-unused-vars
									createdAt,
									...rest
								}) => rest
								dispatch(Actions.openStaffInfoDialog({
									...removeOriginalIDProperties(rowInfo.original),
									id: rowInfo.original._id
								}));
							}
						}
					}
				}}
				data={filteredData}
				columns={[
					{
						Header: () => (
							<Checkbox
								onClick={(event) => {
									event.stopPropagation();
								}}
								onChange={(event) => {
									event.target.checked ? dispatch(Actions.selectAllStaffs()) : dispatch(Actions.deSelectAllStaffs());
								}}
								checked={selectedStaffIds.length === staffs.length && selectedStaffIds.length > 0}
								indeterminate={selectedStaffIds.length !== staffs.length && selectedStaffIds.length > 0}
							/>
						),
						accessor: "",
						Cell: row => {
							return (
								<Checkbox
									onClick={(event) => {
										event.stopPropagation();
									}}
									checked={selectedStaffIds.includes(row.value._id)}
									onChange={() => dispatch(Actions.toggleInSelectedStaffs(row.value._id))}
								/>
							)
						},
						className: "justify-center",
						sortable: false,
						width: 64
					},
					{
						Header: () => (
							selectedStaffIds.length > 0 && (
								<StaffListMultiSelectMenu />
							)
						),
						accessor: "photoURL",
						Cell: row => (
							<div className="flex justify-around items-center w-full">
								<p className="font-600 text-white text-lg"># {row.index}</p>
								<Avatar className="mr-8" alt={row.original.name} src={avatarNameToPathConverter(row.value)} />
							</div>
						),
						className: "justify-center",
						sortable: false,
						minWidth: 100,
					},
					{
						Header: "名稱",
						accessor: "displayName",
						Cell: ({ value }) => <span className="text-600 text-white text-lg">{value}</span>,
						className: "flex items-center justify-center font-bold",
						// filterable: true,
						minWidth: 128,
					},
					{
						Header: "信箱",
						accessor: "email",
						className: "flex items-center justify-center",
						// filterable: true
						minWidth: 180,
					},
					{
						Header: "綁定 Google",
						accessor: "google",
						Cell: row => (
							<div className={classes.logoImgWrapper}>
								{row.original.google == null ? (
									<img className={classes.unLinkImg} alt="google Icon" src={socialLogoConverter('google')} />
								) : (
										<img alt="google Icon" src={socialLogoConverter('google')} />
									)}
							</div>
						),
						className: "flex items-center justify-center font-bold",
						// filterable: true,
						minWidth: 128,
					},
					{
						Header: "綁定 Facebook",
						accessor: "facebook",
						Cell: row => (
							<div className={classes.logoImgWrapper}>
								{row.original.facebook == null ? (
									<img className={classes.unLinkImg} alt="google Icon" src={socialLogoConverter('facebook')} />
								) : (
										<img alt="google Icon" src={socialLogoConverter('facebook')} />
									)}
							</div>
						),
						className: "flex items-center justify-center font-bold",
						// filterable: true
						minWidth: 128,
					},
					{
						Header: "通過驗證",
						accessor: "verified",
						Cell: row => (
							row.original.verified ? <Icon className="text-green pr-10">check_circle</Icon> : <Icon className="text-yellow pr-10">cancel</Icon>
						),
						className: "flex items-center justify-center font-bold"
						// filterable: true
					},
					{
						Header: "啟用狀態",
						Cell: row => (
							<div className="flex items-center">
								<IconButton
									onClick={(ev) => {
										ev.stopPropagation();
										const { _id, displayName, email, active } = row.original;

										handleChangeUserActivation({ _id, displayName, email, active })
									}}
								>
									{row.original.active ? (
										<Icon className="text-green">lock_open</Icon>
									) : (
											<Icon className="text-red">lock</Icon>
										)}
								</IconButton>
							</div>
						),
						className: "flex items-center justify-center font-bold",
					}
				]}
				defaultPageSize={20}
				noDataText="沒有符合條件的員工"
				showPageSizeOptions={false}
				showPageJump={false}
				pageText=""
				ofText="，"
				pages={totalPages}
				renderCurrentPage={page => <span>第 {page + 1} 頁</span>}
				renderTotalPagesCount={pages => <span>共 {pages} 頁</span>}
				onFetchData={({ page }) => { handlePageChange(page + 2) }}
			/>
		</FuseAnimate>
	);
}

export default StaffListTable;
