import * as React from 'react';
import './Preview.css';
import { ITwitterData } from '../../../pages/twitter/data';
import FollowButton from '../followButton/FollowButton';

interface PreviewProps {
  user: ITwitterData;
  isOpen: (boolean: boolean) => void;
}

const Preview: React.FC<PreviewProps> = ({ user, isOpen }) => {
  const [isFollowing, setIsFollowing] = React.useState<boolean>(user.follow);

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <div
      className="preview__component"
      onMouseEnter={() => isOpen(true)}
      onMouseLeave={() => isOpen(false)}
    >
      <div className="preview__topContainer">
        <div>
          <img src={user.profilePhoto} alt="profile photo" />
        </div>
        <FollowButton handleFollow={handleFollow} isFollowing={isFollowing} />
      </div>
      <div>
        <strong>{user.name}</strong>
        <span>{user.userName}</span>
      </div>
      <p>{user.biographies}</p>
    </div>
  );
};

export default Preview;
