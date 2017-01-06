#!/usr/bin/env bash

rm -rf ../node_modules/electron-prebuilt/dist/Electron.app
cp -R ./Electron.app ../node_modules/electron-prebuilt/dist/Electron.app
