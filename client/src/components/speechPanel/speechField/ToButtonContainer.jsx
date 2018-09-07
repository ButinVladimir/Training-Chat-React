import { connect } from 'react-redux';
import ToButton from './ToButton';
import { removeTo } from '../../../redux/actions';

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch, ownProps) => ({
  onRemoveTo: () => dispatch(removeTo(ownProps.to)),
});

const ToButtonContainer = connect(mapStateToProps, mapDispatchToProps)(ToButton);

export default ToButtonContainer;
