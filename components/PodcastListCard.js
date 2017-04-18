import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Platform, Alert} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { actionCreators } from '../actions';
import { headerActions } from '../actions/Header'
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  token: state.main.token,
  view: state.header.view
});


class PodcastListCard extends Component {

  subscribePodcast = () => {
    fetch("http://siren-server.herokuapp.com/api/podcasts/", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': this.props.token
      },
      body: JSON.stringify(this.props.podcast)
    }).then((response) => {console.warn('Response: ', response)});
  }

  render() {
    return (
      <View style={styles.mainView}>
        <View style={styles.leftView}>
          <TouchableOpacity onPress={() => this.props.dispatch(headerActions.changeView('Podcast'))}>
            <Image source={{uri: this.props.podcast.artworkUrl100}} style={styles.image}/>
          </TouchableOpacity>
        </View>
        <View style={styles.rightView}>
          <Text style={styles.title} numberOfLines={1}>{this.props.podcast.collectionName}</Text>
          <Text style={styles.artist} numberOfLines={1}>{this.props.podcast.artistName}</Text>
          <View style={styles.tagAddView}>
            <Text style={styles.tag}> {this.props.podcast.primaryGenreName} </Text>
            <Ionicons style={styles.favorite} size={30} color='grey' name="ios-add-circle-outline" onPress={ () => {this.subscribePodcast(); Alert.alert('Subscribed to ' + this.props.podcast.collectionName)}}/>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  leftView: {
    flex: .25,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  rightView: {
    paddingLeft: 3,
    flex: .75,
    justifyContent: 'space-around',
    alignItems: 'stretch',
    height: 100,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: (Platform.OS === 'ios') ? 10 : 0,
  },
  mainView: {
    height: 100,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'lightgrey',
    borderTopWidth: 2,
    borderTopColor: 'lightgrey',
  },
  image: {
    height: 80,
    width: 80,
  },
  title: {
    fontWeight: "500",
    ...Platform.select({
      ios: {
        fontSize: 16,
      },
      android: {
        fontSize: 18,
      },
    }),
  },
  artist: {
  fontWeight: "400",
  ...Platform.select({
    ios: {
      fontSize: 13,
    },
    android: {
      fontSize: 14,
    },
  }),
  marginBottom: 5,
  },
  podcast: {
    fontWeight: "600",
    ...Platform.select({
      ios: {
        fontSize: 14,
      },
      android: {
        fontSize: 16,
      },
    }),
  },
  tagAddView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 10,
  },
  tag: {
    backgroundColor: '#f4a442',
    padding: 2,
    alignSelf: 'flex-start',
  },
});

export default connect(mapStateToProps)(PodcastListCard);
