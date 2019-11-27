import React from 'react';
import { useDispatch } from 'react-redux';
import { Icon, IconButton, Typography } from '@material-ui/core';
import { FuseAnimate } from '@fuse';
import { useSelector } from 'react-redux';
import Fade from '@material-ui/core/Fade';
import Tooltip from '@material-ui/core/Tooltip';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import copy from 'copy-to-clipboard';

import { imageNameToPathConverter } from 'app/utils';
import * as Actions from 'app/store/actions';

function ImagesListSidebarHeader(props) {
  const dispatch = useDispatch();
  const selectedItem = useSelector(({ uploads }) =>
    uploads.image.docs.find(doc => doc._id === uploads.image.selectedItemId)
  );

  function handleCopyImageLink() {
    copy(imageNameToPathConverter(selectedItem.imageName));
    dispatch(Actions.showMessage({ message: '已複製圖片網址.' }));
  }
  function handleDeleteImage() {
    dispatch(Actions.deleteImage(selectedItem._id));
  }

  if (!selectedItem) {
    return null;
  }
  return (
    <div className="flex flex-col justify-between h-full p-4 sm:p-12">
      <div className="toolbar flex align-center justify-end">
        <FuseAnimate animation="transition.expandIn" delay={200}>
          <Tooltip
            title="複製圖片網址"
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
            placement="bottom"
            onClick={handleCopyImageLink}
          >
            <IconButton aria-label="Copy button">
              <FileCopyIcon />
            </IconButton>
          </Tooltip>
        </FuseAnimate>
        <FuseAnimate animation="transition.expandIn" delay={200}>
          <Tooltip
            title="下載圖片"
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
            placement="bottom"
          >
            <a
              href={imageNameToPathConverter(selectedItem.imageName)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton>
                <Icon>cloud_download</Icon>
              </IconButton>
            </a>
          </Tooltip>
        </FuseAnimate>
        <FuseAnimate animation="transition.expandIn" delay={200}>
          <Tooltip
            title="刪除圖片"
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
            placement="bottom"
            onClick={handleDeleteImage}
          >
            <IconButton>
              <Icon>delete</Icon>
            </IconButton>
          </Tooltip>
        </FuseAnimate>
      </div>

      <div className="p-12">
        <FuseAnimate delay={200}>
          <Typography variant="subtitle1" color="inherit" className="mb-8">
            {selectedItem.imageName}
          </Typography>
        </FuseAnimate>
      </div>
    </div>
  );
}

export default ImagesListSidebarHeader;
