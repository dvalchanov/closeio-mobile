import {COLORS} from 'io/styles';

import {
  TasksList,
  ContactsList,
  OpportunitiesList,
  NewNote,
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
    route: PropTypes.shape({
      onRightButtonPress: PropTypes.func,
    }),
  };

  componentWillMount() {
    this.props.route.onRightButtonPress = this._newNote;
  }

  state = {
    newNoteModal: false,
  };

  render() {
    const {lead} = this.props;

    // TODO - into separate modules
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
        {this._renderNewNote()}
      </ScrollView>
    );
  }

  _newNote = () => {
    this.setState({newNoteModal: true});
  };

  _renderNewNote = () => {
    return (
      <NewNote
        isVisible={this.state.newNoteModal}
        onCreate={this._createNote}
        onCancel={this._cancel}
      />
    );
  };

  _createNote = () => {
    this._cancel();
  };

  _cancel = () => {
    this.setState({newNoteModal: false});
  };

}
