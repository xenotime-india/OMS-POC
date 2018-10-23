import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const styles = StyleSheet.create({
  containerStyle: {
    borderWidth: 1,
    borderColor: '#FAFAFA',
    borderBottomWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    elevation: 1,
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 10
  },
  headerContainerStyle: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'column',
    paddingBottom: 5
  },
  headerTextStyle: {
    fontSize: 18,
    color: '#000000',
    fontWeight: '300'
  },
  headerSmallTextStyle: {
    fontSize: 11,
    color: '#949494',
    fontWeight: '300'
  }
})

const detailRow = props => (
  <View style={styles.containerStyle}>
    <View style={styles.headerContainerStyle}>
      <Text style={styles.headerSmallTextStyle}>{props.title}</Text>
      <Text style={styles.headerTextStyle}>{props.value}</Text>
    </View>
  </View>
)

export default detailRow
