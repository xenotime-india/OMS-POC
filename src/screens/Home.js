import React from 'react';
import { Image } from 'react-native';
import {
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';
import Account from '../screens/account';
import Contact from '../screens/contact';
import Dashbord from '../screens/dashbord';
import { colors, fonts } from '../theme';

export default createBottomTabNavigator(
  {
    Dashbord: Dashbord,
    Accounts: createStackNavigator({
      Accounts: {
        screen: Account,
        headerMode: 'none',
        header: null,
        navigationOptions: {
          header: null
        }
      }
    }),
    Contacts: Contact
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let icon;
        if (routeName === 'Dashbord') {
          icon = focused
            ? require('../images/icons/dashboard/active.png')
            : require('../images/icons/dashboard/dashboard.png');
        } else if (routeName === 'Accounts') {
          icon = focused
            ? require('../images/icons/accounts/active.png')
            : require('../images/icons/accounts/accounts.png');
        } else if (routeName === 'Contacts') {
          icon = focused
            ? require('../images/icons/contacts/active.png')
            : require('../images/icons/contacts/contacts.png');
        } else if (routeName === 'Opportunities') {
          icon = focused
            ? require('../images/icons/opportunities/active.png')
            : require('../images/icons/opportunities/opportunities.png');
        }

        return (
          <Image
            source={icon}
            resizeMode={Image.resizeMode.contain}
            style={{ height: 25, width: 25 }}
          />
        );
      }
    }),
    tabBarOptions: {
      showLabel: true,
      activeTintColor: colors.primary,
      inactiveTintColor: colors.secondary,
      indicatorStyle: { backgroundColor: colors.secondary },
      labelStyle: {
        fontFamily: fonts.base,
        fontSize: 12
      },
      style: {
        backgroundColor: 'white',
        borderTopWidth: 0,
        paddingBottom: 3
      }
    }
  }
);
