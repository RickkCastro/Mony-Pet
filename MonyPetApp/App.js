import React, { useEffect, useState } from "react";
import { Routes } from "./src/routes";
import Toast, { BaseToast } from "react-native-toast-message";
import OneSignal from "react-native-onesignal";
import { StatusBar } from "expo-status-bar";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { ScHelpSlides } from "./src/components/HelpSlides";

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
  useEffect(() => {
    fetchData();
  }, []);

  const [showSlides, setShowSlides] = useState(true);

  async function fetchData() {
    const { getItem, setItem, removeItem } = useAsyncStorage("@monypet:config");
    const response = await getItem();
    const config = response ? JSON.parse(response) : { showSlides: true };

    setShowSlides(config.showSlides);
  }

  return (
    <>
      <StatusBar style="dark" />
      {showSlides ? <ScHelpSlides slideDone={() => setShowSlides(false)}/> : <Routes />}
      <Toast config={toastConfig} />
    </>
  );
}
