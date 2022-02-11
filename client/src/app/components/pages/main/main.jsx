import React from 'react';
import Card from '../../ui/card';
import { getLocalDate } from '../../../utils';

const array = [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15];

const Main = () => {
  return (
    <div className="main">
      <div className="main__header">Сегодня {getLocalDate()}</div>
      <div className="main__line"></div>
      {array.map((num) => (
        <Card key={num} />
      ))}
    </div>
  );
};

export default Main;
