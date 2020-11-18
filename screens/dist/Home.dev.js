"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _HomeComp = require("../components/HomeComp");

var _reactNative = require("react-native");

/* 
Components Home.js :
1 - Kosakata
2 - Muhadatsah
3 - Kaidah
4 - Uslub
5 - Bookmark
6 - About
*/
function Beranda() {}

var style = _reactNative.StyleSheet.create({
  body: {
    backgroundColor: '#FFCc79',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    borderWidth: 1,
    borderColor: '#fff',
    color: '#fff',
    height: '5%',
    width: '25%',
    textAlign: 'center'
  }
});

var _default = Menu;
exports["default"] = _default;