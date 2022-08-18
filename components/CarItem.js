import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Button from './Button.js';

const CarItem = ({ car }) => {
  const { name, tagline, taglineCTA, image } = car;

  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name} </Text>
        <Text style={styles.subtitle}>
          {tagline} <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <Button
          type='primary'
          content={'custom order'}
          onPress={() => console.warn('Custom Order was pressed')}
        />

        <Button
          type='secondary'
          content={'existing inventory'}
          onPress={() => console.warn('Existing Inventory was pressed')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  carContainer: {
    width: '100%',
    height: Dimensions.get('window').height,
  },
  titles: {
    marginTop: '30%',
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 16,
    color: '#5c5e62',
  },
  subtitleCTA: {
    textDecorationLine: 'underline',
  },
  buttonsContainer: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
  },
});

export default CarItem;
