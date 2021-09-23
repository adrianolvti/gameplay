import React, {useState} from 'react'; // useState Permite criar um estado para a interface
import { View, Text, Image, StatusBar} from 'react-native'; // Importa os elementos View e Text do react native

import IllustrationImg from '../../assets/illustration.png';
import { styles } from './styles';

export function SignIn(){
  //Retorna um componente
  return(
    <View style={styles.container}>
      <StatusBar 
        barStyle="light-content" //Deixa a barra de status do celular com cor branca
        backgroundColor="transparent" //tira o back ground da status bar
        translucent //faz o conteúdo ocupar toda a tela
      />
      <Image 
        source={IllustrationImg} 
        style={styles.image}
        resizeMode="stretch"
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Organize {`\n`}
          suas jogatinas {`\n`}
          facilmente
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos
        </Text>
      </View>
    </View>
  );
}