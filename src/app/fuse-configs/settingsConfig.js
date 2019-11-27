const settingsConfig = {
  layout: {
    style: 'layout2', // layout-1 layout-2 layout-3
    config: {
      navbar: {
        folded: true
      },
      footer: {
        style: 'static'
      }
    } // checkout default layout configs at app/fuse-layouts for example  app/fuse-layouts/layout1/Layout1Config.js
  },
  customScrollbars: true,
  theme: {
    main: 'sunset',
    navbar: 'sunset',
    toolbar: 'sunset',
    footer: 'sunset'
  }
};

export default settingsConfig;
