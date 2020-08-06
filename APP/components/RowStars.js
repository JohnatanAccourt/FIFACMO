import * as React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import styles from '../screens/playerinfoMarket/styles'

export default function RowStars(props) {
  return (
    <View style={styles.playerInfo_rowStars}>
      <Ionicons
          // style={{ color: "#EBBC00"}}
          name={props.one}
          size={20}
          color={Colors.star}
      />
      <Ionicons
          // style={{ color: "#EBBC00"}}
          name={props.two}
          size={20}
          color={Colors.star}
      />
      <Ionicons
          // style={{ color: "#EBBC00"}}
          name={props.three}
          size={20}
          color={Colors.star}
      />
      <Ionicons
          // style={{ color: "#EBBC00"}}
          name={props.four}
          size={20}
          color={Colors.star}
      />
      <Ionicons
          // style={{ color: "#EBBC00"}}
          name={props.five}
          size={20}
          color={Colors.star}
      />
    </View>
  );
}