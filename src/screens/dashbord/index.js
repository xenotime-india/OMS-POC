import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import TabBar from '../../components/TabBar';
import TabContant from './TabContant';
import { actions } from './../../store';

class Dashbord extends Component {
  state = {
    tabs: [
      {
        id: 1,
        title: `TO-DO's`,
        data: [
          {
            id: 1,
            title1: 'This Month Sales',
            title2: 'Avg. Sales Values',
            value1: '$1000',
            value2: '$1200',
            color: '#89B066'
          },
          {
            id: 2,
            title1: 'Deal Won this quarter',
            title2: 'Days Reamaining',
            value1: '$4000',
            value2: '23',
            color: '#4D8175'
          }
        ]
      },
      {
        id: 2,
        title: `SUMMARY`,
        data: [
          {
            id: 1,
            title1: 'This Month Sales',
            title2: 'Avg. Sales Values',
            value1: '$142,000',
            value2: '$1.20K',
            color: '#89B066'
          },
          {
            id: 2,
            title1: 'Deal Won this quarter',
            title2: 'Days Reamaining',
            value1: '$4000',
            value2: '23',
            color: '#4D8175'
          },
          {
            id: 3,
            title1: 'Deals Won YTD ',
            title2: 'YTD Quote',
            value1: '$20000',
            value2: '45%',
            color: '#63ADEC'
          },
          {
            id: 4,
            title1: 'Left to goal ',
            title2: 'To Last Year',
            value1: '$10,000',
            value2: '26%',
            color: '#CCD0D9'
          }
        ]
      },
      {
        id: 1,
        title: `ACTIVITY`,
        data: [
          {
            id: 1,
            title1: 'This Month Sales',
            title2: 'Avg. Sales Values',
            value1: '$1000',
            value2: '$1200',
            color: '#89B066'
          }
        ]
      }
    ]
  };

  componentDidMount() {
    this.props.dispatchGetPost();
  }
  renderTab = item => (
    <TabContant key={item.id} title={item.title} rows={item.data} />
  );

  render() {
    const { tabs } = this.state;
    const { user, posts } = this.props;
    return (
      <ScrollView style={{ backgroundColor: '#fff', flex: 1, padding: 20 }}>
        <View>
          <View style={styles.headerContainerStyle}>
            <Text style={styles.headerSmallTextStyle}>Welcome,</Text>
            <Text style={styles.headerTextStyle}>{user.Name}</Text>
          </View>

          <Text>{posts.length}</Text>
        </View>
      </ScrollView>
    );
  }
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
});

export default connect(
  // inject states to props
  state => ({
    posts: state.user.posts,
    user: state.user.identity
  }),
  {
    dispatchGetPost: () => actions.user.getPost()
  }
)(Dashbord);
