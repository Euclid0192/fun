import React from 'react'
import {
    FlatList,
    View, 
    Text,
    Pressable,
    Dimensions,
    Image,
    StyleSheet
} from 'react-native'
import Footer from '../../Components/Footer/Footer'
import { WIDTH, HEIGHT } from '../TrangChu/Slider/SliderList'
import store from '../../Redux/Store'

const { width, height } = Dimensions.get('window')

const Item = ({item, index, navigation}: {item: any, index: any, navigation: any}) => {
    return (
        <Pressable 
            style={styles.containerItem}
            onPress={() => navigation.navigate('Bai Hat', {id: item.encodeId})}
        >
            <Image 
                style={styles.image}
                source={{uri: item.thumbnailM}}
                resizeMode='contain'
            />
            <View>
                <Text style={styles.albumTitle}>{item.title}</Text>
                <Text>{item.artistsNames}</Text>
            </View>
        </Pressable>
    )
}

const BaiHatYeuThich = ({navigation}: {navigation: any}) => {
    console.log("STORE STATE", store.getState())
    const components = [
        {
            id: 1,
            content: 
            <FlatList
                data={store.getState().album}
                extraData={store.getState().album}
                renderItem={({item, index}) => {
                    return <Item item={item} index={index} navigation={navigation} />
                }}
            ></FlatList>
        },
        {
            id: 2,
            content: <Footer />
        }
    ]

    return (
        <View>
            <Text>Danh sách album yêu thích</Text>
            <FlatList
                data={components}
                extraData={components}
                renderItem={({item, index}) => {
                    return (
                        item.content
                    )
                }}
            ></FlatList>
            {/* <FloatingButton /> */}
        </View>
    )
}

export default BaiHatYeuThich
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: WIDTH(10)
    },
    containerItem: {
        flexDirection: 'row',
        marginTop: HEIGHT(10),
        marginBottom: HEIGHT(10),

    },
    pairAlbum: {
        marginLeft: WIDTH(5),
        marginRight: WIDTH(5),
    },
    albumTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
    },
    title: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
    },
    image: {
        width: WIDTH(48),
        height: HEIGHT(48),
        marginRight: WIDTH(5)
    }
})