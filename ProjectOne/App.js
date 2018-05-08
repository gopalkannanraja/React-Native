import React from 'react';
import { StyleSheet, Text, View, Image, WebView } from 'react-native';
import ContactList from './ContactList';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      // counter: 0
      isLoading: false
    }
  }

  // inc = () => {
  //   this.setState({
  //     counter: this.state.counter + 1
  //   });
  // }

  // dec = () => {
  //   this.setState({
  //     counter: this.state.counter - 1
  //   });
  // }
  onLoadStart() {
    console.log('onLoadStart');
    // this.setState({isLoading: true});
  }
  onLoadEnd() {
    console.log('onLoadEnd');
    // this.setState({isLoading: false});
  }

  onError() {
    console.log('this webViewOnError');
  }

  render() {
    const {label, container, out} = styles;
    return (
      <View style={container}>
        {/* <Image
          style={{width: 50, height: 50}}
          source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
        />
        <Text style={label} onPress={this.inc}>INC</Text>
        <Text style={out}>{this.state.counter}</Text>
        <Text style={label} onPress={this.dec}>DEC</Text> */}
        {/* <ContactList /> */}
        <WebView 
        source={{uri: 'https://github.com/facebook/react-native'}}
        style={{marginTop: 20}}
        onError={this.onError}
        onLoadStart={this.onLoadStart}
        onLoadEnd={this.onLoadEnd}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  label: {
    color: 'green',
    fontSize: 26
  },
  out: {
    color: 'red',
    fontSize: 30
  }
});
