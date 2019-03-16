import React, { useEffect } from 'react';
import Chunk from '../../shared/Chunk';

// https://itnext.io/how-to-use-plain-three-js-in-your-react-apps-417a79d926e0

import HandShake from './HandShake';
import Hand from './Hand';

const LinkedIn = () => {
  useEffect(() => {
    console.log('loaded');
  }, []);
  return (
    <Chunk>
      LinkedIn
      <HandShake>
        <Hand />
        <Hand />
      </HandShake>
    </Chunk>
  );
};

export default LinkedIn;
