import React from 'react';
import { Spin } from 'antd';
import './Spinner.css';

const Spinner = ({ tip = null }) => (
  <div className='spinner'>
    <Spin tip={tip} size='large'/>
  </div>
)

export default Spinner;