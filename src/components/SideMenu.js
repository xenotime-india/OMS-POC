import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import { connect } from 'react-redux';

import { actions, States } from './../store';

class SideMenu extends Component {
  state = {
    menus: [
      {
        id: 1,
        lable: 'Dashboard',
        route: 'Dashboard',
        isActive: true
      },
      {
        id: 2,
        route: 'Accounts',
        lable: 'Accounts',
        isActive: false
      },
      {
        id: 3,
        lable: 'Contacts',
        route: 'Contacts',
        isActive: false
      },
      {
        id: 4,
        lable: 'Opportunities',
        route: 'Opportunities',
        isActive: false
      },
      {
        id: 5,
        lable: 'Setting',
        route: 'Setting',
        isActive: false
      }
    ]
  };

  goToLoginScreen = () => {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Main' })]
    });
    this.props.navigation.dispatch(resetAction);
  };

  navigateToScreen = (route, title) => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
      params: { title: title }
    });
    this.props.navigation.dispatch(navigateAction);
  };

  _onMenuRowClick = item => {
    let menus = [...this.state.menus];
    menus = menus.map(obj => {
      if (obj.id === item.id) obj.isActive = true;
      else obj.isActive = false;
      return obj;
    });
    //Set the state
    let state = Object.assign({}, this.state);
    state.menus = menus;
    this.setState(state);

    //Load the route
    this.navigateToScreen(item.route, item.lable);
  };

  _renderMenuRow = item => {
    return (
      <View key={item.id}>
        <TouchableOpacity
          onPress={this._onMenuRowClick.bind(this, item)}
          style={styles.itemView}
        >
          <Text style={item.isActive ? styles.menuTextActive : styles.menuText}>
            {item.lable}
          </Text>
          {item.route === 'Notifications' && (
            <View style={styles.circleShapeView}>
              <Text style={styles.notificationText}>2</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    const { navigate } = this.props.navigation;
    const { user, doLogout } = this.props;

    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.profileView}>
            <Image
              style={{
                width: 150,
                height: 150,
                borderRadius: 75,
                borderColor: '#ffffff',
                borderWidth: 3
              }}
              source={{ uri: user.fullEmailPhotoUrl }}
            />
            <Text style={styles.profileViewText}>{user.Name}</Text>
            <Text style={styles.profileViewEmailText}>{user.Email}</Text>
          </View>
          {this.state.menus.length > 0 &&
            this.state.menus.map(item => {
              return this._renderMenuRow(item);
            })}
          <View>
            <TouchableOpacity onPress={doLogout} style={styles.itemView}>
              <Text style={styles.menuTextActive}>Logout</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  profileView: {
    backgroundColor: '#EC6252',
    height: 200,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  profileViewText: {
    color: '#ffffff',
    fontSize: 16,
    paddingTop: 5
  },
  profileViewEmailText: {
    color: '#ffffff',
    fontSize: 14
  },
  itemView: {
    borderBottomColor: '#eeeeee',
    padding: 10,
    flexDirection: 'row',
    borderBottomWidth: 1
  },
  menuIcon: {
    width: 20,
    height: 20
  },
  menuText: {
    color: '#6B6676',
    paddingLeft: 10
  },
  menuTextActive: {
    color: '#EC6252',
    paddingLeft: 10
  },
  circleShapeView: {
    width: 20,
    height: 20,
    marginTop: 10,
    marginRight: 5,
    borderRadius: 3,
    backgroundColor: '#EC6252',
    position: 'absolute',
    right: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  notificationText: {
    color: '#FFFFFF',
    fontSize: 12
  }
});

SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default connect(
  // inject states to props
  state => ({
    user: state.user.identity
  }),

  // inject actions to props
  dispatch => ({
    doLogout: () => dispatch(actions.user.logout())
  })
)(SideMenu);
