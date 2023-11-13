import React from 'react';

interface HashtagProps {
  hashtags: string[];
  colors?: string[];
}

const HashtagList: React.FC<HashtagProps> = ({ 
  hashtags, 
  colors = ['#26DCD0', '#EE5573', '#F8E47F', '#FFF', '#D30079', '#97F36B'] 

}) => {
  const getRandomColor = (): string => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div>
      {hashtags.map((hashtag, index) => (
        <span
          key={index}
          style={{
            color: getRandomColor(),
            display: 'inline-block'
          }}
          className='transition-all duration-300 ease-in-out cursor-default font-medium mt-1'
        >
          #{hashtag}
          {index !== hashtags.length - 1 && ', '} &nbsp;
        </span>
      ))}
    </div>
  );
};

export default HashtagList;
