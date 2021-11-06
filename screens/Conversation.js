import React from 'react'
import { Card } from 'react-native-shadow-cards'
import {
    View, Text, StyleSheet,
    TouchableWithoutFeedback,
} from 'react-native'
import { GiftedChat, Bubble, Send } from 'react-native-gifted-chat'
import Icon from 'react-native-vector-icons/AntDesign'
import Material from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

Icon.loadFont()

const Conversation = ({ navigation }) => {

    const [messages, setMessages] = React.useState([]);

    React.useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Hello',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
        ])
    }, [])

    const onSend = React.useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])

    const renderBubble = (props) => {
        return (
            <Bubble
                {...props}
                wrapperStyle={{
                    right: {
                        backgroundColor: '#FF7674'
                    },
                    left: {
                        backgroundColor: '#B9B9B9'
                    },
                }}
                textStyle={{
                    right: {
                        color: '#FFFFFF'
                    },
                    left: {
                        color: '#fff'
                    },
                }}
            />
        )
    }
    const renderSend = (props) => {
        return (
            <Send {...props}>
                <View>
                    <Material name="send-circle" size={32} style={{
                        color: '#FF7674',
                        marginBottom: 5,
                        marginRight: 5
                    }} />
                </View>
            </Send>
        )
    }
    const scrollToBottomComponent = () => {
        return (
            <FontAwesome name="angle-double-down" size={22} color="#333" />
        )
    }

    return (
        <View style={{ flex: 1 }}>
            <Card style={{
                width: '100%',
                height: 55
            }}
            >
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    marginHorizontal: 10,
                    marginVertical: 12
                }}>
                    <View>
                        <TouchableWithoutFeedback onPress={() => { navigation.navigate("Chats") }}>
                            <Icon name="back" size={25} />
                        </TouchableWithoutFeedback>
                    </View>
                    <View>
                        <Text style={styles.headerTitle}>Russel Tailor</Text>
                    </View>
                    <View>
                        <TouchableWithoutFeedback>
                            <Icon name="down" size={20} />
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </Card>
            <GiftedChat
                messages={messages}
                onSend={messages => onSend(messages)}
                user={{
                    _id: 1,
                }}
                renderBubble={renderBubble}
                alwaysShowSend
                renderSend={renderSend}
                scrollToBottom
                scrollToBottomComponent={scrollToBottomComponent}
            />

        </View>
    )
}
const styles = StyleSheet.create({
    headerTitle: {
        fontFamily: 'Roboto-Bold',
        fontSize: 18,
        color: '#1D1D1D'
    },
})
export default Conversation
