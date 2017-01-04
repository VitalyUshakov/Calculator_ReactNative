
import React from 'react';
import ReactNative, { StyleSheet } from 'react-native';

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

//module.exports = style;