const {
  StyleSheet,
} = React;

export const COLORS = {
  WHITE: 'white',
  DARKEST_GRAY: '#1D1D1B',
  DARK_GRAY: '#545457',
  GRAY: '#DDDDDD',
  LIGHT_GRAY: '#F3F4F6',
  LIGHTER_GRAY: '#F7F7F7',
  LIGHT_BLUE: '#F5FAFD',
  LINK_BLUE: '#367EB4',
  WON_COLOR: '#88DD88',
  LOST_COLOR: '#CCCCCC',
  ACTIVE_COLOR: '#FFBD2E',
};

export default StyleSheet.create({
  navbar: {
    height: 60,
    backgroundColor: COLORS.DARK_GRAY,
  },

  navbarTitle: {
    color: COLORS.WHITE,
    marginTop: 10,
    fontFamily: 'Lato-Bold',
    fontSize: 14,
  },

  navbarText: {
    marginTop: 10,
    marginRight: 10,
    marginLeft: 5,
    color: COLORS.WHITE,
  },

  navbarIconWrapper: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  navbarIcon: {
    width: 32,
    height: 32,
    textAlign: 'center',
    color: COLORS.WHITE,
  },
});
