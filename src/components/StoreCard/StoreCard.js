import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './StoreCard.style';

const StoreCard = ({store}) => {
  return (
    <View style={store.id === 10 ? styles.last_container : styles.container}>
      <View
        style={
          store.id === 10 ? styles.last_image_container : styles.image_container
        }>
        <Image
          style={store.id === 10 ? styles.last_image : styles.image}
          source={{uri: store.imgURL}}
        />
      </View>
      <View style={styles.inner_container}>
        <Text style={styles.title}>{store.title}</Text>
        <Text style={styles.price}>{store.price}</Text>
        <Text style={styles.inStock}>{store.inStock ? '' : 'STOKTA YOK'}</Text>
      </View>
    </View>
  );
};

export default StoreCard;
