export interface CustomTheme {
  headerBg: string;
  sidebarBg: string;
  accentMain: string;
  accentHover: string;
  buttonHoverBg: string;
  colorActive: string;
}

export const darkCustom: CustomTheme = {
  headerBg: '#242424',
  sidebarBg: '#161617',
  accentMain: '#8b5cf6',
  accentHover: '#7c3aed',
  buttonHoverBg: '#2a2a2a',
  colorActive: '#454545',
};

export const lightCustom: CustomTheme = {
  headerBg: '#d7d7d7',
  sidebarBg: '#f2f2f2',
  accentMain: '#8b5cf6',
  accentHover: '#7c3aed',
  buttonHoverBg: '#ededed',
  colorActive: '#e5e5e5',
};
