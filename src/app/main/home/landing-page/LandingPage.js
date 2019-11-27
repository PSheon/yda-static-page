import React, { useEffect } from 'react';
import { FuseAnimate } from '@fuse';
import { useDispatch } from 'react-redux';

// import * as Actions from 'app/store/actions';
import WidgetCarouselSection from './widgets/WidgetCarouselCard';
// import SectionNews from './sections/SectionNews';
import SectionTimelines from './sections/SectionTimelines';

function LandingPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(Actions.syncHomePageCarousels());
  }, [dispatch]);

  return (
    <div
      className="w-full"
      onTouchStart={() => {
        console.log('123');
      }}
    >
      <WidgetCarouselSection />

      <FuseAnimate animation="transition.slideUpIn" delay={200}>
        <SectionTimelines />
      </FuseAnimate>
    </div>
  );
}

export default LandingPage;
