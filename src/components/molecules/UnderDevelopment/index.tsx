import { colors, fonts } from '@utils';
import { View, Text, StyleSheet } from 'react-native';

const UnderDevelopment = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Under Development</Text>
      <Text style={styles.desc}>Something Big is Coming</Text>
    </View>
  );
};

export default UnderDevelopment;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  title: {
    marginBottom: 2,
    fontSize: 18,
    color: colors.text.primary,
    fontFamily: fonts.primary[500]
  },
  desc: {
    fontSize: 16,
    color: colors.text.secondary,
    fontFamily: fonts.primary[300]
  }
});
