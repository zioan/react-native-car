import { View, Text, ImageBackground } from 'react-native';
import styles from './styles';
import Button from '../Button/index';

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

export default CarItem;
