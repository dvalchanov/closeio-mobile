import Overlay from 'react-native-overlay';
import Animatable from 'react-native-animatable';

import {COLORS} from 'io/styles';
import Button from './Button';

const {
  Dimensions,
  TextInput,
  PropTypes,
  StyleSheet,
  Animated,
  Text,
  View,
} = React;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },

  overlay: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: COLORS.BLACK,
    opacity: 0.3,
    position: 'absolute',
  },

  content: {
    overflow: 'hidden',
    backgroundColor: 'white',
    width: 300,
    height: 220,
    borderRadius: 10,
  },

  title: {
    fontFamily: 'Lato-Regular',
    fontSize: 18,
    marginBottom: 10,
  },

  inputs: {
    height: 160,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputWrapper: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: COLORS.LIGHT_GRAY,
  },

  input: {
    height: 50,
    width: 260,
    fontFamily: 'Lato-Light',
  },

  buttons: {
    height: 60,
    borderTopWidth: 1,
    borderTopColor: COLORS.WHITE,
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },

  cancel: {
    backgroundColor: COLORS.LIGHT_GRAY,
    borderRightWidth: 1,
    borderRightColor: COLORS.WHITE,
  },

  done: {
    backgroundColor: COLORS.LINK_BLUE,
  },
});

export default React.createClass({
  propTypes: {
    onCreate: React.PropTypes.func.isRequired,
    onCancel: React.PropTypes.func.isRequired,
  },

  componentDidMount() {
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 0.3,
        duration: 1000,
      }
    ).start();
  },

  getInitialState() {
    return {
      company: '',
      contact: '',
      fadeAnim: new Animated.Value(0),
    };
  },

  render() {
    const {width, height} = Dimensions.get('window');

    return (
      <Overlay isVisible={true}>
        <View style={[styles.container, {width, height}]}>
          <Animated.View style={[
            styles.overlay,
            {
              opacity: this.state.fadeAnim,
            },
          ]} />
          <Animatable.View animation="bounceInDown" duration={300} style={styles.content}>
            <View style={styles.inputs}>
              <Text style={styles.title}>New Lead</Text>
              <View style={styles.inputWrapper}>
                <TextInput
                  placeholder="Company / Organization"
                  style={styles.input}
                  onChangeText={(text) => this.setState({company: text})}
                  value={this.state.company}
                />
              </View>
              <View style={styles.inputWrapper}>
                <TextInput
                  placeholder="Contact Name"
                  style={styles.input}
                  onChangeText={(text) => this.setState({contact: text})}
                  value={this.state.contact}
                />
              </View>
            </View>
            <View style={styles.buttons}>
              <Button style={styles.cancel} onPress={this.props.onCancel}>Cancel</Button>
              <Button style={styles.done} textColor={COLORS.WHITE} onPress={() => {
                this.props.onCreate({
                  display_name: this.state.company,
                  contacts: [{
                    name: this.state.contact,
                    phones: [],
                    emails: [],
                  }],
                });
              }}>Create Lead</Button>
            </View>
          </Animatable.View>
        </View>
      </Overlay>
    );
  },
});
