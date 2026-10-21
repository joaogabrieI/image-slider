import { useCallback, useEffect, useState } from 'react';

// Chave compartilhada com o script inline e o useTheme.
export const THEME_STORAGE_KEY = 'wild-stories:theme';

// O tema já foi aplicado no <html> por public/theme.js (ou pelo useTheme),
// então basta ler o estado atual como valor inicial.
function getInitialTheme() {
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
}

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const isDark = theme === 'dark';
    document.documentElement.classList.toggle('dark', isDark);
    // Atualiza a cor da barra do navegador (mobile) conforme o tema.
    document.querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', isDark ? '#120d22' : '#faf8ff');
  }, [theme]);

  // Salva a escolha só quando o usuário troca manualmente; enquanto isso,
  // mudanças no tema do sistema são acompanhadas automaticamente.
  const changeTheme = useCallback((next) => {
    setTheme(next);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      /* armazenamento indisponível */
    }
  }, []);

  const toggleTheme = useCallback(() => {
    changeTheme(getInitialTheme() === 'dark' ? 'light' : 'dark');
  }, [changeTheme]);

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    function handleChange(event) {
      let saved = null;
      try {
        saved = localStorage.getItem(THEME_STORAGE_KEY);
      } catch {
        /* armazenamento indisponível */
      }
      // Uma preferência explícita do usuário sempre vence o sistema.
      if (!saved) setTheme(event.matches ? 'dark' : 'light');
    }
    media.addEventListener('change', handleChange);
    return () => media.removeEventListener('change', handleChange);
  }, []);

  return { theme, setTheme: changeTheme, toggleTheme };
}
