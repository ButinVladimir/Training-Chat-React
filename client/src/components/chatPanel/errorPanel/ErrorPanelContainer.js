import { connect } from 'react-redux';
import ErrorPanel from './ErrorPanel';
import { hideError } from '../../../redux/actions';

const mapStateToProps = state => ({
  error: state.errorPanel.error,
});

const mapDispatchToProps = dispatch => ({
  onCloseError: () => dispatch(hideError()),
});

const ErrorPanelContainer = connect(mapStateToProps, mapDispatchToProps)(ErrorPanel);

export default ErrorPanelContainer;
