import { StyleSheet } from "react-native";
import { THEME, THEME2 } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.BACKGROUND,
  },

  scrollStyle: {
    paddingTop: 10,
    justifyContent: "flex-start",
  },

  headerStyle: {
    alignItems: "center",
    justifyContent: "flex-end",
  },

  Title: {
    textAlign: "center",
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.LG,
    marginBottom: 20,
    fontWeight: "700",
  },
})
