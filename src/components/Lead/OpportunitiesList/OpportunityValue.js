import {COLORS} from 'io/styles';

const {
  StyleSheet,
  PropTypes,
  View,
  Text,
} = React;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 20,
  },

  status: {
    width: 20,
    height: 20,
    marginRight: 5,
    borderWidth: StyleSheet.hairlineWidth,
  },
});

const STATUS_COLORS = {
  active: COLORS.ACTIVE_COLOR,
  won: COLORS.WON_COLOR,
  lost: COLORS.LOST_COLOR,
};

export default React.createClass({
  propTypes: {
    status: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  },

  render() {
    const {status, value} = this.props;

    const statusStyle = [
      styles.status,
      {backgroundColor: STATUS_COLORS[status]},
    ]

    return (
      <View style={styles.container}>
        <View style={statusStyle} />
        <Text>{value}</Text>
      </View>
    );
  },
});
