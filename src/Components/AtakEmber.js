import React, { useState } from 'react';
import { useSpring, animated, useTrail } from '@react-spring/web';
import ember from '../gifs/ember.gif'

function Ember() {
  const [isActive, setIsActive] = useState(false);
  const [width, setWidth] = useSpring(() => ({ width: '50px' }));
const [transform, setTransform] = useSpring(() => ({ transform: 'scale(1)' }));
  const [translate, setTranslate] = useSpring(() => ({ transform: 'translate3d(0,0,0)' }));
  // const [color, setColor] = useSpring(() => ({ background: 'white' }));
  return (
    <div>
      <animated.img
  src={ember}
  style={{ ...width, ...transform, ...translate, }}
  onClick={() => {
    setWidth({ width: isActive ? '50px' : '100px' });
    setTransform({ transform: isActive ? 'scale(1)' : 'scale(2)' });
    setTranslate({ transform: isActive ? 'translate3d(0,0,0)' : 'translate3d(100px, -50px, 0)' });
    
    setIsActive(!isActive);
  }}
/>

    </div>
  );
}
export default Ember;

