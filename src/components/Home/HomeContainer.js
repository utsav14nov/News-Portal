import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Home from './Home';
import { newsRequest, topNewsRequest, newsSourceRequest, setNewsDetailsAction } from '../../actions/homeAction';
const mapStateToProps = state => {
  const { home } = state;
  return {
    home
  };
};

const mapDispatchToProps = dispatch => ({
  dispatchNewsSource() {
    dispatch(newsSourceRequest());
  },
  dispatchTopNews(source) {
    dispatch(topNewsRequest(source));
  },
  dispatchNews(source,page) {
    dispatch(newsRequest(source,page));
  },
  dispatchNewsDetails(news) {
  	dispatch(setNewsDetailsAction(news))
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
