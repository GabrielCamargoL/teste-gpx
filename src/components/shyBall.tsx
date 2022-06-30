import { useEffect, useLayoutEffect, useRef, useState } from 'react';

import '../assets/styles/pages/shyBall/shyBall.css';

export default function ShyBall() {
  const refContainer = useRef<HTMLHeadingElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (refContainer.current) {
      setDimensions({
        width: refContainer.current.offsetWidth,
        height: refContainer.current.offsetHeight
      });
    }
  }, []);

  function moveBall(e: any) {
    e.target.style.transform = `translate(${Math.random() * (dimensions.width - 50)}px, ${Math.random() * (dimensions.height - 50)}px)`;
    console.log(e.target.style.transform)
    e.target.style.transitionDuration = 1 + 's';
  }

  return (
    <>
      <div ref={refContainer} className='shyBall-container'>
        <div className='shyBall' onMouseEnter={(e) => moveBall(e)}></div>
      </div>
    </>
  )
};