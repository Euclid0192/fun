import React, { useState, useEffect } from 'react'
import { WIDTH, HEIGHT } from '../Slider/SliderList';
import {
    StyleSheet,
    View, 
    Text,
    Image,
    Dimensions,
    FlatList,
    Pressable
} from 'react-native'

const { width, height } = Dimensions.get('window');
const allPadding = WIDTH(10);

const Item = ({item, navigation}: {item: any, navigation: any}) => {
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

const BaiHatMoi = ({data, navigation}: {data: any, navigation: any}) => {
    let Items = [];
    const BaiHatMoi = data?.items?.[2].items?.all;
    if (BaiHatMoi){
        // console.log(BaiHatMoi)
        for (let i = 0; i < 10; i++){
            Items.push(
                <Item item={BaiHatMoi[i]} navigation={navigation} />
            )
        }
    } // of if
    
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>BÀI HÁT MỚI</Text>
            </View>
            {/* <View>
                {Items}
            </View> */}
            <FlatList 
                data={Items}
                renderItem={({item}) => {return item}}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default BaiHatMoi

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: allPadding,
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

