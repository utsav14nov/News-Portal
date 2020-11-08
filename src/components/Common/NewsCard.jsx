import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

class NewsCard extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
    };
  }

  handleClick = (e) => {
    const {info} = this.props;
    this.props.setNewsDetails(info)
    this.props.redirectToDetails()
  }

  render = () => {
    const {info} = this.props;
    return (
      <div style={{ width: '70%',margin: 'auto', padding:'1%'}}>
        <Card
          bordered={true}
          onClick={this.handleClick}
          hoverable={true}
          cover={
            <img
              alt={info.title}
              src={info.urlToImage}
            />
          }
        >
          <Meta
            title={info.title}
          />
        </Card>
      </div>
    );
  };
}

export default NewsCard;
