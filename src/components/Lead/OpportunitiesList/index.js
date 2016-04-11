import OpportunityItem from './OpportunityItem';

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
    opportunities: PropTypes.array,
  },

  render() {
    const {opportunities} = this.props;

    const opportunitiesViews = opportunities.map((opportunity, i) => {
      return <OpportunityItem key={i} opportunity={opportunity} />
    });

    return (
      <View style={styles.container}>
        {opportunitiesViews.length ? opportunitiesViews : this._renderEmpty()}
      </View>
    );
  },

  _renderEmpty() {
    return <Text style={styles.text}>No opportunities</Text>;
  },
});
