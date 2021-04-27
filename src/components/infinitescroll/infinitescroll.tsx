import { useEffect, useRef } from 'react';

type InfiniteScroll = {
  loadmore: VoidFunction;
};

const InfiniteScroll = ({ loadmore }: InfiniteScroll) => {
  const observerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '2000px',
      threshold: 1
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

export default InfiniteScroll;
