import React, { Component } from 'react'
import { StyleSheet, ScrollView, View, Text, Dimensions } from 'react-native'
import DetailHeader from '../../components/DetailHeader'
import DetailRow from '../../components/DetailRow'

export default class ContactDetail extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: (
      <Text style={styles.headerTitle}>
        {navigation.state.params.contact.name}
      </Text>
    )
  })

  renderRows = ({ label, apiKey }) => {
    const key = apiKey.split('.')
    var value = ''
    if (key.length > 1) {
      const innerObject = this.props.navigation.state.params.contact[key[0]]
      value = innerObject[key[1]]
    } else {
      value = this.props.navigation.state.params.contact[key[0]]
    }

    return <DetailRow key={label} title={label} value={value} />
  }

  state = {
    shownData: [
      {
        label: 'Title',
        apiKey: 'Title'
      },
      {
        label: 'Phone',
        apiKey: 'Phone'
      },
      {
        label: 'Email',
        apiKey: 'Email'
      },
      {
        label: 'Account Name',
        apiKey: 'Account.Name'
      },
      {
        label: 'Account Site',
        apiKey: 'Account.Site'
      }
    ]
  }

  render() {
    const {
      Id,
      Name,
      Email,
      Phone,
      image
    } = this.props.navigation.state.params.contact
    return (
      <ScrollView style={{ backgroundColor: '#fff', flex: 1 }}>
        <View style={{ marginBottom: 10 }}>
          <DetailHeader
            name={Name}
            title={
              this.props.navigation.state.params.contact.Account
                ? this.props.navigation.state.params.contact.Account.Name
                : ''
            }
            email={Email}
            phone={Phone}
            image={image}
          />
          {this.state.shownData &&
            this.state.shownData.map(tem => this.renderRows(tem))}
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
  headerTitle: {
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: '100',
    width: Dimensions.width,
    alignItems: 'center'
  }
})
