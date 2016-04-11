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
    alignSelf: 'stretch',
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
  },

  contactIconWrapper: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: StyleSheet.hairlineWidth,
    borderRightColor: COLORS.GRAY,
  },

  contactIcon: {
    color: COLORS.GRAY,
  },

  contactViewsWrapper: {
    paddingLeft: 10,
  },

  contact: {
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    marginBottom: 5,
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
    callLead: PropTypes.func.isRequired,
    emailLead: PropTypes.func.isRequired,
  },

  render() {
    const {data, openLead} = this.props;

    const contactViews = data.contacts.slice(0, 3).map((contact, i) => {
      return (
        <View key={i}>
          <Text style={styles.contact}>{contact.name}</Text>
        </View>
      );
    });

    return (
      <View style={styles.wrapper}>
        <TouchableOpacity onPress={() => openLead(data)} style={styles.titleWrapper}>
          <Text style={styles.title}>{data.display_name}</Text>
        </TouchableOpacity>
        <View style={styles.contactsWrapper}>
          <View style={styles.contactIconWrapper}>
            <Icon name="person-stalker" style={styles.contactIcon} size={24} />
          </View>
          <View style={styles.contactViewsWrapper}>
            {contactViews}
          </View>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.iconWrapper} onPress={() => this.props.emailLead(data)}>
            <Icon name="ios-email" size={28} style={styles.icon} />
          </TouchableOpacity>
          <View style={styles.separator} />
          <TouchableOpacity style={styles.iconWrapper} onPress={() => this.props.callLead(data)}>
            <Icon name="ios-telephone" size={28} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    );
  },
});
