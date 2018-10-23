import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  textStyle: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  viewStyle: {
    flexDirection: 'row',
    backgroundColor: '#F8F8F8',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 18,
    paddingLeft: 10,
    paddingRight: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  }
});

onPress = () => {};

const Header = props => {
  return (
    <View style={styles.viewStyle}>
      <TouchableOpacity onPress={this.onPress}>
        <Image
          style={styles.thumbnailStyle}
          source={require('../images/icons/menu.png')}
        />
      </TouchableOpacity>
      <View style={{ flex: 1, padding: 10 }}>
        <Text style={styles.textStyle}>{props.headerText}</Text>
      </View>
      <TouchableOpacity onPress={this.onPress}>
        <Image
          style={styles.thumbnailStyle}
          source={require('../images/icons/add.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
