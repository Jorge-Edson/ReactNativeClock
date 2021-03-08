import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date() };
  }

  relogio() {
    this.setState({
      date: new Date()
    });
  }

  componentDidMount() {
    this.TimerID = setInterval(() => this.relogio(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.TimerID);
  }

  render() {
    return ( 
      <View style={styles.container}>
        <Text style={styles.texto}>{this.state.date.toLocaleTimeString()}</Text>
        <Text style={styles.subtexto}>Hello World!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: 'black'
  },

  texto: {
    fontSize: 60,
    color: '#ffffff',
    width: '100%',
    marginLeft: '35%'
  },

  subtexto: {
    fontSize: 40,
    color: '#fff000',
    width: '100%',
    marginLeft: '37%'
  }
});