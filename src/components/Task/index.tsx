import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import Trash from "../Icons/Trash";
import RadioButton from "../RadioButton";

type Props = {
  name: string;
  onRemove: () => void;
  onComplete: () => void;
  isCompleted: boolean;
};

export function Task({ name, onRemove, onComplete, isCompleted }: Props) {
  return (
    <View style={styles.container}>
      <RadioButton isSelected={isCompleted} onPress={onComplete} />
      <Text
        style={[
          styles.name,
          isCompleted ? { textDecorationLine: "line-through", color: "#808080" } : null,
        ]}
      >
        {name}
      </Text>
      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Trash />
      </TouchableOpacity>
    </View>
  );
}
