import React, { useEffect } from "react";
import { Routes } from "./src/routes";
import Toast, { BaseToast } from "react-native-toast-message";
import OneSignal from 'react-native-onesignal';

// OneSignal Initialization
OneSignal.setAppId("43517dad-1dea-4573-bbb4-a0135ac4e7f5")

//Estilo do toast
const toastConfig = {
  success: (props) => (
    <BaseToast {...props} style={{ borderLeftColor: "#75739c" }} />
  ),
};

export default function App() {

  return (
    <>
        <Routes />
        <Toast config={toastConfig} />
    </>
  );
}
