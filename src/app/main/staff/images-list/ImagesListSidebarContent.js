import React, { useState } from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/styles';
import { FuseAnimate } from '@fuse';
import { useSelector, useDispatch } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Icon from '@material-ui/core/Icon';
import clsx from 'clsx';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import moment from 'moment';

import * as Actions from 'app/store/actions';
import LoadingSpinnerOverlay from 'app/main/shared/LoadingSpinnerOverlay';
import { imageNameToPathConverter, avatarNameToPathConverter } from 'app/utils';
import { mimnTypeConverter, bytesToSizeConverter } from 'app/utils';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const useStyles = makeStyles({
  tag: {
    transition: 'background-color .3s, transform .3s'
  },
  red: {
    backgroundColor: 'transparent',
    border: '2.5px solid #ef7c71',
    '&.active, &:hover': {
      backgroundColor: '#ef7c71',
      transform: 'scale(1.3)',
      boxShadow: '0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)'
    }
  },
  orange: {
    backgroundColor: 'transparent',
    border: '2.5px solid #f5bb67',
    '&.active, &:hover': {
      backgroundColor: '#f5bb67',
      transform: 'scale(1.3)',
      boxShadow: '0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)'
    }
  },
  yellow: {
    backgroundColor: 'transparent',
    border: '2.5px solid #fbe571',
    '&.active, &:hover': {
      backgroundColor: '#fbe571',
      transform: 'scale(1.3)',
      boxShadow: '0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)'
    }
  },
  green: {
    backgroundColor: 'transparent',
    border: '2.5px solid #80db7b',
    '&.active, &:hover': {
      backgroundColor: '#80db7b',
      transform: 'scale(1.3)',
      boxShadow: '0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)'
    }
  },
  blue: {
    backgroundColor: 'transparent',
    border: '2.5px solid #63a5f8',
    '&.active, &:hover': {
      backgroundColor: '#63a5f8',
      transform: 'scale(1.3)',
      boxShadow: '0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)'
    }
  },
  purple: {
    backgroundColor: 'transparent',
    border: '2.5px solid #cb8cf8',
    '&.active, &:hover': {
      backgroundColor: '#cb8cf8',
      transform: 'scale(1.3)',
      boxShadow: '0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)'
    }
  },
  gray: {
    backgroundColor: 'transparent',
    border: '2.5px solid #b4b4b8',
    '&.active, &:hover': {
      backgroundColor: '#b4b4b8',
      transform: 'scale(1.3)',
      boxShadow: '0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)'
    }
  },
  noContent: {
    height: '20em'
  },
  table: {
    '& th': {
      padding: '16px 0'
    }
  },
  closeButton: {
    position: 'absolute',
    right: 5,
    top: '5px'
  }
});

