import {List} from 'immutable';

import LeadItem from './LeadItem';

import Loading from 'io/components/Loading';

const {
  RefreshControl,
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

  getInitialState() {
    return {
      refreshing: false,
    };
  },

  render() {
    const {leads} = this.props;

    const rows = ds.cloneWithRows(leads.toJS());

    if (!leads.size) {
      return <Loading />
    }

    return (
      <ListView
        style={styles.container}
        dataSource={rows}
        contentContainerStyle={{paddingBottom: 10}}
        renderRow={this._renderRow}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
          />
        }
      />
    );
  },

  _onRefresh() {
    this.setState({refreshing: true});

    setTimeout(() => {
      this.setState({refreshing: false});
    }, 500);
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
