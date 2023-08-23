import { DummyCity1, DummyCity2, DummyCity3, DummyCity4 } from '@assets';
import { CityCard, Gap, Header } from '@components';
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
          <Gap height={12} />
          <Text style={styles.title}>Tips & Guidance</Text>
          <Gap height={16} />
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
  }
});
