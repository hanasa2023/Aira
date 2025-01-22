import { app as e, BrowserWindow as r } from "electron";
const o = () => {
  new r({
    width: 960,
    height: 646,
    titleBarStyle: "hidden",
    hasShadow: !0,
    ...process.platform !== "darwin" ? {
      titleBarOverlay: {
        color: "#ffffffff",
        symbolColor: "#74b1be",
        height: 20
      }
    } : {}
  }).loadURL(JSON.parse(process.env.__NUXT_DEV__).proxy.url);
};
e.whenReady().then(() => {
  o(), e.on("activate", () => {
    r.getAllWindows().length === 0 && o();
  });
});
e.on("window-all-closed", () => {
  process.platform !== "darwin" && e.quit();
});
