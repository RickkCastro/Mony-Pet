import React, { useEffect, useState } from "react";
import { View } from "react-native";

export function TaskNotification() {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      Authorization: "Basic NWZmODk1ZTktYTc3Zi00Y2I4LTgxYmQtNDU4NDU2MTdiMjFi",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      include_player_ids: ['8557bb0c-8827-44ed-afdf-5f9879926807'],
      contents: { en: "Teste"},
      app_id: "43517dad-1dea-4573-bbb4-a0135ac4e7f5",
    }),
  };

  const [data, setData] = useState()

  useEffect(() => {
    fetch("https://onesignal.com/api/v1/notifications", options)
    .then((response) => response.json())
    .then((response) => setData(response))
    .catch((err) => console.error(err));
  })

  console.log(data.id)
}
