import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import Books from '@screens/books';
import BookDetails from '@screens/bookDetails';

export type RootStackParamList = {
  Books: undefined;

  BookDetails: {
    bookId: string;
  };
};

export type RootStackNavigationProp<
  RouteName extends keyof RootStackParamList,
> = NativeStackNavigationProp<RootStackParamList, RouteName>;

const Stack = createNativeStackNavigator<RootStackParamList>();

function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Books'}
        component={Books}
        options={{
          headerTitle: 'Books',
          headerShadowVisible: false,
        }}
      />

      <Stack.Screen name={'BookDetails'} component={BookDetails} />
    </Stack.Navigator>
  );
}

export default MainStack;
