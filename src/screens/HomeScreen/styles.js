import {COL_BG, COL_BG_BLACK, COL_GRAY} from '../../styles/themes';

const {StyleSheet} = require('react-native');
const styles = StyleSheet.create({
  titleText: {
    fontFamily: 'Poppins-Medium',
    color: COL_BG_BLACK,
    fontSize: 25,
  },
  subTitleText: {
    fontFamily: 'Poppins-Regular',
    color: COL_GRAY,
  },
  flexRow: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 16,
  },
  cardRed: {
    flex: 1,
    padding: 8,
    backgroundColor: '#F15025',
    borderRadius: 10,
    marginEnd: 8,
  },
  cardGreen: {
    flex: 1,
    padding: 8,
    backgroundColor: '#31E981',
    borderRadius: 10,
    marginEnd: 8,
  },
  bgImageStyle: {
    width: 28,
    height: 28,
  },
  cardText: {
    fontFamily: 'Poppins-Medium',
    color: COL_BG,
  },
});
export default styles;
