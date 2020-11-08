import React from 'react';
import { Card, PageHeader, Descriptions } from 'antd';
import {convertDateToLocal} from '../../utils/dateTime';
import TopNews from '../Common/TopNews';

const { Meta } = Card;

class NewsDetails extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
    };
  }

  render = () => {
    const {info} = this.props;
    return (
      <div style={{ width: '70%',margin: 'auto', padding:'1%'}}>
        <PageHeader
          className="site-page-header"
          title={info.title}
          style={{margin: 'auto',width: '90%'}}
        >
        </PageHeader>
        <Card
          bordered={true}
          cover={
            <img
              alt={info.title}
              src={info.urlToImage}
            />
          }
        >
          <div style={{color:'gray',display: 'inline-block',width: '100%'}}>
            <div style={{float:'left'}}><b>Published At:</b> {convertDateToLocal(info.publishedAt)}</div>
            <div style={{float:'right'}}><b>Author:</b> {info.author}</div>
          </div>
          <div style={{padding:'20px'}}>
            <div>
              <p>
                <b>{info.description}</b>
              </p>
            </div>
            <div>
              <p>{info.content}</p>
            </div>
            <div>
              <p><a href={info.url}>Checkout full story</a></p>
            </div>
          </div>
        </Card>
      </div>
    );
  };
}

export default NewsDetails;
