import { Provider } from 'react-redux';

import { Navigation } from 'react-native-navigation';
import AuthScreen from './src/screens/Auth/Auth';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';
import PlaceDetailScreen from './src/screens/PlaceDetail/PlaceDetail';

import configureStore from './src/store/configureStore';
import SideDrawer from './src/screens/SideDrawer/SideDrawer';

const store = configureStore();

//register screens
Navigation.registerComponent(
  "com.rahul.AuthScreen",
  () => AuthScreen,
  store,
  Provider);

Navigation.registerComponent(
  "com.rahul.SharePlaceScreen",
  () => SharePlaceScreen,
  store,
  Provider);

Navigation.registerComponent(
  "com.rahul.FindPlaceScreen",
  () => FindPlaceScreen,
  store,
  Provider);

Navigation.registerComponent(
  "com.rahul.PlaceDetailScreen",
  () => PlaceDetailScreen,
  store,
  Provider);

Navigation.registerComponent(
  "com.rahul.SideDrawer",
  () => SideDrawer);

//start a app
Navigation.startSingleScreenApp({
  screen: {
    screen: 'com.rahul.AuthScreen',
    title: 'Login'
  }
});
