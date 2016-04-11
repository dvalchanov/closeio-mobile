import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment-timezone';

import {COLORS} from 'io/styles';

const {
  StyleSheet,
  PropTypes,
  View,
  Text,
} = React;

const styles = StyleSheet.create({
  taskWrapper: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  taskPart: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 30,
  },

  taskIcon: {
    alignSelf: 'flex-end',
    lineHeight: 30,
  },

  task: {
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    paddingRight: 10,
  },

  date: {
    fontFamily: 'Lato-Regular',
    color: COLORS.DARK_GRAY,
    fontSize: 12,
  },
});

export default React.createClass({
  propTypes: {
    task: PropTypes.object,
  },

  render() {
    const {task} = this.props;

    const taskStyle = [
      styles.task,
      {textDecorationLine: task.is_complete ? 'line-through' : 'none'},
    ];

    return (
      <View style={styles.taskWrapper}>
        <View style={styles.taskPart}>
          <Text style={taskStyle}>{task.text}</Text>
          {!task.is_complete && <Text style={styles.date}>{moment(task.due_date).format('MM/DD/YYYY hh:mma')}</Text>}
        </View>
        <View style={styles.taskPart}>
          {this._getIcon(task)}
        </View>
      </View>
    );
  },

  _getIcon(task) {
    return task.is_complete
      ? <Icon style={styles.taskIcon} name="ios-filing-outline" size={24} />
      : <Icon style={styles.taskIcon} name="ios-checkmark-outline" size={24} />;
  },
});
