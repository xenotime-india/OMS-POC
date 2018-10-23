import React from 'react'
import { StyleSheet, Image, Text, TouchableOpacity, View } from 'react-native'

const styles = StyleSheet.create({
  imageContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  textTopContainerStyle: {
    alignItems: 'center',
    padding: 10
  },
  buttonTopContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  largeTextStyle: {
    fontSize: 20,
    fontWeight: '300'
  },
  smallTextStyle: {
    fontSize: 14,
    color: '#ABABAB',
    fontWeight: '300'
  },
  logoStyle: { height: 100, width: 100 },
  thumbnailStyle: { height: 50, width: 50, marginLeft: 20, marginRight: 20 }
})

const detailHeader = props => (
  <View>
    <View style={styles.imageContainerStyle}>
      <Image
        style={styles.logoStyle}
        source={props.image}
        resizeMode="contain"
      />
    </View>
    <View style={styles.textTopContainerStyle}>
      <Text style={styles.largeTextStyle}>{props.name}</Text>
      <Text style={styles.smallTextStyle}>
        {props.title ? props.title.toUpperCase() : ''}
      </Text>
    </View>

    {props.email ? (
      <View style={styles.buttonTopContainerStyle}>
        <TouchableOpacity>
          <Image
            style={styles.thumbnailStyle}
            source={require('../images/icons/mail.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.thumbnailStyle}
            source={require('../images/icons/phone.png')}
          />
        </TouchableOpacity>
      </View>
    ) : null}
  </View>
)

export default detailHeader
