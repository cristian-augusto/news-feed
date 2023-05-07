import { StyleSheet } from 'react-native';
import MainContainer from '../components/containers/MainContainer';
import ExploreSection from '../components/explore/ExploreSection';
import NewsSection from '../components/news/NewsSection';
import StyledText from '../components/texts/StyledText';
import { exploreData, newsData } from '../config/data';

export default function Home() {
    return (
        <MainContainer>
            <StyledText style={styles.sectionTitle} big> Trending News </StyledText>
            <NewsSection  data={newsData}/>

            <StyledText style={styles.sectionTitle} big> Explore </StyledText>
            <ExploreSection data={exploreData} />
        </MainContainer>
    );
}

const styles = StyleSheet.create({
    sectionTitle: {
        marginTop: 25,
        marginLeft: 25
    },
});
