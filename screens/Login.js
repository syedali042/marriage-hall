import React from 'react';
import {
    View, Text, ImageBackground, Image, StyleSheet,
    FlatList, Modal, TouchableOpacity, TextInput, TouchableWithoutFeedback
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Evil from 'react-native-vector-icons/EvilIcons';
import { COLORS, SIZES, FONTS, icons, } from "../contants"

Icon.loadFont();
Evil.loadFont();

const Login = ({ navigation }) => {

    const [areas, setAreas] = React.useState([])
    const [selectedArea, setSelectedArea] = React.useState(null)
    const [modalVisible, setModalVisible] = React.useState(false)

    React.useEffect(() => {
        fetch("https://restcountries.eu/rest/v2/all")
            .then(response => response.json())
            .then(data => {
                let areaData = data.map(item => {
                    return {
                        code: item.alpha2Code,
                        name: item.name,
                        callingCode: `+${item.callingCodes[0]}`,
                        flag: `https://www.countryflags.io/${item.alpha2Code}/flat/64.png`
                    }
                })

                setAreas(areaData)

                if (areaData.length > 0) {
                    let defaultData = areaData.filter(a => a.code == "US")

                    if (defaultData.length > 0) {
                        setSelectedArea(defaultData[0])
                    }
                }
            })
    }, [])

    function renderForm() {
        return (
            <View
                style={{
                    marginTop: SIZES.padding * 3,
                    marginHorizontal: SIZES.padding * 3,
                }}
            >
                {/* Phone Number */}
                <View style={{ marginTop: SIZES.padding * 2 }}>
                    {/* <Text style={{ color: COLORS.lightGreen, ...FONTS.body3 }}>Phone Number</Text> */}

                    <View style={{ flexDirection: 'row' }}>
                        {/* Country Code */}
                        <TouchableOpacity
                            style={{
                                width: 100,
                                height: 55,
                                // marginHorizontal: 5,
                                borderBottomWidth: 1,
                                borderBottomLeftRadius: 20,
                                borderTopLeftRadius: 20,
                                backgroundColor: '#78746F',
                                flexDirection: 'row',
                            }}
                            onPress={() => setModalVisible(true)}
                        >
                            {/* <View style={{ justifyContent: 'center' }}>
                                <Image
                                    source={icons.down}
                                    style={{
                                        width: 10,
                                        height: 10,
                                        tintColor: COLORS.white
                                    }}
                                />
                            </View> */}
                            <View style={{ justifyContent: 'center', marginLeft: 12 }}>
                                <Image
                                    source={{ uri: selectedArea?.flag }}
                                    resizeMode="contain"
                                    style={{
                                        width: 30,
                                        height: 30
                                    }}
                                />
                            </View>

                            <View style={{ justifyContent: 'center', marginLeft: 5 }}>
                                <Text style={{ color: COLORS.white, fontFamily: 'Roboto-Medium' }}>{selectedArea?.callingCode}</Text>
                            </View>
                        </TouchableOpacity>
                        {/* Phone Number */}
                        <TextInput
                            style={{
                                fontFamily: 'Roboto-Medium',
                                flex: 1,
                                // marginVertical: SIZES.padding,
                                backgroundColor: '#78746F',
                                borderBottomWidth: 1,
                                borderTopRightRadius: 20,
                                borderBottomRightRadius: 20,
                                height: 55,
                                color: '#FFFFFF',
                            }}
                            placeholder="Phone Number"
                            keyboardType={'number-pad'}
                            placeholderTextColor={COLORS.white}
                            selectionColor={COLORS.white}
                        />
                    </View>
                </View>
            </View>
        )
    }
    function renderAreaCodesModal() {

        const renderItem = ({ item }) => {
            return (
                <View>
                    <TouchableOpacity
                    style={{ padding: SIZES.padding, flexDirection: 'row' }}
                    onPress={() => {
                        setSelectedArea(item)
                        setModalVisible(false)
                    }}
                >
                    <Image
                        source={{ uri: item.flag }}
                        style={{
                            width: 30,
                            height: 30,
                            marginRight: 10
                        }}
                    />
                    <Text style={{ ...FONTS.body4 }}>{item.name}</Text>
                </TouchableOpacity>
                </View>
            )
        }
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose = {() => {
                    setModalVisible(!modalVisible)
                }}
            >
                <TouchableWithoutFeedback
                    onPress={() => setModalVisible(false)}
                >
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <View
                            style={{
                                height: 400,
                                width: SIZES.width * 0.8,
                                backgroundColor: COLORS.lightGreen,
                                borderRadius: SIZES.radius
                            }}
                        >
                            <View style={{
                                flex:1,
                                justifyContent: 'center',
                                marginTop: 30,
                                marginBottom: 50,
                                alignItems: 'center'
                            }}>
                                <TextInput
                                    placeholder="Search by country name..."
                                    selectionColor="#909090"
                                    placeholderTextColor= '#909090'
                                    style={{
                                        fontFamily: 'Roboto-Medium',
                                        color: '#000',
                                        borderBottomColor: '#000',
                                        borderBottomWidth: 1,
                                        fontSize: 12,
                                        width: 250,
                                        height: 55,
                                        justifyContent: 'center',
                                        marginTop: 20,
                                    }}
                                />
                            </View>
                            <FlatList
                                data={areas}
                                renderItem={renderItem}
                                keyExtractor={(item) => item.code}
                                showsVerticalScrollIndicator={false}
                                style={{
                                    padding: SIZES.padding * 2,
                                    marginBottom: SIZES.padding * 2
                                }}
                            />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        )
    }


    return (
        <ImageBackground source={require('../assets/images/background.jpg')} style={styles.container}>
            <View style={styles.overlay}>

                <Text style={styles.welcomeText}>Welcome back</Text>
                <Text style={styles.subTitle}>Login your account</Text>

                <View>
                    {/* <TextInput
                        placeholder="Phone Number"
                        style={styles.inputField}
                        placeholderTextColor='#FEFFFE'
                        selectionColor='#FEFFFE'
                    /> */}
                    {renderForm()}
                    {renderAreaCodesModal()}
                    <TouchableOpacity onPress={() => { navigation.navigate("Main") }}>
                        <Text style={styles.continue}>Continue</Text>
                    </TouchableOpacity>

                    <View>
                        <Text style={styles.otp}>We'll send otp for verification</Text>
                    </View>
                    <TouchableOpacity style={styles.manage2}>
                        <View style={styles.manage3}>
                            <View><Evil name="sc-facebook" style={{ marginRight: 5, color: '#fff' }} size={40} /></View>
                            <View><Text style={styles.facebook}>Login in with Facebook</Text></View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.manage1}>
                        <View style={styles.manage}>
                            <View><Icon name="google" style={{ marginRight: 5 }} size={25} /></View>
                            <View><Text style={styles.google}>Login in with Google</Text></View>
                        </View>
                    </TouchableOpacity>

                </View>

            </View>
        </ImageBackground>
    )



}
const styles = StyleSheet.create({
    welcomeText: {
        fontFamily: 'Roboto-Bold',
        color: '#FEFFFE',
        fontSize: 40,
        paddingTop: 80,
        paddingHorizontal: 20
    },
    container: {
        flex: 1,
        resizeMode: 'cover',
    },
    subTitle: {
        fontFamily: 'Roboto-Medium',
        fontSize: 15,
        color: '#FEFFFE',
        paddingHorizontal: 20,
        marginBottom: 40
    },
    overlay: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    inputField: {
        fontFamily: 'Roboto-Medium',
        backgroundColor: '#706D68',
        borderColor: 'transparent',
        borderWidth: 1,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginHorizontal: 20,
        marginTop: 40,
    },
    continue: {
        fontFamily: 'Roboto-Bold',
        borderWidth: 2,
        borderColor: 'transparent',
        borderRadius: 20,
        height: 55,
        marginHorizontal: 20,
        marginTop: 40,
        color: '#fff',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 18,
        backgroundColor: '#BF5957',
        opacity: 0.7
    },
    facebook: {
        fontFamily: 'Roboto-Medium',
        color: '#fff',
        fontSize: 16,
        // backgroundColor: '#3B5999',
    },
    google: {
        fontFamily: 'Roboto-Medium',
        fontSize: 16,
        fontWeight: '600',
        // backgroundColor: '#FFFFFF',
    },
    otp: {
        fontFamily: 'Roboto-Medium',
        textAlign: 'center',
        color: '#FEFFFE',
        fontSize: 18,
        paddingTop: 20,
    },
    manage: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        height: 55,
        width: 320,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 20,
        marginTop: 20,
        marginHorizontal: 20,
        backgroundColor: '#fff'
    },
    manage3: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        height: 55,
        width: 320,
        borderWidth: 1,
        borderColor: '#3B5999',
        borderRadius: 20,
        marginTop: 60,
        marginHorizontal: 20,
        backgroundColor: '#3B5999'
    },
    manage1: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    manage2: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})
export default Login;
