import React from 'react';
import Card from '../../ui/card';
import { getLocalDate } from '../../../utils';
import { articles } from '../../../../mock-data';


const Main = () => {
  return (
    <div className="main">
      <div className="main__header">Сегодня {getLocalDate()}</div>
      <div className="main__line"></div>
      {articles.map((article) => (
        <Card key={article._id} {...article} />
      ))}
    </div>
  );
};

export default Main;
