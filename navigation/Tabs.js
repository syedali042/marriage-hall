import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home'
import Chats from '../screens/Chats'
import Activity from '../screens/Activity'
import Setting from '../screens/Setting'
import Icon from 'react-native-vector-icons/AntDesign'
import Material from 'react-native-vector-icons/MaterialCommunityIcons'

Icon.loadFont()
Material.loadFont()

const Tabs = () => {
    return (
       <Tab.Navigator >
           <Tab.Screen name="Revenue Booking" component={Home} options={{
               tabBarIcon: ({focused}) => (
                <Icon name="home" size={30} style={{color: focused ? '#FF7674' : '#ccc'}}/>
               ),headerShown: false,tabBarShowLabel:false}}/>
           <Tab.Screen name="Chats" component={Chats} options={{
            tabBarIcon: ({focused}) => (
                <Material name="message-text-outline" size={30} style={{color: focused ? '#FF7674' : '#ccc'}}/>
               ),tabBarShowLabel:false,headerShown:false}}/>
           <Tab.Screen name="Activity" component={Activity} options={{
            tabBarIcon: ({focused}) => (
                <Icon name="hearto" size={30} style={{color: focused ? '#FF7674' : '#ccc'}}/>
               ),tabBarShowLabel:false,headerShown:false}}/>
           <Tab.Screen name="Setting" component={Setting} options={{
            tabBarIcon: ({focused}) => (
                <Icon name="setting" size={30} style={{color: focused ? '#FF7674' : '#ccc'}}/>
               ),tabBarShowLabel:false,headerShown:false}}/>
       </Tab.Navigator>
    )
}
const Tab = createBottomTabNavigator();

export default Tabs
