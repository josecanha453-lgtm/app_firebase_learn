import React, { Component, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { db } from './firebaseConnection';
import { collection, getDocs } from 'firebase/firestore';

class BuscarDados extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            email: '',
            altura: '',
            peso: '',
            status: '',
        };
    }

    async componentDidMount() {
        const referencia = collection(db, 'usuarios');
        const resultado = await getDocs(referencia);
        
        if( !resultado.empty){
            const primeiroDoc = resultado.docs[0].data();
            this.setState({ nome: primeiroDoc.nome });
            this.setState({ email: primeiroDoc.email });
            this.setState({ altura: primeiroDoc.altura });
            this.setState({ peso: primeiroDoc.peso });
            this.setState({ status: primeiroDoc.status });

        }
    }
   
    

    render() {
        return (
        <View style={styles.container}>
            <Text>Nome: { this.state.nome } {'\n'}</Text>
            <Text>Email: { this.state.email } {'\n'} </Text>
            <Text>Altura: { this.state.altura } {'\n'} </Text>
            <Text>Peso: { this.state.peso } {'\n'} </Text>
            <Text>Status: { this.state.status} {'\n'}</Text>
        </View>
        );
    }
}

export default BuscarDados;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//CRIAR MAIS DADOS NA COLECAO DE USUARIO E MOSTRAR NA TELA DO APP
//PESO,ALTURA, STATUS(CASADO, SOLTEIRO, DIVORCIADO, UNIAO ESTAVEL, VIUVO)