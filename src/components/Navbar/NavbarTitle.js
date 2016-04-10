import globalStyles from 'io/styles';

const {
  PropTypes,
  Text,
} = React;

export default React.createClass({
  propTypes: {
    route: PropTypes.shape({
      title: PropTypes.string,
      component: PropTypes.any,
    }),
  },

  render() {
    const title = this.props.route.title || this.props.route.component.title;

    return (
      <Text style={globalStyles.navbarTitle}>{title.toUpperCase()}</Text>
    );
  },
});
