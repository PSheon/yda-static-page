import * as history from 'history';
import ReactGA from 'react-ga';

const HISTORY = history.createBrowserHistory({
  basename: process.env.NODE_ENV === 'production' ? '/yda-static-page' : '/'
});

HISTORY.listen(location => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});

export default HISTORY;
