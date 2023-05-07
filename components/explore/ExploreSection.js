import { FlatList } from 'react-native';
import ExploreItem from './ExploreItem';


const ExploreSection = ({data}) => {

    return(
        <FlatList
            data={data}
            renderItem={({item}) => <ExploreItem {...item}/>}
            keyExtractor={({id}) => String(id) }
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                paddingLeft: 25,
                paddingTop: 25
            }}
        />
    );
};

export default ExploreSection;

