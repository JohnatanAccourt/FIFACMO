import * as React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import styles from '../screens/playerinfoMarket/styles';

export default function Traits(props) {
    var re = /\s*,\s*/;

    return (
        <View style={styles.playerInfo_mentality_data_traits}>
            {props.trait.split(re).map(function(lotsatrait, i){
                return <Text key={i} style={styles.mentality_h3_traits}>{lotsatrait}</Text>
            })}
        </View>
  );
}