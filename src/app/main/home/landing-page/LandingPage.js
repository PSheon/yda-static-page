import React, { useEffect } from 'react';
import { FuseAnimate } from '@fuse';
import { useDispatch } from 'react-redux';

// import * as Actions from 'app/store/actions';
import WidgetCarouselSection from './widgets/WidgetCarouselCard';
// import SectionNews from './sections/SectionNews';
import SectionAbout from './sections/SectionAbout';
import SectionIntro from './sections/SectionIntro';
import SectionTimelines from './sections/SectionTimelines';

function LandingPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(Actions.syncHomePageCarousels());
  }, [dispatch]);

  return (
    <div className="w-full">
      <WidgetCarouselSection />

      <FuseAnimate animation="transition.slideUpIn" delay={200}>
        <SectionAbout />
      </FuseAnimate>

      <FuseAnimate animation="transition.slideUpIn" delay={200}>
        <SectionTimelines />
      </FuseAnimate>

      <FuseAnimate animation="transition.slideUpIn" delay={200}>
        <SectionIntro />
      </FuseAnimate>
    </div>
  );
}

export default LandingPage;
