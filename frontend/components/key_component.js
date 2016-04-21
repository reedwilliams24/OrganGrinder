var React = require("react"),
    KeyActions = require("../actions/organ_actions.js"),
    KeyStore = require("../stores/KeyStore.js"),
    Note = require('../util/Note.js'),
    TONES = require('../constants/Tones.js');

var KeyPlayer = React.createClass({
  getInitialState: function(){
    return {keys: KeyStore.all()};
  },
  _keysChanged: function(){
    this.setState({keys: KeyStore.all()});
  },
  componentDidMount: function () {
    KeyStore.addListener(this._keysChanged);
    this.notes = {};
  },

  componentWillUnmount: function() {

  },

  render: function(){
    var that = this;
      this.state.keys.forEach(function(key) {
      if (that.notes[key] === undefined) {
        var note = new Note(TONES[key] * 60);
        note.start();
        that.notes[key] = note;
      }
    });

    if (this.notes !== undefined) {

      for (var keyNote in that.notes){
        if (that.state.keys.indexOf(keyNote) === -1) {
          that.notes[keyNote].stop();
          delete that.notes[keyNote];
        }
      }
    }

    var activeKeys = this.state.keys.map(function(key) {
      return (
        <li>{key}</li>
      );
    });
    console.log(this.state.keys);

    var classList = this.props.color + " " + this.props.note;
    if (this.state.keys.indexOf(this.props.note) !== -1) {
      classList += " active";
    }

    return (
        <li className={classList}></li>
    );
  }
});

module.exports = KeyPlayer;
