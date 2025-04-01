import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import WebIcon from "@mui/icons-material/Web";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import CloudIcon from "@mui/icons-material/Cloud";
import DataObjectIcon from "@mui/icons-material/DataObject";
import SecurityIcon from "@mui/icons-material/Security";
import SpeedIcon from "@mui/icons-material/Speed";

const MotionBox = motion(Box);

const services = [
  {
    icon: <WebIcon sx={{ fontSize: 40 }} />,
    title: "Web Development",
    description:
      "Modern, responsive websites and web applications built with cutting-edge technologies.",
  },
  {
    icon: <PhoneIphoneIcon sx={{ fontSize: 40 }} />,
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android.",
  },
  {
    icon: <CloudIcon sx={{ fontSize: 40 }} />,
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure and deployment solutions for your applications.",
  },
  {
    icon: <DataObjectIcon sx={{ fontSize: 40 }} />,
    title: "API Development",
    description:
      "Robust and well-documented APIs that power your digital ecosystem.",
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 40 }} />,
    title: "Security Services",
    description:
      "Comprehensive security solutions to protect your digital assets.",
  },
  {
    icon: <SpeedIcon sx={{ fontSize: 40 }} />,
    title: "Performance Optimization",
    description: "Optimize your applications for maximum speed and efficiency.",
  },
];

const Services = () => {
  const theme = useTheme();

  return (
    <Box>
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h2" align="center" gutterBottom>
          Our Services
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          sx={{ mb: 8 }}
        >
          Comprehensive digital solutions for your business needs
        </Typography>
      </MotionBox>

      <Grid container spacing={4}>
        {services.map((service, index) => (
          // @ts-ignore - Ignoring persistent MUI Grid type error
          <Grid item xs={12} md={6} lg={4} key={index}>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  p: 3,
                  transition: "transform 0.2s",
                  "&:hover": {
                    transform: "translateY(-8px)",
                  },
                }}
              >
                <Box sx={{ color: "primary.main", mb: 2 }}>{service.icon}</Box>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </MotionBox>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
