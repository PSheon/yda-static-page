import React, { useState } from 'react';
import { Icon, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, MenuList } from '@material-ui/core';
import * as Actions from 'app/store/actions';
import { useDispatch, useSelector } from 'react-redux';

function StaffListMultiSelectMenu(props) {
	const dispatch = useDispatch();
	const selectedStaffIds = useSelector(({ staffList }) => staffList.selectedStaffIds);

	const [anchorEl, setAnchorEl] = useState(null);

	function openSelectedStaffMenu(event) {
		setAnchorEl(event.currentTarget);
	}

	function closeSelectedStaffsMenu() {
		setAnchorEl(null);
	}

	return (
		<React.Fragment>
			<IconButton
				className="p-0"
				aria-owns={anchorEl ? 'selectedStaffsMenu' : null}
				aria-haspopup="true"
				onClick={openSelectedStaffMenu}
			>
				<Icon>more_horiz</Icon>
			</IconButton>
			<Menu
				id="selectedStaffsMenu"
				anchorEl={anchorEl}
				open={Boolean(anchorEl)}
				onClose={closeSelectedStaffsMenu}
			>
				<MenuList>
					<MenuItem
						onClick={() => {
							dispatch(Actions.deactiveStaffs(selectedStaffIds));
							closeSelectedStaffsMenu();
						}}
					>
						<ListItemIcon className="min-w-40">
							<Icon>delete</Icon>
						</ListItemIcon>
						<ListItemText primary="Remove" />
					</MenuItem>
				</MenuList>
			</Menu>
		</React.Fragment>
	);
}

export default StaffListMultiSelectMenu;

