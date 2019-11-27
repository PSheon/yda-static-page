import React, { useEffect, useState } from 'react';
import {
  Button,
  Tab,
  Tabs,
  TextField,
  Icon,
  Typography,
  FormControlLabel,
  Switch
} from '@material-ui/core';
import history from '@history';
import { withStyles } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/styles';
import { FuseAnimate, FusePageCarded } from '@fuse';
import { useForm } from '@fuse/hooks';
import { Link } from 'react-router-dom';
import VisibilitySensor from 'react-visibility-sensor';
import clsx from 'clsx';
import _ from '@lodash';
import { useDispatch, useSelector } from 'react-redux';
import isURL from 'validator/lib/isURL';

import { imageNameToPathConverter } from 'app/utils';
import ImageUploadDialog from 'app/main/shared/ImageUploadDialog';
import * as Actions from 'app/store/actions';
import eventBusService from 'app/services/eventBusService';
import LoadingSpinner from 'app/main/shared/LoadingSpinner';

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#3e3e3e'
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#fefefe'
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#5e5e5e'
      },
      '&:hover fieldset': {
        borderColor: '#3e3e3e'
      },
      '&.Mui-focused fieldset': {
        borderColor: '#3e3e3e'
      }
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderRadius: '2.4rem'
    }
  }
})(TextField);
const useStyles = makeStyles(theme => ({
  carouselImageFeaturedStar: {
    position: 'absolute',
    top: 0,
    right: 0,
    color: orange[400],
    opacity: 0
  },
  carouselImageUpload: {
    transitionProperty: 'box-shadow',
    transitionDuration: theme.transitions.duration.short,
    transitionTimingFunction: theme.transitions.easing.easeInOut
  },
  carouselImageItem: {
    transitionProperty: 'box-shadow',
    transitionDuration: theme.transitions.duration.short,
    transitionTimingFunction: theme.transitions.easing.easeInOut,
    '&:hover': {
      '& $carouselImageFeaturedStar': {
        opacity: 0.8
      }
    },
    '&.featured': {
      pointerEvents: 'none',
      boxShadow: theme.shadows[3],
      '& $carouselImageFeaturedStar': {
        opacity: 1
      },
      '&:hover $carouselImageFeaturedStar': {
        opacity: 1
      }
    }
  }
}));

