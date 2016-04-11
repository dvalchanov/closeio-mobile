import {List} from 'immutable';
import {connect} from 'react-redux';
import Communications from 'react-native-communications';

import {COLORS} from 'io/styles';
import {Lead} from 'io/views';

import {NewLead, LeadsList} from 'io/components/Leads';
import {fetchLeads, receiveLeads, receiveLead} from 'io/modules/Leads/actions';
import {leadsSelector} from 'io/modules/Leads/selectors';

const {
  Component,
  PropTypes,
  StyleSheet,
  View,
  Text,
} = React;

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    flex: 1,
    backgroundColor: COLORS.LIGHTEST_GRAY,
  },
});

@connect(leadsSelector)
export default class Leads extends Component {
  static title = 'Leads';
  static rightIcon = 'add';

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    leads: PropTypes.instanceOf(List).isRequired,
    route: PropTypes.shape({
      onRightButtonPress: PropTypes.func,
    }),
    nav: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }),
  };

  state = {
    newLeadModal: false,
  };

  componentWillMount() {
    this.props.route.onRightButtonPress = this._newLead;
  }

  async componentDidMount() {
    const leads = await fetchLeads();
    this.props.dispatch(receiveLeads(leads))
  }

  render() {
    return (
      <View style={styles.container}>
        <LeadsList
          leads={this.props.leads}
          openLead={this._openLead}
          callLead={this._callLead}
          emailLead={this._emailLead}
        />
        {this._createNewLead()}
      </View>
    );
  }

  _newLead = () => {
    this.setState({newLeadModal: true});
  };

  _createNewLead = (data) => {
    if (!this.state.newLeadModal) return null;
    return <NewLead onCancel={this._cancel} onCreate={this._create} />
  };

  _cancel = () => {
    this.setState({newLeadModal: false});
  };

  _create = (data) => {
    this.setState({newLeadModal: false});

    this.props.dispatch(receiveLead(data))
  };

  _openLead = (lead) => {
    this.props.nav.push({ component: Lead, title: lead.display_name, props: {lead}});
  };

  _callLead = (data) => {
    if (data.contacts.length && data.contacts[0].phones.length) {
      const number = data.contacts[0].phones[0].phone;
      alert(`You are about to call ${number}`);
      //Communications.phonecall(number, true);
    } else {
      alert('Unfortunately, there is no number for this lead.');
    }
  };

  _emailLead = (data) => {
    //Communications.email(['cerrutito@gmail.com'], null, null, 'Subject', 'Body');
    if (data.contacts.length && data.contacts[0].emails.length) {
      const email = data.contacts[0].emails[0].email;
      alert(`You are about to email ${email}`);
      //const email = data.contacts[0].emails[0].email;
      //Communications.email([email], null, null, 'Subject', 'Body');
    } else {
      alert('Unfortunately, there is no email for this lead.');
    }
  };
}
