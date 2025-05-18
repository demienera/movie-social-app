// src/types/theme.d.ts
import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    custom: {
      colorActive: string;
      headerBg: string;
      sidebarBg: string;
      accentMain: string;
      accentHover: string;
      buttonHoverBg: string;
    };
  }

  interface ThemeOptions {
    custom?: {
      headerBg?: string;
      sidebarBg?: string;
      accentMain?: string;
      accentHover?: string;
      buttonHoverBg?: string;
      colorActive?: string;
    };
  }
}
