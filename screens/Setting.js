import React from 'react'
import { View, Text, StyleSheet, Image, Switch} from 'react-native'
import { Card } from 'react-native-shadow-cards'
import Feather from 'react-native-vector-icons/Feather'
import Icon from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

Feather.loadFont()
Icon.loadFont()
MaterialIcons.loadFont()

const Setting = () => {

    const [switchEnable, setSwitch] = React.useState(false);
    const [switchEnable2, setSwitch2] = React.useState(false);
    const [switchEnable3, setSwitch3] = React.useState(false);

    return (
        <View style={{ flex: 1 }}>
            <Card style={{ width: '100%', height: 55 }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={styles.headerTitle}>Settings</Text>
                </View>
            </Card>
            <View style={styles.profile}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require('../assets/images/background.jpg')} style={styles.profile_img} />
                    <View>
                        <Text style={styles.profileName}>Stella French</Text>
                    </View>
                </View>
                <View style={styles.editProfile}>
                    <Feather name="edit-2" size={25} color="#FFFFFF" style={{
                        textAlign: 'center',
                    }} />
                </View>
            </View>
            <View style={{
                marginTop: 20,
                marginHorizontal: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <View>
                    <Text style={styles.listing}>My Listing</Text>
                </View>
                <View>
                    <Icon name="right" size={20} />
                </View>
            </View>
            <View style={{
                marginHorizontal: 10,
                marginTop: 20
            }}>
                <Text style={{
                    fontFamily: 'Roboto-Regular', textTransform: 'capitalize',
                    color: '#999', fontSize: 16
                }}>About</Text>
            </View>
            <View style={{
                marginTop: 12,
                marginHorizontal: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <View>
                    <Text style={styles.listing}>Privacy Policy</Text>
                </View>
                <View>
                    <Icon name="right" size={20} />
                </View>
            </View>
            <View style={{
                marginTop: 10,
                marginHorizontal: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <View>
                    <Text style={styles.listing}>Terms of use</Text>
                </View>
                <View>
                    <Icon name="right" size={20} />
                </View>
            </View>
            <View style={{
                marginHorizontal: 10,
                marginTop: 20
            }}>
                <Text style={{
                    fontFamily: 'Roboto-Regular', textTransform: 'capitalize',
                    color: '#999', fontSize: 16
                }}>Manage Notifications</Text>
            </View>
            <View style={{
                marginTop: 12,
                marginHorizontal: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <View>
                    <Text style={styles.listing}>For Matched Properties</Text>
                </View>
                <View>
                    <Switch value={switchEnable} onValueChange={
                        (value) => { setSwitch(value) }
                    }
                        ios_backgroundColor="rgba(100,46,45,0.6)"
                        thumbColor={switchEnable ? '#FF7674' : '#CDCDCD'}
                        trackColor={{ false: '#909090', true: 'rgba(100,46,45,0.2)' }}
                    />
                </View>
            </View>
            <View style={{
                marginTop: 10,
                marginHorizontal: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <View>
                    <Text style={styles.listing}>For New Launched Properties</Text>
                </View>
                <View>
                    <Switch value={switchEnable2} onValueChange={
                        (value2) => { setSwitch2(value2) }
                    }
                        ios_backgroundColor="rgba(100,46,45,0.6)"
                        thumbColor={switchEnable2 ? '#FF7674' : '#CDCDCD'}
                        trackColor={{ false: '#909090', true: 'rgba(100,46,45,0.2)' }}
                    />
                </View>
            </View>
            <View style={{
                marginTop: 10,
                marginHorizontal: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <View>
                    <Text style={styles.listing}>For Property News</Text>
                </View>
                <View>
                    <Switch value={switchEnable3} onValueChange={
                        (value3) => { setSwitch3(value3) }
                    }
                        ios_backgroundColor="rgba(100,46,45,0.6)"
                        thumbColor={switchEnable3 ? '#FF7674' : '#CDCDCD'}
                        trackColor={{ false: '#909090', true: 'rgba(100,46,45,0.2)' }}
                    />
                </View>
            </View>

            <View style={{
                marginHorizontal: 10,
                marginTop: 10
            }}>
                <Text style={{
                    fontFamily: 'Roboto-Regular', textTransform: 'capitalize',
                    color: '#999', fontSize: 16
                }}>App</Text>
            </View>
            <View style={{
                marginTop: 15,
                marginHorizontal: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <View>
                    <Text style={styles.listing}>Support</Text>
                </View>
                <View>
                    <Icon name="right" size={20} />
                </View>
            </View>
            <View style={{
                marginTop: 10,
                marginHorizontal: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <View>
                    <Text style={styles.listing}>Report a Bug</Text>
                </View>
                <View>
                    <Icon name="right" size={20} />
                </View>
            </View>
            <View style={{
                marginTop: 10,
                marginHorizontal: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <View>
                    <Text style={styles.listing}>App version 1.0</Text>
                </View>
                <View>
                    <Icon name="right" size={20} />
                </View>
            </View>
            <View style={{
                marginTop: 15,
                marginHorizontal: 10,
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <MaterialIcons name="logout" size={30} color="#ff7674"/>
                <View>
                <Text style={{
                    marginLeft: 10,
                    fontFamily: 'Roboto-Medium',
                    fontSize: 18,
                    color: '#ff7674'
                }}>Logout</Text>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    headerTitle: {
        fontFamily: 'Roboto-Bold',
        fontSize: 22,
        color: '#FF7674'
    },
    profile: {
        marginTop: 30,
        marginHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    profile_img: {
        width: 80,
        height: 80,
        borderRadius: 80
    },
    profileName: {
        fontFamily: 'Roboto-Black',
        fontSize: 22,
        paddingLeft: 10
    },
    editProfile: {
        borderRadius: 50,
        backgroundColor: '#FF7674',
        width: 50,
        height: 50,
        justifyContent: 'center'
    },
    listing: {
        fontFamily: 'Roboto-Regular',
        fontSize: 18,
        textTransform: 'capitalize'
    }
})
export default Setting
