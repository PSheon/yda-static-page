import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Typography,
  Hidden,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { FuseAnimateGroup } from '@fuse';
import VisibilitySensor from 'react-visibility-sensor';
import moment from 'moment';

import { imageNameToPathConverter } from 'app/utils';
import * as Actions from 'app/store/actions';
import eventBusService from 'app/services/eventBusService';
import LoadingSpinner from 'app/main/shared/LoadingSpinner';
import ImageListMultiSelectMenu from './ImageListMultiSelectMenu';
import { mimnTypeConverter, bytesToSizeConverter } from 'app/utils';

const useStyles = makeStyles(theme => ({
  red: {
    backgroundColor: '#ef7c71'
  },
  orange: {
    backgroundColor: '#f5bb67'
  },
  yellow: {
    backgroundColor: '#fbe571'
  },
  green: {
    backgroundColor: '#80db7b'
  },
  blue: {
    backgroundColor: '#63a5f8'
  },
  purple: {
    backgroundColor: '#cb8cf8'
  },
  gray: {
    backgroundColor: '#b4b4b8'
  }
}));

function ImagesTable(props) {
  const classes = useStyles(props);
  const dispatch = useDispatch();
  const IMAGE = useSelector(({ uploads }) => uploads.image);
  const images = IMAGE.docs;
  const selectedImageIds = IMAGE.selectedImageIds;
  const selectedItemId = IMAGE.selectedItemId;

  const [isLoadingNextPageImages, setIsLoadingNextPageImages] = useState(false);

  function handleOnPageBottom() {
    if (!IMAGE.hasNextPage) return;
    setIsLoadingNextPageImages(true);

    const params = {
      page: IMAGE.nextPage,
      limit: 20,
      sort: 'updatedAt',
      order: -1
    };

    eventBusService.getUploadedImages(params).then(response => {
      dispatch({
        type: Actions.APPEND_NEXT_PAGE_UPLOADED_IMAGES_LIST,
        payload: response
      });

      setIsLoadingNextPageImages(false);
    });
  }
  function handleImageSelect(imageId) {
    dispatch(Actions.setSelectedImageId(imageId));
    props.pageLayout.current.toggleRightSidebar();
  }

  function renderMimeIcon(mimeType) {
    switch (mimeType) {
      case 'JPG':
        return (
          <img
            className="w-40"
            src="/assets/images/utils/jpg-icon.svg"
            alt="jpg icon"
          />
        );
      case 'PNG':
        return (
          <img
            className="w-40"
            src="/assets/images/utils/png-icon.svg"
            alt="PNG icon"
          />
        );
      default:
        return (
          <img
            className="w-40"
            src="/assets/images/utils/svg-icon.svg"
            alt="svg icon"
          />
        );
    }
  }
  if (!images.length) {
    if (IMAGE.loading) {
      /* Still Loading */
      return (
        <div className="flex justify-center items-center h-full">
          <Typography variant="h6" color="textSecondary">
            圖片或許會遲到，但永不缺席！
          </Typography>
        </div>
      );
    } else {
      /* No Image uploaded */
      return (
        <div className="flex justify-center items-center h-full">
          <Typography variant="h6" color="textSecondary">
            還沒有圖片，上傳第一張圖片吧！
          </Typography>
        </div>
      );
    }
  }

  return (
    <FuseAnimateGroup animation="transition.slideUpIn" delay={300}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className="max-w-64 w-64 p-0 text-center">
              <Checkbox
                onClick={event => {
                  event.stopPropagation();
                }}
                onChange={event => {
                  event.target.checked
                    ? dispatch(Actions.selectAllImages())
                    : dispatch(Actions.deSelectAllImages());
                }}
                checked={
                  selectedImageIds.length === images.length &&
                  selectedImageIds.length > 0
                }
                indeterminate={
                  selectedImageIds.length !== images.length &&
                  selectedImageIds.length > 0
                }
              />
              {/* <IconButton>
								<Icon>more_horiz</Icon>
							</IconButton>
							<Menu open anchorEl="div">
								<MenuList>
									<MenuItem>
										<ListItemIcon className="min-w-40">
											<Icon>delete</Icon>
										</ListItemIcon>
										<ListItemText primary="Remove" />
									</MenuItem>
								</MenuList>
							</Menu> */}
            </TableCell>
            <TableCell className="text-center max-w-64 w-64 p-0">
              {/* ... More actions */}
              {selectedImageIds.length > 0 && <ImageListMultiSelectMenu />}
            </TableCell>
            <TableCell className="text-center sm:text-center">說明</TableCell>
            <TableCell className="text-center hidden md:table-cell">
              類型
            </TableCell>
            <TableCell className="text-center hidden sm:table-cell">
              作者
            </TableCell>
            <TableCell className="text-center hidden sm:table-cell">
              尺寸
            </TableCell>
            <TableCell className="text-center hidden md:table-cell">
              大小
            </TableCell>
            <TableCell className="text-center hidden sm:table-cell sm:text-left">
              修改日期
            </TableCell>
            <Hidden lgUp>
              <TableCell className="w-64 p-0 text-center"></TableCell>
            </Hidden>
          </TableRow>
        </TableHead>

        <TableBody>
          {Object.entries(images).map(([key, image]) => (
            <TableRow
              key={key}
              hover
              // onClick={event => dispatch(Actions.setSelectedImageId(image._id))}
              onClick={event => handleImageSelect(image._id)}
              selected={image._id === selectedItemId}
              className="cursor-pointer"
            >
              <TableCell className="w-48 px-4 sm:px-12" padding="checkbox">
                <Checkbox
                  onClick={event => {
                    event.stopPropagation();
                  }}
                  checked={selectedImageIds.includes(image._id)}
                  onChange={() =>
                    dispatch(Actions.toggleInSelectedImages(image._id))
                  }
                />
              </TableCell>
              <TableCell className="min-w-64 w-88 p-0 text-center">
                <img
                  className="w-full block rounded-12 p-8"
                  src={imageNameToPathConverter(image.imageName)}
                  alt={image.imageName}
                />
              </TableCell>
              <TableCell className="text-left max-w-64 sm:max-w-128 truncate sm:text-center">
                {image.imageCaption}
              </TableCell>
              <TableCell className="text-center whitespace-no-wrap hidden md:table-cell">
                {renderMimeIcon(mimnTypeConverter(image.mimeType))}
              </TableCell>
              <TableCell className="text-center whitespace-no-wrap hidden sm:table-cell">
                {image.author.displayName}
              </TableCell>
              <TableCell className="text-center whitespace-no-wrap hidden sm:table-cell">
                {image.imageHeight && image.imageWidth
                  ? `${image.imageHeight} X ${image.imageWidth}`
                  : '-'}
              </TableCell>
              <TableCell className="text-center whitespace-no-wrap hidden md:table-cell">
                {image.imageSize === ''
                  ? '-'
                  : bytesToSizeConverter(image.imageSize)}
              </TableCell>
              <TableCell className="text-center whitespace-no-wrap hidden sm:table-cell sm:text-left">
                {moment(image.updatedAt).format('LL')}
              </TableCell>
              <Hidden lgUp>
                <TableCell>
                  {/* <IconButton
										// onClick={(ev) => props.pageLayout.current.toggleRightSidebar()}
										aria-label="open right sidebar"
									>
										<Icon>info</Icon>
									</IconButton> */}
                  <div className="flex justify-around items-center">
                    {image.imageTags.map((tag, i) => (
                      <div
                        key={tag}
                        className={clsx(
                          classes[tag],
                          i !== 0 && '-ml-8',
                          'cursor-pointer w-24 h-24 rounded-full hover:shadow-xl'
                        )}
                      ></div>
                    ))}
                  </div>
                </TableCell>
              </Hidden>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <VisibilitySensor>
        {({ isVisible }) => {
          return (
            <div className="flex justify-center items-center w-full min-h-10">
              {isLoadingNextPageImages && (
                <LoadingSpinner width={128} height={128} />
              )}
              {isVisible && !isLoadingNextPageImages && handleOnPageBottom()}
              {/* {!IMAGE.hasNextPage && (
								<FuseAnimate delay={500}>
									<Typography variant="h5" color="textSecondary" className="mb-16">
										...沒有更多圖片了...
								</Typography>
								</FuseAnimate>
							)} */}
            </div>
          );
        }}
      </VisibilitySensor>
    </FuseAnimateGroup>
  );
}

export default ImagesTable;
