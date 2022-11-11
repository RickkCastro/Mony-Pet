import { useState } from 'react';
import OneSignal from 'react-native-onesignal';

export async function postNotification(headings = "Titulo", contents = "Teste de notificação", send_after = null) {
  const { userId } = await OneSignal.getDeviceState();

  const notificationObj = {
    headings: { en: headings },
    contents: { en: contents },
    include_player_ids: [userId],
    send_after: send_after
  };

  const jsonString = JSON.stringify(notificationObj);

  OneSignal.postNotification(
    jsonString,
    (success) => {
      console.log("Success:", success);
    },
    (error) => {
      console.log("Error:", error);
    }
  );
}
