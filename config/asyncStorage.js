import  AsyncStorage  from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

export const storeData = async (key, value) => {
    try{
        await AsyncStorage.setItem(key, JSON.stringify(value));
    }catch({message}){
        Alert.alert(message);
    }
};

export const getData = async (key) => {
    try{
        const value = await AsyncStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    }catch({message}){
        Alert.alert(message);
    }
};
