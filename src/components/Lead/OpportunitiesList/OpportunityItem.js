import {COLORS} from 'io/styles';

import OpportunityValue from './OpportunityValue';

const {
  StyleSheet,
  PropTypes,
  View,
  Text,
} = React;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    backgroundColor: COLORS.LIGHTER_GRAY,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: COLORS.GRAY,
    borderRadius: 5,
    padding: 10,
    flexDirection: 'row',
  },

  main: {
    flex: 1,
  },
  meta: {
    flex: 1,
  },
});

export default React.createClass({
  propTypes: {
    opportunity: PropTypes.object,
  },

  render() {
    const {opportunity} = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <OpportunityValue status={opportunity.status_type} value={opportunity.value_formatted} />
          <Text>{opportunity.contact_name || '-'}</Text>
          <Text>{opportunity.updated_by_name || '-'}</Text>
        </View>
        <View style={styles.meta}>
          <Text>{opportunity.status_label}</Text>
          <Text>{this._getConfidence(opportunity)}</Text>
        </View>
      </View>
    );
  },

  _getConfidence(opportunity) {
    let string = `${opportunity.confidence}%`
    if (opportunity.date_won) string += ` on ${opportunity.date_won}`;
    return string;
  },
});
