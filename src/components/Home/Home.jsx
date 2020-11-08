import React from 'react';
import { Layout, Menu, Pagination } from 'antd';


import {
  PAGE_SIZE
} from '../../constants';
import NewsCard from '../Common/NewsCard';
import TopNews from '../Common/TopNews';

const { Header, Content, Footer } = Layout;

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      currentPage:1,
      currentSource:0,
      currentNews:[],
      totalNewsResult:0,
      currentTopNews:[]
    };
  }

  componentDidMount() {
    this.props.dispatchNewsSource()
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.home.newsSourceRequestStatus != this.props.home.newsSourceRequestStatus 
        && this.props.home.newsSourceRequestStatus === true){
      const firstSource = {key:this.state.currentSource}
      this.handleSourceChange(firstSource)
    }
    if(prevProps.home.newsRequestStatus != this.props.home.newsRequestStatus 
        && this.props.home.newsRequestStatus === true){
      const {home} = this.props;
      const {news, totalNewsResult} = home;
      this.setState({currentNews:news,totalNewsResult})
    }
    if(prevProps.home.topNewsRequestStatus != this.props.home.topNewsRequestStatus 
        && this.props.home.topNewsRequestStatus === true){
      const {home} = this.props;
      const {topNews} = home;
      this.setState({currentTopNews:topNews})
    }
  }

  handleSourceChange = e => {
    const {home} = this.props;
    const {newsSource} = home;
    
    const {currentPage} = this.state;

    this.props.dispatchNews(newsSource[e.key].id,1);
    this.props.dispatchTopNews(newsSource[e.key].id);

    this.setState({ currentSource: e.key,currentPage:1 });
  };

  handlePageChange = page => {
    const {home} = this.props;
    const {newsSource} = home;

    this.props.dispatchNews(newsSource[this.state.currentSource].id,page);
    this.setState({ currentPage: page});
  }

  redirectToDetails = () => {
     this.props.history.push('/details');
  }

  render = () => {
    const {home, dispatchNewsDetails} = this.props;
    const {newsSource} = home;

    const {currentNews,totalNewsResult,currentPage,currentTopNews} = this.state;

    return (
      <Layout className="layout" style={{ margin: 'auto'}}>
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']} onClick={this.handleSourceChange}>
            {
              newsSource.map((source,index) => {
                return <Menu.Item key={index}>{source.name}</Menu.Item>
              })
            }
          </Menu>
        </Header>
        <Content>
          <div className="site-layout-content">
            <div style={{display:'flex'}}>
              <div style={{width:'20%'}}>
                <TopNews news={currentTopNews} 
                        setNewsDetails={dispatchNewsDetails} 
                        redirectToDetails={this.redirectToDetails}
                />
              </div>
              <div style={{ margin: 'auto',width: '50%' ,padding: '10px'}}>
                <Pagination 
                  showSizeChanger={false}
                  current={this.state.current} 
                  onChange={this.handlePageChange} 
                  total={totalNewsResult} 
                  defaultPageSize={PAGE_SIZE}
                  current={currentPage}
                  defaultCurrent={currentPage}
                />
                {
                  currentNews.map((news,index) => {
                    return <NewsCard 
                        info={news} 
                        setNewsDetails={dispatchNewsDetails} 
                        redirectToDetails={this.redirectToDetails}
                      />
                  })
                }
              </div>
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Copyright Utsav@2020</Footer>
      </Layout>
    );
  };
}

export default (Home);
