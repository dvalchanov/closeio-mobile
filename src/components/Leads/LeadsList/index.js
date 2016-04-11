import {List} from 'immutable';

import LeadItem from './LeadItem';

const {
  StyleSheet,
  PropTypes,
  ListView,
  View,
  Text,
} = React;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default React.createClass({
  propTypes: {
    leads: PropTypes.instanceOf(List).isRequired,
    openLead: PropTypes.func.isRequired,
    callLead: PropTypes.func.isRequired,
    emailLead: PropTypes.func.isRequired,
  },

  render() {
    const rows = ds.cloneWithRows(this.props.leads.toJS());

    return (
      <ListView
        style={styles.container}
        dataSource={rows}
        contentContainerStyle={{paddingBottom: 10}}
        renderRow={this._renderRow}
      />
    );
  },

  _renderRow(data, _, i) {
    return (
      <LeadItem
        data={data}
        openLead={this.props.openLead}
        callLead={this.props.callLead}
        emailLead={this.props.emailLead}
      />
    );
  },
});
