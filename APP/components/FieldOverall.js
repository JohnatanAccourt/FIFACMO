import * as React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import styles from '../screens/playerinfoMarket/styles';

export default function FieldOverall(props) {
    return (
        <View style={styles.mentality_field_overall}>
            <Text style={styles.mentality_field_overall_text}>
                {props.positionInField}
            </Text>
            <Text style={styles.mentality_field_overall_text}>
                {props.overallInEachPosition}
            </Text>
        </View>
    );
}