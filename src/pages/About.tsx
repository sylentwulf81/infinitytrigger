import { Box, Typography, Grid, Avatar, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GroupsIcon from "@mui/icons-material/Groups";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";

const MotionBox = motion(Box);

const team = [
  {
    name: "Team Member 1",
    role: "Lead Developer",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Team Member 2",
    role: "UI/UX Designer",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Team Member 3",
    role: "Backend Developer",
    image: "https://via.placeholder.com/150",
  },
];

const About = () => {
  const theme = useTheme();

  return (
    <Box>
      {/* Hero Section */}
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        sx={{ mb: 8 }}
      >
        <Typography variant="h2" align="center" gutterBottom>
          About Infinity Trigger
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          sx={{ maxWidth: "800px", mx: "auto" }}
        >
          We are a passionate team of developers and designers based in Nagano,
          Japan, dedicated to creating exceptional digital experiences.
        </Typography>
      </MotionBox>

      {/* Values Section */}
      <Grid container spacing={4} sx={{ mb: 8 }}>
        {/* @ts-ignore - Ignoring persistent MUI Grid type error */}
        <Grid item xs={12} md={4}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            sx={{ textAlign: "center" }}
          >
            <LocationOnIcon
              sx={{ fontSize: 40, color: "primary.main", mb: 2 }}
            />
            <Typography variant="h5" gutterBottom>
              Local Expertise
            </Typography>
            <Typography color="text.secondary">
              Based in Nagano, we understand the local market and provide
              tailored solutions for Japanese businesses while serving clients
              worldwide.
            </Typography>
          </MotionBox>
        </Grid>
        {/* @ts-ignore - Ignoring persistent MUI Grid type error */}
        <Grid item xs={12} md={4}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            sx={{ textAlign: "center" }}
          >
            <GroupsIcon sx={{ fontSize: 40, color: "primary.main", mb: 2 }} />
            <Typography variant="h5" gutterBottom>
              Collaborative Approach
            </Typography>
            <Typography color="text.secondary">
              We work closely with our clients to understand their needs and
              deliver solutions that exceed expectations.
            </Typography>
          </MotionBox>
        </Grid>
        {/* @ts-ignore - Ignoring persistent MUI Grid type error */}
        <Grid item xs={12} md={4}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            sx={{ textAlign: "center" }}
          >
            <EmojiObjectsIcon
              sx={{ fontSize: 40, color: "primary.main", mb: 2 }}
            />
            <Typography variant="h5" gutterBottom>
              Innovation First
            </Typography>
            <Typography color="text.secondary">
              We stay at the forefront of technology to deliver cutting-edge
              solutions that give our clients a competitive edge.
            </Typography>
          </MotionBox>
        </Grid>
      </Grid>

      {/* Team Section */}
      <Box sx={{ mt: 8 }}>
        <Typography variant="h3" align="center" gutterBottom>
          Our Team
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {team.map((member, index) => (
            // @ts-ignore - Ignoring persistent MUI Grid type error
            <Grid item xs={12} md={4} key={index}>
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                sx={{ textAlign: "center" }}
              >
                <Avatar
                  src={member.image}
                  alt={member.name}
                  sx={{ width: 150, height: 150, mx: "auto", mb: 2 }}
                />
                <Typography variant="h6" gutterBottom>
                  {member.name}
                </Typography>
                <Typography color="text.secondary">{member.role}</Typography>
              </MotionBox>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default About;
