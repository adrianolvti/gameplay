// Estrutura da interface com componetes de renderização
import React from 'react';
import { StatusBar } from 'react-native';
import {Inter_400Regular, Inter_500Medium} from '@expo-google-fonts/inter';
import {Rajdhani_500Medium, Rajdhani_700Bold} from '@expo-google-fonts/rajdhani';
import AppLoadding from 'expo-app-loading';
import { useFonts } from 'expo-font'; // Importa a biblioteca de fonts do espo e a função useFonts para carregar as fontes no dispositvo

import { Home } from './src/screens/Home'; // Importa os elementos View e Text do react native
import { Background } from './src/components/Background';

export default function App(){
  const [fontsLoaded] = useFonts ({ // Vetor para carregar as fontes
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });

  if(!fontsLoaded){ // Enquanto as fontes não carregarem vai ficar na tela de splash
    return <AppLoadding /> // Esse componente segura a tela de splash
  }
  
  return( //Precisa retornar algum componente. O retorno pode ser feito de um único compontente, como temos mais que um, se fáz necessário o uso do fragment '<></>' para envolver todos os elementos
    <Background>
      <StatusBar 
        barStyle="light-content" //Deixa a barra de status do celular com cor branca
        backgroundColor="transparent" //tira o back ground da status bar
        translucent //faz o conteúdo ocupar toda a tela
      />
      <Home />
    </Background>
  );
}