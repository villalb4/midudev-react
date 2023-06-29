import * as React from 'react';
import './Twitter.css';
import { twitterData } from './data';
import Card from '../../components/twitter/Card';

const Twitter: React.FC = () => {
  return (
    <div className="tw__component">
      <div className="tw__container">
        {twitterData?.map((e, i) => (
          <Card user={e} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Twitter;
