import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import { Card } from 'react-native-shadow-cards'
import Icon from 'react-native-vector-icons/AntDesign'

Icon.loadFont()

const Activity = () => {
    return (
        <View style={{ flex: 1 }}>
            <Card
                style={{
                    width: '100%',
                    height: 55,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Text style={styles.headerTitle}>Shortlisted</Text>
            </Card>
            <View style={styles.msgDisplayManage}>
                <Icon name="hearto" size={40} color="#9F9F9F" />
                <Text style={styles.msgDisplay}>No item in shortlist</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    headerTitle: {
        fontFamily: 'Roboto-Bold',
        color: '#E78188',
        fontSize: 18,
        textTransform: 'capitalize'
    },
    msgDisplayManage: {
        // alignItems: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    msgDisplay: {
        color: '#9F9F9F',
        fontFamily: 'Roboto-Medium',
        fontSize: 18,
        marginTop: 10
    }
})
export default Activity
