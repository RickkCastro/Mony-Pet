import { StyleSheet } from "react-native";
import { THEME, THEME2 } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.BACKGROUND,
  },

  scrollStyle: {
    width: "100%",
    paddingTop: 10,
    paddingBottom: 60,
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

  buttons: {
    justifyContent: "center",
    alignItems: "flex-start",
    height: 55,
    width: "75%",
    alignSelf: "center",
    borderRadius: 10,
    marginTop: 30,
    backgroundColor: THEME.COLORS.BUTTON
  },

  btItensView: {
    flexDirection: "row",
  },

  instaDegrade: {
    height: 55,
    width: "100%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "flex-start",
  },

  btIcons: {
    marginHorizontal: 15,
    top: 3,
  },

  textBt: {
    fontSize: THEME.FONT_SIZE.MD,
    color: THEME.COLORS.TEXT_BUTTON,
  },
});
