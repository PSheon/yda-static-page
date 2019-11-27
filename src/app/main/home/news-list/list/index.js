import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import VisibilitySensor from 'react-visibility-sensor';
import { Icon, Typography, Avatar } from '@material-ui/core';
import { FuseAnimateGroup, FuseAnimate } from '@fuse';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';

import { imageNameToPathConverter, avatarNameToPathConverter } from 'app/utils';
import * as Actions from 'app/store/actions';
import eventBusService from 'app/services/eventBusService';
import LoadingSpinner from 'app/main/shared/LoadingSpinner';

const useStyles = makeStyles(theme => ({
  dateLabel: {
    backgroundColor: theme.palette.secondary.main,
    top: '2.5rem',
    left: '-1rem'
  },
  board: {
    cursor: 'pointer',
    boxShadow: theme.shadows[0],
    transitionProperty: 'box-shadow border-color',
    transitionDuration: theme.transitions.duration.short,
    transitionTimingFunction: theme.transitions.easing.easeInOut,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    color: theme.palette.getContrastText(theme.palette.primary.dark),
    '&:hover': {
      boxShadow: theme.shadows[6],
      transform: 'translate(-3px, -3px)',

      '& $boardInfoWrapper': {
        paddingTop: '2rem',
        paddingBottom: '2.5rem'
      },
      '& $boardContent': {
        transform: 'translateY(0)'
      }
    }
  },
  boardInfoWrapper: {
    transition: 'padding .3s',
    background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.9))'
  },
  boardTag: {
    backgroundColor: theme.palette.secondary.main,
    width: 'fit-content'
  },
  boardTitleWrapper: {
    overflow: 'hidden',
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': 2
  },
  boardContent: {
    transition: 'transform .3s',
    transform: 'translateY(3rem)'
  }
}));

