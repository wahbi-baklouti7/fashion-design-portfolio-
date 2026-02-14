import React, { useRef, useEffect, useState } from 'react';

// Transparent 1x1 pixel base64 to prevent broken image icon while loading
const PLACEHOLDER_SRC = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, className, ...props }) => {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (imgRef.current) observer.unobserve(imgRef.current);
          }
        });
      },
      {
        rootMargin: '100px', // Start loading when image is 100px away from viewport
        threshold: 0.01,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <img
      ref={imgRef}
      src={isVisible ? src : PLACEHOLDER_SRC}
      className={className}
      {...props}
    />
  );
};

export default LazyImage;
