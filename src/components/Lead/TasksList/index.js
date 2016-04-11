import TaskItem from './TaskItem';

const {
  StyleSheet,
  PropTypes,
  View,
  Text,
} = React;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },

  text: {
    fontSize: 12,
  },
});

export default React.createClass({
  propTypes: {
    tasks: PropTypes.array,
  },

  render() {
    const {tasks} = this.props;

    const tasksViews = tasks.map((task, i) => {
      return <TaskItem key={i} task={task} />
    });

    return (
      <View style={styles.container}>
        {tasksViews.length ? tasksViews : this._renderEmpty()}
      </View>
    );
  },

  _renderEmpty() {
    return <Text style={styles.text}>No tasks</Text>;
  },
});
