import React from 'react';
import { Pagination } from 'antd';
import './Navigation.css';

const Navigation = (props) => {
  const {
    totalArticles, currentPage, nextPage,
  } = props;

  return (
    <Pagination
      size="small"
      current={currentPage}
      total={totalArticles}
      pageSize='20'
      onChange={(page) => { nextPage(page); }}
    />
  );
};
export default Navigation;