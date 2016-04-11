import globalStyles from 'io/styles';
import {NavbarMapper} from 'io/components/Navbar';

import {Leads} from 'io/views';

const {
  Component,
  Navigator,
  Text,
} = React;

export default class App extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ component: Leads }}
        configureScene={this._configureScene}
        renderScene={this._renderScene}
        navigationBar={
          <Navigator.NavigationBar
            style={globalStyles.navbar}
            routeMapper={NavbarMapper}
          />
        }
      />
    );
  }

  _renderScene = (route, nav) => {
    const props = {...(route.props || {}), ...{ nav, route }};
    return React.createElement(route.component, props);
  };

  _configureScene = () => {
    return Navigator.SceneConfigs.HorizontalSwipeJump;
  };
}
