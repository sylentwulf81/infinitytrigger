import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
import CodeIcon from "@mui/icons-material/Code";
import DevicesIcon from "@mui/icons-material/Devices";
import SecurityIcon from "@mui/icons-material/Security";

const MotionBox = motion(Box);

const features = [
  {
    icon: <CodeIcon sx={{ fontSize: 40 }} />,
    title: "Custom Development",
    description:
      "Tailored solutions that perfectly match your business needs and objectives.",
  },
  {
    icon: <DevicesIcon sx={{ fontSize: 40 }} />,
    title: "Cross-Platform",
    description: "Seamless experiences across all devices and platforms.",
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 40 }} />,
    title: "Secure & Reliable",
    description:
      "Enterprise-grade security and reliability for your peace of mind.",
  },
];

const Home = () => {
  const theme = useTheme();

  return (
    <Box>
      {/* Hero Section - Applying padding directly to this specific section */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
          color: "white",
          pt: { xs: 8, md: 12 },
          pb: { xs: 8, md: 12 },
          position: "relative",
          overflow: "hidden",
          px: {
            xs: 2,
            sm: 3,
            md: 4,
            lg: 6,
            xl: 8,
          },
          mx: `-${theme.spacing(3)}`,
          width: `calc(100% + ${theme.spacing(6)})`,
        }}
      >
        <Grid container spacing={4} alignItems="center">
          {/* @ts-ignore - Ignoring persistent MUI Grid type error */}
          <Grid item xs={12} md={6}>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography variant="h1" gutterBottom>
                Transforming Ideas into Digital Reality
              </Typography>
              <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
                Based in Nagano, Japan, we create innovative digital solutions
                that help businesses thrive in the modern world.
              </Typography>
              <Button
                component={RouterLink}
                to="/contact"
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "white",
                  color: "primary.main",
                  "&:hover": {
                    backgroundColor: "grey.100",
                  },
                }}
              >
                Get Started
              </Button>
            </MotionBox>
          </Grid>
        </Grid>
      </Box>

      {/* Features Section - Let Container handle padding */}
      <Box sx={{ pt: 8 }}>
        <Typography variant="h2" align="center" gutterBottom>
          Why Choose Us
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {features.map((feature, index) => (
            // @ts-ignore - Ignoring persistent MUI Grid type error
            <Grid item xs={12} md={4} key={index}>
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    p: 3,
                  }}
                >
                  <Box sx={{ color: "primary.main", mb: 2 }}>
                    {feature.icon}
                  </Box>
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      {feature.title}
                    </Typography>
                    <Typography color="text.secondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </MotionBox>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
