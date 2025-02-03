import React from 'react';

interface TestProps {
  className?: string;
}

const Test: React.FC<TestProps> = ({ className }) => {
  return <div className={className}>Test Component</div>;
};

export default Test;
