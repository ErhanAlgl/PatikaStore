import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  StyleSheet,
  TextInput,
} from 'react-native';
import StoreCard from './components/StoreCard';
import store_data from './store_data.json';

function App() {
  const [text, onChangeText] = React.useState('Ara...');
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>PATIKASTORE</Text>
      <View>
        <TextInput
          style={styles.search}
          onChangeText={onChangeText}
          value={text}
          placeholder="Ara..."
        />
      </View>
      <View>
        <FlatList
          numColumns={2}
          data={store_data}
          renderItem={({item}) => <StoreCard store={item} />}
        />
        <Image />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'purple',
    padding: 5,
  },
  search: {
    backgroundColor: '#dcdcdc',
    padding: 13,
    margin: 5,
    borderRadius: 10,
  },
});

export default App;
