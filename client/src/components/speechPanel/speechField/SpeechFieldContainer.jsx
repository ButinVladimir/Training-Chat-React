import { connect } from 'react-redux';
import SpeechField from './SpeechField';
import { changeSpeech, say } from '../../../redux/actions';

const mapStateToProps = state => ({
  speech: state.speechPanel.speech,
  to: state.speechPanel.to,
});

const mapDispatchToProps = dispatch => ({
  onChange: speechValue => dispatch(changeSpeech(speechValue)),
  onSay: () => dispatch(say(`${Math.random() * Math.PI}-${Date.now()}`, (new Date(Date.now()).toLocaleString()))),
});

const SpeechFieldContainer = connect(mapStateToProps, mapDispatchToProps)(SpeechField);

export default SpeechFieldContainer;
