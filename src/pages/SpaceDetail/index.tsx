import { Bedroom, Cupboard, Kitchen } from '@assets';
import { Button } from '@components';
import { colors, fonts } from '@utils';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SpaceDetail = ({ navigation, route }: any) => {
  const { image, name, price } = route?.params;
  return (
    <SafeAreaView style={styles.page}>
      <Image style={styles.image} source={image} />
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>{name}</Text>
          <View style={styles.price}>
            <Text style={styles.priceAmount}>${price}</Text>
            <Text style={styles.priceDuration}> / month</Text>
          </View>
        </View>
        <View>
          <Text style={styles.subtitle}>Main Facilities</Text>
          <View style={styles.facility}>
            <View style={styles.facilityItem}>
              <Kitchen />
              <View style={styles.facilityItemText}>
                <Text style={styles.facilityItemAmount}>1</Text>
                <Text style={styles.facilityItemDesc}>Kitchen</Text>
              </View>
            </View>
            <View style={styles.facilityItem}>
              <Bedroom />
              <View style={styles.facilityItemText}>
                <Text style={styles.facilityItemAmount}>2</Text>
                <Text style={styles.facilityItemDesc}>Bedroom</Text>
              </View>
            </View>
            <View style={styles.facilityItem}>
              <Cupboard />
              <View style={styles.facilityItemText}>
                <Text style={styles.facilityItemAmount}>2</Text>
                <Text style={styles.facilityItemDesc}>Big Lemari</Text>
              </View>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.subtitle}>Photos</Text>
        </View>
        <View>
          <Text style={styles.subtitle}>Location</Text>
        </View>
        <Button title="Book Now" onPress={() => navigation.goBack()} />
      </View>
    </SafeAreaView>
  );
};

export default SpaceDetail;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white
  },
  title: {
    marginBottom: 2,
    fontSize: 22,
    fontFamily: fonts.primary[500],
    color: colors.black
  },
  subtitle: {
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    color: colors.black
  },
  image: {
    height: 350,
    width: '100%',
    objectFit: 'cover'
  },
  content: {
    flex: 1,
    marginTop: -24,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingVertical: 30,
    paddingHorizontal: 24,
    backgroundColor: colors.white,
    gap: 30
  },
  price: {
    flexDirection: 'row'
  },
  priceAmount: {
    fontFamily: fonts.primary[500],
    color: colors.primary,
    fontSize: 16
  },
  priceDuration: {
    color: colors.text.secondary,
    fontFamily: fonts.primary[300],
    fontSize: 16
  },
  facility: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  facilityItem: {
    gap: 8
  },
  facilityItemText: {
    flexDirection: 'row',
    gap: 2
  },
  facilityItemAmount: {
    fontFamily: fonts.primary[500],
    color: colors.primary,
    fontSize: 14
  },
  facilityItemDesc: {
    color: colors.text.secondary,
    fontFamily: fonts.primary[300],
    fontSize: 14
  }
});
