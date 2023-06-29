import * as React from 'react';
import './Card.css';
import { ITwitterData } from '../../pages/twitter/data';

interface CardProps {
  user: ITwitterData;
}

const Card: React.FC<CardProps> = ({ user }) => {
  return (
    <div>
      <div>
        <span>{user.userName}</span>
      </div>
    </div>
  );
};

export default Card;
