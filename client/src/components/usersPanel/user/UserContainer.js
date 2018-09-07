import { connect } from 'react-redux';
import User from './User';
import { addTo } from '../../../redux/actions';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClickUser: () => dispatch(addTo(ownProps.user)),
});

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(User);

export default UserContainer;
