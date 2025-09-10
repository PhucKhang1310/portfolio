import { Progress } from 'antd';
import { useState, useEffect } from 'react';

interface ScrollProgressBarProps {
  color?: string;
  height?: number;
  position?: 'top' | 'bottom';
}

const ScrollProgressBar = ({ 
  color = "rgba(0, 174, 197, 1)", 
}: ScrollProgressBarProps) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(Math.max(progress, 0), 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Progress 
      percent={scrollProgress} 
      showInfo={false}
      strokeColor={color}
      trailColor="rgba(255,255,255,0.1)"
      size="small"
    />
  );
};

export default ScrollProgressBar;