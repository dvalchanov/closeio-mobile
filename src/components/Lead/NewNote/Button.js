const {
  TouchableWithoutFeedback,
  PropTypes,
  StyleSheet,
  View,
  Text,
} = React;

const styles = StyleSheet.create({
  button: {
    height: 60,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontFamily: 'Lato-Regular',
  },
});

export default React.createClass({
  propTypes: {
    style: View.propTypes.style,
    textColor: PropTypes.string,
    onPress: PropTypes.func.isRequired,
    children: PropTypes.string.isRequired,
  },

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.props.onPress}>
        <View style={[styles.button, this.props.style]}>
          <Text style={[styles.text, {color: this.props.textColor}]}>{this.props.children.toUpperCase()}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  },
});

