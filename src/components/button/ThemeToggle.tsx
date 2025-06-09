import { useTheme } from 'next-themes';
import IconButton from './IconButton';
import { MoonIcon, SunIcon } from 'lucide-react';

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <IconButton
      icon={resolvedTheme === 'dark' ? MoonIcon : SunIcon}
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    />
  );
}
