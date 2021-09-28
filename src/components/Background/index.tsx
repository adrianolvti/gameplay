import React, { ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type Props = {
  children: ReactNode; // Usado para envolver os elementos children com LinearGradient
}

export function Background({ children }: Props) {
  const { secondary80, secondary100 } = theme.colors;

  return (
    <LinearGradient 
      style={styles.container} // Faz com que o gradiente envolva toda a tela através do container
      colors={[secondary80, secondary100]} // o gradiente percorre de uma cor a outra no array
    >
      {children}
    </LinearGradient>
  )
}