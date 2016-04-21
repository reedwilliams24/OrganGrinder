var dispatcher = require('../dispatcher/Dispatcher.js');

module.exports = {
  keyPressed: function (keyName) {
    console.log("pressed");
    dispatcher.dispatch({
      actionType: "KEY_PRESS",
      noteName: keyName
    });
  },

  keyReleased: function(keyName) {
    dispatcher.dispatch({
      actionType: "KEY_RELEASE",
      noteName: keyName
    });
  }
};
