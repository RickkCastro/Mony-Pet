import React, { useEffect } from "react";
import { Routes } from "./src/routes";
import Toast, { BaseToast } from "react-native-toast-message";
import OneSignal from "react-native-onesignal";
import { StatusBar } from "expo-status-bar";

// OneSignal Initialization
OneSignal.setAppId("43517dad-1dea-4573-bbb4-a0135ac4e7f5");

OneSignal.addPermissionObserver((event) => {
  console.log("OneSignal: permission changed:", event);
});

OneSignal.promptForPushNotificationsWithUserResponse((response) => {
  console.log("Prompt response:", response);
});

//Estilo do toast
const toastConfig = {
  success: (props) => (
    <BaseToast {...props} style={{ borderLeftColor: "#75739c" }} />
  ),
};

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <Routes />
      <Toast config={toastConfig} />
    </>
  );
}
