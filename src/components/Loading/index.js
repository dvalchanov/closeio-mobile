const {
  ActivityIndicatorIOS,
  StyleSheet,
  View,
} = React;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicatorIOS size="large" animating={true} />
      </View>
    );
  },
});
