import * as React from 'react';
import {TransactionDetail, Transactions} from '../screen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Transactions">
        <Stack.Screen
          name="Transactions"
          options={{headerShown: false}}
          component={Transactions}
        />
        <Stack.Screen
          name="TransactionDetail"
          options={{title: 'Transactions Detail'}}
          component={TransactionDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
