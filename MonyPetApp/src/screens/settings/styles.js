import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  scrollStyle: {
    width: "100%",
    paddingTop: 10,
    paddingBottom: 30,
    justifyContent: "flex-start",
  },

  headerStyle: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "flex-end",
  },

  Title: {
    textAlign: "center",
    color: "#9a8db0",
    fontSize: THEME.FONT_SIZE.LG,
    marginBottom: 20,
    fontWeight: "700",
  },
});
