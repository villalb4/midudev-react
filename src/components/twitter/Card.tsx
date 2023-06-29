import * as React from 'react';
import './Card.css';
import { ITwitterData } from '../../pages/twitter/data';

interface CardProps {
  user: ITwitterData;
}

const Card: React.FC<CardProps> = ({ user }) => {
  const [isFollowing, setIsFollowing] = React.useState<boolean>(false);

  const buttonText = isFollowing ? 'Siguiendo' : 'Seguir';
  const buttonClassName = isFollowing ? 'twButton active' : 'twButton';

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
          <span>{user.name}</span>
          <span>{user.userName}</span>
        </div>
      </div>
      <div className="twCard__secondChild">
        <button onClick={handleFollow} className={buttonClassName}>
          <span className={'twCard__buttonContent'}>{buttonText}</span>
          <span className={'twCard__buttonContentUnfollow'}>
            Dejar de seguir
          </span>
        </button>
      </div>
    </div>
  );
};

export default Card;
