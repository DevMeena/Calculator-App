import { StyleSheet } from 'react-native';
import { myColors } from './Colors';

export const Styles = StyleSheet.create({
  btnBlue: {
    width: '25%',
    height: 100,
    borderRadius: 0,
    backgroundColor: myColors.blue,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
  },
  btnDark: {
    width: '25%',
    height: 100,
    borderRadius: 0,
    backgroundColor: myColors.btnDark,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
  },
  btnLight: {
    width: '25%',
    height: 100,
    borderRadius: 0,
    backgroundColor: myColors.white,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
  },
  btnGray: {
    width: '25%',
    height: 100,
    borderRadius: 0,
    backgroundColor: myColors.btnGray,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
  },
  smallTextLight: {
    fontSize: 32,
    color: myColors.white,
  },
  smallTextDark: {
    fontSize: 32,
    color: myColors.black,
  },
  // Keyboard
  row: {
    width: '100%',
    flexDirection: 'row',
  },
  viewBottom: {
    position: 'absolute',
    bottom: 0,
  },
  screenFirstNumber: {
    fontSize: 96,
    color: myColors.gray,
    fontWeight: '200',
    alignSelf: 'flex-end',
  },
  screenSecondNumber: {
    fontSize: 40,
    color: myColors.gray,
    fontWeight: '200',
    alignSelf: 'flex-end',
  },
});
