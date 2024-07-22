import {View, Text} from "react-native";
import React, {useEffect, useState} from "react";
import {useLocalSearchParams} from "expo-router";
import {GalleryPreviewData} from "@/components/models/AffirmationCategory";
import AFFIRMATION_GALLERY from "@/constants/affirmation-gallary";

const AffirmationPractice = () => {
  const {itemId} = useLocalSearchParams();
  const [affirmation, setAffirmation] = useState<GalleryPreviewData>();

  useEffect(() => {
    for (let idx = 0; idx < AFFIRMATION_GALLERY.length; idx++) {
      const affirmationData = AFFIRMATION_GALLERY[idx].data;

      const affirmationToStart = affirmationData.find(
        (affirmation) => affirmation.id === Number(itemId)
      );

      if (affirmationToStart) {
        setAffirmation(affirmationToStart);
        return;
      }
    }
  }, []);

  return (
    <View className="flex-1">
      <Text>AffirmationPractice</Text>
    </View>
  );
};

export default AffirmationPractice;
