import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tabsContainer: {
    flexDirection: 'row',
    paddingTop: 30
  },
  tabContainer: {
    flex: 1,
    paddingVertical: 15,
    borderBottomWidth: 3,
    marginBottom: 10,
    borderBottomColor: '#ccc'
  },
  tabContainerActive: {
    borderBottomColor: '#E87367'
  },
  tabTextActive: {
    color: '#E87367'
  },
  tabText: {
    color: '#ccc',
    textAlign: 'center',
    fontWeight: '500'
  },
  contentContainer: {
    flex: 1
  }
})

export default class Tabs extends Component {
  state = {
    activeTab: 1
  }

  render({ children } = this.props) {
    return (
      <View style={styles.container}>
        <View style={styles.tabsContainer}>
          {children.map(({ props: { title } }, index) => (
            <TouchableOpacity
              style={[
                styles.tabContainer,
                index === this.state.activeTab ? styles.tabContainerActive : []
              ]}
              onPress={() => this.setState({ activeTab: index })}
              key={index}
            >
              <Text
                style={[
                  styles.tabText,
                  index === this.state.activeTab ? styles.tabTextActive : []
                ]}
              >
                {title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.contentContainer}>
          {children[this.state.activeTab]}
        </View>
      </View>
    )
  }
}
