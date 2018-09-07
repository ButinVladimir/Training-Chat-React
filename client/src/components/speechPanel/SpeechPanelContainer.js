import { connect } from 'react-redux';
import SpeechPanel from './SpeechPanel';

const mapStateToProps = state => ({
  loginned: state.loginPanel.loginned,
  speech: state.speechPanel.speech,
  to: state.speechPanel.to,
});

const SpeechPanelContainer = connect(mapStateToProps)(SpeechPanel);

export default SpeechPanelContainer;
