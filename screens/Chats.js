import React from 'react'
import { View, 
    Text, 
    StyleSheet,
     ScrollView,
     Image, 
     TouchableWithoutFeedback 
    } 
     from 'react-native'
import { Card } from 'react-native-shadow-cards'

const Chats = ({ navigation }) => {

    const People = () => {
        return (
            <View>
                <View style={{
                    flex: 1,
                    marginHorizontal: 10,
                    marginVertical: 20,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../assets/images/background.jpg')} style={styles.logo} />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{
                                fontFamily: 'Roboto-Bold',
                                fontSize: 18
                            }}>Russel Tailor</Text>
                            <Text style={{
                                fontFamily: 'Roboto-Regular',
                                fontSize: 14,
                                color: '#B7B7B7'
                            }}>Hello, How can i help you?</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={{
                            fontFamily: 'Roboto-Medium',
                            fontSize: 12,
                            color: '#B7B7B7'
                        }}>1d ago</Text>
                    </View>
                </View>
                <View style={{
                    borderWidth: 0.5,
                    borderBottomColor: '#F1F1F1',
                    marginHorizontal: 10
                }}

                />
            </View>
        )
    }

    return (
        <View style={{ flex: 1 }}>
            <Card
                style={{
                    width: '100%',
                    height: 55,
                    alignItems: 'center',
                    justifyContent: 'center',

                }}
            >
                <Text style={styles.headerTitle}>Chats</Text>
            </Card>
            <ScrollView>
                <TouchableWithoutFeedback onPress=
                    {() => {
                        navigation.navigate("Conversation")
                    }}>
                    {People()}
                </TouchableWithoutFeedback>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    headerTitle: {
        fontFamily: 'Roboto-Bold',
        fontSize: 18,
        color: '#FF7674',
        textTransform: 'capitalize'
    },
    logo: {
        width: 70,
        height: 70,
        borderRadius: 70
    }
})
export default Chats
