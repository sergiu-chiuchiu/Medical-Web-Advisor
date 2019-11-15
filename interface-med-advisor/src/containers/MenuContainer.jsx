import { connect } from 'react-redux'
import Menu from '../components/menu/Menu'
import { toggleLoginDisplay, toggleRegisterDisplay } from '../actions/AuthenticationActions'

const mapStateToProps = (state) => ({
    ...state.authentication        
})

const mapDispatchToProps = dispatch => {
    return {
      toggleLoginDisplay: () => dispatch(toggleLoginDisplay()),
      toggleRegisterDisplay: () => dispatch(toggleRegisterDisplay())
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
