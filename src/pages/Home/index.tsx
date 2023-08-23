import {
  DummyCity1,
  DummyCity2,
  DummyCity3,
  DummyCity4,
  DummySpace1,
  DummySpace2,
  DummySpace3
} from '@assets';
import { CityCard, Gap, Header, SpaceCard } from '@components';
import { colors, fonts } from '@utils';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
  const cities = [
    {
      name: 'Bandung',
      image: DummyCity1
    },
    {
      name: 'Jakarta',
      image: DummyCity2
    },
    {
      name: 'Bogor',
      image: DummyCity3
    },
    {
      name: 'Tangerang',
      image: DummyCity4
    }
  ];

  const spaces = [
    {
      name: 'Kuretakeso Hott',
      rating: 5,
      image: DummySpace1,
      price: 52,
      location: 'Bandung, Germany'
    },
    {
      name: 'Roemah Nenek',
      rating: 4,
      image: DummySpace2,
      price: 22,
      location: 'Seattle, Bogor'
    },
    {
      name: 'Darrling How',
      rating: 4,
      image: DummySpace3,
      price: 32,
      location: 'Jakarta, Indonesia'
    }
  ];
  return (
    <SafeAreaView style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Header title="Explore Now" desc="Mencari kosan yang cozy" />
          <Text style={styles.title}>Popular Cities</Text>
          <Gap height={16} />
          <ScrollView
            showsHorizontalScrollIndicator={false}
            style={styles.cities}
            horizontal={true}
            contentContainerStyle={{
              paddingRight: 50,
              gap: 16
            }}
          >
            {cities?.map((city: any) => (
              <CityCard name={city?.name} image={city?.image} key={`city-${city?.name}`} />
            ))}
          </ScrollView>
          <Gap height={30} />
          <Text style={styles.title}>Recommended Space</Text>
          <Gap height={16} />
          <View style={styles.spaces}>
            {spaces?.map((space: any) => (
              <SpaceCard
                name={space?.name}
                image={space?.image}
                rating={space?.rating}
                price={space?.price}
                location={space?.location}
                key={`space-${space?.name}`}
              />
            ))}
          </View>
          <Gap height={100} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white
  },
  title: {
    paddingHorizontal: 24,
    fontSize: 16,
    fontFamily: fonts.primary.normal
  },
  cities: {
    paddingLeft: 24
  },
  spaces: {
    paddingHorizontal: 24,
    gap: 20
  }
});
