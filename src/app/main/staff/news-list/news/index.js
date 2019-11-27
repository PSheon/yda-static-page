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
import { orange } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/styles';
import { FuseAnimate, FusePageCarded, FuseChipSelect } from '@fuse';
import { useForm } from '@fuse/hooks';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import VisibilitySensor from 'react-visibility-sensor';
import clsx from 'clsx';
import _ from '@lodash';
import { useDispatch, useSelector } from 'react-redux';
import FroalaEditor from 'react-froala-wysiwyg';

import { AUTH_REST_BASE_END_POINT } from 'app/fuse-configs/envsConfig';
import ImageUploadDialog from 'app/main/shared/ImageUploadDialog';
import { imageNameToPathConverter } from 'app/utils';
import * as Actions from 'app/store/actions';
import eventBusService from 'app/services/eventBusService';
import LoadingSpinner from 'app/main/shared/LoadingSpinner';

import 'froala-editor/js/froala_editor.pkgd.min.js';
import 'froala-editor/js/plugins.pkgd.min';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/js/languages/zh_tw.js';

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
  newsImageFeaturedStar: {
    position: 'absolute',
    top: 0,
    right: 0,
    color: orange[400],
    opacity: 0
  },
  newsImageUpload: {
    transitionProperty: 'box-shadow',
    transitionDuration: theme.transitions.duration.short,
    transitionTimingFunction: theme.transitions.easing.easeInOut
  },
  newsImageItem: {
    transitionProperty: 'box-shadow',
    transitionDuration: theme.transitions.duration.short,
    transitionTimingFunction: theme.transitions.easing.easeInOut,
    '&:hover': {
      '& $newsImageFeaturedStar': {
        opacity: 0.8
      }
    },
    '&.featured': {
      pointerEvents: 'none',
      boxShadow: theme.shadows[3],
      '& $newsImageFeaturedStar': {
        opacity: 1
      },
      '&:hover $newsImageFeaturedStar': {
        opacity: 1
      }
    }
  }
}));

