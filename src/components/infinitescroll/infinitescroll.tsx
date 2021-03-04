import { useEffect, useRef } from 'react';

type InfinitScroll = {
  loadmore: VoidFunction;
};

const InfineScroll = ({ loadmore }: InfinitScroll) => {
  const observerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '2000px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        observer.disconnect();
        loadmore();
      }
    }, options);

    observerRef.current && observer.observe(observerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [loadmore]);

  return <div ref={observerRef} />;
};

export default InfineScroll;
