import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Button, Image } from 'react-native';

import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import * as MediaLibrary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker';
import { useEffect, useState } from 'react';
import ResumeImage from '../components/ResumeImage';


export default function ResumenScreen() {

  const [sharedFiles, setSharedFiles] = useState([])

  const readFile = async () => {
    try {
        setSharedFiles([])
        let fileUri = FileSystem.documentDirectory + "sharingHistory.txt"
        let doc = []
        doc = JSON.parse( await FileSystem.readAsStringAsync(fileUri, { encoding: FileSystem.EncodingType.UTF8 })) 
        console.log('DOC In::::::::',doc)

        doc.forEach(element => {
          element.assetId= new Date()
          setSharedFiles([...sharedFiles, element])
        });

    } catch (error) {
        console.log(error)
    }
  }


  return (
    <View style={styles.container}>
        <Button onPress={readFile} title='Load history'/>
        <View>
        <ScrollView horizontal={false} style={{gap: 20}}>
        {sharedFiles.map((file) => {
          
          //console.log(file.assetId)
          
          return(
            <View key={file.assetId}>
              <Image source={{uri: (file.uri)}} style={{width: 100, height: 100}}/>
            </View>

          )})}
        </ScrollView>
      </View>
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
    paddingTop:40
  },
});
