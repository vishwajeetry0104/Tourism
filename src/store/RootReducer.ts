import HomeReducer from '../features/home/module/Home';
import ActivityReducer from '../features/activity/module/Activity';

// put all reducers here
const rootReducer = {
  home: HomeReducer,
  activity: ActivityReducer,
};

export default rootReducer;
