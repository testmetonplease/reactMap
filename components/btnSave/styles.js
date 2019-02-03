import { StyleSheet } from 'react-native';
import BaseTheme from './../../themes/base-theme'
import { FontNames } from './../../themes/fontNames'

const styles = StyleSheet.create({
  wrap: {
    height: 64
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BaseTheme.baseColor
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontFamily: FontNames.mainFontRegular
  }
});

export default styles