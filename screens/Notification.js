import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback, ScrollView } from 'react-native'
import { Card } from 'react-native-shadow-cards'
import Icon from 'react-native-vector-icons/AntDesign'


Icon.loadFont()

const Notification = ({navigation}) => {
    return (
        <View>
            <Card
                style={styles.header}
            >
                <View>
                   <TouchableWithoutFeedback onPress={() => {navigation.navigate("Revenue Booking")}}>
                   <Icon name="back" size={30}/>
                   </TouchableWithoutFeedback>
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={styles.headerTitle}>Notifications</Text>
                </View>
            </Card>
            <ScrollView>
            <View>
                <Card
                style={styles.notify}
                >
                    <View>
                        <Icon name="bells" size={30} color="#fff" style={styles.iconDesign}/>
                    </View>
                    <View>
                        <Text style={styles.notifyTitle}>Your listening approved!</Text>
                        <Text  style={styles.notifyMsg}>Congratulations... Your listening has 
                        been approved.</Text>
                    </View>
                </Card>
                <Card
                style={styles.notify}
                >
                    <View>
                        <Icon name="bells" size={30} color="#fff" style={styles.iconDesign}/>
                    </View>
                    <View>
                        <Text style={styles.notifyTitle}>Your listening rejected!</Text>
                        <Text  style={styles.notifyMsg}>We are Sorry... Your listening are 
                        rejected. You need to do something.</Text>
                    </View>
                </Card>
            </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: 55,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    headerTitle: {
        fontFamily: 'Roboto-Bold',
        fontSize: 22,
        textAlign: 'center',
        color: '#0F0F0F',
        textTransform: 'capitalize',
    },
    notify:{
        width: '90%',
        height: 'auto',
        marginTop: 20,
        marginHorizontal: 18,
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 10,
        paddingTop: 10
    },
    iconDesign:{
        backgroundColor: '#FF7575',
        width: 60,
        height: 60,
        borderRadius: 60,
        textAlign: 'center',
        textAlignVertical: 'center',
        marginHorizontal: 10,
        marginVertical: 20
    },
    notifyTitle:{
        fontFamily: 'Roboto-Bold',
        fontSize: 16,
        color: '#1F1F1F'
    },
    notifyMsg:{
        fontFamily: 'Roboto-Regular',
        fontSize: 12,
        paddingTop: 5,
        color: '#A3A3A3',
        paddingRight: 120
    }

})
export default Notification
