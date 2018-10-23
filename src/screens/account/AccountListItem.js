import React from 'react'
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
  continer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10
  },
  imageContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5
  },
  headerContainerStyle: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'column',
    marginLeft: 5
  },
  headerTextStyle: {
    fontSize: 16,
    color: '#6C6C6C',
    fontWeight: '300'
  },
  headerSmallTextStyle: {
    fontSize: 12,
    color: '#9D9D9D'
  },
  thumbnailStyle: { height: 35, width: 35 },
  triangleCorner: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 15,
    borderTopWidth: 15,
    borderRadius: 3,
    borderRightColor: 'transparent',
    transform: [{ rotate: '90deg' }]
  }
})

const listItem = props => {
  const { Name, AnnualRevenue, image } = props.item
  const color =
    AnnualRevenue == null
      ? '#CCCCCC'
      : AnnualRevenue < 50000000
        ? '#DCC54C'
        : '#BD4C48'
  return (
    <TouchableOpacity onPress={props.clciked}>
      <View style={styles.continer}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            paddingLeft: 10,
            paddingRight: 5,
            paddingTop: 20,
            paddingBottom: 20
          }}
        >
          <View style={styles.imageContainerStyle}>
            <Image
              style={styles.thumbnailStyle}
              source={image}
              resizeMode="contain"
            />
          </View>
          <View style={styles.headerContainerStyle}>
            <Text style={styles.headerTextStyle}>{Name}</Text>
            <Text style={styles.headerSmallTextStyle}>
              ANNUAL REVENUE: ${AnnualRevenue ? AnnualRevenue : 0}
            </Text>
          </View>
        </View>

        <View style={[styles.triangleCorner, { borderTopColor: `${color}` }]} />
      </View>
    </TouchableOpacity>
  )
}

export default listItem
