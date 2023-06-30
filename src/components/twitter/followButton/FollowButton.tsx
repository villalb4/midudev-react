import * as React from 'react';
import './FollowButton.css';

interface FollowButtonProps {
  handleFollow: () => void;
  isFollowing: boolean;
}

const FollowButton: React.FC<FollowButtonProps> = ({
  handleFollow,
  isFollowing,
}) => {
  const buttonText = isFollowing ? 'Siguiendo' : 'Seguir';
  const buttonClassName = isFollowing ? 'twButton active' : 'twButton';

  return (
    <div>
      <button onClick={handleFollow} className={buttonClassName}>
        <span className={'twCard__buttonContent'}>{buttonText}</span>
        <span className={'twCard__buttonContentUnfollow'}>Dejar de seguir</span>
      </button>
    </div>
  );
};

export default FollowButton;
