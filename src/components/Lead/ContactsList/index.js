import ContactItem from './ContactItem';

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
    contacts: PropTypes.array,
  },

  render() {
    const {contacts} = this.props;

    const contactsViews = contacts.map((contact, i) => {
      return <ContactItem key={i} contact={contact} />
    });

    return (
      <View style={styles.container}>
        {contactsViews.length ? contactsViews : this._renderEmpty()}
      </View>
    );
  },

  _renderEmpty() {
    return <Text style={styles.text}>No contacts</Text>;
  },
});
