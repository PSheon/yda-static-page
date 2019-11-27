import { FuseUtils } from '@fuse';

export const GET_NAVIGATION = '[NAVIGATION] GET NAVIGATION';
export const SET_NAVIGATION = '[NAVIGATION] SET NAVIGATION';
export const RESET_NAVIGATION = '[NAVIGATION] RESET NAVIGATION'; // To Guest
export const SET_NAVIGATION_USER = '[NAVIGATION] SET NAVIGATION - USER';
export const SET_NAVIGATION_STAFF = '[NAVIGATION] SET NAVIGATION - STAFF';
export const SET_NAVIGATION_ADMIN = '[NAVIGATION] SET NAVIGATION - ADMIN';

export function getNavigation() {
	return {
		type: GET_NAVIGATION
	}
}

export function setNavigation(navigation) {
	return {
		type: SET_NAVIGATION,
		navigation
	}
}


export function resetNavigation() {
	return {
		type: RESET_NAVIGATION
	}
}
export function setNavigationUser() {
	return {
		type: SET_NAVIGATION_USER,
	}
}
export function setNavigationStaff() {
	return {
		type: SET_NAVIGATION_STAFF,
	}
}
export function setNavigationAdmin() {
	return {
		type: SET_NAVIGATION_ADMIN,
	}
}

export function appendNavigationItem(item, parentId) {
	return (dispatch, getState) => {
		const { navigation } = getState().fuse;
		return dispatch({
			type: SET_NAVIGATION,
			navigation: FuseUtils.appendNavItem(navigation, item, parentId)
		});
	}
}

export function prependNavigationItem(item, parentId) {
	return (dispatch, getState) => {
		const { navigation } = getState().fuse;
		return dispatch({
			type: SET_NAVIGATION,
			navigation: FuseUtils.prependNavItem(navigation, item, parentId)
		});
	}
}

export function updateNavigationItem(id, item) {
	return (dispatch, getState) => {
		const { navigation } = getState().fuse;
		return dispatch({
			type: SET_NAVIGATION,
			navigation: FuseUtils.updateNavItem(navigation, id, item)
		});
	}
}

export function removeNavigationItem(id) {
	return (dispatch, getState) => {
		const { navigation } = getState().fuse;
		return dispatch({
			type: SET_NAVIGATION,
			navigation: FuseUtils.removeNavItem(navigation, id)
		});
	}
}
