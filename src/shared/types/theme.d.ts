// src/types/theme.d.ts
import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    custom: {
      header: string;
      sidebar: string;
      colorAccent: string;
      buttonHoverBg?: string;
    };
  }

  interface ThemeOptions {
    custom?: {
      header?: string;
      sidebar?: string;
      colorAccent?: string;
      buttonHoverBg?: string;
    };
  }
}
