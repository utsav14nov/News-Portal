import React from 'react';
import { PageHeader } from 'antd';


import {
  PAGE_SIZE
} from '../../constants';
import NewsCard from '../Common/NewsCard';

class TopNews extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render = () => {
    const {news,setNewsDetails,redirectToDetails} = this.props;

    return (
      <div>
        <PageHeader
          className="site-page-header"
          title="Top News"
          style={{margin: 'auto',width: '55%'}}
        >
        </PageHeader>
        {
          news.map((news,index) => {
            return <NewsCard info={news} 
                      setNewsDetails={setNewsDetails} 
                      redirectToDetails={redirectToDetails}
            />
          })
          
        }
      </div> 
    );
  };
}

export default (TopNews);
