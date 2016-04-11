import moment from 'moment-timezone';

import {COLORS} from 'io/styles';
import TaskIcon from './TaskIcon';

import {DATE_FORMAT} from 'io/constants';

const {
  StyleSheet,
  PropTypes,
  View,
  Text,
} = React;

const styles = StyleSheet.create({
  taskWrapper: {
    marginBottom: 10,
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  taskPart: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 30,
  },

  task: {
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    paddingRight: 10,
  },

  date: {
    fontFamily: 'Lato-Light',
    color: COLORS.DARK_GRAY,
    fontSize: 11,
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
          {!task.is_complete && <Text style={styles.date}>{moment(task.due_date).format(DATE_FORMAT)}</Text>}
        </View>
        <View style={styles.taskPart}>
          {this._getIcon(task)}
        </View>
      </View>
    );
  },

  _getIcon(task) {
    return task.is_complete
      ? <TaskIcon type="filing" />
      : <TaskIcon type="check" />;
  },
});
