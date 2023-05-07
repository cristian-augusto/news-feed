
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { useContext } from 'react';

import { colors } from '../config/theme';
import { ThemeContext } from '../contexts/ThemeContext';
import Settings from '../screens/Settings';
import HomeStackScreen from './HomeStack';

const Tab = createBottomTabNavigator();

const RootStack = () => {

    const {theme} = useContext(ThemeContext);
    const activeColors = colors[theme.mode];

    return(
        <NavigationContainer>
            <Tab.Navigator screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    if (route.name === 'Trending') {
                        iconName =  'trending-up';
                    } else if (route.name === 'Settings') {
                        iconName = 'cog';
                    }

                    return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: activeColors.accent,
                tabBarInactiveTintColor: activeColors.tertiary,
                tabBarStyle: {
                    backgroundColor: activeColors.secondary
                },
                tabBarShowLabel: false,
                headerTitleAlign: 'left',
                headerTitleStyle: {
                    paddingLeft: 10
                },
                headerStyle: {
                    backgroundColor: activeColors.secondary
                },
                headerTintColor: activeColors.tint
            })}>
                <Tab.Screen name='Trending' component={HomeStackScreen} options={{
                    headerShown: false
                }}/>
                <Tab.Screen name='Settings' component={Settings}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default RootStack;
