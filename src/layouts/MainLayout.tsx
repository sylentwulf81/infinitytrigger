import { ReactNode } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink } from "react-router-dom";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <AppBar position="sticky" color="default" elevation={1}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              component={RouterLink}
              to="/"
              sx={{
                flexGrow: 1,
                textDecoration: "none",
                color: "primary.main",
                fontWeight: 700,
              }}
            >
              Infinity Trigger
            </Typography>

            {isMobile ? (
              <IconButton color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: "flex", gap: 2 }}>
                <Button color="inherit" component={RouterLink} to="/">
                  Home
                </Button>
                <Button color="inherit" component={RouterLink} to="/services">
                  Services
                </Button>
                <Button color="inherit" component={RouterLink} to="/about">
                  About
                </Button>
                <Button color="inherit" component={RouterLink} to="/contact">
                  Contact
                </Button>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Container
        component="main"
        maxWidth="xl"
        sx={{ flexGrow: 1, py: { xs: 4, md: 8 } }}
      >
        {children}
      </Container>

      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: (theme) => theme.palette.grey[100],
        }}
      >
        <Container maxWidth="xl">
          <Typography variant="body2" color="text.secondary" align="center">
            © {new Date().getFullYear()} Infinity Trigger. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default MainLayout;
