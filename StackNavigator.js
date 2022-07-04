import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import Home from "./screens/Home";
// import Setting from "./screens/Setting";
// import "react-native-gesture-handler";

const StackNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name={"home"}
          component={Home}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Group>
      {/* <Stack.Group
        screenOptions={{
          presentation: "modal",
          gestureEnabled: true,
          ...TransitionPresets.ModalSlideFromBottomIOS,
        }}
      >
        <Stack.Screen name={"setting"} component={Setting} />
      </Stack.Group> */}
    </Stack.Navigator>
  );
};

export default StackNavigator;
