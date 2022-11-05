import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.BACKGROUND,
  },

  scrollStyle: {
    width: "100%",
    paddingTop: 10,
    paddingBottom: 50,
    justifyContent: "flex-start",
  },

  calendarTheme: {
    backgroundColor: THEME.COLORS.BACKGROUND,
    calendarBackground: THEME.COLORS.BACKGROUND,
    textSectionTitleColor: THEME.COLORS.TEXT,
    textSectionTitleDisabledColor: THEME.COLORS.ITENS_BACKGROUND,
    selectedDayBackgroundColor: "#000",
    selectedDayTextColor: THEME.COLORS.BACKGROUND,
    todayTextColor: THEME.COLORS.TEXT,
    dayTextColor: THEME.COLORS.TEXT,
    textDisabledColor: THEME.COLORS.ITENS_BACKGROUND,
    dotColor: THEME.COLORS.TEXT,
    selectedDotColor: THEME.COLORS.BACKGROUND,
    arrowColor: THEME.COLORS.TEXT,
    disabledArrowColor: THEME.COLORS.ITENS_BACKGROUND,
    monthTextColor: THEME.COLORS.TEXT,
    indicatorColor: THEME.COLORS.TEXT,
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
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.LG,
    marginBottom: 20,
    fontWeight: "700",
  },

  titlte2: {
    textAlign: "center",
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.LG,
    marginBottom: 20,
    fontWeight: "700",
    marginTop: 20,
  },

  txt1: {
    textAlign: "center",
    color: THEME.COLORS.TEXT,
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
    backgroundColor: THEME.COLORS.BACKGROUND,
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 10,
  },

  addButton: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: "75%",
    backgroundColor: THEME.COLORS.BUTTON,
    alignSelf: "center",
    marginBottom: 10,
    borderRadius: 30,
    marginTop: 30,
  },
});
