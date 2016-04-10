import LinearGradient from 'react-native-linear-gradient/index.ios';

import {connect} from 'react-redux';

import {Navigation, Page} from 'ttd/lib/Navigation';

import Onboarding from 'ttd/views/Onboarding';
import Day from 'ttd/views/Day';
import Tabs from 'ttd/views/Tabs';
import App from 'ttd/layouts/App';

import {COLORS} from 'ttd/styles';
import {CURRENT_USER_KEY} from 'ttd/constants';
import {set, get} from 'ttd/lib/Storage';
import {receiveUser} from 'ttd/modules/CurrentUser/actions';
import UserRecord from 'ttd/modules/CurrentUser/records';

const {
  PropTypes,
  Component,
  StyleSheet,
  View,
  Text,
} = React;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});

@connect(state => {
  return {
    currentUser: state.currentUser,
  };
})
export default class Routes extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    currentUser: PropTypes.instanceOf(UserRecord).isRequired,
  };

  state = {
    isLoaded: false,
  };

  async componentDidMount() {
    const currentUser = await get(CURRENT_USER_KEY);
    if (currentUser) this.props.dispatch(receiveUser(currentUser));
    this.setState({isLoaded: true});
  }

  render() {
    return (
      <LinearGradient
      colors={[COLORS.blue, COLORS.green]}
      style={styles.background}>
        {this.renderRoutes()}
      </LinearGradient>
    );
  }

  renderRoutes() {
    if (!this.state.isLoaded) return null;

    const {currentUser} = this.props;

    return currentUser && currentUser.get('id')
      ? this.renderInside()
      : this.renderOutside();
  }

  renderOutside() {
    return (
      <Onboarding />
    );
  }

  renderInside() {
    // TODO - Tabs should be a layout
    return (
      <Navigation>
        <Page name="tabs" component={Tabs} initial={true} />
        <Page name="app" component={App}>
          <Page name="day" component={Day} />
        </Page>
      </Navigation>
    );
  }
}
