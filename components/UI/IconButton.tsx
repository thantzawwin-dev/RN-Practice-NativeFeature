import {
  StyleSheet,
  Text,
  View,
  Pressable,
  PressableProps,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

// Extract the correct type for the `name` prop from Ionicons
type IoniconsName = React.ComponentProps<typeof Ionicons>["name"];

type Props = PressableProps & {
  icon: IoniconsName;
  color?: string;
  size: number;
};

const IconButton = ({ onPress, icon, color, size }: Props) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPressIn={onPress}
    >
      <Ionicons name={icon} size={size} color={color} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  button: {
    padding: 8,
    margin: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  pressed: {
    opacity: 0.7,
  },
});
