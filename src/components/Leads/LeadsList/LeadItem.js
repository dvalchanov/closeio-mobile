import Icon from 'react-native-vector-icons/Ionicons';

import {COLORS} from 'io/styles';

const {
  TouchableOpacity,
  Dimensions,
  PropTypes,
  StyleSheet,
  View,
  Text,
} = React;

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'center',
    width: Dimensions.get('window').width - 20,
    backgroundColor: COLORS.WHITE,
    borderColor: COLORS.GRAY,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 5,
    overflow: 'hidden',
    alignItems: 'center',
    flexDirection: 'column',
  },

  titleWrapper: {
    alignSelf: 'stretch',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: COLORS.GRAY,
    overflow: 'hidden',
    paddingLeft: 10,
    paddingRight: 10,
  },

  title: {
    fontFamily: 'Lato-Bold',
    color: COLORS.LINK_BLUE,
    fontSize: 18,
    marginTop: 10,
    marginBottom: 10,
  },

  contactsWrapper: {
    flex: 1,
    padding: 10,
    alignSelf: 'stretch',
  },

  footer: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'row',
    height: 40,
    backgroundColor: COLORS.LIGHT_GRAY,
    borderTopColor: COLORS.GRAY,
    borderTopWidth: StyleSheet.hairlineWidth,
  },

  action: {
    color: COLORS.WHITE,
    fontFamily: 'Lato-Regular',
    fontSize: 14,
  },

  separator: {
    height: 40,
    width: StyleSheet.hairlineWidth,
    backgroundColor: COLORS.GRAY,
  },

  iconWrapper: {
    flex: 1,
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: {
    width: 28,
    height: 28,
    textAlign: 'center',
    color: COLORS.DARK_GRAY,
  },
});

export default React.createClass({
  propTypes: {
    data: PropTypes.object.isRequired,
    openLead: PropTypes.func.isRequired,
  },

  render() {
    const {data, openLead} = this.props;

    const contactViews = data.contacts.map((contact, i) => {
      return (
        <Text key={i}>{contact.name}</Text>
      );
    });

    //<Text>{data.status_label}</Text>
    //<Text style={styles.action}>EMAIL</Text>
    //<Text style={styles.action}>CALL</Text>
    return (
      <View style={styles.wrapper}>
        <TouchableOpacity onPress={() => openLead(data)} style={styles.titleWrapper}>
          <Text style={styles.title}>{data.display_name}</Text>
        </TouchableOpacity>
        <View style={styles.contactsWrapper}>
          <View>
            <Icon name="person-stalker" style={styles.contactIcon} size={24} />
          </View>
          <View>
            {contactViews}
          </View>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.iconWrapper} onPress={this._email}>
            <Icon name="ios-email" size={28} style={styles.icon} />
          </TouchableOpacity>
          <View style={styles.separator} />
          <TouchableOpacity style={styles.iconWrapper} onPress={this._call}>
            <Icon name="ios-telephone" size={28} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    );
  },

  _call() {
    console.log('CALL');
  },

  _email() {
    console.log('EMAIL');
  },
});
