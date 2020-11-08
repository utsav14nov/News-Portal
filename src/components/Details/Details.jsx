import React from 'react';
import { Layout, Menu, Pagination } from 'antd';

import {
  API_BASE_URL
} from '../../constants';
import NewsDetails from '../Common/NewsDetails';
import TopNews from '../Common/TopNews';

const { Header, Content, Footer } = Layout;

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
    };
  }
  
  redirectToDetails = () => {
     this.props.history.push('/details');
  }

  render = () => {
    const {details, home, dispatchNewsDetails} = this.props;
    const {newsDetails} = details;
    const {topNews} = home

    return (
      <Layout className="layout" style={{ margin: 'auto'}}>
        <Content>
          <div style={{display:'flex'}}>
            <div style={{width:'20%'}}>
              <TopNews news={topNews} 
                       setNewsDetails={dispatchNewsDetails} 
                       redirectToDetails={this.redirectToDetails}
              />
            </div>
            <div className="site-layout-content">
              <NewsDetails info={newsDetails} showDetails={true}/>
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Copyright Utsav@2020</Footer>
      </Layout>
    );
  };
}

export default (Details);
