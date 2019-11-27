import React from 'react';
// import { useSelector } from 'react-redux';
import Slider from 'react-animated-slider';

// import { imageNameToPathConverter, avatarNameToPathConverter } from 'app/utils';
// import { imageNameToPathConverter } from 'app/utils';

import 'react-animated-slider/build/horizontal.css';
import './styles/slider-animations.css';

import MAIN_LOGO_PNG from 'assets/images/logos/main-logo.png';
import Carousel_1 from 'assets/images/news/admin-bJTb3djnChRxCCo5WUM1CF.jpeg';
import Carousel_2 from 'assets/images/news/admin-fLFQPBQMW6pBWg9Qcfyjj3.png';
import Carousel_3 from 'assets/images/news/admin-pCF9ipdWWMGNqw5TFZ9C6K.png';
import Carousel_4 from 'assets/images/news/admin-iSd2mTu3y9D1Quo7njUJz9.png';
import Carousel_5 from 'assets/images/news/admin-uoWrj8y3jkMvFRoPUCfHoz.png';

const carousels = [
  {
    author: {
      photoURL: MAIN_LOGO_PNG,
      _id: '5dda5819c3ff7305a3cf9e48',
      displayName: 'admin',
      email: 'admin@admin.com'
    },
    imageName: Carousel_1,
    linkAddress: '',
    published: true,
    subTitle: 'Hosting the Taiwan-Isreal Youth Exchange',
    title: 'Hosting the Taiwan-Isreal Youth Exchange',
    _id: '5ddaab27278fbd02becfb707'
  },
  {
    author: {
      photoURL: MAIN_LOGO_PNG,
      _id: '5dda5819c3ff7305a3cf9e48',
      displayName: 'admin',
      email: 'admin@admin.com'
    },
    imageName: Carousel_2,
    linkAddress: '',
    published: true,
    subTitle: 'Youth Initiatives for Subtainable Development',
    title: 'Hosting the Global Youth Trends Forum',
    _id: '5ddaab65278fbd02becfb708'
  },
  {
    author: {
      photoURL: MAIN_LOGO_PNG,
      _id: '5dda5819c3ff7305a3cf9e48',
      displayName: 'admin',
      email: 'admin@admin.com'
    },
    imageName: Carousel_3,
    linkAddress: '',
    published: true,
    subTitle: 'Hosting the Global Youth Trends Forum',
    title: 'Hosting the Global Youth Trends Forum',
    _id: '5ddaab87278fbd02becfb70a'
  },
  {
    author: {
      photoURL: MAIN_LOGO_PNG,
      _id: '5dda5819c3ff7305a3cf9e48',
      displayName: 'admin',
      email: 'admin@admin.com'
    },
    imageName: Carousel_4,
    linkAddress: '',
    published: true,
    subTitle: 'Hosting the Global Youth Trends Forum',
    title: 'Hosting the Global Youth Trends Forum',
    _id: '5ddaaba0278fbd02becfb70c'
  },
  {
    author: {
      photoURL: MAIN_LOGO_PNG,
      _id: '5dda5819c3ff7305a3cf9e48',
      displayName: 'admin',
      email: 'admin@admin.com'
    },
    imageName: Carousel_5,
    linkAddress: '',
    published: true,
    subTitle: 'Hosting the Global Youth Trends Forum',
    title: 'Hosting the Global Youth Trends Forum',
    _id: '5ddaab93278fbd02becfb70b'
  }
];

function WidgetCarouselCard() {
  // const CAROUSEL = useSelector(({ homePage }) => homePage.carousels);
  // const carousels = CAROUSEL.docs;

  return (
    <Slider className="slider-wrapper">
      {carousels
        .filter(carousel => carousel.published)
        .map(carousel => (
          <div
            key={carousel._id}
            className="slider-content"
            // style={{
            //   background: `url('${imageNameToPathConverter(
            //     carousel.imageName
            //   )}') no-repeat center center`
            // }}
            style={{
              background: `url('${carousel.imageName}') no-repeat center center`
            }}
          >
            <div className="inner">
              <h1 className="whitespace-pre-line">{carousel.title}</h1>
              {carousel.subTitle && (
                <p className="whitespace-pre-line">{carousel.subTitle}</p>
              )}
            </div>
            <section>
              <img
                // src={avatarNameToPathConverter(carousel.author.photoURL)}
                src={carousel.author.photoURL}
                alt={carousel.author.displayName}
              />
              <span>
                Posted By <strong>{carousel.author.displayName}</strong>
              </span>
            </section>
          </div>
        ))}
    </Slider>
  );
}

export default WidgetCarouselCard;
