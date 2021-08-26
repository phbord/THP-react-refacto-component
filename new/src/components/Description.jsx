import React from 'react';

const Description = () => {
  return (<>
    <Row type="flex" justify="center">
      <Col sm={18} xs={24}>
        <Col span={24} className="container text-center">
          <h2>
            <Icon type="save" />
            <span className="span-icon">Publications</span>
          </h2>
          <Card bordered className="card-pubs" onClick={() => this.openPreview(0)}>
            <img src={this.state.profileData.posts[0].imageUrl} width={200} height={200} alt={this.state.profileData.posts[0].imageUrl} />
          </Card>
          <Card bordered className="card-pubs" onClick={() => this.openPreview(1)}>
            <img src={this.state.profileData.posts[1].imageUrl} width={200} height={200} alt={this.state.profileData.posts[1].imageUrl} />
          </Card>
          <Card bordered className="card-pubs" onClick={() => this.openPreview(2)}>
            <img src={this.state.profileData.posts[2].imageUrl} width={200} height={200} alt={this.state.profileData.posts[2].imageUrl} />
          </Card>
        </Col>
      </Col>
    </Row>
  </>);
};

export default Description;