import React from 'react'
import {
    View, Text, StatusBar, StyleSheet, TouchableOpacity,
    FlatList,
    ScrollView,
    TouchableWithoutFeedback,
} from 'react-native'
import { Card } from 'react-native-shadow-cards'
import Icon from 'react-native-vector-icons/AntDesign'
import { Cardapi } from '../assets/Api/Cardapi'
import { VerticalList } from '../assets/Api/VerticalList'
import { Card as Cardo, Title, Paragraph } from 'react-native-paper'

Icon.loadFont()

const Home = ({ navigation }) => {

    const renderItem = ({ item }) => {
        return (
            <View style={styles.renderCard}>
                <TouchableWithoutFeedback onPress={() => { navigation.navigate("Details") }}>
                    <Cardo style={styles.cardo}>
                        <Cardo.Cover source={item.img} style={styles.cover} />
                        <Icon name="hearto" size={20} style={styles.cardoHearto} />
                        <Cardo.Content>
                            <Title style={styles.cardoTitle}>{item.title}</Title>
                            <Paragraph style={styles.cardoLoc}>{item.loc}</Paragraph>
                            <Paragraph style={styles.cardoPrice}>{item.price}</Paragraph>
                        </Cardo.Content>
                    </Cardo>
                </TouchableWithoutFeedback>
            </View>
        )
    }
    return (
        <View>
            <StatusBar barStyle="light-content" backgroundColor="#FF7674" />
            <Card style={styles.card}>
                <View>
                    <Text style={styles.title}>Revenue Booking</Text>
                </View>
                <View style={styles.headerIcons}>
                    <Icon name="search1" size={20} style={{ marginRight: 15, color: '#FF7674' }} />
                    <TouchableWithoutFeedback onPress={()=>{navigation.navigate("Notification")}}>
                    <Icon name="bells" size={20} style={{ color: '#FF7674' }} />
                    </TouchableWithoutFeedback>
                </View>
            </Card>
            <ScrollView>
                <View style={styles.btn}>
                    <View>
                        <TouchableOpacity style={styles.btn1}>
                            <Text style={styles.btnText}>Buy</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.btn2}>
                            <Text style={styles.btnText1}>Rent</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.nearyBy}>
                    <Text style={styles.nearyByText}>NearBy Properties</Text>
                    <View>
                        <FlatList
                            data={Cardapi}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>
                <View style={styles.featuredProp}>
                    <Text style={styles.featProp}>Featured Properties</Text>
                    <View>
                        {VerticalList.map((item) => {
                            return (
                                <View style={styles.renderCard1} key={item.id}>
                                    <TouchableWithoutFeedback onPress={() => { navigation.navigate("Details") }}>
                                        <Cardo style={styles.cardo}>
                                            <Cardo.Cover source={item.img} style={styles.cover1} />
                                            <Icon name="hearto" size={20} style={styles.cardoHearto1} />
                                            <Cardo.Content>
                                                <Title style={styles.cardoTitle1}>{item.title}</Title>
                                                <Paragraph style={styles.cardoLoc1}>{item.loc}</Paragraph>
                                                <Paragraph style={styles.cardoPrice1}>{item.price}</Paragraph>
                                            </Cardo.Content>
                                        </Cardo>
                                    </TouchableWithoutFeedback>
                                </View>
                            )
                        })}
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        height: 55,
        width: '100%',
        borderRadius: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        alignItems: 'center',
    },
    title: {
        fontFamily: 'Roboto-Bold',
        fontSize: 22,
        color: '#FF7674',
    },
    headerIcons: {
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center'
    },
    btn: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    btn1: {
        backgroundColor: '#FF7674',
        paddingVertical: 12,
        paddingHorizontal: 60,
        borderRadius: 10,
        marginTop: 20
    },
    btnText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '600',
        fontFamily: 'Roboto-Bold'
    },
    btn2: {
        backgroundColor: '#FFFFFF',
        borderColor: '#FF7674',
        paddingVertical: 12,
        borderWidth: 1,
        paddingHorizontal: 60,
        borderRadius: 10,
        marginTop: 20
    },
    btnText1: {
        color: '#FF7674',
        fontSize: 18,
        fontWeight: '600',
        fontFamily: 'Roboto-Bold'
    },
    nearyBy: {
        paddingHorizontal: 10,
        marginTop: 30,
    },
    nearyByText: {
        fontFamily: 'Roboto-Bold',
        fontSize: 20
    },
    renderCard: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        // height: '70%',
        maxWidth: '100%'
    },
    cover: {
        height: 150,
        resizeMode: 'cover',
        width: 190,
        resizeMode: 'cover',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        position: 'relative'
    },
    cardoHearto: {
        position: 'absolute',
        top: 20,
        right: 20,
        backgroundColor: 'rgba(0,0,0,0.4)',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 50,
        color: '#FFFFFF',
        textAlign: 'center'
    },
    cardo: {
        width: '100%',
        borderRadius: 10
    },
    cardoTitle: {
        fontSize: 16,
        fontFamily: 'Roboto-Bold',
        textTransform: 'capitalize'
    },
    cardoLoc: {
        fontFamily: 'Roboto-Regular',
        fontSize: 12
    },
    cardoPrice: {
        fontFamily: 'Roboto-Bold',
        fontSize: 16
    },
    featProp: {
        fontFamily: 'Roboto-Bold',
        fontSize: 20,
        marginHorizontal: 10,
        textTransform: 'capitalize',
        marginTop: 30
    },
    renderCard1: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        maxWidth: '100%',
        marginBottom: 10,
    },
    cardoHearto1: {
        position: 'absolute',
        top: 20,
        right: 20,
        backgroundColor: 'rgba(0,0,0,0.4)',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 50,
        color: '#FFFFFF',
        textAlign: 'center'
    },
    cardo1: {
        width: '100%',
        borderRadius: 10
    },
    cardoTitle1: {
        fontSize: 16,
        fontFamily: 'Roboto-Bold',
        textTransform: 'capitalize'
    },
    cardoLoc1: {
        fontFamily: 'Roboto-Regular',
        fontSize: 12
    },
    cardoPrice1: {
        fontFamily: 'Roboto-Bold',
        fontSize: 16
    },
})
export default Home
