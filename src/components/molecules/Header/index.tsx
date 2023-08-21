import { colors, fonts } from '@utils';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ title, desc }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc}>{desc}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    padding: 24
  },
  title: {
    marginBottom: 2,
    fontSize: 24,
    color: colors.text.primary,
    fontFamily: fonts.primary[500]
  },
  desc: {
    fontSize: 16,
    color: colors.text.secondary,
    fontFamily: fonts.primary[300]
  }
});
