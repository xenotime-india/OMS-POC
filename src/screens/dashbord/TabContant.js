import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Row from '../../components/DashBoardRow'

export default props => {
  const { title, rows } = props
  const renderRow = item => (
    <Row
      key={item.id}
      color={item.color}
      title1={item.title1}
      title2={item.title2}
      value1={item.value1}
      value2={item.value2}
    />
  )

  return (
    <View title={title} style={styles.headerContainerStyle}>
      {rows.map(item => renderRow(item))}
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainerStyle: {
    justifyContent: 'center',
    flexDirection: 'column'
  },
  headerTextStyle: {
    fontSize: 34,
    color: '#56544e',
    marginTop: 5,
    fontWeight: '500'
  },
  headerSmallTextStyle: {
    fontSize: 22,
    color: '#56544e',
    marginTop: 15
  }
})
