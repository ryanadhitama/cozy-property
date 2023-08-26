import { Star } from '@assets';
import { useNavigation } from '@react-navigation/native';
import { colors, fonts } from '@utils';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Navigation } from 'router';

const SpaceCard = ({ name, image, rating, price, location }: any) => {
  const navigation = useNavigation<Navigation>();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('SpaceDetail');
      }}
    >
      <View style={styles.container}>
        <View style={styles.imageRating}>
          <Image source={image} style={styles.image} />
          <View style={styles.rating}>
            <Star />
            <Text style={styles.ratingAmount}>{rating}/5</Text>
          </View>
        </View>
        <View>
          <Text style={styles.title}>{name}</Text>
          <View style={styles.price}>
            <Text style={styles.priceAmount}>${price}</Text>
            <Text style={styles.priceDuration}> / month</Text>
          </View>
          <Text style={styles.location}>{location}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SpaceCard;

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center'
  },
  image: {
    width: 130,
    height: 110,
    objectFit: 'cover'
  },
  title: {
    marginBottom: 2,
    fontSize: 16,
    color: colors.text.primary,
    fontFamily: fonts.primary[500]
  },
  location: {
    fontSize: 14,
    color: colors.text.secondary,
    fontFamily: fonts.primary[300]
  },
  price: {
    flexDirection: 'row',
    marginBottom: 16
  },
  priceAmount: {
    fontFamily: fonts.primary[500],
    color: colors.primary
  },
  priceDuration: {
    color: colors.text.secondary,
    fontFamily: fonts.primary[300]
  },
  rating: {
    width: 70,
    height: 30,
    backgroundColor: colors.primary,
    position: 'absolute',
    top: 0,
    right: 0,
    borderBottomLeftRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 2
  },
  ratingAmount: {
    color: colors.white,
    fontFamily: fonts.primary[500],
    fontSize: 13
  },
  imageRating: {
    borderRadius: 18,
    overflow: 'hidden',
    position: 'relative'
  }
});
