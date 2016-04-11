import Icon from 'react-native-vector-icons/Ionicons';

import {COLORS} from 'io/styles';

const {
  TouchableOpacity,
  StyleSheet,
  PropTypes,
  View,
  Text,
} = React;

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderLeftColor: COLORS.GRAY,
    borderLeftWidth: StyleSheet.hairlineWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: {
    textAlign: 'center',
    width: 24,
    height: 24,
  },
});

const ICONS = {
  phone: 'ios-telephone',
  email: 'ios-email',
};

export default React.createClass({
  propTypes: {
    name: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    onPress: PropTypes.func.isRequired,
  },

  render() {
    const {name, isActive, onPress} = this.props;

    const iconStyle = [
      styles.icon,
      {
        color: isActive ? COLORS.DARK_GRAY : COLORS.GRAY,
      },
    ];

    return (
      <TouchableOpacity onPress={() => {
        if (isActive) {
          onPress();
        }
      }}>
        <View style={styles.container}>
          <Icon style={iconStyle} name={ICONS[name]} size={24} />
        </View>
      </TouchableOpacity>
    );
  },
});
