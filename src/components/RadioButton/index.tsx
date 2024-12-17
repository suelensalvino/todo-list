import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type Props = {
  isSelected?: boolean;
  onPress?: () => void;
};

export default function RadioButton({ isSelected = false, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.radioButton} onPress={onPress}>
      {isSelected && <View style={styles.radioButtonInner} />}
    </TouchableOpacity>
  );
}
