import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.BACKGROUND,
  },

  contentView: {
    flex: 1, 
    backgroundColor: THEME.COLORS.ITENS_BACKGROUND, 

    marginHorizontal: 20, 
    marginTop: 5, 

    borderTopLeftRadius: 50, 
    borderTopRightRadius: 50, 

    alignItems: 'center'
  },

  scrollView: {
    alignItems: 'center',
    paddingBottom: 50,
    paddingTop: 20,
    paddingHorizontal: 30,
  },

  logo: {
    resizeMode: 'contain',
    height: 140,
    width: 230,
  },

  text: {
    textAlign: 'center',
    fontSize: THEME.FONT_SIZE.MD,
    color: THEME.COLORS.TEXT
  },

  playerImg: {
    width: 150,
    height: 150,
    marginTop: 30,
    marginBottom: 10,
    alignSelf: 'center',

    borderWidth: 1,
    borderColor: THEME.COLORS.PRIMARY,
    borderRadius: 50,
    backgroundColor: THEME.COLORS.BACKGROUND
  },

  titleName: {
    textAlign: 'center',
    fontSize: THEME.FONT_SIZE.LG,
    color: THEME.COLORS.TEXT,
    fontWeight: '900'
  }
});