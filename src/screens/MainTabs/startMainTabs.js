import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = () => {

    Promise.all([
        Icon.getImageSource("md-map", 30),
        Icon.getImageSource("md-share-alt", 30),
        Icon.getImageSource("md-menu", 30),

    ]).then(imgSources => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: 'com.rahul.FindPlaceScreen',
                    title: 'Find Place',
                    label: 'Find Place',
                    icon: imgSources[0],
                    navigatorButtons: {
                        leftButtons: [
                            {
                                icon: imgSources[2],
                                title: 'Menu',
                                id: 'sideDrawerToggle'
                            }
                        ]
                    }
                },
                {
                    screen: 'com.rahul.SharePlaceScreen',
                    title: 'Share Place',
                    label: 'Share Place',
                    icon: imgSources[1],
                    navigatorButtons: {
                        leftButtons: [
                            {
                                icon: imgSources[2],
                                title: 'Menu',
                                id: 'sideDrawerToggle'
                            }
                        ]
                    }
                }
            ],
            drawer: {
                left: {
                    screen: 'com.rahul.SideDrawer',
                    title: 'Login',
                }
            }
        });
    });
}

export default startTabs;