function News(props) {
  const dispatch = useDispatch();
  const selectedNewsId = props.match.params.newsId;
  const NEWS = useSelector(({ homePage }) => homePage.news);
  const IMAGE = useSelector(({ uploads }) => uploads.image);
  const images = IMAGE.docs;

  const classes = useStyles(props);
  const [tabValue, setTabValue] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);
  const [isLoadingNextPageImages, setIsLoadingNextPageImages] = useState(false);
  const { form, handleChange, setForm } = useForm(null);

  useEffect(() => {
    dispatch(Actions.syncUploadedImages());
  }, [dispatch]);

  useEffect(() => {
    if (!form) {
      if (selectedNewsId === 'new') {
        setForm({
          _id: 'new',
          title: '',
          subTitle: '',
          imageName: '',
          content: '',
          tags: [],
          published: false
        });
        setIsLoading(false);
      } else {
        if (NEWS.docs.length) {
          const news = NEWS.docs.filter(item => item._id === selectedNewsId)[0];
          if (!news) {
            history.push({
              pathname: '/staff/news-list'
            });
          } else {
            setForm(news);
            setIsLoading(false);
          }
        } else {
          // history.push({
          //   pathname: '/staff/news-list'
          // })
          /* News not inited */
          dispatch(Actions.syncHomePageNewsById(selectedNewsId));
        }
      }
    }
  }, [NEWS.docs, dispatch, form, selectedNewsId, setForm]);

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

  function handleChipChange(value, name) {
    setForm(
      _.set(
        { ...form },
        name,
        value.map(item => item.value)
      )
    );
  }

  function setNewsImageName(imageName) {
    setForm(form => _.setIn({ ...form }, 'imageName', imageName));
  }

  function handleChangeTab(event, tabValue) {
    setTabValue(tabValue);
  }

  function handleDeleteNews() {
    setIsLoadingDelete(true);
    dispatch(Actions.deleteNews(selectedNewsId));
  }
  function handleSaveNews() {
    setIsLoading(true);
    dispatch(Actions.saveNews(form));
  }

  function canBeSubmitted() {
    return form.title && form.subTitle && form.content && form.imageName;
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
                  to="/staff/news-list"
                  color="inherit"
                >
                  <Icon className="mr-4 text-20">arrow_back</Icon>
                  返回 新聞列表
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
                      {form.title ? form.title : '新增 新聞'}
                    </Typography>
                  </FuseAnimate>
                  <FuseAnimate animation="transition.slideLeftIn" delay={300}>
                    <Typography variant="caption">新聞內容</Typography>
                  </FuseAnimate>
                </div>
              </div>
            </div>
            {selectedNewsId === 'new' ? (
              <FuseAnimate animation="transition.slideRightIn" delay={300}>
                <Button
                  className="whitespace-no-wrap mx-12 rounded-full"
                  variant="contained"
                  color="secondary"
                  disabled={!canBeSubmitted()}
                  onClick={handleSaveNews}
                >
                  {isLoading ? (
                    <span className="flex justify-center">
                      新增新聞中 <LoadingSpinner width="2em" height="2em" />
                    </span>
                  ) : (
                    '新增新聞'
                  )}
                </Button>
              </FuseAnimate>
            ) : (
              <div className="flex flex-row justify-around items-center h-full">
                <FuseAnimate animation="transition.slideRightIn" delay={300}>
                  <Button
                    className="whitespace-no-wrap px-12 rounded-full bg-red text-white hover:bg-red-300"
                    variant="contained"
                    onClick={handleDeleteNews}
                    disabled={NEWS.docs.length < 2}
                  >
                    {isLoadingDelete ? (
                      <span className="flex justify-center">
                        刪除新聞中 <LoadingSpinner width="2em" height="2em" />
                      </span>
                    ) : (
                      '刪除新聞'
                    )}
                  </Button>
                </FuseAnimate>
                <FuseAnimate animation="transition.slideRightIn" delay={300}>
                  <Button
                    className="whitespace-no-wrap mx-12 rounded-full"
                    variant="contained"
                    color="secondary"
                    disabled={!canBeSubmitted()}
                    onClick={handleSaveNews}
                  >
                    {isLoading ? (
                      <span className="flex justify-center">
                        更新新聞中 <LoadingSpinner width="2em" height="2em" />
                      </span>
                    ) : (
                      '更新新聞'
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
          <Tab className="h-64 normal-case" label="新聞設定" />
          <Tab className="h-64 normal-case" label="內容設定" />
          <Tab className="h-64 normal-case" label="封面設定" />
        </Tabs>
      }
      content={
        form && (
          <div className="p-16 sm:p-24 max-w-2xl max-h-screen">
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
                  type="text"
                  variant="outlined"
                  fullWidth
                />

                <CssTextField
                  className="mt-8 mb-16"
                  error={form.subTitle === ''}
                  required
                  label="副標題"
                  id="subTitle"
                  name="subTitle"
                  value={form.subTitle}
                  onChange={handleChange}
                  type="text"
                  variant="outlined"
                  fullWidth
                />

                <FuseChipSelect
                  className="mt-8 mb-16"
                  value={form.tags.map(item => ({
                    value: item,
                    label: item
                  }))}
                  onChange={value => handleChipChange(value, 'tags')}
                  placeholder="加個新聞標籤吧"
                  textFieldProps={{
                    label: '新聞標籤',
                    InputLabelProps: {
                      shrink: true
                    },
                    variant: 'outlined'
                  }}
                  isMulti
                />

                <FormControlLabel
                  className="mt-8 mb-16"
                  label="發佈新聞"
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
            {tabValue === 1 && form && (
              <FuseAnimate animation="transition.slideRightIn" delay={300}>
                <div className="mx-36 pb-128">
                  <FroalaEditor
                    tag="div"
                    model={form.content}
                    config={{
                      placeholderText: '寫點新聞吧！',
                      language: 'zh_tw',
                      heightMin: 350,
                      heightMax: 550,
                      toolbarInline: true,
                      toolbarVisibleWithoutSelection: true,
                      dragInline: false,
                      pluginsEnabled: [
                        'align',
                        'codeBeautifier',
                        'codeView',
                        'colors',
                        'draggable',
                        'embedly',
                        'emoticons',
                        'entities',
                        'fontAwesome',
                        'fontSize',
                        'image',
                        'imageManager',
                        'lineBreaker',
                        'lineHeight',
                        'link',
                        'lists',
                        'paragraphFormat',
                        'paragraphStyle',
                        'quote',
                        'save',
                        'url',
                        'video',
                        'wordPaste'
                      ],
                      imageInsertButtons: [
                        'imageBack',
                        '|',
                        'imageByURL',
                        'imageManager'
                      ],
                      videoInsertButtons: [
                        'videoBack',
                        '|',
                        'videoByURL',
                        'videoEmbed'
                      ],
                      linkInsertButtons: ['linkBack'],
                      requestHeaders: {
                        Authorization:
                          'Bearer ' +
                          window.localStorage.getItem('jwt_access_token')
                      },
                      imageManagerLoadParams: {
                        page: 1,
                        limit: 20,
                        sort: 'updatedAt',
                        order: -1
                      },
                      imageManagerPageSize: 20,
                      imageManagerLoadURL: `${AUTH_REST_BASE_END_POINT}/api/image/manager`,
                      videoResponsive: true,
                      charCounterCount: false,
                      tabSpaces: 4,
                      imageUpload: false
                    }}
                    onModelChange={model => {
                      setForm(form => _.setIn({ ...form }, 'content', model));
                    }}
                  />
                </div>
              </FuseAnimate>
            )}
            {tabValue === 2 && (
              <FuseAnimate animation="transition.slideRightIn" delay={300}>
                <div className="flex justify-center sm:justify-start flex-wrap">
                  <ImageUploadDialog
                    trigger={
                      <label
                        htmlFor="button-file"
                        className={clsx(
                          classes.newsImageUpload,
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
                      onClick={() => setNewsImageName(image.imageName)}
                      className={clsx(
                        classes.newsImageItem,
                        'flex items-center justify-center relative h-128 rounded-4 mr-16 mb-16 overflow-hidden cursor-pointer shadow-1 hover:shadow-5',
                        image.imageName === form.imageName && 'featured'
                      )}
                      key={key}
                    >
                      <Icon className={classes.newsImageFeaturedStar}>
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
              </FuseAnimate>
            )}
          </div>
        )
      }
    />
  );
}

export default News;
