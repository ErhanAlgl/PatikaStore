import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dcdcdc',
    margin: 6,
    borderRadius: 6,
    paddingTop: 10,
  },
  image_container: {
    backgroundColor: '#dcdcdc',
  },
  image: {
    height: Dimensions.get('window').height * 0.26,
    width: Dimensions.get('window').width * 0.43,
    borderRadius: 5,
    alignSelf: 'center',
    resizeMode: 'contain',
    backgroundColor: 'white',
  },
  price: {
    color: 'gray',
    fontSize: 14,
    fontWeight: 'bold',
    paddingBottom: 5,
  },
  inStock: {
    color: 'red',
    fontSize: 14,
    fontWeight: 'bold',
  },
  inner_container: {
    padding: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    paddingBottom: 5,
  },
  last_container: {
    flex: 1,
    backgroundColor: '#dcdcdc',
    margin: 6,
    borderRadius: 6,
    paddingTop: 10,
    marginBottom: 130,
  },
  last_image_container: {
    backgroundColor: '#dcdcdc',
  },
  last_image: {
    height: Dimensions.get('window').height * 0.26,
    width: Dimensions.get('window').width * 0.93,
    borderRadius: 5,
    alignSelf: 'center',
    resizeMode: 'contain',
    backgroundColor: 'white',
  },
});
