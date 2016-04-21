var Store = require("flux/utils").Store,
    dispatcher = require("../dispatcher/Dispatcher.js"),
    TONES = require('../constants/Tones.js');

var _keys = [];

var KeyStore = new Store(dispatcher);

KeyStore.all = function() {
  return _keys;
};

var playKey = function(key) {
  _keys.push(key);
  KeyStore.__emitChange();
};

var stopKey = function(key) {
  _keys.splice(_keys.indexOf(key), 1);
  KeyStore.__emitChange();
};

KeyStore.__onDispatch = function(payload){
  switch(payload.actionType){
    case 'KEY_PRESS':
    playKey(payload.noteName);
    break;

    case 'KEY_RELEASE':
    stopKey(payload.noteName);
    break;
  }
};

module.exports = KeyStore;
