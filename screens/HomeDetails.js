import React from 'react'
import {
    View, Text, StatusBar,
    Image,
    StyleSheet,
    ScrollView,
    FlatList,
    TouchableWithoutFeedback,
} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import { Cardapi } from '../assets/Api/Cardapi'
import { Card } from 'react-native-shadow-cards'
import Collapsible from 'react-native-collapsible'

Icon.loadFont()

const HomeDetails = ({ navigation }) => {

    const renderItem = ({ item }) => {
        return (
            <View style={styles.manageContainer}>
                <Image source={item.img} style={styles.imageManage} />
            </View>
        )
    }

    const [collapse, setCollapse] = React.useState(true)
    const [collapse1, setCollapse1] = React.useState(true)

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#F6797B" barStyle="light-content" />
            <ScrollView>
                <View>
                    <View>
                        <Image source={require('../assets/images/nearby1.jpg')} style={styles.imageContainer} />
                    </View>
                    <View style={styles.detailsIcons}>
                        <TouchableWithoutFeedback onPress={() => { navigation.navigate("Revenue Booking") }}>
                            <Icon name="back" size={30} style={{ color: '#FFFFFF' }} />
                        </TouchableWithoutFeedback>
                    </View>
                    <View style={styles.subIcons}>
                        <Icon name="hearto" size={30} style={{ marginRight: 20, color: '#FFFFFF' }} />
                        <Icon name="sharealt" size={30} style={{ color: '#FFFFFF' }} />
                    </View>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.footerTitle}>Sky View House</Text>
                    <View style={styles.priceSection}>
                        <View>
                            <Text style={styles.loc}>Opera Street, New York</Text>
                            <Text style={styles.feet}>5000ft2</Text>
                        </View>
                        <View>
                            <Text style={styles.price}>36000$</Text>
                        </View>
                    </View>
                    <View style={styles.hotelInfo}>
                        <View style={styles.first}>
                            <Text style={styles.firstText1}>6</Text>
                            <Text style={styles.firstText2}>Bedrooms</Text>
                        </View>
                        <View style={styles.second}>
                            <Text style={styles.secondText1}>4</Text>
                            <Text style={styles.secondText2}>Bathrooms</Text>
                        </View>
                        <View style={styles.third}>
                            <Text style={styles.thirdText1}>2</Text>
                            <Text style={styles.thirdText2}>Kitchens</Text>
                        </View>
                        <View style={styles.fourth}>
                            <Text style={styles.fourthText1}>3</Text>
                            <Text style={styles.fourthText2}>Parkings</Text>
                        </View>
                    </View>
                    <View style={styles.description}>
                        <Text style={styles.descriptionText}>Description</Text>
                        <Text style={styles.descriptionPara}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </Text>
                    </View>
                    <View style={styles.photos}>
                        <Text style={styles.photosText}>Photos</Text>
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
                    <View style={styles.locTop}>
                        <Text style={styles.locTopText}>Location</Text>
                    </View>

                    <View style={{ marginHorizontal: 10 }}>
                        <Text style={{
                            fontFamily: 'Roboto-Bold',
                            fontSize: 20,
                            textTransform: 'capitalize'
                        }}>
                            Project Amenities
                        </Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View>
                                <Icon name="checkcircle" color="#fa7674" size={20} style={{
                                    marginTop: 10,
                                    marginRight: 5
                                }} />
                                <Icon name="checkcircle" color="#fa7674" size={20} style={{
                                    marginTop: 10,
                                    marginRight: 5
                                }} />
                                <Icon name="checkcircle" color="#fa7674" size={20} style={{
                                    marginTop: 10,
                                    marginRight: 5
                                }} />
                                <Icon name="checkcircle" color="#fa7674" size={20} style={{
                                    marginTop: 10,
                                    marginRight: 5
                                }} />
                                <Icon name="checkcircle" color="#fa7674" size={20} style={{
                                    marginTop: 10,
                                    marginRight: 5
                                }} />
                                <Icon name="checkcircle" color="#fa7674" size={20} style={{
                                    marginTop: 10,
                                    marginRight: 5
                                }} />
                            </View>
                            <View>
                                <Text style={styles.amentiesText}>Garden</Text>
                                <Text style={styles.amentiesText}>Jogging Track</Text>
                                <Text style={styles.amentiesText}>Power Backup</Text>
                                <Text style={styles.amentiesText}>Complete RCC Structure</Text>
                                <Text style={styles.amentiesText}>Design Doors Frames</Text>
                                <Text style={styles.amentiesText}>RVC Concealed Wiring</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{
                        marginTop: 20, marginHorizontal: 10, flexDirection: 'row',
                        justifyContent: 'space-between', alignItems: 'center'
                    }}>
                        <Text style={{
                            fontFamily: 'Roboto-Bold',
                            fontSize: 18,
                            textTransform: 'capitalize'
                        }}>Railway Station (2)</Text>
                        <View>
                            <TouchableWithoutFeedback onPress={() => { setCollapse(!collapse) }}>
                                <Icon name="down" size={20} color="#ff7674" />
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                    <Collapsible collapsed={collapse}>
                        <View style={{ marginHorizontal: 10, marginTop: 10 }}>
                            <Text style={{
                                marginTop: 10,
                                fontFamily: 'Roboto-Regular',
                                fontSize: 16,
                                textTransform: 'capitalize'
                            }}>Airpot 1</Text>
                            <Text style={{
                                marginTop: 10,
                                fontFamily: 'Roboto-Regular',
                                fontSize: 16,
                                textTransform: 'capitalize'
                            }}>Airpot 2</Text>
                        </View>
                    </Collapsible>
                    <View style={{
                        marginTop: 20, marginHorizontal: 10, flexDirection: 'row',
                        justifyContent: 'space-between', alignItems: 'center'
                    }}>
                        <Text style={{
                            fontFamily: 'Roboto-Bold',
                            fontSize: 18,
                            textTransform: 'capitalize'
                        }}>Airpot (1)</Text>
                        <View>
                            <TouchableWithoutFeedback onPress={() => { setCollapse1(!collapse1) }}>
                                <Icon name="down" size={20} color="#ff7674" />
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                    <Collapsible collapsed={collapse1}>
                        <View style={{ marginHorizontal: 10, marginTop: 10 }}>
                            <Text style={{
                                marginTop: 10,
                                fontFamily: 'Roboto-Regular',
                                fontSize: 16,
                                textTransform: 'capitalize'
                            }}>Airpot 1</Text>
                            <Text style={{
                                marginTop: 10,
                                fontFamily: 'Roboto-Regular',
                                fontSize: 16,
                                textTransform: 'capitalize'
                            }}>Airpot 2</Text>
                        </View>
                    </Collapsible>

                </View>
            </ScrollView>
            <Card style={styles.bottomContact}>
                <View style={styles.bottomContactfirst}>
                    <Image source={require('../assets/images/background.jpg')}
                        style={styles.logo}
                    />
                    <View>
                        <Text style={styles.name}>John Smith</Text>
                        <Text style={styles.owner}>Owner</Text>
                    </View>
                </View>
                <View>
                    <TouchableWithoutFeedback onPress={() => { alert('Clicked!!!') }}>
                        <Text style={styles.contact}>Contact</Text>
                    </TouchableWithoutFeedback>
                </View>
            </Card>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imageContainer: {
        width: '100%',
        height: 350,
        resizeMode: 'stretch',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        position: 'relative'
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff'
    },
    detailsIcons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        position: 'absolute',
        top: 30,
    },
    subIcons: {
        flexDirection: 'row',
        position: 'absolute',
        top: 30,
        right: 30,
    },
    footerTitle: {
        fontFamily: 'Roboto-Black',
        fontSize: 20,
        paddingHorizontal: 10,
        paddingTop: 30
    },
    priceSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10,
        marginTop: 20
    },
    loc: {
        fontFamily: 'Roboto-Regular',
        color: '#909090'
    },
    feet: {
        fontFamily: 'Roboto-Medium',
        paddingTop: 10,
        fontSize: 16
    },
    price: {
        fontFamily: 'Roboto-Bold',
        borderWidth: 1,
        borderColor: '#909090',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5
    },
    hotelInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        textAlign: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    first: {
        textAlign: 'center',
        alignItems: 'center'
    },
    second: {
        textAlign: 'center',
        alignItems: 'center'
    },
    third: {
        textAlign: 'center',
        alignItems: 'center'
    },
    fourth: {
        textAlign: 'center',
        alignItems: 'center'
    },
    firstText1: {
        fontFamily: 'Roboto-Black',
        fontSize: 22
    },
    firstText2: {
        fontFamily: 'Roboto-Bold',
        color: '#909090'
    },
    secondText1: {
        fontFamily: 'Roboto-Black',
        fontSize: 22
    },
    secondText2: {
        fontFamily: 'Roboto-Bold',
        color: '#909090'
    },
    thirdText1: {
        fontFamily: 'Roboto-Black',
        fontSize: 22
    },
    thirdText2: {
        fontFamily: 'Roboto-Bold',
        color: '#909090'
    },
    fourthText1: {
        fontFamily: 'Roboto-Black',
        fontSize: 22
    },
    fourthText2: {
        fontFamily: 'Roboto-Bold',
        color: '#909090'
    },
    description: {
        marginHorizontal: 10,
        marginTop: 20
    },
    descriptionText: {
        fontFamily: 'Roboto-Bold',
        fontSize: 22,
        textTransform: 'capitalize'
    },
    descriptionPara: {
        fontFamily: 'Roboto-Regular',
        textAlign: 'justify',
        paddingTop: 10
    },
    photos: {
        marginHorizontal: 10,
        marginTop: 20
    },
    photosText: {
        fontFamily: 'Roboto-Bold',
        fontSize: 22,
        textTransform: 'capitalize',
    },
    photosContainer: {
        marginHorizontal: 10,
        marginTop: 30
    },
    manageContainer: {
        marginHorizontal: 10,
        marginTop: 30
    },
    imageManage: {
        width: 150,
        height: 200,
        borderRadius: 20,
        resizeMode: 'stretch'
    },
    locTop: {
        marginTop: 20,
        marginHorizontal: 10
    },
    locTopText: {
        fontFamily: 'Roboto-Bold',
        fontSize: 22,
        marginBottom: 250
    },
    bottomContact: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    bottomContactfirst: {
        flexDirection: 'row'
    },
    logo: {
        width: 40,
        height: 40,
        borderRadius: 40
    },
    name: {
        fontFamily: 'Roboto-Bold',
        fontSize: 14,
        paddingLeft: 10,
        textTransform: 'capitalize'
    },
    owner: {
        fontFamily: 'Roboto-Medium',
        paddingLeft: 10,
        fontSize: 12,
        color: '#909090',
        textTransform: 'capitalize'
    },
    contact: {
        backgroundColor: '#FF7674',
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 10,
        fontSize: 14,
        textAlign: 'center',
        color: '#FFFFFF'
    },
    amentiesText: {
        marginTop: 10,
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        textTransform: 'capitalize',
    },
})
export default HomeDetails
