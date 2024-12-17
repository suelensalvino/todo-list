import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 56,
    backgroundColor: "#262626",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 10,
  },
  name: {
    flex: 1,
    color: "#F2F2F2",
    fontSize: 14,
    marginLeft: 16,
  },
  button: {
    width: 56,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
  },
});
