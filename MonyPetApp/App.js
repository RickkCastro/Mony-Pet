import React, { useState } from "react";
import { Routes } from "./src/routes";
import Toast, { BaseToast } from "react-native-toast-message";
import { NativeBaseProvider } from "native-base";

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
