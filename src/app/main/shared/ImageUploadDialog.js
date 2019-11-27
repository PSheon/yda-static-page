import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { FuseAnimate, FuseAnimateGroup } from '@fuse';
import clsx from 'clsx';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import { FilePond, registerPlugin } from 'react-filepond';

import { AUTH_REST_BASE_END_POINT } from 'app/fuse-configs/envsConfig';
import * as Actions from 'app/store/actions';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImageCrop from 'filepond-plugin-image-crop';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginImageSizeMetadata from 'filepond-plugin-image-size-metadata';
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

registerPlugin(
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview,
  FilePondPluginFileValidateSize,
  FilePondPluginFileValidateType,
  FilePondPluginImageCrop,
  FilePondPluginImageSizeMetadata
);

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#000000'
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#2e2e2e'
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#2e2e2e'
      },
      '&:hover fieldset': {
        borderColor: '#000000'
      },
      '&.Mui-focused fieldset': {
        borderColor: '#000000'
      }
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderRadius: '2.4rem'
    }
  }
})(TextField);
const useStyles = makeStyles(theme => ({
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
  closeButton: {
    position: 'absolute',
    right: 5,
    top: '5px'
  },
  filePondWrapper: {
    opacity: '.6',
    transition: 'opacity .3s',

    '& .filepond--root': {
      borderBottom: 'none',

      '& .filepond--drop-label': {
        color: '#2e2e2e',
        fontSize: '2em',
        fontWeight: '600'
      },

      '& .filepond--file-status': {
        fontSize: '2em'
      },
      '& .filepond--file-action-button': {
        fontSize: '2em'
      },

      '& .filepond--file-info-main': {
        fontSize: '2em'
      },

      '& .filepond--file-info-sub': {
        fontSize: '1.5em'
      }
    },
    '& .filepond--panel-root': {
      fontSize: '1.75em',
      backgroundColor: 'transparent'
    },
    '&:hover, &.active': {
      opacity: '1',
      cursor: 'pointer'
    }
  }
}));
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ImageUploadDialog(props) {
  const classes = useStyles(props);
  const dispatch = useDispatch();
  const USER_NAME = useSelector(({ auth }) => auth.user.data.displayName);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [imageCaption, setImageCaption] = useState(null);
  const [imageTags, setImageTags] = useState([]);

  function handleClose() {
    setImageCaption(null);
    setDialogOpen(false);
  }
  function handleOpenUploader() {
    setDialogOpen(true);
  }
  function handleChangeTag(newTag) {
    const currentTags = new Set(imageTags);

    if (currentTags.has(newTag)) {
      currentTags.delete(newTag);
    } else {
      currentTags.add(newTag);
    }

    setImageTags(Array.from(currentTags));
  }

  return (
    <React.Fragment>
      <div onClick={handleOpenUploader}>{props.trigger}</div>

      <Dialog
        classes={{ paper: 'rounded-12' }}
        fullWidth
        fullScreen={false}
        open={dialogOpen}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <DialogTitle
          disableTypography
          className="text-center text-20 sm:text-24 font-semibold"
        >
          上傳我的圖片
          <IconButton
            aria-label="Close"
            className={classes.closeButton}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent className="-mt-10">
          <FuseAnimate>
            <Typography
              className="mt-22 sm:mt-22 sm:py-12 text-14 sm:text-20 font-600 text-center pb-10"
              color="inherit"
            >
              目前僅支援類型
              <br />
              <span className="text-blue">JPG、PNG</span> 和
              <span className="text-blue">SVG</span> 的圖片
            </Typography>
          </FuseAnimate>

          {imageCaption !== null && (
            <FuseAnimateGroup
              enter={{
                animation: 'transition.expandIn'
              }}
            >
              <CssTextField
                className="mb-24"
                label="圖片說明"
                id="imageCaption"
                name="imageCaption"
                value={imageCaption}
                onChange={event => setImageCaption(event.target.value)}
                variant="outlined"
                fullWidth
              />

              <div className="flex justify-around items-center mb-24">
                <div
                  onClick={() => handleChangeTag('red')}
                  className={clsx(
                    classes.tag,
                    classes.red,
                    imageTags.includes('red') && 'active',
                    'cursor-pointer w-24 h-24 rounded-full hover:shadow-xl'
                  )}
                ></div>
                <div
                  onClick={() => handleChangeTag('orange')}
                  className={clsx(
                    classes.tag,
                    classes.orange,
                    imageTags.includes('orange') && 'active',
                    'cursor-pointer w-24 h-24 rounded-full hover:shadow-xl'
                  )}
                ></div>
                <div
                  onClick={() => handleChangeTag('yellow')}
                  className={clsx(
                    classes.tag,
                    classes.yellow,
                    imageTags.includes('yellow') && 'active',
                    'cursor-pointer w-24 h-24 rounded-full hover:shadow-xl'
                  )}
                ></div>
                <div
                  onClick={() => handleChangeTag('green')}
                  className={clsx(
                    classes.tag,
                    classes.green,
                    imageTags.includes('green') && 'active',
                    'cursor-pointer w-24 h-24 rounded-full hover:shadow-xl'
                  )}
                ></div>
                <div
                  onClick={() => handleChangeTag('blue')}
                  className={clsx(
                    classes.tag,
                    classes.blue,
                    imageTags.includes('blue') && 'active',
                    'cursor-pointer w-24 h-24 rounded-full hover:shadow-xl'
                  )}
                ></div>
                <div
                  onClick={() => handleChangeTag('purple')}
                  className={clsx(
                    classes.tag,
                    classes.purple,
                    imageTags.includes('purple') && 'active',
                    'cursor-pointer w-24 h-24 rounded-full hover:shadow-xl'
                  )}
                ></div>
                <div
                  onClick={() => handleChangeTag('gray')}
                  className={clsx(
                    classes.tag,
                    classes.gray,
                    imageTags.includes('gray') && 'active',
                    'cursor-pointer w-24 h-24 rounded-full hover:shadow-xl'
                  )}
                ></div>
              </div>
              {/* <FuseAnimate>
              <CssTextField
                className="mb-24"
                label="圖片說明"
                id="imageCaption"
                name="imageCaption"
                value={imageCaption}
                onChange={event => setImageCaption(event.target.value)}
                variant="outlined"
                fullWidth
              />
            </FuseAnimate> */}
            </FuseAnimateGroup>
          )}
          <div
            className={clsx(
              classes.filePondWrapper,
              'mb-12 rounded-12 border-3 border-dotted'
            )}
          >
            <FilePond
              labelIdle="點擊 或 拖曳來 <span class='filepond--label-action'>上傳圖片 </span>"
              labelInvalidField="請上傳圖片"
              labelFileWaitingForSize="檢查圖片大小"
              labelFileSizeNotAvailable="圖片檔案太大了"
              labelFileLoading="載入中"
              labelFileLoadError="出錯了"
              labelFileProcessing="上傳中"
              labelFileProcessingComplete="上傳完成"
              labelFileProcessingAborted="上傳已取消"
              labelTapToCancel="取消"
              labelTapToRetry="重新上傳"
              labelButtonRemoveItem="移除圖片"
              labelButtonProcessItem="上傳"
              allowMultiple={false}
              labelFileTypeNotAllowed="不支援的圖片格式"
              acceptedFileTypes={['image/jpeg', 'image/png', 'image/svg+xml']}
              dropValidation={true}
              maxFileSize="12MB"
              imageCropAspectRatio="1:1"
              instantUpload={false}
              fileValidateTypeLabelExpectedTypesMap={{
                'image/jpeg': '.jpg',
                'image/png': '.png',
                'image/svg+xml': '.svg'
              }}
              onupdatefiles={async fileItems => {
                if (fileItems.length)
                  await setImageCaption(
                    `${USER_NAME}_${fileItems[0].file.name}`
                  );
              }}
              server={{
                url: `${AUTH_REST_BASE_END_POINT}/api/image`,
                timeout: 7000,
                process: (
                  fieldName,
                  file,
                  metadata,
                  load,
                  error,
                  progress,
                  abort
                ) => {
                  const formData = new FormData();
                  formData.append('imageData', file, file.name);
                  formData.append('imageName', file.name);
                  formData.append('imageTags', imageTags);
                  formData.append('imageCaption', imageCaption);
                  formData.append('mimeType', file.type);
                  formData.append('imageHeight', metadata.size.height);
                  formData.append('imageWidth', metadata.size.width);
                  formData.append('imageSize', file.size);

                  const request = new XMLHttpRequest();
                  request.open('POST', `${AUTH_REST_BASE_END_POINT}/api/image`);
                  request.setRequestHeader(
                    'Authorization',
                    'Bearer ' + window.localStorage.getItem('jwt_access_token')
                  );

                  request.upload.onprogress = e => {
                    progress(e.lengthComputable, e.loaded, e.total);
                  };

                  request.onload = function() {
                    if (request.status >= 200 && request.status < 300) {
                      // the load method accepts either a string (id) or an object
                      load(request.responseText);

                      // console.log('JSON.parse(request.responseText) ', JSON.parse(request.responseText))

                      dispatch({
                        type: Actions.ADD_IMAGE_TO_UPLOADED_IMAGES_LIST,
                        payload: JSON.parse(request.responseText)
                      });
                      dispatch({
                        type: Actions.SHOW_MESSAGE,
                        options: { message: '圖片件上傳成功' }
                      });
                      setDialogOpen(false);
                    } else {
                      // Can call the error method if something is wrong, should exit after
                      error('oh no');
                    }
                  };

                  request.send(formData);

                  // Should expose an abort method so the request can be cancelled
                  return {
                    abort: () => {
                      // This function is entered if the user has tapped the cancel button
                      request.abort();

                      // Let FilePond know the request has been cancelled
                      abort();
                    }
                  };
                }
              }}
            />
          </div>

          <FuseAnimate>
            <Typography
              className="mt-22 sm:mt-22 sm:py-12 text-14 sm:text-20 font-600 text-center pb-10"
              color="inherit"
            >
              大小限制 <span className="text-blue">12 MB</span>
            </Typography>
          </FuseAnimate>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}

export default ImageUploadDialog;
