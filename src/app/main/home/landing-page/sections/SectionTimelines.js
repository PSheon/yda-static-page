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

// import NEWS_1 from 'assets/images/news/admin-oRudn2rF1FW3raumDcahmy.jpeg';
// import NEWS_2 from 'assets/images/news/admin-k2qqHj9VfKJAuj5v7shRWc.jpeg';
// import NEWS_3 from 'assets/images/news/admin-dNwN6ziKXfmp8CbMSwhSCH.jpeg';
// import NEWS_4 from 'assets/images/news/admin-isNdP2SUrzGMD7Am43k8VJ.jpeg';
// import NEWS_5 from 'assets/images/news/admin-7KVvo4eg6FsAYsTYpquw2V.jpeg';
// import NEWS_6 from 'assets/images/news/admin-hsibha7tGiCdbUGkdMCX84.jpeg';
// import NEWS_7 from 'assets/images/news/admin-bke6o8HmZGAFLU31QEBev5.jpeg';
import NEWS_1 from 'assets/images/news/1.jpg';
import NEWS_2 from 'assets/images/news/2.jpg';
import NEWS_3 from 'assets/images/news/3.jpg';
import NEWS_4 from 'assets/images/news/4.jpg';
import NEWS_5 from 'assets/images/news/5.jpg';
import NEWS_6 from 'assets/images/news/6.jpg';

// import { imageNameToPathConverter } from 'app/utils';
// import * as Actions from 'app/store/actions';
// import LoadingSpinner from 'app/main/shared/LoadingSpinner';

const newsList = [
  {
    _id: '5ddab47f278fbd02becfb729',
    tags: ['Tags'],
    published: true,
    title:
      'The Flag Passing Ceremony to Encourage Hundreds of Youth Overseas Volunteers by President Tsai',
    subTitle:
      'The Flag Passing Ceremony to Encourage Hundreds of Youth Overseas Volunteers by President Tsai',
    imageName: NEWS_1,
    content:
      'President Tsai, on June 14 2019, met the 2019 Youth Overseas Peace Corps’ representatives and passed the 2019 Youth Overseas Peace Corps’ Flag before the youth start their volunteer trips. Their missions will  begin during their summer vacation. President Tsai encouraged the youth to establish a connection between Taiwan and the world. She hoped that the meaningful contributions Taiwanese youth have made can been seen by the world.',
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
    title: 'Feng Xing overseas Swaziland Medical Service Team',
    subTitle: 'Feng Xing overseas Swaziland Medical Service Team',
    imageName: NEWS_2,
    content:
      'Main services as dental treatment, fluoridize and health education. Prophylactic therapy is divided into two approaches, preventive and advanced treatment. From the first oral screening, the oral screening table was developed in cooperation with the local government hospital (Mbabane Government Hospital, MGH), the former dental department minister Dr. Mabuza, and revised with the local dental department form. The main criteria set out in the form to judge the treatment required to treat people, and the urgency of treatment prescribed by their standards, to take the next step of treatment or referral to a local hospital for screening table. Then enter the dental clinic, the emergency treatment of the dentist, including fissure sealant and emergency treatment, such as Intermediate Restorative Material (IRM) and Gingival Index (GI), tooth extraction, referral judgment, will use the dental equipment carried by the team for diagnosis and treatment. Due to the lack of local water resources and inadequate brushing concept in Swaziland, the clinic mainly focuses on the treatment of fluoride and strengthens local dental care. In the end, the people who underwent different treatments were given individualized health education propaganda. On the other hand, simple oral health education was also conducted for all the people and toothbrushes were distributed.',
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
    title:
      'National Defense Medical Center, the love in Cambodia International Volunteer Group',
    subTitle:
      'National Defense Medical Center, the love in Cambodia International Volunteer Group',
    imageName: NEWS_3,
    content:
      'Through pre-departure visits and surveys, the analysis of service target feedback plans includes Preak kmeng Village and KKEV Orphanage Service Plans. Because of the shortage of local medical resources, the application was submitted to the hospital and the required items were donated through the assessment. In addition, with "hypertension studio" to enhance the basic knowledge of medical staff,  and through field visits to understand the living habits of local residents and the association of hypertension. Count the medical habits of local residents and recommend to medical institutions, explore the reasons for the popularity of head lice and design the content of education based on these. The primary school curriculum is divided into different ages, integrates the local education concept and refers to the local health education poster design course to avoid confusion about the concept of school children. Teacher training programs have improved the problems such as the short-term local service, the needs of the institutional and the lack of continuity of the course.',
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
    title: 'Taipei Medical University, Kingdom of Cambodia Service',
    subTitle: 'Taipei Medical University, Kingdom of Cambodia Service',
    imageName: NEWS_4,
    content: `With "evidence-based" and "sustainable" service core spirit of cooperation in Battambang "parasite control program" and "health care package plan" with local schools. In the province of Siem Reap, cooperate with the TEP Culture and Education Association to conduct a “local education plan”. "Parasite control program" is to use scientific methods to track the rate of parasitic infections among schoolchildren and establish a local database. Use the picture book to present the knowledge of "parasitic prevention", enhance the knowledge of the children through interaction, and help improve the home environment through home visits. "Medical Package Program" is to distribute medical kits（First-aid-kit）in primary schools to teach local teachers about wound treatment methods, so that students can immediately treat wounds to reduce the infection rate. "People's Education Program" Based on the service concept of “sustainability” and the local organization TEP (TEP Culture and Education Association), the training of local seed teachers teaches the teaching knowledge to students in a relaxed and interesting way and brings them to various regions.`,
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
    imageName: NEWS_5,
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
    imageName: NEWS_6,
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
  }
];

function SectionNews(props) {
  const dispatch = useDispatch();
  // const NEWS = useSelector(({ homePage }) => homePage.news);
  // const isSyncing = NEWS.loading;
  // const newsList = NEWS.docs.filter(item => item.published);

  // console.log('newsList, ', newsList);

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
            // src={imageNameToPathConverter(newsItem.imageName)}
            src={newsItem.imageName}
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
