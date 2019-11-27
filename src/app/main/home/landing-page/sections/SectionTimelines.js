import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
// import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import { Typography } from '@material-ui/core';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

import '../styles/VerticalTimeline.css';
import '../styles/VerticalTimelineElement.css';

import { imageNameToPathConverter } from 'app/utils';
// import * as Actions from 'app/store/actions';
// import LoadingSpinner from 'app/main/shared/LoadingSpinner';

const newsList = [
  {
    _id: '5ddab47f278fbd02becfb729',
    tags: ['Tags'],
    published: true,
    title: 'Youth talent training camps and overseas research tours',
    subTitle: 'Youth talent training camps and overseas research tours',
    imageName: 'admin-oRudn2rF1FW3raumDcahmy.jpeg',
    content:
      'To promote the competitiveness of young people in the international arena and cultivate youth international affairs talents, the Youth International Affairs Talents Training Program will be sponsored every year in Taiwan (including the New South Countries International Affairs Talents Training Camp). In 2017, it trained an estimated 570 people, among whom 57 youths were selected to participate in overseas visits and exchanges. Workshops, salons, and more were operated after their return to augment the efficacy of the program.',
    author: {
      _id: '5dda5819c3ff7305a3cf9e48',
      photoURL: 'assets/images/avatars/penguin.png',
      displayName: 'admin',
      email: 'admin@admin.com'
    },
    createdAt: '2019-11-24T16:49:03.808Z',
    updatedAt: '2019-11-26T03:31:48.954Z'
  },
  {
    _id: '5ddab406278fbd02becfb727',
    tags: ['Tags'],
    published: true,
    title:
      'Hosting the Global Youth Trends Forum- Youth Initiatives for Sustainable Development',
    subTitle:
      'Hosting the Global Youth Trends Forum- Youth Initiatives for Sustainable Development',
    imageName: 'admin-k2qqHj9VfKJAuj5v7shRWc.jpeg',
    content:
      'To expand the international exchange and collaboration regarding youth affairs, since 2013, international youth, international youth affairs personnel, and international youth organization leaders had been invited to participate in the Global Youth Trends Forum. From 2013 to 2018, there were more than one thousand people participating in it. They participated in international exchange in youth affairs through seminars, group discussions, and summits on the international trends of the year to collaborate in the execution of the international youth affairs exchange of the year together. In result, participants will have their international outlook and their understanding of the global trends upgraded. It also helps promote youth participation and accumulate their experiences in international affairs in order to promote the international image and international profile of Taiwan.',
    author: {
      _id: '5dda5819c3ff7305a3cf9e48',
      photoURL: 'assets/images/avatars/penguin.png',
      displayName: 'admin',
      email: 'admin@admin.com'
    },
    createdAt: '2019-11-24T16:47:02.479Z',
    updatedAt: '2019-11-26T03:31:35.275Z'
  },
  {
    _id: '5ddab3d4278fbd02becfb725',
    tags: ['tags'],
    published: true,
    title: 'Hosting the Taiwan-Israel Youth Exchange',
    subTitle: 'Hosting the Taiwan-Israel Youth Exchange',
    imageName: 'admin-dNwN6ziKXfmp8CbMSwhSCH.jpeg',
    content:
      'To promote the youth exchange between Taiwan and Israel, the Youth Development Administration and Israel Youth Exchange Council collaborate to act as an actual administrative unit. Invited by the sponsor in Israel, in August every year, a group of 10 young people from Taiwan will be formed to visit Israel and participate in the International Convention for Gifted and Environmental Youth Leadership. In addition, in September, Taiwan will sponsor a Taiwan-Israel Youth Exchange Group, inviting young people with the experiences of public participation from both countries to conduct exchanges.',
    author: {
      _id: '5dda5819c3ff7305a3cf9e48',
      photoURL: 'assets/images/avatars/penguin.png',
      displayName: 'admin',
      email: 'admin@admin.com'
    },
    createdAt: '2019-11-24T16:46:12.810Z',
    updatedAt: '2019-11-26T03:31:23.745Z'
  },
  {
    _id: '5ddab9ea278fbd02becfb73c',
    tags: ['Tags'],
    published: true,
    title:
      'Subsidy Program for Subsidizing International Youth Travel and Exchange',
    subTitle:
      'Subsidy Program for Subsidizing International Youth Travel and Exchange',
    imageName: 'admin-isNdP2SUrzGMD7Am43k8VJ.jpeg',
    content:
      'To encourage young people between the age of 18 to 35 to participate in conferences and activities sponsored by international non-governmental organizations or self-plan actions with an international profile that help promote Taiwan’s international image, it endorses the accumulation of the capacity and ability in international exchanges and broadens the international outlook of youths. From 2014-2018, it subsidized 133 youth teams. Each year, it invites teams to share their experiences of execution in a huge accomplishments presentation of conferences to encourage more youth in Taiwan to self-plan in order to articulate and conduct campaigns in the international arena.',
    author: {
      _id: '5dda5819c3ff7305a3cf9e48',
      photoURL: 'assets/images/avatars/penguin.png',
      displayName: 'admin',
      email: 'admin@admin.com'
    },
    createdAt: '2019-11-24T17:12:10.578Z',
    updatedAt: '2019-11-26T03:31:11.252Z'
  },
  {
    _id: '5ddabe523484b40531a4b1f3',
    tags: ['Tags'],
    published: true,
    title: 'Subsidies for youth observers',
    subTitle: 'Subsidies for youth observers',
    imageName: 'admin-7KVvo4eg6FsAYsTYpquw2V.jpeg',
    content:
      'To promote the “New South Policy”, young people between the age of 18 to 35 are encouraged to build up relations with the international non-governmental organizations in ASEAN, South Asia, New Zealand, Australia and other countries and observe the model of their operations and build up partnerships. At the same time, they are encouraged to understand local social and humanistic conditions for analysis and comparison in order to train the ability of our youth in participating in international affairs and enhance the pool of our New South talents. In 2017-2018, 23 youth were subsidized to visit New South countries to conduct in-depth training programs.',
    author: {
      _id: '5dda5819c3ff7305a3cf9e48',
      photoURL: 'assets/images/avatars/penguin.png',
      displayName: 'admin',
      email: 'admin@admin.com'
    },
    createdAt: '2019-11-24T17:30:58.227Z',
    updatedAt: '2019-11-26T03:30:47.652Z'
  },
  {
    _id: '5ddabe703484b40531a4b1f4',
    tags: ['Tags'],
    published: true,
    title:
      'Subsidies and Planning for the Youth Overseas Volunteer Service Program',
    subTitle:
      'Subsidies and Planning for the Youth Overseas Volunteer Service Program',
    imageName: 'admin-hsibha7tGiCdbUGkdMCX84.jpeg',
    content:
      'To encourage youth between the age of 18 to 35 to participate in overseas (in areas outside Taiwan, Penghu Islands, Kinmen, and Mazu) volunteer work. Joining forces with civilian groups, universities and colleges, we invite youths to contribute their knowledge and specialties to provide valuable services to other areas and countries. We motivate the young people’s sense of social mission and responsibilities to fulfill their duties of being a global citizen and the members of the global village. Achieving the goal of SDGs of the United Nation to promote mutual understanding and exchange between our people and people in other countries. In 2005 to 2018, we subsidized 1,316 teams.',
    author: {
      _id: '5dda5819c3ff7305a3cf9e48',
      photoURL: 'assets/images/avatars/penguin.png',
      displayName: 'admin',
      email: 'admin@admin.com'
    },
    createdAt: '2019-11-24T17:31:28.462Z',
    updatedAt: '2019-11-26T03:30:35.367Z'
  },
  {
    _id: '5ddabe8e3484b40531a4b1f5',
    tags: ['Tags'],
    published: true,
    title: 'Overseas experience and learning program',
    subTitle: 'Overseas experience and learning program',
    imageName: 'admin-bke6o8HmZGAFLU31QEBev5.jpeg',
    content:
      'To promote the international vision and enhance the global mobility of Taiwan’s youth, we encourage universities and colleges to include the concept of a Gap Year in their curriculum. Themes will be accurately designed by teachers to allow students to learn systematically in their programs. Students will also be guided to self-plan international travel scheme according to their interest and major in order to explore themselves, enrich their life experience, and cultivate their independence. With the application of this project, we are enthusiastic to expand diverse channels for our youths’ international learning and experience.',
    author: {
      _id: '5dda5819c3ff7305a3cf9e48',
      photoURL: 'assets/images/avatars/penguin.png',
      displayName: 'admin',
      email: 'admin@admin.com'
    },
    createdAt: '2019-11-24T17:31:58.253Z',
    updatedAt: '2019-11-26T03:30:23.956Z'
  }
];

