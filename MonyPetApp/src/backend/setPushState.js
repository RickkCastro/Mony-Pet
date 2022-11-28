import OneSignal from "react-native-onesignal";
import { useAsyncStorage } from '@react-native-async-storage/async-storage'

export async function setPushState() {
  const { setItem, getItem, removeItem } = useAsyncStorage("@monypet:config");
  const response = await getItem();
  const previousData = response ? JSON.parse(response) : {disablePush: false};

  const state = !previousData.disablePush

  OneSignal.disablePush(state);

  await setItem(JSON.stringify({...previousData, disablePush: state}))
}