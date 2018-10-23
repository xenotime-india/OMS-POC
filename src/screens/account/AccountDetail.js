import React, { Component } from 'react'
import { StyleSheet, ScrollView, View, Text, Dimensions } from 'react-native'
import DetailHeader from '../../components/DetailHeader'
import DetailRow from '../../components/DetailRow'
import TabBar from '../../components/TabBar'

export default class AccountDetail extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: (
      <Text style={styles.headerTitle}>
        {navigation.state.params.account.name}
      </Text>
    )
  })
  renderRows = ({ label, apiKey }) => {
    const key = apiKey.split('.')
    var value = ''
    if (key.length > 1) {
      const innerObject = this.props.navigation.state.params.account[key[0]]
      value = innerObject[key[1]]
    } else {
      value = this.props.navigation.state.params.account[key[0]]
    }

    return <DetailRow key={label} title={label} value={value} />
  }

  state = {
    shownData: [
      {
        label: 'Account Owner',
        apiKey: 'Owner.Name'
      },
      {
        label: 'Account Name',
        apiKey: 'Name'
      },
      {
        label: 'Parent Account',
        apiKey: 'Parent'
      },
      {
        label: 'Account Number',
        apiKey: 'AccountNumber'
      },
      {
        label: 'Account Site',
        apiKey: 'Site'
      }
    ]
  }

  render() {
    const {
      Id,
      Name,
      AccountNumber,
      Owner,
      Site,
      Parent,
      Phone,
      AnnualRevenue,
      ShippingAddress,
      BillingAddress,
      Industry,
      image
    } = this.props.navigation.state.params.account

    return (
      <ScrollView style={{ backgroundColor: '#fff', flex: 1, padding: 10 }}>
        <View style={{ marginBottom: 10 }}>
          <DetailHeader name={Name} title={Industry} image={image} />
          <TabBar>
            <View title="FEED" style={styles.containerStyle} />
            <View title="DETAILS" style={{ paddingTop: 20 }}>
              {this.state.shownData &&
                this.state.shownData.map(item => this.renderRows(item))}
            </View>
            <View title="RELETED" style={styles.containerStyle} />
          </TabBar>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  imageContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  containerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  headerTitle: {
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: '100',
    width: Dimensions.width,
    alignItems: 'center'
  }
})
