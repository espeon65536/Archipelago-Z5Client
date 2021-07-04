# Archipelago-z5Client
A Z5 client designed for use with the Archipelago implementation of the Ocarina of Time randomizer.

## Installation
Installation of this client is optional, but recommended. Installing using the provided executable will allow
users to launch the client by double-clicking on a `.apz5` file. To install the program, simply run the executable
file found on the [releases](https://github.com/LegendaryLinux/Archipelago-Z5Client/releases) page, and the software
will install to your AppData folder.

You may also run the client as a standalone program, which is available as a `.zip` file on the releases page
linked above. Doing so will still save some configuration data to your AppData folder, and will require you
to drag the `.apz5` file onto the executable in order to patch your game.

## Using the z5Client
Coming Soon™

## Run it from source:
I am writing this using the latest version of Node.js, but you might be able to get away with using the current LTS version.
```bash
git clone https://github.com/LegendaryLinux/Archipelago-Z5Client
cd Archipelago-Z5Client
npm install
electron-rebuild
electron .
```
