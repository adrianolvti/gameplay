// Estrutura da interface com componetes de renderização
import React from 'react';
import { SignIn } from './src/screens/SignIn'; // Importa os elementos View e Text do react native

export default function App(){
  //Precisa retornar algum componente
  return(
    <SignIn /> // Retorna a function do Sign da index
  );
}