function SectionNews(props) {
  const dispatch = useDispatch();
  // const NEWS = useSelector(({ homePage }) => homePage.news);
  // const isSyncing = NEWS.loading;
  // const newsList = NEWS.docs.filter(item => item.published);

  console.log('newsList, ', newsList);

  useEffect(() => {
    // dispatch(Actions.syncHomePageNews());
  }, [dispatch]);

  // if (isSyncing || !NEWS.docs.length) {
  //   return (
  //     <div className="flex justify-center items-center w-full h-full">
  //       <LoadingSpinner width="128" height="128" />
  //     </div>
  //   );
  // }

  return (
    <VerticalTimeline
    // layout="1-columns"
    >
      {newsList.map((newsItem, index) => (
        <VerticalTimelineElement
          key={newsItem._id}
          className={`vertical-timeline-element--news index-${index}`}
          // date={newsItem.tags}
          // iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<AccountBalanceIcon />}
        >
          <img
            className="rounded-12 object-cover object-center max-w-md w-full"
            src={imageNameToPathConverter(newsItem.imageName)}
            alt={newsItem.title}
          />
          <h1 className="vertical-timeline-element-title text-white">
            {newsItem.title}
          </h1>
          {/* <h4 className="vertical-timeline-element-subtitle">
            {newsItem.subTitle}
          </h4> */}
          {/* <FroalaEditorView model={newsItem.content} /> */}
          <Typography variant="subtitle1" className="text-gray-200">
            {newsItem.content}
          </Typography>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
}

export default SectionNews;
