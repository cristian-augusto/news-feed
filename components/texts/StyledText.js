import { useContext } from 'react';
import { Text } from 'react-native';
import { colors } from '../../config/theme';
import { ThemeContext } from '../../contexts/ThemeContext';

const StyledText = ({children, style, small, big, bold, ...props}) => {

    const {theme} = useContext(ThemeContext);

    const activeColors = colors[theme.mode];

    return(
        <Text style={[{
            color: activeColors.tint,
            fontSize: small ? 14 : big ? 24 : 16,
            fontWeight: bold || big ? 'bold' : 'normal'
        }, style]}

        {...props}
        >
            {children}
        </Text>

    );
};

export default StyledText;
