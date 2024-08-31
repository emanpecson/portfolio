'use client';

import * as React from 'react';
import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <button onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>
      {resolvedTheme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
