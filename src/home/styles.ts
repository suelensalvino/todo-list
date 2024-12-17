import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
  },
  header: {
    backgroundColor: "#0D0D0D",
    height: 180,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    flex: 1,
    backgroundColor: "#262626",
    borderRadius: 6,
    color: "#FFFFFF",
    padding: 16,
    fontSize: 16,
    marginRight: 12,
  },
  form: {
    flexDirection: "row",
    position: "relative",
    top: -25,
    paddingHorizontal: 24,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#1E6F9F",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
  },
  listEmptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  clipboard: {
    marginBottom: 16,
  },
  boldText: {
    fontWeight: "bold",
  },
  listEmptyText: {
    color: "#808080",
    fontSize: 16,
    textAlign: "center",
  },
  listPadding: {
    padding: 24,
  },
  taskCountContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 45,
  },
  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 45,
  },
  taskCountText: {
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  countCircle: {
    width: 25,
    height: 19,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
    backgroundColor: "#333333",
  },
  countNumber: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
  divider: {
    borderBottomWidth: 0.5,
    borderBottomColor: "#808080",
    marginVertical: 20,
    marginHorizontal: 20,
  },
});
