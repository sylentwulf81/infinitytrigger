import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#2563eb", // A modern blue color
      light: "#60a5fa",
      dark: "#1d4ed8",
    },
    secondary: {
      main: "#7c3aed", // A complementary purple
      light: "#a78bfa",
      dark: "#5b21b6",
    },
    background: {
      default: "#ffffff",
      paper: "#f8fafc",
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: "3rem",
    },
    h2: {
      fontWeight: 600,
      fontSize: "2.5rem",
    },
    h3: {
      fontWeight: 600,
      fontSize: "2rem",
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.7,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          fontWeight: 500,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow:
            "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        },
      },
    },
  },
});
