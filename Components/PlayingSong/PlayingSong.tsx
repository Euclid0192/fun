import React, { useState, useEffect, useRef } from 'react'
import {
    StyleSheet,
    View,
    Text,
    Button,
    ImageBackground,
    Image,
    ActivityIndicator,
    Dimensions,
    Animated,
    Easing,
    Pressable
} from 'react-native'

import { WIDTH, HEIGHT } from '../TrangChu/Slider/SliderList'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { addTracks, setupPlayer } from '../../service'
import TrackPlayer from 'react-native-track-player'
import { useProgress } from 'react-native-track-player'
import { Slider } from '@rneui/themed'


const { width, height } = Dimensions.get('window')

const TrackProgress = () => {
    const { position, duration } = useProgress(200);
    const [ value, setValue ] = useState(position);
  
    const format = (seconds: any) => {
      let mins = (parseInt(seconds / 60)).toString().padStart(2, '0');
      let secs = (Math.trunc(seconds) % 60).toString().padStart(2, '0');
      return `${mins}:${secs}`;
    }
  
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Slider 
            style={{ width: WIDTH(300), height: HEIGHT(40)}}
            value={position}
            //Di chuyen slider de tua nhac
            onValueChange={(value) => {setValue(value); TrackPlayer.seekTo(value)}}
            step={1}
            minimumValue={0}
            maximumValue={duration}
            thumbStyle={{width: WIDTH(10), height: HEIGHT(10), backgroundColor: 'white'}}
            minimumTrackTintColor='grey'
        />
        <Text style={styles.trackProgress}>
          { format(position) } / { format(duration) }
        </Text>
      </View>
    );
}

const PlayingSong = ({navigation, route} : {navigation: any, route: any}) => {
    //Spinning Disc Animation
    const spinValue = useRef(new Animated.Value(0)).current
    const { position, duration } = useProgress(200)

    Animated.loop(
        Animated.timing(
            spinValue, 
            {
                toValue: 1,
                duration: 9000,
                easing: Easing.linear,
                useNativeDriver: true,
            }
        )
    ).start()

    const Spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })

    const [ liked, setLiked ] = useState(false)
    const [ playing, setPlaying ] = useState(true)
    //Data
    const [data, setData] = useState<any[]>([])
    const songID = route.params?.id;
    console.log(songID)
    const [ loading, setLoading ] = useState(false)
    //Track Player
    const [ isPlayerReady, setIsPlayerReady ] = useState(false);

    const setUp = async () => {
        let isSetup = await setupPlayer();

        const queue = await TrackPlayer.getQueue();
        if (isSetup && queue.length <= 0){
            await addTracks();
        }

        setIsPlayerReady(isSetup);
        TrackPlayer.play()
        TrackPlayer.setVolume(1)
    }

    const backHandler = async () => {
        await TrackPlayer.pause()
        await TrackPlayer.reset()
        navigation.goBack()
    }
    //End Track
    useEffect(() => {
        getMainData(`https://api-zingmp3-vercel.vercel.app/api/infosong?id=${songID}`)
        setUp();
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

    if (loading || !isPlayerReady){
        return (
          <View style={{flex: 1, backgroundColor: '#eeeeee', justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size={'large'} color={'grey'} />
          </View>
        )
    } // of if

    // else TrackPlayer.play()
    return (
        <View style={styles.container}>
            <ImageBackground
                source={{uri: data?.thumbnail}}
                blurRadius={5} 
                style={styles.imageBackground}
                resizeMode='stretch'
            >
                <View style={styles.containerDisc}>
                    <Pressable style={styles.back} onPress={backHandler}>
                        <AntDesign
                            name='back'
                            size={24}
                            color='white'
                        />
                    </Pressable>
                    <Animated.Image 
                        source={{uri: data?.thumbnail}}
                        style={[styles.disc, {transform: [{rotate: Spin}]}]}
                    />
                    <View style={styles.songName}>
                        <Entypo
                            name='share-alternative'
                            size={24}
                            color='white'
                        />
                        <Text style={styles.title}>{data?.title}</Text>
                        <Pressable onPress={() => {
                            setLiked(!liked)
                        }}>
                            <Entypo
                                name={liked? 'heart' : 'heart-outlined'}
                                size={24}
                                color='white'
                            />                            
                        </Pressable>

                    </View>
                </View>
                <View style={styles.containerContent}>
                    <TrackProgress />
                    <View style={styles.control}>
                        <AntDesign 
                            name='stepbackward'
                            size={28}
                            color='white'
                        />
                        {/* Tua nguoc 15s */}
                        <Pressable onPress={() => TrackPlayer.seekTo(position - 15)}>
                            <AntDesign 
                                name='banckward'
                                size={28}
                                color='white'
                            />                              
                        </Pressable>
                        <Pressable onPress={() => {
                            playing ? TrackPlayer.pause() : TrackPlayer.play();
                            setPlaying(!playing)
                        }}>
                            <FontAwesome
                                name={!playing? 'play': 'pause'}
                                size={28}
                                color='white'
                            />                            
                        </Pressable>
                        {/* Tua di 15s */}
                        <Pressable onPress={() => TrackPlayer.seekTo(position + 15)}>
                            <AntDesign 
                                name='forward'
                                size={28}
                                color='white'
                            />                              
                        </Pressable>

                        <AntDesign 
                            name='stepforward'
                            size={28}
                            color='white'
                        />                        
                    </View>

                </View>
            </ImageBackground>                
        </View>
    )
}

export default PlayingSong
const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    imageBackground: {
        flex: 1,
        width: width,
    },
    containerDisc: {
        width: width,
        height: HEIGHT(500),
        // backgroundColor: '#eeeeee',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerContent: {
        flex: 1,
        // backgroundColor: 'blue'
    },
    disc: {
        width: WIDTH(250),
        height: WIDTH(250),
        borderRadius: WIDTH(125),
    },
    songName: {
        position: 'absolute',
        bottom: 0,
        width: width,
        height: HEIGHT(100),
        // backgroundColor: 'pink',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    control: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        // backgroundColor: 'pink',
        paddingTop: HEIGHT(10)
    },
    trackProgress: {
        fontSize: HEIGHT(20),
        fontWeight: 'bold',
        color: 'white'
    },
    back: {
        position: 'absolute',
        left: WIDTH(30),
        top: HEIGHT(30),
    },
    title: {
        fontSize: HEIGHT(20), 
        color: 'white',
        width: WIDTH(250),
        flexShrink: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})