import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  scrollStyle: {
    minHeight: "92%",
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },

  txtSelectDay: {
    color: "#75739c",
    fontSize: THEME.FONT_SIZE.LG,
    marginBottom: 10,
    textAlign: "center",
  },

  txtDate: {
    color: "#75739c",
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
    color: "#75739c",
    fontSize: THEME.FONT_SIZE.LG,
    marginBottom: 5,
    marginTop: 20
  },

  txtInformation: {
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#75739c",
    borderRadius: 10,
    fontSize: THEME.FONT_SIZE.MD,
    backgroundColor: "#fff",
  },

  txtDesc: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#75739c",
    borderRadius: 10,
    marginBottom: 30,
    fontSize: THEME.FONT_SIZE.MD,
    backgroundColor: "#fff",
    textAlignVertical: "top",
    height: 125,
  },

  styleCopyRight: {
    color: "#252424",
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
    backgroundColor: "#7153af",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: 300,
    marginBottom: 10,
  },
  stylesTextButton: {
    color: "white",
    fontSize: THEME.FONT_SIZE.LG,
  },
  styleCopyRight: {
    color: "#252424",
    fontSize: THEME.FONT_SIZE.SM,
    alignSelf: "center",
    marginTop: 10,
    alignItems: "flex-end",
  },
});
