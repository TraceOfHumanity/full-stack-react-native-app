import {View, Text, TouchableOpacity} from "react-native";
import React from "react";

interface CustomButtonProps {
  onPress: () => void;
  title: string;
  textStyles?: string;
  containerStyles?: string;
}

const CustomButton = ({
  onPress,
  title,
  textStyles,
  containerStyles,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className={`bg-white min-h-[62px] justify-center items-center rounded-xl ${containerStyles}`}
      onPress={onPress}
    >
      <Text
      className={`text-lg font-semibold ${textStyles}`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
