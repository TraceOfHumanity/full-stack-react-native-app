import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import beachImage from "@/assets/meditation-images/beach.webp";
import {StatusBar} from "expo-status-bar";
import CustomButton from "@/components/CustomButton";
import {useRouter} from "expo-router";
import AppGradient from "@/components/AppGradient";

const App = () => {
  const router = useRouter();
  return (
    <View className="flex-1 ">
      <ImageBackground
        source={beachImage}
        resizeMode="cover"
        className="flex-1"
      >
        <AppGradient colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}>
          <SafeAreaView className="flex-1 px-1 justify-between">
            <View>
              <Text className="text-center text-white text-4xl font-bold">
                Simple Meditation
              </Text>
              <Text className="text-center text-white text-2xl mt-3 ">
                Simplifying meditation for Everyone
              </Text>
            </View>
            <View>
              <CustomButton
                onPress={() => router.push("/nature-meditation")}
                title="Get Started"
              />
            </View>
            <StatusBar style="light" />
          </SafeAreaView>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
