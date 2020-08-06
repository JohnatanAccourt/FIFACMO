import * as React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import styles from '../screens/playerinfoMarket/styles';

export default function MentalityOver(props) {
    return (
        <View style={styles.playerInfo_mentality_data}>
            <Text style={styles.mentality_h3}>{props.name}</Text>
            
            <Text style={
                props.over < 50 ? styles.mentality_h3_over00:
                props.over < 60 ? styles.mentality_h3_over60:
                props.over < 70 ? styles.mentality_h3_over70:
                props.over < 80 ? styles.mentality_h3_over80:
                props.over < 90 ? styles.mentality_h3_over90:
                props.over < 95 ? styles.mentality_h3_over99: styles.mentality_h3_over99
            }
            >{props.over}</Text>
            
        </View>
  );
}