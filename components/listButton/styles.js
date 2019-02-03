import { StyleSheet } from 'react-native';
import { FontNames } from './../../themes/fontNames';

const styles = StyleSheet.create({
  viewConatiner: {
    flex: 1,
    alignItems: 'center'
  },
  btn: {
    height: 50,
    alignSelf: 'stretch',
    borderRadius: 2
  },
  btnContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 16
  },
  btnText: {
    flex: 1,
    textAlign: 'left',
    color: '#fff',
    fontSize: 18,
    fontFamily: FontNames.mainFontRegular
  },
  iconContainer: {
    width: 30,
    height: 30,
    marginRight: 15
  },
  iconContainerLeft: {
    width: 30,
    height: 30,
    marginRight: 10
  },
  toggleContainer: {
    marginRight: 15
  }
});

export default styles;
