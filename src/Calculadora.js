import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { create, all } from 'mathjs';

const math = create(all);

const Calculadora = () => {
    const [resultado, setResultado] = useState('');

    const handleButtonPress = (value) => {
      setResultado(resultado + value);
    };

    const calcularResultado = () => {
        try {
          const evaluatedResult = math.evaluate(resultado);
          setResultado(evaluatedResult.toString());
        } catch (error) {
          setResultado('Error');
        }
      };
    
      const limpiarResultado = () => {
        setResultado('');
      };
      return (
        <View style={styles.container}>
          <View style={styles.resultContainer}>
            <Text style={styles.resultText}>{resultado}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <View style={styles.row}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleButtonPress('7')}
              >
                <Text style={styles.buttonText}>7</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleButtonPress('8')}
              >
                <Text style={styles.buttonText}>8</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleButtonPress('9')}
              >
                <Text style={styles.buttonText}>9</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleButtonPress('4')}
              >
                <Text style={styles.buttonText}>4</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleButtonPress('5')}
              >
                <Text style={styles.buttonText}>5</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleButtonPress('6')}
              >
                <Text style={styles.buttonText}>6</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleButtonPress('1')}
              >
                <Text style={styles.buttonText}>1</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleButtonPress('2')}
              >
                <Text style={styles.buttonText}>2</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleButtonPress('3')}
              >
                <Text style={styles.buttonText}>3</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleButtonPress('0')}
              >
                <Text style={styles.buttonText}>0</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleButtonPress('.')}
              >
                <Text style={styles.buttonText}>.</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => calcularResultado('=')}
              >
                <Text style={styles.buttonText}>=</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleButtonPress('+')}
              >
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleButtonPress('-')}
              >
                <Text style={styles.buttonText}>-</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleButtonPress('*')}
              >
                <Text style={styles.buttonText}>*</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleButtonPress('/')}
              >
                <Text style={styles.buttonText}>/</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => limpiarResultado('C')}
              >
                <Text style={styles.buttonText}>C</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    };
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#9E54E4', 
        },
        resultContainer: {
          marginBottom: 28,
        },
        resultText: {
          fontSize: 40,
          fontWeight: 'bold',
          color: 'white',
        },
        buttonContainer: {
          width: 300,
        },
        row: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 10,
        },
        button: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#6B00FC', 
          padding: 10,
          borderRadius: 8,
          margin: 4,
        },
        buttonText: {
          fontSize: 30,
          fontWeight: 'bold',
          color: '#fff',
        },
      });
      
      export default Calculadora;
      

    