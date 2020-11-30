import React from 'react';
import { Popconfirm } from 'antd';
import { withRouter } from 'react-router-dom';
import './PopUp.css';

const PopUp = ({ func }) => {
  const text = 'Are you sure to delete this article?';

  const confirm = () => {
    func()
  }

  return (
    <Popconfirm placement="rightTop" title={text}
      onConfirm={confirm} okText="Yes" cancelText="No">
      <button className='delArticle'>Delete</button>
    </Popconfirm>
  )
}

export default PopUp;