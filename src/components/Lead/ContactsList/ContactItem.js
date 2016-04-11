import {COLORS} from 'io/styles';

import ContactIcon from './ContactIcon';

const {
  StyleSheet,
  PropTypes,
  View,
  Text,
} = React;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 40,
    marginBottom: 10,
    backgroundColor: COLORS.LIGHTER_GRAY,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: COLORS.GRAY,
    borderRadius: 5,
  },

  partition: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

export default React.createClass({
  propTypes: {
    contact: PropTypes.object,
  },

  render() {
    const {contact} = this.props;

    return (
      <View style={styles.container}>
        <View style={[styles.partition, {paddingLeft: 10}]}>
          <Text>{contact.name}</Text>
        </View>
        <View style={styles.partition}>
          {this._renderEmailIcon(contact)}
          {this._renderPhoneIcon(contact)}
        </View>
      </View>
    );
  },

  _renderPhoneIcon(contact) {
    return (
      <ContactIcon
        onPress={() => this._call(contact)}
        isActive={!!contact.phones.length}
        name="phone"
      />
    );
  },

  _call(contact) {
    alert(`About to call ${contact.phones[0].phone}`);
  },

  _renderEmailIcon(contact) {
    return (
      <ContactIcon
        onPress={() => this._email(contact)}
        isActive={!!contact.emails.length}
        name="email"
      />
    );
  },

  _email(contact) {
    alert(`About to email ${contact.emails[0].email}`);
  },
});
