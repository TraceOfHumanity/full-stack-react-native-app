import {View, Text, FlatList, Pressable, ImageBackground} from "react-native";
import React from "react";
import AppGradient from "@/components/AppGradient";
import {MEDITATION_DATA} from "@/constants/MeditationData";
import MEDITATION_IMAGES from "@/constants/meditation-images";
import {LinearGradient} from "expo-linear-gradient";
import { router } from "expo-router";

const NatureMeditation = () => {
  return (
    <View className="flex-1">
      <AppGradient colors={["#161b2e", "#0a4d4a", "#766e67"]}>
        <View className="mb-6">
          <Text className="text-gray-200 mb-3 font-bold text-4xl text-left">
            Welcome Alex
          </Text>
          <Text className="text-left text-indigo-100 font-medium">
            Start your meditation practice today
          </Text>
        </View>
        <View>
          <FlatList
            data={MEDITATION_DATA}
            className="mb-20"
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <Pressable
                onPress={() => router.push("/meditate")}
                className="h-48 my-3 overflow-hidden rounded-md"
              >
                <ImageBackground
                  source={MEDITATION_IMAGES[item.id - 1]}
                  resizeMode="cover"
                  className="flex-1 rounded-lg justify-center"
                >
                  <LinearGradient colors={["transparent","#000000aa"]}
                    className="flex-1 justify-center items-center"
                  >
                    <Text className="text-center text-gray-100 font-bold text-3xl">
                      {item.title}
                    </Text>
                  </LinearGradient>
                </ImageBackground>
              </Pressable>
            )}
          />
        </View>
      </AppGradient>
    </View>
  );
};

export default NatureMeditation;
