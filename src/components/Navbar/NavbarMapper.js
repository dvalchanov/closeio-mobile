import Icon from 'react-native-vector-icons/Ionicons';

import {NavbarTitle} from 'io/components/Navbar';

const {
  TouchableOpacity,
} = React;

import globalStyles, {
  COLORS,
} from 'io/styles';

const ICONS = {
  back: 'ios-arrow-thin-left',
  add: 'ios-plus-empty',
};

export default {
  LeftButton(route, nav, index, navState) {
    if (route.component.leftIcon) {
      return (
        <TouchableOpacity style={globalStyles.navbarIconWrapper} onPress={route.onLeftButtonPress}>
          {this.renderIcon(route.component.leftIcon)}
        </TouchableOpacity>
      );
    }

    if (index === 0) {
      return null;
    }

    return (
      <TouchableOpacity style={globalStyles.navbarIconWrapper} onPress={this._back(nav)}>
        {this.renderIcon('back')}
      </TouchableOpacity>
    );
  },

  RightButton(route, nav) {
    if (!route.component.rightIcon && !route.component.rightText) {
      return null;
    }

    const content = route.component.rightIcon
      ? this.renderIcon(route.component.rightIcon)
      : this.renderText(route.component.rightText);

    return (
      <TouchableOpacity style={globalStyles.navbarIconWrapper} onPress={route.onRightButtonPress}>
        {content}
      </TouchableOpacity>
    );
  },

  Title(route) {
    return <NavbarTitle route={route} />;
  },

  _back(nav) {
    return () => nav.pop();
  },

  renderIcon(name) {
    return (
      <Icon
        name={ICONS[name]}
        size={32}
        color={COLORS.RED}
        style={globalStyles.navbarIcon}
      />
    );
  },

  renderText(text) {
    return <Text style={globalStyles.navbarText}>{text}</Text>;
  },
};
