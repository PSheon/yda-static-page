import React, { useEffect, useRef } from 'react';
import { FusePageSimple } from '@fuse';
import { useDispatch } from 'react-redux';

import * as Actions from 'app/store/actions';
import ImagesListHeader from './ImagesListHeader';
import ImagesTable from './ImagesTable';
// import FilterSidebarHeader from './FilterSidebarHeader';
// import FilterSidebarContent from './FilterSidebarContent';
import ImagesListSidebarHeader from './ImagesListSidebarHeader';
import ImagesListSidebarContent from './ImagesListSidebarContent';

// NOTE
function ImagesList() {
  const dispatch = useDispatch();

  const pageLayout = useRef(null);

  useEffect(() => {
    dispatch(Actions.syncUploadedImages());
  }, [dispatch]);

  return (
    <FusePageSimple
      classes={{
        root: 'bg-gray-300',
        header: 'h-128 min-h-128 sm:h-160 sm:min-h-160',
        sidebarHeader: 'h-140 min-h-128 sm:h-160 sm:min-h-160',
        rightSidebar: 'w-320'
      }}
      header={<ImagesListHeader pageLayout={pageLayout} />}
      content={<ImagesTable pageLayout={pageLayout} />}
      // leftSidebarHeader={
      // 	<FilterSidebarHeader />
      // }
      // leftSidebarContent={
      // 	<FilterSidebarContent />
      // }
      rightSidebarHeader={<ImagesListSidebarHeader />}
      rightSidebarContent={<ImagesListSidebarContent />}
      ref={pageLayout}
      innerScroll
    />
  );
}

export default ImagesList;
