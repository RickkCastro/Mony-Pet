export function addDevice() {
  const options = {
    method: "POST",
    headers: { accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify({
      app_id: "43517dad-1dea-4573-bbb4-a0135ac4e7f5",
      device_type: 1,
      language: "en",
    }),
  };

  fetch("https://onesignal.com/api/v1/players", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}
