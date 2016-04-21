var React = require("react"),
    KeyActions = require("../actions/organ_actions.js"),
    KeyStore = require("../stores/KeyStore.js"),
    Note = require('../util/Note.js'),
    TONES = require('../constants/Tones.js'),
    KeyPlayer = require('./key_component.js');

var liClasses = {
      'white': true,
      'b': true
    };


    var Organ = React.createClass({
      render: function() {
        return (
          <ul className="set">
            <KeyPlayer color="white" note="B"/>
            <KeyPlayer color="black" note="As"/>
            <KeyPlayer color="white" note= "A"/>
            <KeyPlayer color="black" note= "Gs"/>
            <KeyPlayer color="white" note= "G"/>
            <KeyPlayer color="black" note= "Fs"/>
            <KeyPlayer color="white" note= "F"/>
            <KeyPlayer color="white" note= "E"/>
            <KeyPlayer color="black" note= "Ds"/>
            <KeyPlayer color="white" note= "D"/>
            <KeyPlayer color="black" note= "Cs"/>
            <KeyPlayer color="white" note= "C"/>
          </ul>
        );
      }
    });

module.exports = Organ;
