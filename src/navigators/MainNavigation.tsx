import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from '../navigators/TabNavigator';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../screen/Splash/SplashScreen';
import LoginScreen from '../screen/Login/LoginScreen';
import HomeScreen from '../screen/Home/HomeScreen';

const Stack = createStackNavigator();

function MainNavigation() {
  const tabBarOptions = {
    activeTintColor: '#ffffff',
    inactiveTintColor: 'grey',
    tabBarType: 'bubbleTab',
    tabBarHeight: 70,
    activeBackgroundColor: '#182A4D',
    numOfTabs: 4,
    tabBarBackgroundColor: '#ffffff',
  };
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          options={{headerShown: false}}
          component={LoginScreen}
        />
        <Stack.Screen
          name="Home"
          options={{headerShown: false}}
          component={HomeScreen}
        />
        <Stack.Screen name="TabNavigator" options={{headerShown: false}}>
          {() => <TabNavigator tabBarOptions={tabBarOptions} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;
