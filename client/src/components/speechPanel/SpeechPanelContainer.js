import { connect } from 'react-redux';
import SpeechPanel from './SpeechPanel';

const mapStateToProps = state => ({
  loginned: state.loginPanel.loginned,
});

const SpeechPanelContainer = connect(mapStateToProps)(SpeechPanel);

export default SpeechPanelContainer;
