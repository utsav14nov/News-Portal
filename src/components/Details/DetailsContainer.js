import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Details from './Details';
import { setNewsDetailsAction } from '../../actions/homeAction';

const mapStateToProps = state => {
  const { home, details } = state;
  return {
    home,
    details
  };
};

const mapDispatchToProps = dispatch => ({
  dispatchNewsDetails(news) {
  	dispatch(setNewsDetailsAction(news))
  }
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Details)
);
