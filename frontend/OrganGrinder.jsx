var React = require('react');
var ReactDOM = require('react-dom');
var Note = require('./util/Note.js');
var KeyStore = require('./stores/KeyStore.js');
var KeyPlayer = require('./components/key_component.js');
var Organ = require('./components/organ_component.jsx');


window.NoteTest = new Note(98);
window.KeyListener = require('./util/KeyListener.js');


document.addEventListener('DOMContentLoaded', function(){
  ReactDOM.render(
    React.createElement(Organ, {}),
    document.getElementById('root')
  );
}, false);
