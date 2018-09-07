import { connect } from 'react-redux';
import SpeechField from './SpeechField';
import { changeSpeech, say, removeTo } from '../../../redux/actions';

const mapStateToProps = state => ({
  speech: state.speechPanel.speech,
  to: state.speechPanel.to,
});

const mapDispatchToProps = dispatch => ({
  onChange: speechValue => dispatch(changeSpeech(speechValue)),
  onSay: () => dispatch(say()),
  onRemoveTo: recipient => dispatch(removeTo(recipient)),
});

const SpeechFieldContainer = connect(mapStateToProps, mapDispatchToProps)(SpeechField);

export default SpeechFieldContainer;
