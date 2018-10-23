import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 26,
    color: '#FFF',
    fontWeight: '500',
    marginTop: 3
  },
  smallTextStyle: {
    fontSize: 12,
    color: '#FFF'
  },
  containerStyle: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 1,
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: 'row'
  }
})

const dashBoardRow = props => (
  <View style={[styles.containerStyle, { backgroundColor: props.color }]}>
    <View style={{ flex: 1 }}>
      <Text style={styles.smallTextStyle}>{props.title1}</Text>
      <Text style={styles.textStyle}>{props.value1}</Text>
    </View>
    <View style={{ alignItems: 'flex-end' }}>
      <Text style={styles.smallTextStyle}>{props.title2}</Text>
      <Text style={styles.textStyle}>{props.value2}</Text>
    </View>
  </View>
)

export default dashBoardRow