function Carousel(props) {
  const dispatch = useDispatch();
  const selectedCarouselId = props.match.params.carouselId;
  const CAROUSEL = useSelector(({ homePage }) => homePage.carousels);
  const IMAGE = useSelector(({ uploads }) => uploads.image);
  const images = IMAGE.docs;

  const classes = useStyles(props);
  const [tabValue, setTabValue] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);
  const [isLoadingNextPageImages, setIsLoadingNextPageImages] = useState(false);
  const { form, handleChange, setForm } = useForm(null);

  useEffect(() => {
    dispatch(Actions.syncUploadedImages());
  }, [dispatch]);

  useEffect(() => {
    if (!form) {
      if (selectedCarouselId === 'new') {
        setForm({
          _id: 'new',
          title: '',
          subTitle: '',
          imageName: '',
          linkAddress: '',
          published: false
        });
      } else {
        if (CAROUSEL.docs.length) {
          const carousel = CAROUSEL.docs.filter(
            carousel => carousel._id === selectedCarouselId
          )[0];
          if (!carousel) {
            history.push({
              pathname: '/staff/carousels-list'
            });
          } else {
            setForm(carousel);
          }
        } else {
          history.push({
            pathname: '/staff/carousels-list'
          });
        }
      }
    }
  }, [CAROUSEL.docs, form, selectedCarouselId, setForm]);

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

  function setCarouselImageName(imageName) {
    setForm(form => _.setIn(form, 'imageName', imageName));
  }

  function handleChangeTab(event, tabValue) {
    setTabValue(tabValue);
  }

  function handleDeleteCarousel() {
    setIsLoadingDelete(true);
    dispatch(Actions.deleteCarousel(selectedCarouselId));
  }
  function handleSaveCarousel() {
    setIsLoading(true);
    dispatch(Actions.saveCarousel(form));
  }

  function canBeSubmitted() {
    if (form.linkAddress === '') {
      return form.title && form.imageName;
    } else {
      return form.title && form.imageName && isURL(form.linkAddress);
    }
  }

  return (
    <FusePageCarded
      classes={{
        toolbar: 'p-0',
        header: 'min-h-128 h-128 sm:h-136 sm:min-h-136'
      }}
      header={
        form && (
          <div className="flex flex-1 w-full items-center justify-between">
            <div className="flex flex-col items-start">
              <FuseAnimate animation="transition.slideRightIn" delay={300}>
                <Typography
                  className="normal-case flex items-center mb-12"
                  component={Link}
                  role="button"
                  to="/staff/carousels-list"
                  color="inherit"
                >
                  <Icon className="mr-4 text-20">arrow_back</Icon>
                  返回輪播圖片列表
                </Typography>
              </FuseAnimate>

              <div className="flex items-center max-w-200 sm:max-w-512">
                <FuseAnimate animation="transition.expandIn" delay={300}>
                  {form.imageName ? (
                    <img
                      className="w-32 sm:w-48 mr-8 sm:mr-16 rounded"
                      src={imageNameToPathConverter(form.imageName)}
                      alt={form.title}
                    />
                  ) : (
                    <img
                      className="w-32 sm:w-48 mr-8 sm:mr-16 rounded"
                      src="assets/images/ecommerce/product-image-placeholder.png"
                      alt="預設圖片"
                    />
                  )}
                </FuseAnimate>
                <div className="flex flex-col min-w-0">
                  <FuseAnimate animation="transition.slideLeftIn" delay={300}>
                    <Typography className="text-16 sm:text-20 truncate">
                      {form.title ? form.title : '新增輪播圖片'}
                    </Typography>
                  </FuseAnimate>
                  <FuseAnimate animation="transition.slideLeftIn" delay={300}>
                    <Typography variant="caption">圖片內容</Typography>
                  </FuseAnimate>
                </div>
              </div>
            </div>
            {selectedCarouselId === 'new' ? (
              <FuseAnimate animation="transition.slideRightIn" delay={300}>
                <Button
                  className="whitespace-no-wrap mx-12 rounded-full"
                  variant="contained"
                  color="secondary"
                  disabled={!canBeSubmitted()}
                  onClick={handleSaveCarousel}
                >
                  {isLoading ? (
                    <span className="flex justify-center">
                      新增圖片中 <LoadingSpinner width="2em" height="2em" />
                    </span>
                  ) : (
                    '新增圖片'
                  )}
                </Button>
              </FuseAnimate>
            ) : (
              <div className="flex flex-row justify-around items-center h-full">
                <FuseAnimate animation="transition.slideRightIn" delay={300}>
                  <Button
                    className="whitespace-no-wrap px-12 rounded-full bg-red text-white hover:bg-red-300"
                    variant="contained"
                    onClick={handleDeleteCarousel}
                    disabled={CAROUSEL.docs.length < 2}
                  >
                    {isLoadingDelete ? (
                      <span className="flex justify-center">
                        刪除圖片中 <LoadingSpinner width="2em" height="2em" />
                      </span>
                    ) : (
                      '刪除圖片'
                    )}
                  </Button>
                </FuseAnimate>
                <FuseAnimate animation="transition.slideRightIn" delay={300}>
                  <Button
                    className="whitespace-no-wrap mx-12 rounded-full"
                    variant="contained"
                    color="secondary"
                    disabled={!canBeSubmitted()}
                    onClick={handleSaveCarousel}
                  >
                    {isLoading ? (
                      <span className="flex justify-center">
                        更新圖片中 <LoadingSpinner width="2em" height="2em" />
                      </span>
                    ) : (
                      '更新圖片'
                    )}
                  </Button>
                </FuseAnimate>
              </div>
            )}
          </div>
        )
      }
      contentToolbar={
        <Tabs
          value={tabValue}
          onChange={handleChangeTab}
          indicatorColor="secondary"
          textColor="secondary"
          variant="scrollable"
          scrollButtons="auto"
          classes={{ root: 'w-full h-64' }}
        >
          <Tab className="h-64 normal-case" label="基本設定" />
          <Tab className="h-64 normal-case" label="圖片設定" />
        </Tabs>
      }
      content={
        form && (
          <div className="p-16 sm:p-24 max-w-2xl">
            {tabValue === 0 && (
              <div>
                <CssTextField
                  className="mt-8 mb-16"
                  error={form.title === ''}
                  required
                  label="大標題"
                  autoFocus
                  id="title"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  variant="outlined"
                  multiline
                  rows={5}
                  fullWidth
                />

                <CssTextField
                  className="mt-8 mb-16"
                  error={form.subTitle === ''}
                  required
                  id="subTitle"
                  name="subTitle"
                  onChange={handleChange}
                  label="副標題"
                  type="text"
                  value={form.subTitle}
                  variant="outlined"
                  multiline
                  rows={5}
                  fullWidth
                />

                <CssTextField
                  error={Boolean(form.linkAddress && !isURL(form.linkAddress))}
                  helperText={
                    form.linkAddress && !isURL(form.linkAddress)
                      ? '網址格式 e.g. https://www.google.com'
                      : ''
                  }
                  className="mt-8 mb-16"
                  id="linkAddress"
                  name="linkAddress"
                  onChange={handleChange}
                  label="圖片連結"
                  type="text"
                  value={form.linkAddress}
                  variant="outlined"
                  fullWidth
                />

                <FormControlLabel
                  className="mt-8 mb-16"
                  label="在首頁顯示圖片"
                  labelPlacement="start"
                  control={
                    <Switch
                      checked={form.published}
                      id="published"
                      name="published"
                      onChange={handleChange}
                    />
                  }
                />
              </div>
            )}
            {tabValue === 1 && (
              <div>
                <div className="flex justify-center sm:justify-start flex-wrap">
                  <ImageUploadDialog
                    trigger={
                      <label
                        htmlFor="button-file"
                        className={clsx(
                          classes.carouselImageUpload,
                          'flex items-center justify-center relative w-128 h-128 rounded-4 mr-16 mb-16 overflow-hidden cursor-pointer shadow-1 hover:shadow-5'
                        )}
                      >
                        <Icon fontSize="large" color="action">
                          cloud_upload
                        </Icon>
                      </label>
                    }
                  />
                  {images.map((image, key) => (
                    <div
                      onClick={() => setCarouselImageName(image.imageName)}
                      className={clsx(
                        classes.carouselImageItem,
                        'flex items-center justify-center relative h-128 rounded-4 mr-16 mb-16 overflow-hidden cursor-pointer shadow-1 hover:shadow-5',
                        image.imageName === form.imageName && 'featured'
                      )}
                      key={key}
                    >
                      <Icon className={classes.carouselImageFeaturedStar}>
                        star
                      </Icon>
                      <img
                        className="max-w-none w-auto h-full"
                        src={imageNameToPathConverter(image.imageName)}
                        alt="圖片"
                      />
                    </div>
                  ))}
                  <VisibilitySensor>
                    {({ isVisible }) => {
                      return (
                        <div className="flex justify-center items-center w-full min-h-10">
                          {isLoadingNextPageImages && (
                            <LoadingSpinner width={128} height={128} />
                          )}
                          {isVisible &&
                            !isLoadingNextPageImages &&
                            handleOnPageBottom()}
                        </div>
                      );
                    }}
                  </VisibilitySensor>
                </div>
              </div>
            )}
          </div>
        )
      }
      innerScroll
    />
  );
}

export default Carousel;
