import React, { Component } from 'react';
import { View, AsyncStorage, Linking, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { Font } from 'expo';

import { actions, States } from './store';
import DrawerNavigation from './Router';

class Main extends Component {
  state = { isStoreLoading: true };

  componentWillMount() {}

  async componentDidMount() {
    await Font.loadAsync({
      'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
      'Lato-Hairline': require('./assets/fonts/Lato-Hairline.ttf'),
      'Lato-Light': require('./assets/fonts/Lato-Light.ttf'),
      'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf')
    });
    this.setState({ isStoreLoading: false });
  }

  _doLogin = async session => {
    this.props.doLogin(session);
    this.setState({ isStoreLoading: false });
  };

  render() {
    const { doLogout, doLogin, loggedIn, user, loading } = this.props;
    if (loading || this.state.isStoreLoading) {
      return (
        <View
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <ActivityIndicator size="large" />
        </View>
      );
    }
    return <DrawerNavigation />;
  }
}

export default connect(
  // inject states to props
  state => ({
    loggedIn: state.user.loggedIn,
    user: state.user.identity,
    loading: state.app.loading
  }),

  // inject actions to props
  dispatch => ({
    doLogout: () => dispatch(actions.user.logout()),
    doLogin: session => dispatch(actions.user.login(session))
  })
)(Main);
