'use client';

import React, { useState, useEffect } from 'react';

export default function CursorEffect() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setPosition({ x: ev.clientX, y: ev.clientY });
    };

    document.addEventListener('mousemove', updateMousePosition);

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <div
      className="h-[50rem] w-[50rem] bg-blue-800 blur-[200px] rounded-full fixed pointer-events-none -z-50 -translate-x-96 -translate-y-96 opacity-20"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  );
}
