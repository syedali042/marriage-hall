import {React,useEffect} from 'react';
import {View,Text} from 'react-native';
import SplashScreen from 'react-native-splash-scree
const App = () => {

  const someChanges = 0;
  useEffect(() => {
    SplashScreen.hide()
  },[])

  return (
   <>
      <View>
        <Text>Hey</Text>
      </View>
   </>
  )
}



export default App;
