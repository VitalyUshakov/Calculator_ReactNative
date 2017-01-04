/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';

import React from 'react';
let Component = require('react').Component;
import ReactNative, {
  AppRegistry,
  Text,
  View,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

export var style = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 5,
        backgroundColor: '#394A54',            
    },

    displayContainer: {
        flex: 2,
        backgroundColor: '#e6efed',
        justifyContent: 'center',
    },

    displayText: {
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'right',
        padding: 5
    },

    markingConteiner: {
        flex: 1,
        backgroundColor: '#686868',
    },

    inputContainer: {
        flex: 12,
        backgroundColor: '#91AA9D',
    },

    inputButtonNumber: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        backgroundColor: '#91AA9D',
        borderColor: '#D0D0D0'
    },

    inputButtonOperation: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
       borderWidth: 1,
        backgroundColor: '#686868',
        borderColor: '#D0D0D0'
    },

    inputConteinerClear: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        backgroundColor: '#686868',
        borderColor: '#686868'
    },

    inputButtonClear: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        backgroundColor: '#FFFF0A',
        borderColor: '#D0D0D0'
    },

    inputButtonText: {        
        fontSize: 28,
        fontWeight: 'bold',
        color: '#4E8CDD'
    },

    inputRow: {
        flex: 1,
        flexDirection: 'row'
    },
});


export default class App extends Component {
  
  constructor(props) {
        super(props);
        
        this.state = {
            previousNumber: 0,            
            operation: null,
            resultValue: 0,
            newNumber: 0
        }
  }

  render() {
    return (
      <View style={style.rootContainer}>        
        <View style={style.markingConteiner}></View>
        <View style={style.displayContainer}><Text style={style.displayText}>
          {this.state.resultValue}
          </Text>
        </View>
        <View style={style.markingConteiner}></View>        
        <View style={style.inputContainer}>
            <View style={style.inputRow}>             
                <View style={style.inputConteinerClear}>
                  <Text style={style.inputButtonText}></Text>
                </View>  
                <TouchableHighlight style={style.inputButtonClear}
                onPress={this._handleClearButton.bind(this)}
                >
                  <Text style={style.inputButtonText}>C</Text>
                </TouchableHighlight> 
            </View>
            <View style={style.inputRow}>             
                <TouchableHighlight style={style.inputButtonNumber}
                onPress={this._onInputButtonPressed.bind(this, 7)}
                >
                  <Text style={style.inputButtonText}>7</Text>
                </TouchableHighlight>  
                <TouchableHighlight style={style.inputButtonNumber}
                onPress={this._onInputButtonPressed.bind(this, 8)}
                >
                  <Text style={style.inputButtonText}>8</Text>
                </TouchableHighlight> 
                <TouchableHighlight style={style.inputButtonNumber}
                onPress={this._onInputButtonPressed.bind(this, 9)}
                >
                  <Text style={style.inputButtonText}>9</Text>
                </TouchableHighlight> 
                <TouchableHighlight style={style.inputButtonOperation}
                onPress={this._onInputButtonPressed.bind(this, "+")}
                >
                  <Text style={style.inputButtonText}>+</Text>
                </TouchableHighlight> 
            </View>
            <View style={style.inputRow}>             
                <TouchableHighlight style={style.inputButtonNumber}
                onPress={this._onInputButtonPressed.bind(this, 4)}
                >
                  <Text style={style.inputButtonText}>4</Text>
                </TouchableHighlight>  
                <TouchableHighlight style={style.inputButtonNumber}
                onPress={this._onInputButtonPressed.bind(this, 5)}
                >
                  <Text style={style.inputButtonText}>5</Text>
                </TouchableHighlight> 
                <TouchableHighlight style={style.inputButtonNumber}
                onPress={this._onInputButtonPressed.bind(this, 6)}
                >
                  <Text style={style.inputButtonText}>6</Text>
                </TouchableHighlight> 
                <TouchableHighlight style={style.inputButtonOperation}
                onPress={this._onInputButtonPressed.bind(this, "-")}
                >
                  <Text style={style.inputButtonText}>-</Text>
                </TouchableHighlight>  
            </View>
            <View style={style.inputRow}>             
                <TouchableHighlight style={style.inputButtonNumber}
                onPress={this._onInputButtonPressed.bind(this, 1)}
                >
                  <Text style={style.inputButtonText}>1</Text>
                </TouchableHighlight>  
                <TouchableHighlight style={style.inputButtonNumber}
                onPress={this._onInputButtonPressed.bind(this, 2)}
                >
                  <Text style={style.inputButtonText}>2</Text>
                </TouchableHighlight> 
                <TouchableHighlight style={style.inputButtonNumber}
                onPress={this._onInputButtonPressed.bind(this, 3)}
                >
                  <Text style={style.inputButtonText}>3</Text>
                </TouchableHighlight> 
                <TouchableHighlight style={style.inputButtonOperation}
                onPress={this._onInputButtonPressed.bind(this, "*")}
                >
                  <Text style={style.inputButtonText}>*</Text>
                </TouchableHighlight> 
            </View>
            <View style={style.inputRow}>             
                <TouchableHighlight style={style.inputButtonNumber}
                onPress={this._onInputButtonPressed.bind(this, 0)}
                >
                  <Text style={style.inputButtonText}>0</Text>
                </TouchableHighlight>  
                <TouchableHighlight style={style.inputButtonNumber}
                onPress={this._onInputButtonPressed.bind(this, ".")}
                >
                  <Text style={style.inputButtonText}>.</Text>
                </TouchableHighlight> 
                <TouchableHighlight style={style.inputButtonOperation}
                onPress={this._onInputButtonPressed.bind(this, "=")}
                >
                  <Text style={style.inputButtonText}>=</Text>
                </TouchableHighlight> 
                <TouchableHighlight style={style.inputButtonOperation}
                onPress={this._onInputButtonPressed.bind(this, "/")}
                >
                  <Text style={style.inputButtonText}>/</Text>
                </TouchableHighlight> 
            </View>
        </View>
      </View>
    );
  }


