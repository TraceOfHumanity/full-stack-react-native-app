
import {View, Text, FlatList, Pressable, Image} from "react-native";
import React from "react";
import {GalleryPreviewData} from "./models/AffirmationCategory";
import {Link} from "expo-router";

interface GuidedAffirmationsGalleryProps {
  title: string;
  previews: GalleryPreviewData[];
}

const GuidedAffirmationsGallery = ({
  title,
  previews,
}: GuidedAffirmationsGalleryProps) => {
  return (
    <View className="my-5">
      <View className="mb-2">
        <Text className="text-white font-bold text-xl">{title}</Text>
      </View>
      <FlatList
        data={previews}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        
        renderItem={({item}) => (
          <Link href={`/affirmations/${item.id}`} asChild>
            <Pressable>
              <View className="h-36 w-32 rounded-md mr-4">
                <Image
                  source={item.image}
                  resizeMode="cover"
                  className="h-full w-full"
                />
              </View>
            </Pressable>
          </Link>
        )}
      />
    </View>
  );
};

export default GuidedAffirmationsGallery;