function ImagesListSidebarContent(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const theme = useTheme();
  const isImageListLoading = useSelector(
    ({ uploads }) => uploads.image.loading
  );
  const selectedItem = useSelector(({ uploads }) =>
    uploads.image.docs.find(doc => doc._id === uploads.image.selectedItemId)
  );
  const isMobileView = useMediaQuery(theme.breakpoints.down('xs'));

  const [dialogOpen, setDialogOpen] = useState(false);
  const [imageCaptionEditMode, setImageCaptionEditMode] = useState(false);
  const [imageCaption, setImageCaption] = useState('');

  function handleClose() {
    setDialogOpen(false);
  }
  function handleOpenImageLightbox() {
    setDialogOpen(true);
  }

  function handleSubmit() {
    setImageCaptionEditMode(false);
    if (imageCaption && imageCaption !== selectedItem.imageCaption) {
      dispatch(
        Actions.updateImageById({
          imageId: selectedItem._id,
          imageCaption: imageCaption,
          imageTags: selectedItem.imageTags
        })
      );
    }
  }

  function handleUpdateImageTags(newTag) {
    const currentTags = new Set(selectedItem.imageTags);

    if (currentTags.has(newTag)) {
      currentTags.delete(newTag);
    } else {
      currentTags.add(newTag);
    }

    dispatch(
      Actions.updateImageById({
        imageId: selectedItem._id,
        imageCaption: selectedItem.imageCaption,
        imageTags: Array.from(currentTags)
      })
    );
  }

  function renderMimeIcon(mimeType) {
    switch (mimeType) {
      case 'JPG':
        return (
          <img
            className="w-32"
            src="/assets/images/utils/jpg-icon.svg"
            alt="jpg icon"
          />
        );
      case 'PNG':
        return (
          <img
            className="w-32"
            src="/assets/images/utils/png-icon.svg"
            alt="PNG icon"
          />
        );
      default:
        return (
          <img
            className="w-32"
            src="/assets/images/utils/svg-icon.svg"
            alt="svg icon"
          />
        );
    }
  }
  if (!selectedItem) {
    return (
      <div
        className={clsx(
          classes.noContent,
          'flex flex-col justify-center items-center'
        )}
      >
        <Icon className="text-128" color="action">
          edit
        </Icon>
        <Typography variant="subtitle1" className="py-16">
          選取圖片，即可查看其詳細資訊。
        </Typography>
      </div>
    );
  }

  return (
    <FuseAnimate animation="transition.slideUpIn" delay={200}>
      <div className="file-details p-16 sm:p-24">
        {isImageListLoading && (
          <LoadingSpinnerOverlay width={128} height={128} />
        )}

        <div className="preview h-128 sm:h-256 file-icon flex items-center justify-center">
          <FuseAnimate animation="transition.expandIn" delay={300}>
            {isMobileView ? (
              <img
                className="h-full rounded-12 p-8 cursor-pointer"
                src={imageNameToPathConverter(selectedItem.imageName)}
                alt={selectedItem.imageName}
              />
            ) : (
              <img
                className="h-full rounded-12 p-8 cursor-pointer"
                src={imageNameToPathConverter(selectedItem.imageName)}
                alt={selectedItem.imageName}
                onClick={handleOpenImageLightbox}
              />
            )}
          </FuseAnimate>
        </div>

        <Typography variant="subtitle1" className="py-16">
          圖片資訊
        </Typography>

        <div className="flex justify-start items-center">
          <Avatar
            className="mr-12"
            alt="user avatar"
            src={avatarNameToPathConverter(selectedItem.author.photoURL)}
          />
          <div className="flex justify-around items-center w-full">
            <div
              onClick={() => handleUpdateImageTags('red')}
              className={clsx(
                classes.tag,
                classes.red,
                selectedItem.imageTags.includes('red') && 'active',
                'cursor-pointer w-24 h-24 rounded-full hover:shadow-xl'
              )}
            ></div>
            <div
              onClick={() => handleUpdateImageTags('orange')}
              className={clsx(
                classes.tag,
                classes.orange,
                selectedItem.imageTags.includes('orange') && 'active',
                'cursor-pointer w-24 h-24 rounded-full hover:shadow-xl'
              )}
            ></div>
            <div
              onClick={() => handleUpdateImageTags('yellow')}
              className={clsx(
                classes.tag,
                classes.yellow,
                selectedItem.imageTags.includes('yellow') && 'active',
                'cursor-pointer w-24 h-24 rounded-full hover:shadow-xl'
              )}
            ></div>
            <div
              onClick={() => handleUpdateImageTags('green')}
              className={clsx(
                classes.tag,
                classes.green,
                selectedItem.imageTags.includes('green') && 'active',
                'cursor-pointer w-24 h-24 rounded-full hover:shadow-xl'
              )}
            ></div>
            <div
              onClick={() => handleUpdateImageTags('blue')}
              className={clsx(
                classes.tag,
                classes.blue,
                selectedItem.imageTags.includes('blue') && 'active',
                'cursor-pointer w-24 h-24 rounded-full hover:shadow-xl'
              )}
            ></div>
            <div
              onClick={() => handleUpdateImageTags('purple')}
              className={clsx(
                classes.tag,
                classes.purple,
                selectedItem.imageTags.includes('purple') && 'active',
                'cursor-pointer w-24 h-24 rounded-full hover:shadow-xl'
              )}
            ></div>
            <div
              onClick={() => handleUpdateImageTags('gray')}
              className={clsx(
                classes.tag,
                classes.gray,
                selectedItem.imageTags.includes('gray') && 'active',
                'cursor-pointer w-24 h-24 rounded-full hover:shadow-xl'
              )}
            ></div>
          </div>
        </div>

        <table className={clsx(classes.table, 'w-full text-left')}>
          <tbody>
            <tr>
              <th className="min-w-84">說明</th>
              <td className="h-64 max-w-192 cursor-pointer flex justify-start items-center">
                {imageCaptionEditMode ? (
                  <TextField
                    id="imageCaption"
                    label="圖片說明"
                    autoFocus
                    defaultValue={selectedItem.imageCaption}
                    onChange={event => setImageCaption(event.target.value)}
                    onBlur={event => handleSubmit()}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment
                          position="end"
                          className="cursor-pointer"
                        >
                          <Icon className="text-20" color="action">
                            editedit
                          </Icon>
                        </InputAdornment>
                      )
                    }}
                    margin="dense"
                  />
                ) : (
                  <FuseAnimate animation="transition.slideUpIn" delay={200}>
                    <Typography
                      variant="body1"
                      color="inherit"
                      className="text-left w-full whitespace-pre-line flex justify-start items-center"
                      onClick={() => setImageCaptionEditMode(true)}
                    >
                        <Icon className="mr-8">edit</Icon>
                      {selectedItem.imageCaption}
                    </Typography>
                  </FuseAnimate>
                )}
              </td>
            </tr>

            <tr>
              <th>類型</th>
              <td>
                {renderMimeIcon(mimnTypeConverter(selectedItem.mimeType))}
              </td>
            </tr>

            <tr>
              <th>尺寸</th>
              <td>
                {selectedItem.imageHeight && selectedItem.imageWidth
                  ? bytesToSizeConverter(selectedItem.imageSize)
                  : '-'}
              </td>
            </tr>

            <tr>
              <th>大小</th>
              <td>
                {selectedItem.imageSize === ''
                  ? '-'
                  : bytesToSizeConverter(selectedItem.imageSize)}
              </td>
            </tr>

            <tr>
              <th>作者</th>
              <td>{selectedItem.author.displayName}</td>
            </tr>

            <tr>
              <th>更新日期</th>
              <td>{moment(selectedItem.updatedAt).format('LLL')}</td>
            </tr>
          </tbody>
        </table>

        {/* Image LightBox */}
        <Dialog
          classes={{ paper: 'rounded-12' }}
          maxWidth="xl"
          fullWidth
          fullScreen={false}
          open={dialogOpen}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <DialogTitle
            id="alert-dialog-title"
            disableTypography
            className="text-center text-16 sm:text-24 font-semibold"
          >
            {selectedItem.imageName}
            <IconButton
              aria-label="Close"
              className={classes.closeButton}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent className="flex justify-center items-center">
            <FuseAnimate>
              <img
                className="rounded-12 p-8 cursor-pointer"
                src={imageNameToPathConverter(selectedItem.imageName)}
                alt={selectedItem.imageName}
              />
            </FuseAnimate>
          </DialogContent>
        </Dialog>
      </div>
    </FuseAnimate>
  );
}

export default ImagesListSidebarContent;
