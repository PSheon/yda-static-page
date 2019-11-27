import ReactGA from 'react-ga';
import jwtService from 'app/services/jwtService';

ReactGA.initialize(process.env.REACT_APP_ANALYTICS_ID);
ReactGA.set({
  userId: jwtService.getAccessToken() || 'guest'
});
