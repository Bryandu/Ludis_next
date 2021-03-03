import { useEffect, useRef } from 'react';

type InfinitScroll = {
  loadmore: VoidFunction;
};

const InfineScroll = ({ loadmore }: InfinitScroll) => {
  const observerRef = useRef<HTMLDivElement>();
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        observer.disconnect();
        loadmore();
      }
    }, options);

    observer.observe(observerRef.current);
    console.log(observerRef);

    return () => {
      observer.disconnect();
    };
  }, [loadmore]);

  return <div ref={observerRef} />;
};

export default InfineScroll;