function NewsListPage(props) {
  const classes = useStyles(props);
  const dispatch = useDispatch();
  const NEWS = useSelector(({ homePage }) => homePage.news);
  const isSyncing = NEWS.loading;
  const [firstNews, ...otherNews] = NEWS.docs.filter(item => item.published);

  const [isLoadingNextPageNews, setIsLoadingNextPageNews] = useState(false);

  useEffect(() => {
    dispatch(Actions.syncHomePageNews());
  }, [dispatch]);

  function handleOnPageBottom() {
    if (!NEWS.hasNextPage) return;
    setIsLoadingNextPageNews(true);

    const params = {
      page: NEWS.nextPage,
      limit: 20,
      sort: 'updatedAt',
      order: -1
    };

    eventBusService.getHomePageNews(params).then(response => {
      dispatch({
        type: Actions.APPEND_NEXT_PAGE_NEWS_LIST,
        payload: response
      });

      setIsLoadingNextPageNews(false);
    });
  }

  return (
    <div
      className={clsx(
        classes.root,
        'flex flex-grow flex-shrink-1 flex-col items-start container px-16 md:px-24'
      )}
    >
      <FuseAnimate animation="transition.slideRightIn" delay={300}>
        <Typography
          className="mt-16 sm:mt-40 flex items-center mb-12"
          component={Link}
          role="button"
          to="/"
          color="inherit"
        >
          <Icon className="mr-4 text-20">arrow_back</Icon>
          返回 YS 首頁
        </Typography>
      </FuseAnimate>
      <FuseAnimate>
        <Typography
          className="sm:pt-12 text-32 sm:text-40 font-300"
          color="inherit"
        >
          新聞列表
        </Typography>
      </FuseAnimate>
      <FuseAnimate>
        <Typography
          className="sm:py-12 text-20 sm:text-24 font-600 whitespace-wrap"
          color="inherit"
        >
          來看看最新的 <span className="text-blue">活動</span> 和{' '}
          <span className="text-blue">最新消息</span> 吧！
        </Typography>
      </FuseAnimate>

      {isSyncing || !NEWS.docs.length ? (
        <div className="flex justify-center items-center w-full h-full">
          <LoadingSpinner width="128" height="128" />
        </div>
      ) : (
        <FuseAnimateGroup
          className="flex flex-wrap w-full justify-start py-32 sm:px-16"
          enter={{
            animation: 'transition.slideUpBigIn',
            duration: 300
          }}
        >
          {/* First News */}
          <Link
            to={`/news-list/${firstNews._id}`}
            role="button"
            key={firstNews._id}
            className="w-full sm:w-2/3 h-256 md:h-360 p-12"
          >
            <div
              className={clsx(
                classes.board,
                'flex flex-col items-center justify-end w-full h-full rounded pt-24 rounded-lg shadow-md hover:shadow-lg relative'
              )}
              style={{
                backgroundImage: `url(${imageNameToPathConverter(
                  firstNews.imageName
                )})`
              }}
            >
              {/* Date Label */}
              <div
                className={clsx(
                  classes.dateLabel,
                  'absolute text-white text-center px-8 rounded-full h-32'
                )}
              >
                <Typography className="uppercase font-semibold tracking-wide whitespace-no-wrap text-lg leading-relaxed">
                  {moment(firstNews.updatedAt).format('LL')}
                </Typography>
              </div>
              <div
                className={clsx(
                  classes.boardInfoWrapper,
                  'flex justify-start items-center rounded-b-lg w-full pb-8'
                )}
              >
                <Avatar
                  src={avatarNameToPathConverter(firstNews.author.photoURL)}
                  className="mx-5 md:mx-10 my-5"
                  alt={firstNews.author.displayName}
                />
                <div className="flex flex-col justify-start overflow-hidden pr-12">
                  <div className="flex justify-start">
                    {firstNews.tags.slice(0, 2).map((tag, tagIndex) => (
                      <div
                        key={tagIndex}
                        className={clsx(
                          classes.boardTag,
                          'inline-block px-8 py-1 rounded-full uppercase font-semibold tracking-wide whitespace-no-wrap mb-4 mr-8'
                        )}
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                  <div className={classes.boardTitleWrapper}>
                    <Typography
                      className="text-16 md:text-24 font-700 break-words"
                      color="inherit"
                    >
                      {firstNews.title}
                    </Typography>
                  </div>
                  <Typography
                    className={clsx(
                      classes.boardContent,
                      'text-16 font-700 whitespace-no-wrap overflow-hidden truncate'
                    )}
                    color="inherit"
                  >
                    {firstNews.subTitle}
                  </Typography>
                </div>
              </div>
            </div>
          </Link>
          {/* Other News */}
          {otherNews.map(item => (
            <Link
              to={`/news-list/${item._id}`}
              role="button"
              key={item._id}
              className="w-full sm:w-1/3"
            >
              <div className="h-256 md:h-360 p-12">
                <div
                  className={clsx(
                    classes.board,
                    'flex flex-col items-center justify-end w-full h-full rounded pt-24 rounded-lg shadow-md hover:shadow-lg relative'
                  )}
                  style={{
                    backgroundImage: `url(${imageNameToPathConverter(
                      item.imageName
                    )})`
                  }}
                >
                  {/* Date Label */}
                  <div
                    className={clsx(
                      classes.dateLabel,
                      'absolute text-white text-center px-8 rounded-full h-32'
                    )}
                  >
                    <Typography className="uppercase font-semibold tracking-wide whitespace-no-wrap text-lg leading-relaxed">
                      {moment(item.updatedAt).format('LL')}
                    </Typography>
                  </div>
                  <div
                    className={clsx(
                      classes.boardInfoWrapper,
                      'flex justify-start items-center rounded-b-lg w-full pb-8'
                    )}
                  >
                    <Avatar
                      src={avatarNameToPathConverter(item.author.photoURL)}
                      className="mx-5 md:mx-10 my-5"
                      alt={item.author.displayName}
                    />
                    <div className="flex flex-col justify-start overflow-hidden pr-12">
                      <div className="flex justify-start">
                        {item.tags.slice(0, 5).map((tag, tagIndex) => (
                          <div
                            key={tagIndex}
                            className={clsx(
                              classes.boardTag,
                              'inline-block px-8 py-1 rounded-full uppercase font-semibold tracking-wide whitespace-no-wrap mb-4 mr-8'
                            )}
                          >
                            {tag}
                          </div>
                        ))}
                      </div>
                      <div className={classes.boardTitleWrapper}>
                        <Typography
                          className="text-16 md:text-24 font-700 break-words"
                          color="inherit"
                        >
                          {item.title}
                        </Typography>
                      </div>
                      <Typography
                        className={clsx(
                          classes.boardContent,
                          'text-16 font-700 whitespace-no-wrap overflow-hidden truncate'
                        )}
                        color="inherit"
                      >
                        {item.subTitle}
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
          <VisibilitySensor>
            {({ isVisible }) => {
              return (
                <div className="flex justify-center items-center w-full min-h-10">
                  {isLoadingNextPageNews && (
                    <LoadingSpinner width={128} height={128} />
                  )}
                  {isVisible && !isLoadingNextPageNews && handleOnPageBottom()}
                </div>
              );
            }}
          </VisibilitySensor>
        </FuseAnimateGroup>
      )}
    </div>
  );
}

export default NewsListPage;
