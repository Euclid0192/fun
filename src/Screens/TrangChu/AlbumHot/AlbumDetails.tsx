import React, {useState, useEffect} from 'react'
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    ImageBackground,
    Image,
    FlatList,
    ActivityIndicator,
    Pressable,
} from 'react-native'

import Footer from '../../../Components/Footer/Footer'
import FloatingButton from '../../../Components/Footer/FloatingButton'
import { HEIGHT , WIDTH} from '../Slider/SliderList'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import store from '../../../Redux/Store'
import { addLikedAlbum, removeLikedAlbum } from '../../../Redux/Action'

const { width, height } = Dimensions.get('window')

const Item = ({item, index, navigation}: {item: any, index: number, navigation: any}) => {
    const handleGoToBaiHat = () => navigation.navigate('Bai Hat', {id: item.encodeId})

    return (
        <Pressable style={[styles.content, {backgroundColor: index % 2 != 0? '#eeeeee':'#e9e9e9'}]} 
            onPress={handleGoToBaiHat}
        >
            <View style={{marginLeft: WIDTH(13), justifyContent: 'center', alignItems:'center'}}>
                <Text style={styles.index}>{index + 1}</Text>
            </View>
            <View style={{marginLeft: WIDTH(13), justifyContent: 'center', alignItems:'flex-start'}}>
                <Text style={styles.index}>{item.title}</Text>
                <Text>{item?.artistsNames}</Text>
            </View>
        </Pressable>
    )
}

const AlbumDetails = ({navigation, route}: {navigation: any, route: any}) => {
    const [data, setData] = useState<any[]>([])
    const playlistID = route.params?.id;
    const [ loading, setLoading ] = useState(false)
    const [ liked, setLiked ] = useState(false)
    //Handle Pressable
    const handleBack = () => navigation.goBack()

    const handlePressLike = () => {
        setLiked(!liked)
        if (liked) store.dispatch(addLikedAlbum(data))
        else store.dispatch(removeLikedAlbum(data))
    }
    //End Handle Pressable

    useEffect(() => {
        getMainData(`https://api-zingmp3-vercel.vercel.app/api/detailplaylist?id=${playlistID}`)
    }, [])

    const getMainData = async (link: string) => {
        setLoading(true)
        await fetch(link)
          .then(res => res.json())
          .then(data => {
            setData(data.data)
        })
        .catch(err => console.log('Error', err))
        //Logging data
        // console.log(data)
        setLoading(false)
    }
    
    if (loading){
        return (
          <View style={{flex: 1, backgroundColor: '#eeeeee', justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size={'large'} color={'grey'} />
          </View>
        )
    } // of if

    const components = [
        {
            id: 1,
            content: 
            <FlatList
                data={data?.song?.items}
                extraData={data?.song?.items}
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
    <View style={styles.container}>
        <View style={styles.containerHead}>
            <ImageBackground 
                source={{uri: data?.thumbnail}}
                blurRadius={3} 
                style={styles.imageBackground}
                resizeMode='stretch'
            >
                <Pressable style={styles.back} onPress={handleBack}>
                    <AntDesign
                        name='back'
                        size={25}
                        color='white'
                    />
                </Pressable>
                <Image
                    source={{uri: data?.thumbnail }}
                    style={styles.imageThumbnail}
                />
                <Pressable onPress={handlePressLike}>
                    <Entypo
                        name={liked? 'heart' : 'heart-outlined'}
                        size={25}
                        color='white'
                    />                            
                </Pressable>             
                <Text style={styles.albumTitle}>{data?.title}</Text>
            </ImageBackground>
        </View>
        <View style={styles.containerContent}>
            <Text style={styles.contentTilte}>Danh sách bài hát</Text>
            <FlatList
                data={components}
                renderItem={({item, index}) => {
                    return (
                        item.content
                    )
                }}
            ></FlatList>
            {/* <FloatingButton /> */}
        </View>
    </View>
    )
}

export default AlbumDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eeeeee',
    },
    containerContent: {
        flex: 1,
        backgroundColor: '#eeeeee',
        padding: WIDTH(15),
    },
    containerHead: {
        width: width,
        height: HEIGHT(300),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink',
        padding: 0,
        marginTop: 0,
    },
    imageBackground: {
        flex: 1,
        width: width,
        // height: HEIGHT(200),
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageThumbnail: {
        height: HEIGHT(150),
        width: WIDTH(150),
        marginBottom: HEIGHT(15)
    },
    albumTitle:{
        fontSize: WIDTH(30),
        fontWeight: 'bold',
        color: 'white',
        marginLeft: WIDTH(10),
        marginRight: WIDTH(10)
    },
    contentTilte: {
        fontSize: HEIGHT(20),
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        color: '#2A2B3F',
    },
    content: {
        flex: 1,
        flexDirection: 'row',
        height: HEIGHT(70),
        padding: WIDTH(5),
        borderRadius: WIDTH(3)
    },
    index: {
        fontSize: HEIGHT(14),
        fontWeight: 'bold',
        color: 'black'
    },
    back: {
        position: 'absolute',
        left: WIDTH(30),
        top: HEIGHT(30),
    }
})