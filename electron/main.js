// Modules to control application life and create native browser window
const { app, BrowserWindow, Menu } = require("electron");
const path = require("path");
//这里的配置手动写的，也可以使用cross-env插件配置
console.log("#####electron环境变量", app.isPackaged,process.env);
/*隐藏electron创听的菜单栏*/
Menu.setApplicationMenu(null);
function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    frame: true /*是否展示顶部导航  去掉关闭按钮  最大化最小化按钮*/,
    webPreferences: {
      preload: path.join(__dirname, "preload.ts"),
    },
  });
  mainWindow.loadURL(
    !app.isPackaged
      ? "http://localhost:5173"
      : `file://${path.join(__dirname, "../dist/index.html")}`
  );
  // Open the DevTools.
  if (!app.isPackaged) {
    mainWindow.webContents.openDevTools();
  }
}
app.whenReady().then(() => {
  createWindow();
});