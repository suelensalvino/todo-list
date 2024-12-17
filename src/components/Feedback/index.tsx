import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { styles } from "./styles";

type Props = {
  message: string | null;
  color: string;
};

export function FeedbackMessage({ message, color }: Props) {
  if (!message) return null;

  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