    _onInputButtonPressed(input) {
        
        switch (typeof input) {
            case 'number':
                  this._handleNumberInput(input);                
                break;
            case 'string': 
                switch (input) {
                  case '.': 
                    this._handleNumberInput(this._addDot());
                    break; 
                  
                  case '=':
                    if (this.state.operation != null){                  
                      var result = this._solveExpression(this.state.previousNumber, this.state.resultValue, this.state.operation); 
                       this.setState({
                        resultValue: result,                   
                        operation: null,
                        newNumber: 1
                      })
                    };
                    break;

                  default:
                    var prev = String(this.state.resultValue);
                    var op = this._setOperation(input);

                    this.setState({
                      previousNumber: prev,
                      operation: op,
                      resultValue: 0
                    }); 
                   break;
                }
                break;
            default:
                break;     
        }
    }

    _setOperation(input){
      var oper
      switch (input) {
        case '+': oper = '+';break;                    
        case '-': oper = '-';break;                    
        case '*': oper = '*';break;
        case '/': oper = '/';break;        
      }
      return oper;
    }

    _handleNumberInput(num) {
        
      var inputValue = String(this.state.resultValue); 
      if ((inputValue == "0") || (this.state.newNumber == 1)) {
            inputValue = String(num);
            this.setState({
              newNumber: 0
            });       
      } else {
            inputValue = String(this.state.resultValue) + String(num);
      }
      this.setState({
        resultValue: inputValue
      })
    }

    _solveExpression(firstNumber,secondNumber,operation){
      var result = 0
      switch (operation) {
        case '+': 
          result =  parseFloat(firstNumber) + parseFloat(secondNumber);
          break;
        case '-':
          result = parseFloat(firstNumber) - parseFloat(secondNumber);
          break;
        case '*':
          alert("* = ")
          result = parseFloat(firstNumber) * parseFloat(secondNumber);
          break;
         case '/':
            if (parseFloat(secondNumber) == 0.0 ) {
              alert('Error '+' Division by 0')
            } else{
              result = parseFloat(firstNumber) / parseFloat(secondNumber);
            }
            break;
          default: break;
      }
      return result;
    }

    _addDot(){
      var inputValue = String(this.state.resultValue)
      if (-1 < inputValue.indexOf('.')){
            return "";
        }else{

            if((this.state.resultValue == 0) || (this.state.newNumber == 1)) {
              inputValue = "0.";
              
            }else{
              inputValue = ".";
            }
            
        } 
        return inputValue; 
   } 

    _handleClearButton() {      
      this.setState({
        previousNumber: 0,            
        operation: null,
        resultValue: 0,
        newNumber: 0
      })
    }    

}




AppRegistry.registerComponent('App', () => App);
