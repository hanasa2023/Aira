import { app, BrowserWindow } from 'electron'

const createWindow = () => {
  const win = new BrowserWindow({
    width: 960,
    height: 646,
    titleBarStyle: 'hidden',
    hasShadow: true,
    ...(process.platform !== 'darwin'
      ? {
          titleBarOverlay: {
            color: '#93c5fd',
            height: 28,
          },
        }
      : {}),
  })
  win.loadURL(JSON.parse(process.env.__NUXT_DEV__!).proxy.url)
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
