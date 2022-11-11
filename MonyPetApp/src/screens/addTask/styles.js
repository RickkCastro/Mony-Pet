import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.BACKGROUND,
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

  monthStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 100,
  },
  
  lineText: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.LG,
    marginBottom: 5,
    marginTop: 20,
  },

  txtInformation: {
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: THEME.COLORS.PRIMARY,
    borderRadius: 10,
    fontSize: THEME.FONT_SIZE.MD,
    backgroundColor: THEME.COLORS.BACKGROUND,
  },

  txtDesc: {
    padding: 10,
    borderWidth: 1,
    borderColor: THEME.COLORS.PRIMARY,
    borderRadius: 10,
    fontSize: THEME.FONT_SIZE.MD,
    backgroundColor: THEME.COLORS.BACKGROUND,
    textAlignVertical: "top",
    height: 125,
  },

  styleCopyRight: {
    color: THEME.COLORS.COPY,
    fontSize: THEME.FONT_SIZE.SM,
    alignSelf: "center",
    marginTop: 10,
    alignItems: "flex-end",
  },

  imgView: {
    alignItems: "center",
    height: 180,
    justifyContent: "flex-end",
    paddingBottom: 10,
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

  stylesTextButton: {
    color: THEME.COLORS.BACKGROUND,
    fontSize: THEME.FONT_SIZE.LG,
  },

  styleCopyRight: {
    color: THEME.COLORS.COPY,
    fontSize: THEME.FONT_SIZE.SM,
    alignSelf: "center",
    marginTop: 10,
    alignItems: "flex-end",
  },

  switchView: {
    flexDirection: "row",
    alignItems: 'center',
  },

  switch: {
    paddingHorizontal: 10,
    top: 9,
  },
});
