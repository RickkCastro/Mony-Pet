import { useContext, useState } from "react";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const THEME = {
  COLORS: {
    PRIMARY: "#7658B0",
    TEXT: "#7658B0",
    GRAY: "#545454",
    COPY: '#252424',

    BACKGROUND: "#FFF",
    ITENS_BACKGROUND: "#ECE4FC",

    BUTTON: "#532E9E",
    TEXT_BUTTON: "#FFF",
    TEXT_BORDER: "#532E9E",

    EMOTE_EXCITED: "#107D07",
    EMOTE_HAPPY: "#68B166",
    EMOTE_NEUTRAL: "#7A7777",
    EMOTE_SAD: "#E1CC0F",
    EMOTE_ANGRY: "#A54C1B",

    SUCCESS: '#107D07',
    FAIL: '#E53',
  },

  DARK: {
    PRIMARY: "#7658B0",
    TEXT: "#D1C7E4",
    GRAY: "#B1A3CB",
    COPY: '#fff',

    BACKGROUND: "#282C34",
    ITENS_BACKGROUND: "#533198",

    BUTTON: "#441D92",
    TEXT_BUTTON: "#FFF",
    TEXT_BORDER: "#533198",

    EMOTE_EXCITED: "#107D07",
    EMOTE_HAPPY: "#68B166",
    EMOTE_NEUTRAL: "#7A7777",
    EMOTE_SAD: "#E1CC0F",
    EMOTE_ANGRY: "#A54C1B",
    
    SUCCESS: '#107D07',
    FAIL: '#E53',
  },

  LIGHT: {
    PRIMARY: "#7658B0",
    TEXT: "#7658B0",
    GRAY: "#545454",
    COPY: '#252424',

    BACKGROUND: "#FFF",
    ITENS_BACKGROUND: "#ECE4FC",

    BUTTON: "#532E9E",
    TEXT_BUTTON: "#FFF",
    TEXT_BORDER: "#532E9E",

    EMOTE_EXCITED: "#107D07",
    EMOTE_HAPPY: "#68B166",
    EMOTE_NEUTRAL: "#7A7777",
    EMOTE_SAD: "#E1CC0F",
    EMOTE_ANGRY: "#A54C1B",

    SUCCESS: '#107D07',
    FAIL: '#E53',
  },

  // FONT_FAMILY: {
  //   REGULAR: 'Inter_400Regular',
  //   SEMI_BOLD: 'Inter_600SemiBold',
  //   BOLD: 'Inter_700Bold',
  //   BLACK: 'Inter_900Black'
  // },

  FONT_SIZE: {
    SM: RFPercentage(1.5), //10 - 13
    MD: RFPercentage(2.3), //14 - 16
    LG: RFPercentage(3), //18>>
  },
}

