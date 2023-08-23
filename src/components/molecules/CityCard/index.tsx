import { colors, fonts } from '@utils';
import { View, Text, StyleSheet, Image } from 'react-native';

const CityCard = ({ name, image }: any) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{name}</Text>
    </View>
  );
};

export default CityCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F6F7F8',
    borderRadius: 16,
    overflow: 'hidden',
    width: 120
  },
  image: {
    width: 120,
    height: 100,
    objectFit: 'cover'
  },
  title: {
    paddingVertical: 12,
    fontSize: 16,
    color: colors.text.primary,
    fontFamily: fonts.primary[500],
    textAlign: 'center'
  },
  desc: {
    fontSize: 16,
    color: colors.text.secondary,
    fontFamily: fonts.primary[300]
  }
});
