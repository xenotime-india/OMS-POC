import React, { Component } from 'react';
import { StyleSheet, FlatList, View, ActivityIndicator } from 'react-native';
import ListItem from './AccountListItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
export default class Account extends Component {
  state = {
    accounts: [
      {
        AnnualRevenue: 2000,
        name: 'abc'
      }
    ]
  };

  showAccountDetail = account => () => {
    this.props.navigation.navigate('AccountDetail', { account });
  };

  _keyExtractor = (item, index) => index.toString();
  renderItem = item => (
    <ListItem clciked={this.showAccountDetail(item.item)} item={item.item} />
  );

  render() {
    return this.state.accounts ? (
      <FlatList
        data={this.state.accounts}
        renderItem={this.renderItem}
        keyExtractor={this._keyExtractor}
      />
    ) : (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#000000" />
      </View>
    );
  }
}
