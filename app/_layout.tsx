import {Slot, Stack} from "expo-router";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name='(tabs)' options={{headerShown: false}} />
      <Stack.Screen name='index' options={{headerShown: false}} />
      <Stack.Screen name='meditate' options={{headerShown: false}} />
    </Stack>
  )
};

export default RootLayout;
