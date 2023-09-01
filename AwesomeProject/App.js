
import { StyleSheet, Text, View, StatusBar, FlatList } from 'react-native';
import Person from './src/components/Person/Person';

const DATA= [
  {id:0, name:'Eder', lastName: 'Rivera'},
  {id:1, name:'Juan', lastName: 'Mendez'},
  {id:2, name:'Pedro', lastName: 'Gomez'},
  {id:3, name:'Alberto', lastName: 'Serrano'},
  {id:4, name:'Alan', lastName: 'Garcia'},
  {id:5, name:'Guadalupe', lastName: 'Victoria'},
  {id:6, name:'Gonzalo', lastName: 'Avila'},
  {id:7, name:'Sebastian', lastName: 'Castro'},
  {id:8, name:'Humberto', lastName: 'Morales'},
  {id:9, name:'Grecia', lastName: 'Ximello'},
  {id:10, name:'Evelyn', lastName: 'Guillen'},
]

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA} style={styles.lista} 
        renderItem={({ item: { name, lastName }, index }) => (
          <Person name={name} lastName={lastName} index={index} />
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        keyExtractor={({ id }) => id}
      />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 35,
    //flex: 1,
  },
  lista: {
    borderWidth:4,
    borderColor: '#0605E1',
    borderRadius: 10,
    margin: 5,
    padding: 1,
  },
  separator: {
    height: 1,
    borderWidth: 1,
    borderColor: '#0605E1',
  },
  
});