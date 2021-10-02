import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'react-native';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type Props = {
  urlImage: string;
}

export function Avatar({ urlImage }: Props) {
  const { secondary50, secondary70 } = theme.colors;

  return (
    <LinearGradient 
    style={styles.container} // Faz com que o gradiente envolva toda a tela através do container
    colors={[secondary50, secondary70]} // o gradiente percorre de uma cor a outra no array
    >
      <Image
        source={{ uri: urlImage }}
        style={styles.avatar}
      />
    </LinearGradient>
  )

}