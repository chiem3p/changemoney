//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

// create a component
class MyClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NumberInput:'',
      Current: '',
      Conversion: '',
      ChangeMoney: true,
    };
  }
  onChange = (data,NumberInput) => {
    this.setState({
      NumberInput: data,
    });
    const Unit = 22000;
    if (this.state.ChangeMoney) {
      const result = data / Unit;
      this.setState({Conversion: result.toFixed(5)});
    } else {
      const result = data * Unit;
      this.setState({Conversion: result});
    }
  };
  onPressVNtoUS = () => {
    const result = (this.state.NumberInput / 22000).toFixed(3);
    this.setState({Conversion: result, ChangeMoney: true});
  };
  onPressUstoVn = () => {
    const result = this.state.NumberInput * 22000;
    this.setState({Conversion: result, ChangeMoney: false});
  };
  render() {
    const {Current, Conversion,NumberInput} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.Header}>
          <Text style={{fontSize: 60, fontWeight: 'bold'}}>Current</Text>
        </View>
        <View style={styles.Body}>
          <TextInput
            style={styles.inP}
            placeholder="Please input"
            selectionColor="red"
            keyboardType="numeric"
            onChangeText={data => this.onChange(data, NumberInput)}
          />
        </View>
        <View style={styles.Footer}>
          <TouchableOpacity
            style={[
              styles.VNtoUS,
              this.state.ChangeMoney ? {backgroundColor: 'red'} : null,
            ]}
            onPress={this.onPressVNtoUS}>
            <Text style={{fontSize: 30, color: 'red'}}>🇻🇳 -> 🇱🇷</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.UStoVn,
              this.state.ChangeMoney ? null : {backgroundColor: 'red'},
            ]}
            onPress={this.onPressUstoVn}>
            <Text style={{fontSize: 30, color: 'red'}}>🇱🇷 -> 🇻🇳</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.Bottom}>
          <Text style={{fontSize: 30}}>
            Current :{' '}
            <Text style={{fontSize: 30, color: 'green'}}> {NumberInput}</Text>
          </Text>
          <Text></Text>
          <Text style={{fontSize: 30}}>
            Conversion :{' '}
            <Text style={{fontSize: 30, color: 'green'}}>{Conversion}</Text>
          </Text>
        </View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'white',
  },
  Header: {
    flex: 0.15,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Body: {
    flex: 0.1,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inP: {
    width: 340,
    height: 55,
    borderWidth: 3,
    borderColor: 'white',
    fontSize: 20,
    paddingLeft: 10,
  },
  Footer: {
    flex: 0.3,
    backgroundColor: 'pink',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  VNtoUS: {
    width: 270,
    height: 55,
    backgroundColor: 'white',
    borderRadius: 30,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  UStoVn: {
    width: 270,
    height: 55,
    backgroundColor: 'white',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Bottom: {
    flex: 0.45,
    paddingLeft: 10,

    backgroundColor: 'pink',
  },
});

//make this component available to the app
export default MyClass;
