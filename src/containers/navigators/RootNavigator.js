import {createStackNavigator,createAppContainer } from 'react-navigation';
import * as Routes from '../../constants/routes';
import LoginScreen from '../../screens/LoginScreen';
import GetRepScreen from '../../screens/GetRepScreen';
import CommitsListViewScreen from '../../screens/CommitsListViewScreen';

 const RootNavigator = createStackNavigator ({
    [Routes.LOGIN_SCREEN]:  {screen: LoginScreen} ,
    [Routes.GET_REP_SCREEN]:{screen : GetRepScreen},
    [Routes.COMMITS_LIST_VIEW_SCREEN]:{screen : CommitsListViewScreen}
}, {
    headerMode: 'none',
});
export const AppNav = createAppContainer(RootNavigator);
export default RootNavigator;