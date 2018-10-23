import React from 'react';
import {
  createSwitchNavigator,
  createStackNavigator,
  createDrawerNavigator
} from 'react-navigation';
import { Dimensions, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { colors, fonts } from './theme';

import Dashbord from './screens/dashbord';
import Account from './screens/account';
import Contact from './screens/contact';
import TabBar from './screens/Home';
import SideMenu from './components/SideMenu';
import AccountDetail from './screens/account/AccountDetail';
import ContactDetail from './screens/contact/ContactDetail';

const AppDrawer = createDrawerNavigator(
  {
    TabBar: {
      screen: TabBar
    },
    Dashbord: {
      screen: Dashbord
    },
    Account: {
      screen: Account
    },
    Contact: {
      screen: Contact
    }
  },
  {
    initialRouteName: 'TabBar',
    contentComponent: props => <SideMenu {...props} />,
    drawerWidth: 250
  }
);

const AppDrawerNavigator = createStackNavigator({
  AppDrawer: {
    screen: AppDrawer
  },
  AccountDetail: {
    screen: AccountDetail,
    headerMode: 'float',
    navigationOptions: ({ navigation }) => ({
      headerLeft: (
        <Ionicons
          name={'ios-arrow-round-back'}
          size={35}
          onPress={() => {
            navigation.goBack();
          }}
          style={{ marginLeft: 15 }}
        />
      ),
      headerRight: <Text style={styles.headerEdit}>Edit</Text>
    })
  },
  ContactDetail: {
    screen: ContactDetail,
    headerMode: 'float',
    navigationOptions: ({ navigation }) => ({
      headerLeft: (
        <Ionicons
          name={'ios-arrow-round-back'}
          size={35}
          onPress={() => {
            navigation.goBack();
          }}
          style={{ marginLeft: 15 }}
        />
      ),
      headerRight: <Text style={styles.headerEdit}>Edit</Text>
    })
  }
});

AppDrawer.navigationOptions = ({ navigation }) => ({
  headerMode: 'none',
  headerStyle: {
    backgroundColor: colors.primary,
    borderBottomWidth: 0,
    paddingBottom: 3
  },
  headerTitleStyle: {
    fontFamily: fonts.light,
    fontSize: 20
  },
  title: this.getTitle(navigation),
  headerLeft: this._renderHamburgerMenuView(navigation),
  headerRight:
    this.getTitle(navigation) !== 'DASHBORD'
      ? this._renderAdd(navigation)
      : null
});

getTitle = navigation => {
  const { index, routes } = navigation.state.routes[0];
  const title = routes[index].routeName;
  return title
    ? title === 'Dashbord'
      ? 'TODAY'
      : title.toUpperCase()
    : 'Dashboard';
};

_renderHamburgerMenuView = navigation => {
  return (
    <TouchableOpacity onPress={() => this.openCloseDrawer(navigation)}>
      <Ionicons
        name="ios-menu"
        color="#000"
        size={24}
        style={{ paddingLeft: 16 }}
      />
    </TouchableOpacity>
  );
};

_renderAdd = navigation => {
  return (
    <Ionicons
      name={'ios-add'}
      size={35}
      onPress={() => {
        navigation.goBack();
      }}
      style={{ marginRight: 15 }}
    />
  );
};

openCloseDrawer = navigation => {
  navigation.toggleDrawer();
};

export default (DrawerNavigation = createSwitchNavigator(
  {
    Drawer: AppDrawerNavigator
  },
  {
    initialRouteName: 'Drawer',
    headerMode: 'none'
  }
));

const styles = StyleSheet.create({
  //If need title start from left the put alginSelf:'flex-start', marginLeft:-30, textAlign: 'left'
  headerTitle: {
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: '100',
    width: Dimensions.width,
    alignItems: 'center'
  },
  headerEdit: {
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: '100',
    width: Dimensions.width,
    alignItems: 'center',
    marginRight: 15
  }
});
