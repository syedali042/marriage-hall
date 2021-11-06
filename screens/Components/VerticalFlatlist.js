import React from 'react'
import { View,StyleSheet,FlatList} from 'react-native'
import { Cardapi } from '../../assets/Api/Cardapi'
import { Card as Cardo, Title, Paragraph } from 'react-native-paper'
import Icon from 'react-native-vector-icons/AntDesign'

Icon.loadFont()

const VerticalFlatlist = () => {
    
    const bigCards = ({ item }) => {
        return (
            <View style={styles.renderCard1}>
                <Cardo style={styles.cardo1}>
                    <Cardo.Cover source={item.img} style={styles.cover1} />
                    <Icon name="hearto" size={20} style={styles.cardoHearto1} />
                    <Cardo.Content>
                        <Title style={styles.cardoTitle1}>{item.title}</Title>
                        <Paragraph style={styles.cardoLoc1}>{item.loc}</Paragraph>
                        <Paragraph style={styles.cardoPrice1}>{item.price}</Paragraph>
                    </Cardo.Content>
                </Cardo>
            </View>
        )
    }
    return (
        <View>
            <FlatList
                data={Cardapi}
                renderItem={bigCards}
                keyExtractor={item => item.id}
                legacyImplementation = {false}
                pagingEnabled = {true}
            />
        </View>
    )
}
const styles = StyleSheet.create({
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
export default VerticalFlatlist
