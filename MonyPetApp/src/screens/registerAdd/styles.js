import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.BACKGROUND,
  },
  header: {
    flexDirection: "row",
    height: "8%",
    justifyContent: "space-between",
    alignItems: "center",
  },

  scrollStyle: {
    minHeight: "92%",
    backgroundColor: THEME.COLORS.BACKGROUND,
    justifyContent: "space-between",
  },

  txtSelectDay: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.LG,
    marginBottom: 10,
    textAlign: "center",
  },

  txtDate: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.LG,
    textDecorationLine: "underline",
    fontWeight: "700",
  },

  txtInformation: {
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: THEME.COLORS.PRIMARY,
    borderRadius: 10,
    marginBottom: 30,
    fontSize: THEME.FONT_SIZE.LG,
    backgroundColor: THEME.COLORS.BACKGROUND,
  },

  lineText: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.LG,
    marginBottom: 5,
  },

  monthStyle: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    justifyContent: "center",
    marginHorizontal: 100,
  },

  styleButton: {
    borderRadius: 10,
    backgroundColor: THEME.COLORS.BUTTON,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: 300,
    marginBottom: 10,
  },

  styleTextSelection: {
    fontSize: THEME.FONT_SIZE.MD,
    color: THEME.COLORS.GRAY,
    paddingRight: 10,
  },

  headerButtons: {
    height: 30,
    width: 30,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },

  lineRegister: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.LG,
    marginBottom: 3,
    textAlign: "center",
    marginTop: 10,
  },

  txtDesc: {
    padding: 10,
    borderWidth: 1,
    borderColor: THEME.COLORS.TEXT,
    borderRadius: 10,
    marginBottom: 15,
    fontSize: THEME.FONT_SIZE.MD,
    backgroundColor: THEME.COLORS.BACKGROUND,
    width: "90%",
    textAlignVertical: "top",
    height: 125,
    color: "black",
    alignSelf: "center",
  },

  styleCopyRight: {
    color: THEME.COLORS.COPY,
    fontSize: THEME.FONT_SIZE.SM,
    alignSelf: "center",
    marginTop: 10,
    alignItems: "flex-end",
  },

  backgroundRegister: {
    paddingHorizontal: 20,
    backgroundColor: THEME.COLORS.ITENS_BACKGROUND,
    alignSelf: "center",
    borderRadius: 50,
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 3,
  },

  viewTxt: {
    alignSelf: "center",
    marginTop: 5,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  txt: {
    textAlign: "center",
    fontSize: THEME.FONT_SIZE.SM,
    width: 54,
    color: THEME.COLORS.TEXT,
  },

  selected: {
    borderWidth: 1.8,
    borderRadius: 100,
    borderColor: THEME.COLORS.EMOTE_ANGRY,
  },

  unselected: {
    borderWidth: 1.8,
    borderRadius: 100,
    borderColor: "transparent",
  },

  stylesTextButton: {
    color: THEME.COLORS.TEXT_BUTTON,
    fontSize: THEME.FONT_SIZE.LG,
  },
  
  imgView: {
    alignItems: "center",
    height: 180,
    justifyContent: "flex-end",
    paddingBottom: 10,
  },
});
