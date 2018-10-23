import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import ListItem from './ContactListItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default class Contact extends Component {
  state = {
    contacts: [
      {
        name: 'xyx'
      }
    ]
  };

  showContactDetail = contact => () => {
    this.props.navigation.navigate('ContactDetail', {
      contact
    });
  };

  _keyExtractor = (item, index) => item.Id.toString();

  renderItem = item => (
    <ListItem
      key={item.item.id}
      clciked={this.showContactDetail(item.item)}
      item={item.item}
    />
  );

  render() {
    return this.state.contacts ? (
      <FlatList
        data={this.state.contacts}
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
