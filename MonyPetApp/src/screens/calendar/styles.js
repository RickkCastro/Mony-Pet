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
    paddingBottom: 50,
    justifyContent: "flex-start",
  },

  calendarTheme: {
    backgroundColor: "#ffffff",
    calendarBackground: "#fff",
    textSectionTitleColor: "#7153a3",
    textSectionTitleDisabledColor: "#d9e1e8",
    selectedDayBackgroundColor: "#000",
    selectedDayTextColor: "#ffffff",
    todayTextColor: "#7153a3",
    dayTextColor: "#2d4150",
    textDisabledColor: "#d9e1e8",
    dotColor: "#7153a3",
    selectedDotColor: "#ffffff",
    arrowColor: "#7153a3",
    disabledArrowColor: "#d9e1e8",
    monthTextColor: "#7153a3",
    indicatorColor: "#7153a3",
    textDayFontFamily: "monospace",
    textMonthFontFamily: "monospace",
    textDayHeaderFontFamily: "monospace",
    textDayFontWeight: "300",
    textMonthFontWeight: "bold",
    textDayHeaderFontWeight: "300",
    textDayFontSize: 18,
    textMonthFontSize: 17,
    textDayHeaderFontSize: 17,
  },

  calendarStyles: {
    marginBottom: 10,
    marginTop: 10,
  },

  Title: {
    textAlign: "center",
    color: "#9a8db0",
    fontSize: THEME.FONT_SIZE.LG,
    marginBottom: 20,
    fontWeight: "700",
  },

  titlte2: {
    textAlign: "center",
    color: "#9a8db0",
    fontSize: THEME.FONT_SIZE.LG,
    marginBottom: 20,
    fontWeight: "700",
    marginTop: 20,
  },

  txt1: {
    textAlign: "center",
    color: "#9a8db0",
    fontSize: THEME.FONT_SIZE.MD,
    marginBottom: 20,
    marginTop: 20,
    marginHorizontal: 40,
  },

  dayTasksList: {
    maxHeight: 500,
    marginHorizontal: 15
  },

  headerStyle: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 10,
  },

  addButton: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: "75%",
    backgroundColor: "#7b5eb4",
    alignSelf: "center",
    marginBottom: 10,
    borderRadius: 30,
    marginTop: 30,
  },
});
