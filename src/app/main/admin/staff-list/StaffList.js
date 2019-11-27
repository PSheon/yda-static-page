import React, { useEffect, useRef } from 'react';
import { FusePageSimple } from '@fuse';
import { useDispatch } from 'react-redux';
import StaffListTable from './StaffListTable';
import StaffListHeader from './StaffListHeader';
import StaffListDialog from './StaffListDialog';
import * as Actions from 'app/store/actions';

function StaffList(props) {
	const dispatch = useDispatch();

	const pageLayout = useRef(null);

	useEffect(() => {
		dispatch(Actions.getStaffList({
			filter: 'staff',
			fields: 'role',
			page: 1,
			limit: 20,
			sort: 'displayName',
			order: -1
		}));
		// dispatch(Actions.getStaffData());
	}, [dispatch]);

	return (
		<React.Fragment>
			<FusePageSimple
				classes={{
					contentWrapper: "p-0 sm:p-24 pb-20 h-full",
					content: "flex flex-col h-full",
					leftSidebar: "w-256 border-0",
					header: "min-h-72 h-72 sm:h-136 sm:min-h-136"
				}}
				header={
					<StaffListHeader pageLayout={pageLayout} />
				}
				content={
					<StaffListTable />
				}
				sidebarInner
				ref={pageLayout}
			// innerScroll
			/>
			<StaffListDialog />
		</React.Fragment>
	)
}

export default StaffList;
