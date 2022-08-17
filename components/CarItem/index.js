import { View, Text, ImageBackground } from 'react-native';
import styles from './styles';
import Button from '../Button/index';

const CarItem = () => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require('../../assets/images/ModelS.jpeg')}
        style={styles.image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subtitle}>Starting at $69,420</Text>
      </View>

      <View>
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
