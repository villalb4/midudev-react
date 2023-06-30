import * as React from 'react';
import './Card.css';
import { ITwitterData } from '../../pages/twitter/data';
import FollowButton from './followButton/FollowButton';

interface CardProps {
  user: ITwitterData;
}

const Card: React.FC<CardProps> = ({ user }) => {
  const [isFollowing, setIsFollowing] = React.useState<boolean>(false);

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <div className="twCard__component">
      <div className="twCard__firsChild">
        <div className="twCard__profilePhotoContainer">
          <img src={user.profilePhoto} alt="profile photo" />
        </div>
        <div className="twCard__namesContainer">
          <strong>{user.name}</strong>
          <span>{user.userName}</span>
        </div>
      </div>
      <div className="twCard__secondChild">
        <FollowButton handleFollow={handleFollow} isFollowing={isFollowing} />
      </div>
    </div>
  );
};

export default Card;
