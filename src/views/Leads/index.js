import {List} from 'immutable';
import {connect} from 'react-redux';

import {COLORS} from 'io/styles';
import {Lead} from 'io/views';

import {NewLead, LeadsList} from 'io/components/Leads';
import {fetchLeads, receiveLeads} from 'io/modules/Leads/actions';
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
        <LeadsList leads={this.props.leads} openLead={this._openLead}/>
        {this._createNewLead()}
      </View>
    );
  }

  _newLead = () => {
    this.setState({newLeadModal: true});
  }

  _createNewLead = (data) => {
    if (!this.state.newLeadModal) return null;
    return <NewLead onCancel={this._cancel} onCreate={this._create} />
  }

  _cancel = () => {
    this.setState({newLeadModal: false});
  }

  _create = () => {
    this.setState({newLeadModal: false});
  }

  _openLead = (data) => {
    this.props.nav.push({ component: Lead, title: data.display_name });
  }
}