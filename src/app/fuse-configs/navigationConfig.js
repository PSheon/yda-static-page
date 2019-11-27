const defaultNavigationConfig = [];

export const ADMIN_SECTION = {};

export const STAFF_SECTION = {
  id: 'staff-section',
  title: '網站管理',
  type: 'group',
  icon: 'apps',
  children: [
    // {
    //   id: 'staff-user-list',
    //   title: '會員列表',
    //   type: 'item',
    //   icon: 'account_box',
    //   url: '/staff/user-list'
    // },
    {
      id: 'staff-images-list',
      title: '圖片列表',
      type: 'item',
      icon: 'image',
      url: '/staff/images-list'
    },
    {
      id: 'staff-carousels-list',
      title: '輪播圖片列表',
      type: 'item',
      icon: 'perm_media',
      url: '/staff/carousels-list'
    },

    {
      id: 'staff-news-list',
      title: '新聞列表',
      type: 'item',
      icon: 'fiber_new',
      url: '/staff/news-list'
    }
  ]
};

// export const USER_DASHBOARD_SECTION = {};

/* Only Used in layout1 */
export const CUSTOMER_SERVICE_SECTION = {};

export default defaultNavigationConfig;
