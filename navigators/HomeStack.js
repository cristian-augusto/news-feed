
import { createStackNavigator } from '@react-navigation/stack';
import { useContext } from 'react';

import { colors } from '../config/theme';
import { ThemeContext } from '../contexts/ThemeContext';
import Details from '../screens/Details';
import Home from '../screens/Home';

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {

    const {theme} = useContext(ThemeContext);
    const activeColors = colors[theme.mode];

    return(

        <HomeStack.Navigator screenOptions={{
            headerTitleAlign: 'left',
            headerTitleStyle: {
                paddingLeft: 10
            },
            headerStyle: {
                backgroundColor: activeColors.secondary
            },
            headerTintColor: activeColors.tint
        }}>
            <HomeStack.Screen name='Home' component={Home}/>
            <HomeStack.Screen name='Details' component={Details}/>
        </HomeStack.Navigator>

    );
};

export default HomeStackScreen;
