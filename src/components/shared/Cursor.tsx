import React, { useEffect, useState } from 'react';

interface Position {
  x: number;
  y: number;
}

const Cursor: React.FC = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    ></div>
  );
};

export default Cursor;
