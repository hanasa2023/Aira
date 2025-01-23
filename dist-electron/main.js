import { app as e, BrowserWindow as t } from "electron";
const o = () => {
  new t({
    width: 960,
    height: 646,
    titleBarStyle: "hidden",
    hasShadow: !0,
    ...process.platform !== "darwin" ? {
      titleBarOverlay: {
        color: "#93c5fd",
        height: 28
      }
    } : {}
  }).loadURL(JSON.parse(process.env.__NUXT_DEV__).proxy.url);
};
e.whenReady().then(() => {
  o(), e.on("activate", () => {
    t.getAllWindows().length === 0 && o();
  });
});
e.on("window-all-closed", () => {
  process.platform !== "darwin" && e.quit();
});
