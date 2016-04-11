import Icon from 'react-native-vector-icons/Ionicons';

import {COLORS} from 'io/styles';

const {
  StyleSheet,
  PropTypes,
  View,
} = React;

const ICONS = {
  check: {
    name: 'checkmark-round',
    size: 14,
  },
  filing: {
    name: 'ios-filing',
    size: 18,
  },
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-end',
    backgroundColor: COLORS.LIGHT_GRAY,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: COLORS.GRAY,
    borderRadius: 5,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: {
    textAlign: 'center',
  },
});

export default React.createClass({
  propTypes: {
    type: PropTypes.string.isRequired,
  },

  render() {
    const {type} = this.props;

    return (
      <View style={styles.container}>
        <Icon style={styles.icon} name={ICONS[type].name} size={ICONS[type].size} />
      </View>
    );
  },
});
