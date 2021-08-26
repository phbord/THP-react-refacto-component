import React, { useContext } from 'react';
import { Col, Row, Modal, Input, message } from 'antd/es';

import AppContext from 'context/AppContext';

const PublicationsEditAccountModal = () => {
  const state = useContext(AppContext);

  updateProfile = () => {
    let tmp = state.profileData;
    tmp.email = state.email;
    tmp.firstname = state.firstname;
    tmp.lastname = state.lastname;
    tmp.phoneNumber = state.phoneNumber;
    setState({ profileData: tmp, editProfilModal: false });
    message.success('Profile well updated', 3);
  }

  return (<>
    <Modal title="Upload a picture" okText="Upload" visible={state.uploadModal} onOk={uploadPicture} onCancel={() => setState({ uploadModal: false })}>
      <Row type="flex" justify="center" className="input-container">
        <Col span={20}>
          <b>Description:</b>
          <Input id="description" title="Description" type="text" value={state.description} onChange={(e) => setState({ description: e.target.value })} />
        </Col>
      </Row>
      <MentionsTagsComponent type="mentions" value={state.mentions} title="Mention a user" setValue={updateMentions} />
      <MentionsTagsComponent type="tags" value={state.hashtags} title="Hashtags" setValue={updateHashtags} />
    </Modal>
    <Modal title="Edit your account" okText="Update" visible={state.editProfilModal} onOk={updateProfile} onCancel={() => setState({ editProfilModal: false })}>
      <Row type="flex" justify="center" className="input-container">
        <Col span={20}>
          <b>EMail</b>
          <Input id="email" type="text" value={state.email} onChange={(e) => setState({ email: e.target.value })} />
        </Col>
      </Row>
      <Row type="flex" justify="center" className="input-container">
        <Col span={20}>
          <b>Firstname</b>
          <Input id="firstname" type="text" value={state.firstname} onChange={(e) => setState({ firstname: e.target.value })} />
        </Col>
      </Row>
      <Row type="flex" justify="center" className="input-container">
        <Col span={20}>
          <b>Lastname</b>
          <Input id="lastname" type="text" value={state.lastname} onChange={(e) => setState({ lastname: e.target.value })} />
        </Col>
      </Row>
      <Row type="flex" justify="center" className="input-container">
        <Col span={20}>
          <b>Phone number</b>
          <Input id="email" type="text" value={state.phoneNumber} onChange={(e) => setState({ phoneNumber: e.target.value })} />
        </Col>
      </Row>
    </Modal>
  </>);
};

export default PublicationsEditAccountModal;