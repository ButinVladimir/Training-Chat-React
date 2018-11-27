import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Socket } from 'socket.io-client';
import SpeechField from './SpeechField';
import { changeSpeech, say, showError } from '../../../redux/actions';
import { SEND_MESSAGE } from '../../../helpers/socketEvents';
import getId from '../../../helpers/getId';
import getDate from '../../../helpers/getDate';

const mapStateToProps = state => ({
  speech: state.speechPanel.speech,
  to: state.speechPanel.to,
});

const mapDispatchToProps = dispatch => ({
  onChange: speechValue => dispatch(changeSpeech(speechValue)),
  dispatch,
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const mergedProps = {
    ...ownProps,
    ...stateProps,
    ...dispatchProps,
    onSay: () => {
      if (stateProps.speech) {
        ownProps.socket.emit(SEND_MESSAGE, stateProps.speech, stateProps.to);
        dispatchProps.dispatch(say(getId(), getDate()));
      } else {
        dispatchProps.dispatch(showError('Speech cannot be empty'));
      }
    },
  };

  delete mergedProps.dispatch;

  return mergedProps;
};

const SpeechFieldContainer = connect(mapStateToProps, mapDispatchToProps, mergeProps)(SpeechField);

SpeechFieldContainer.propTypes = {
  socket: PropTypes.instanceOf(Socket).isRequired,
};

export default SpeechFieldContainer;
