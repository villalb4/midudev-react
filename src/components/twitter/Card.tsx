import * as React from 'react';
import './Card.css';
import { ITwitterData } from '../../pages/twitter/data';

interface CardProps {
  user: ITwitterData;
}

const Card: React.FC<CardProps> = ({ user }) => {
  const [isFollowing, setIsFollowing] = React.useState<boolean>(false);

  const buttonText = user.follow ? 'Siguiendo' : 'Seguir';

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <div>
      <div>
        <span>{user.userName}</span>
      </div>
      <div>
        <button onClick={handleFollow}>
          <span>{buttonText}</span>
        </button>
      </div>
    </div>
  );
};

export default Card;
