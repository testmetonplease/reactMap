import { StyleSheet } from 'react-native';
import BaseTheme from './../../themes/base-theme';
import { FontNames } from './../../themes/fontNames';

const styles = StyleSheet.create({
  textInputContainer: {
    backgroundColor: 'rgba(0,0,0,0)',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    paddingLeft: 40
  },
  textInput: {
    backgroundColor: 'rgba(0,0,0,0)',
    height: 40,
    fontSize: 18,
    fontFamily: FontNames.mainFontRegular
  },
  description: {
    fontSize: 16,
    fontFamily: FontNames.mainFontRegular,
    color: BaseTheme.darkTextColor,
  },
  predefinedPlacesDescription: {
    color: '#1faadb'
  },
  locationSearchContainer: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: BaseTheme.baseColor,
    // alignItems: 'flex-end',
  },
  searchContainer: {
    flex: 1
  },
  leftIconContainer: {
    position: 'absolute',
    width: 40,
    height: 30,
  },
  leftIcon: {
    position: 'absolute',
    left: 20,
    top: 16,
    zIndex: 3
  },
  row: {
    minHeight: 40,
    height: 'auto'
  }
});

export default styles
