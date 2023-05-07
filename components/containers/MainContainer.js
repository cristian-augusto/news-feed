import { StatusBar } from 'expo-status-bar';
import { useContext } from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { colors } from '../../config/theme';
import { ThemeContext } from '../../contexts/ThemeContext';

const MainContainer = ({children, style, ...props}) => {

    const {theme} = useContext(ThemeContext);

    const activeColors = colors[theme.mode];

    return(
        <SafeAreaView style={styles.container}>
            <ScrollView style={[{
                backgroundColor: activeColors.primary
            }, style]}
            showsVerticalScrollIndicator={false}
            {...props}
            >
                {children}
                <StatusBar style={theme.mode === 'dark' ? 'light' : 'dark'} />
            </ScrollView>
        </SafeAreaView>
    );
};

export default MainContainer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
