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
const imageWidth = (width - 3 * allPadding) / 2;

const Item = ({item1, item2, navigation}: {item1: any, item2: any, navigation: any}) => {
    return (
        <View style={styles.containerItem}>
            {/* View 1 */}
            <Pressable  style={styles.pairAlbum} onPress={() => navigation.navigate('Chill Details', {id: item1.encodeId})}>
                <Image 
                    resizeMode='cover'
                    style={styles.image}
                    source={{uri: item1?.thumbnail}}
                />
                <Text style={styles.albumTitle}>{item1.title}</Text>
                <Text>{item1.artistsNames}</Text>
            </Pressable>
            {/* View 2 */}
            <Pressable style={styles.pairAlbum} onPress={() => navigation.navigate('Chill Details', {id: item2.encodeId})}>
                <Image 
                    resizeMode='cover'
                    style={styles.image}
                    source={{uri: item2?.thumbnail}}
                />
                <Text style={styles.albumTitle}>{item2.title}</Text>
                <Text>{item2.artistsNames}</Text>
            </Pressable>
        </View>
    )
}


const Chill = ({data, navigation}: {data: any, navigation: any}) => {

    let Items = [];
    const ChillData = data?.items?.find((ele: any) => ele.title==='Chill').items;
    if (ChillData !== undefined){
        // console.log(ChillData)
        if (ChillData.length % 2 != 0) ChillData.pop();
        for (let i = 0; i < ChillData.length; i += 2){
            Items.push(
                <Item item1={ChillData[i]} item2={ChillData[i + 1]} navigation={navigation} />
            )
        }
    } // of if
    
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>CHILL</Text>
            </View>
            <FlatList 
                data={Items}
                renderItem={({item}) => {return item}}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default Chill

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
        marginRight: WIDTH(10),
    },
    title: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
    },
    albumTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
    },
    image: {
        width: imageWidth,
        height: HEIGHT(170),
    }
})

