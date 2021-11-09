const path = require('path');

module.exports = {
  packagerConfig: {
    name: "Z5Client",
    icon: path.join(__dirname, "icon.ico"),
    prune: true,
  },
  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      config: {
        authors: "Archipelago",
        copyright: `${new Date().getFullYear()} Chris Wilson`,
        description: "The Archipelago client for The Legend of Zelda: Ocarina of Time",
        iconUrl: path.join(__dirname, 'icon.ico'),
        setupExe: "Z5Client-Setup.exe",
        setupIcon: path.join(__dirname, 'icon.ico'),
        name: "Z5Client"
      }
    },
    {
      name: "@electron-forge/maker-zip",
    },
  ],
};