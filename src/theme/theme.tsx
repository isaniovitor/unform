import { ThemeProvider } from 'styled-components';

const theme = {
  fonts: {
    primary: 'sans-serif',
    secondary: 'Roboto',
  },
};

export type ThemeType = typeof theme;

export const Theme: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
