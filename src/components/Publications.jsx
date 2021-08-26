import React, { useContext } from 'react';
import { Card, Col, Icon, Row } from 'antd/es';

import AppContext from 'context/AppContext';
import DescriptionModal from 'components/modals/DescriptionModal';

const Publications = () => {
  const state = useContext(AppContext);

  const [modalVisible, setModalVisible] = React.useState(false);

  const openPreview = (postNumber) => {
    state.previewItem = postNumber
    state.previewPublicationModal = true
    setModalVisible(true)
  }

  return (<>
    <p>{state.previewPublicationModal}</p>
    <DescriptionModal modalVisible={modalVisible} />
    <Row type="flex" justify="center">
      <Col sm={18} xs={24}>
        <Col span={24} className="container text-center">
          <h2>
            <Icon type="save" />
            <span className="span-icon">Publications</span>
          </h2>
          {
            state.profileData.posts.map((post, index) => (
              <Card bordered className="card-pubs" key={post.id} onClick={() => openPreview(index + 1)}>
                <img src={post.imageUrl} 
                      width={200} 
                      height={200} 
                      alt={post.imageUrl} />
              </Card>
            ))
          }
        </Col>
      </Col>
    </Row>
  </>);
};

export default Publications;