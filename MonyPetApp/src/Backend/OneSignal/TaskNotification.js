export function TaskNotification() {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      Authorization: "Basic NWZmODk1ZTktYTc3Zi00Y2I4LTgxYmQtNDU4NDU2MTdiMjFi",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      included_segments: ['Subscribed Users'],
      contents: { en: "Teste"},
      app_id: "43517dad-1dea-4573-bbb4-a0135ac4e7f5",
    }),
  };

  fetch("https://onesignal.com/api/v1/notifications", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}
