import React, { useState } from 'react';
import { Icon, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, MenuList } from '@material-ui/core';

function ImageListMultiSelectMenu(props) {
	const [anchorEl, setAnchorEl] = useState(null);

	function openSelectedImageMenu(event) {
		setAnchorEl(event.currentTarget);
	}

	function closeSelectedImagesMenu() {
		setAnchorEl(null);
	}

	return (
		<React.Fragment>
			<IconButton
				className="p-0"
				aria-owns={anchorEl ? 'selectedImagesMenu' : null}
				aria-haspopup="true"
				onClick={openSelectedImageMenu}
			>
				<Icon>more_horiz</Icon>
			</IconButton>
			<Menu
				id="selectedImagesMenu"
				anchorEl={anchorEl}
				open={Boolean(anchorEl)}
				onClose={closeSelectedImagesMenu}
			>
				<MenuList>
					<MenuItem
						onClick={() => {
							// dispatch(Actions.deactiveImages(selectedImageIds));
							closeSelectedImagesMenu();
						}}
					>
						<ListItemIcon className="min-w-40">
							<Icon>delete</Icon>
						</ListItemIcon>
						<ListItemText primary="刪除" />
					</MenuItem>
				</MenuList>
			</Menu>
		</React.Fragment>
	);
}

export default ImageListMultiSelectMenu;
