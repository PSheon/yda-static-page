import * as Actions from 'app/store/actions/staffList';

const initialState = {
	docs: null,
	searchText: '',
	selectedStaffIds: [],
	routeParams: {},
	totalPages: 10,
	totalStaffs: 0,
	staffInfoDialog: {
		props: {
			open: false
		},
		data: null
	}
};

const staffListReducer = function (state = initialState, action) {
	switch (action.type) {
		case Actions.GET_STAFF_LIST:
			{
				const { staffs, routeParams, totalPages, totalStaffs } = action.payload;

				return {
					...state,
					docs: staffs,
					routeParams: routeParams,
					totalPages: totalPages,
					totalStaffs: totalStaffs,
				};
			}
		case Actions.UPDATE_STAFF_LIST:
			{
				const { staffs, routeParams, totalPages } = action.payload;
				const staffIdSet = new Set(state.docs.map(item => item._id));
				let tempStaffArr = [];

				staffs.map((staff) => !staffIdSet.has(staff._id) ? tempStaffArr.push(staff) : null)

				return {
					...state,
					docs: [
						...state.docs,
						...tempStaffArr,
					],
					routeParams: routeParams,
					totalPages: totalPages,
				};
			}
		case Actions.SET_SEARCH_TEXT:
			{
				const { searchText } = action.payload;
				return {
					...state,
					searchText: searchText
				};
			}
		case Actions.TOGGLE_IN_SELECTED_STAFFS:
			{

				const { staffId } = action.payload;

				let selectedStaffIds = [...state.selectedStaffIds];

				if (selectedStaffIds.find(id => id === staffId) !== undefined) {
					selectedStaffIds = selectedStaffIds.filter(id => id !== staffId);
				}
				else {
					selectedStaffIds = [...selectedStaffIds, staffId];
				}

				return {
					...state,
					selectedStaffIds: selectedStaffIds
				};
			}
		case Actions.SELECT_ALL_STAFFS:
			{
				const arr = Object.keys(state.docs).map(k => state.docs[k]);

				const selectedStaffIds = arr.map(staff => staff.id);

				return {
					...state,
					selectedStaffIds: selectedStaffIds
				};
			}
		case Actions.DESELECT_ALL_STAFFS:
			{
				return {
					...state,
					selectedStaffIds: []
				};
			}
		case Actions.OPEN_STAFF_INFO_DIALOG:
			{
				return {
					...state,
					staffInfoDialog: {
						props: {
							open: true
						},
						data: action.payload.data
					}
				};
			}
		case Actions.CLOSE_STAFF_INFO_DIALOG:
			{
				return {
					...state,
					staffInfoDialog: {
						props: {
							open: false
						},
						data: null
					}
				};
			}
		default:
			{
				return state;
			}
	}
};

export default staffListReducer;
