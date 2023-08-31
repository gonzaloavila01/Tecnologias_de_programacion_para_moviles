import { StyleSheet, Text, View, StatusBar, TouchableHighlight, Alert, ScrollView, FlatList } from 'react-native';
//import Login from './src/screens/Login';
import Person from './src/components/Person/Person';

const DATA= [
  {id:0, name:'Eder', lastName: 'Rivera'},
  {id:1, name:'Juan', lastName: 'Mendez'},
  {id:2, name:'Pedro', lastName: 'Gomez'},
  {id:3, name:'Alberto', lastName: 'Serrano'},
  {id:4, name:'Alan', lastName: 'Garcia'},
  {id:5, name:'Alan 1', lastName: 'Garcia'},
  {id:6, name:'Alan 2', lastName: 'Garcia'},
  {id:7, name:'Alan 3', lastName: 'Garcia'},
  {id:8, name:'Alan 4', lastName: 'Garcia'},
  {id:9, name:'Alan 5', lastName: 'Garcia'},
  {id:10, name:'Alan 6', lastName: 'Garcia'},
]

export default function App() { 
  
  return (
      <View style={styles.container}>
          <FlatList
          data={DATA}
          renderItem={({item: {name, lastName}, index}) =>
          <Person name= {name} lastName={lastName} index={index}/>
        }   
            
          ItemSeparatorComponent={<Text>a</Text>}
          keyExtractor={({id}) => id}
          />
          <StatusBar style='auto' />
      </View>
    // <ScrollView style={styles.container }>
    //  {/* <Login/> */}
    //  { DATA.map(({id, name, lastName}) =>{
    //   <View key={person.id} style={{borderWidth: 1, borderColor: 'red'}}>
    //       <Text style={{fontSize: 40}}>{name}</Text>
    //       <Text style={{fontSize: 40}}>{lastName}</Text>
    //   </View>
    //  })

    //  }
    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 35,
    // flex: 1,
    // backgroundColor: '#FFFFFF',
    // alignItems: 'center'
  },
  
});