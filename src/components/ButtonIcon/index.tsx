import React from 'react';
import {RectButton, RectButtonProps} from 'react-native-gesture-handler';
import { Text, Image, View} from 'react-native';

import DiscordImg from '../../assets/discord.png';
import { styles } from './styles';

// Cria um componete com propriedade de title e com totdas a propriedades de ToutchableOpacity
type Props = RectButtonProps & {
  title: string; // title?: com o ponto de interrogação é porque a propriedade não é obrigatória
}

export function ButtonIcon({ title, ...rest } : Props) {
  return (
    <RectButton 
      style={styles.container}
      {...rest} //Pega todo o resto de propriedade sem precisar passar uma a uma
    >
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon} />
      </View>

      <Text style={styles.title}>
        { title }
      </Text>
    </RectButton>
  );
}