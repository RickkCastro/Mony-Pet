import React, { useEffect } from "react";
import { Routes } from "./src/routes";
import Toast, { BaseToast } from "react-native-toast-message";
import { NativeBaseProvider } from "native-base";
import OneSignal from 'react-native-onesignal';

// OneSignal Initialization
OneSignal.setAppId("43517dad-1dea-4573-bbb4-a0135ac4e7f5");

OneSignal.promptForPushNotificationsWithUserResponse();

OneSignal.setNotificationWillShowInForegroundHandler(notificationReceivedEvent => {
  console.log("OneSignal: notification will show in foreground:", notificationReceivedEvent);
  let notification = notificationReceivedEvent.getNotification();
  console.log("notification: ", notification);
  const data = notification.additionalData
  console.log("additionalData: ", data);
  // Complete with null means don't show a notification.
  notificationReceivedEvent.complete(notification);
});

OneSignal.setNotificationOpenedHandler(notification => {
  console.log("OneSignal: notification opened:", notification);
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
      <NativeBaseProvider>
        <Routes />
        <Toast config={toastConfig} />
      </NativeBaseProvider>
    </>
  );
}
