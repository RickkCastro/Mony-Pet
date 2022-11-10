import OneSignal from 'react-native-onesignal';

export async function postNotification() {
  const { userId } = await OneSignal.getDeviceState();

  const notificationObj = {
    contents: { en: "Teste de notificação" },
    include_player_ids: [userId],
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
