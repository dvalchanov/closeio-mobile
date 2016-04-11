import {COLORS} from 'io/styles';

import {
  TasksList,
  ContactsList,
  OpportunitiesList,
} from 'io/components/Lead';

const {
  StyleSheet,
  PropTypes,
  Component,
  ScrollView,
  View,
  Text,
} = React;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },

  title: {
    fontFamily: 'Lato-Regular',
    fontSize: 20,
    marginTop: 10,
    marginBottom: 5,
  },

  separator: {
    alignSelf: 'stretch',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: COLORS.GRAY,
  },
});

export default class Lead extends Component {
  static title = 'Lead';
  static rightIcon = 'note';

  static propTypes = {
    lead: PropTypes.object,
  };

  render() {
    const {lead} = this.props;

    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={{padding: 10}}>
        <Text style={styles.title}>Tasks</Text>
        <View style={styles.separator} />
        <TasksList tasks={lead.tasks} />
        <Text style={styles.title}>Contacts</Text>
        <View style={styles.separator} />
        <ContactsList contacts={lead.contacts} />
        <Text style={styles.title}>Opportunities</Text>
        <View style={styles.separator} />
        <OpportunitiesList opportunities={lead.opportunities} />
      </ScrollView>
    );
  }
}
