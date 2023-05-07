import { useEffect, useState } from 'react';
import { Alert, Appearance } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

import { getData, storeData } from './config/asyncStorage';
import { ThemeContext } from './contexts/ThemeContext';
import RootStack from './navigators/RootStack';

SplashScreen.preventAutoHideAsync();

export default function App() {

    const [theme, setTheme] = useState({mode: 'light'});

    const updateTheme = (newTheme) => {
        let mode;

        if(!newTheme) {
            mode = theme.mode === 'dark' ? 'light' : 'dark';
            newTheme = {mode, system: false};
        }else{
            if(newTheme.system){
                const systemColorScheme =  Appearance.getColorScheme();
                mode = systemColorScheme;

                newTheme = {...newTheme, mode};
            }else{
                newTheme = {...newTheme, system: false};
            }
        }

        setTheme(newTheme);
        storeData('newsFeedTheme', newTheme);

    };

    const fetchStoreTheme = async () => {
        try{
            const themeData = await getData('newsFeedTheme');

            if(themeData){
                updateTheme(themeData);
            }

        }catch({message}){
            Alert.alert(message);
        }finally{
            setTimeout(() =>  SplashScreen.hideAsync(), 1000);
        }
    };

    Appearance.addChangeListener(({colorScheme}) => {
        if(theme.system) {
            updateTheme({system: true, mode: colorScheme});
        }
    });

    useEffect(() => {
        fetchStoreTheme();
    },[]);

    return(
        <ThemeContext.Provider value={{theme, updateTheme}}>
            <RootStack />
        </ThemeContext.Provider>
    );
}

