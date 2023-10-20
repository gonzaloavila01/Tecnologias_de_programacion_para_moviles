import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import * as React from 'react'
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import * as MediaLibrary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker';
import { useEffect, useState  } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import { Video } from 'expo-av';


export default function BaseScreen() {
    const [statusMedia, requestMediaPermission] = MediaLibrary.usePermissions();
    const [statusCamera, requestCameraPermission] = ImagePicker.useCameraPermissions()
    const [statusLibrary, requestLibraryPermission] = ImagePicker.useMediaLibraryPermissions();
    const [sharedFiles, setSharedFiles] = useState([])
    const [imageData, setImageData] = useState()
    const [loadImage, setLoadImage] = useState()
    const [videoStatus, setVideoStatus] = React.useState({})
    const video = React.useRef(null)

    
    const delay = (ms) => new Promise((res) => setTimeout(res, ms))

    useEffect(() => {
        const getPerms = async () => {
            await requestMediaPermission()
            await requestCameraPermission()
            await requestLibraryPermission()
        }
        getPerms()
    }, [])

    const share2= async () => {
        let Ids= new Date()
        console.log(Ids)
        data = imageData
        data.assetId=(Ids)
        
        setSharedFiles([...sharedFiles, data]);
        //console.log(data)
        share()
    }

    const share = async () => {
        try {
            await Sharing.shareAsync(loadImage)
            
            let fileUri = FileSystem.documentDirectory +"sharingHistory.txt";
            await FileSystem.writeAsStringAsync(fileUri, JSON.stringify(sharedFiles), { encoding: FileSystem.EncodingType.UTF8 });
            const doc = await FileSystem.readAsStringAsync(fileUri, { encoding: FileSystem.EncodingType.UTF8 }) 
            //console.log('DOC OUT ::::::::::....', doc)
        } catch (error) {
            console.log(error)  
        }
        
    }

    const takeFoto = async () =>{
        setImageData()
        setLoadImage()
        try {
            const result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: false,
                quality:1, 
                videoQuality:1,
            })
            
            if(!result.canceled){
                setImageData((result.assets[0]))
                setLoadImage(result.assets[0].uri)
            }
        } catch (error) {
            console.log(error)        
        }
    }

    const takeVideo = async () =>{
        setImageData()
        setLoadImage()
        try {
            const result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Videos,
                videoQuality:1,
            })
            
            if(!result.canceled){
                setImageData((result.assets[0]))
                setLoadImage(result.assets[0].uri)
            }
        } catch (error) {
            console.log(error)        
        }
    }
    
    const loadFile = async () => {
        setImageData()
        setLoadImage()
        try{
            if(statusLibrary){
                const result = await ImagePicker.launchImageLibraryAsync({
                   mediaTypes: ImagePicker.MediaTypeOptions.All,
                   allowsEditing: false,
                   //aspect: [4, 3],
                   quality: 1,
                   exif: true
                   //allowsMultipleSelection
                   //allowsEditing,
               })

               if(!result.canceled){
                   setImageData((result.assets[0]))
                   setLoadImage(result.assets[0].uri)
               }
            }
        } catch (error){
            console.log(error)
        }
        
    }

    
    const renderMedia= () => {
        if(imageData){
            if(imageData.type === 'image'){
                return(
                    <View>
                        <Image style={{width: 300, height:300}} source={{uri: loadImage}}/>
                        <TouchableOpacity style={styles.boton} onPress={() => share2()}>
                            <Text>Share</Text>
                        </TouchableOpacity>
                    </View>    
                )
            }else if(imageData.type === 'video'){
                return(
                    <View>
                        <Video style={{width: 300, height:300}} source={{uri: loadImage}} ref={video} useNativeControls  />
                        <TouchableOpacity style={styles.boton} onPress={() => share2()}>
                            <Text>Share</Text>
                        </TouchableOpacity>
                    </View>    
                )
            }

        }
    }

  return (
    <View style={styles.container}>
        <View style={{gap: 10, flexDirection: 'row'}}>
            <TouchableOpacity style={styles.boton} onPress={() => takeFoto()}>
                <Text>Foto</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.boton} onPress={() => takeVideo()}>
                <Text>Video</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.boton} onPress={() => loadFile()}>
                <Text>Load from library</Text>
            </TouchableOpacity>
        </View>
        {renderMedia()}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  boton:{
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    padding: 20,
    borderColor: 'black',
    borderWidth: 1
  }
});
