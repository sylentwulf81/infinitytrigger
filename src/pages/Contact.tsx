import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  useTheme,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import CloseIcon from "@mui/icons-material/Close";

const MotionBox = motion(Box);

const Contact = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Form submitted");
    handleClose();
  };

  return (
    <Box>
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        sx={{ mb: 4, textAlign: "center" }}
      >
        <Typography variant="h2" gutterBottom>
          Contact Us
        </Typography>
        <Typography
          variant="h5"
          color="text.secondary"
          sx={{ maxWidth: "800px", mx: "auto" }}
        >
          Get in touch with us to discuss your project or ask any questions.
        </Typography>
      </MotionBox>

      {/* @ts-ignore - Ignoring persistent MUI Grid type error */}
      <Grid
        container
        spacing={2}
        justifyContent="center"
        sx={{ mb: 4, maxWidth: "500px", mx: "auto" }}
      >
        {/* @ts-ignore - Ignoring persistent MUI Grid type error */}
        <Grid item xs={12}>
          <MotionBox
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            sx={{ textAlign: "center" }}
          >
            <Box sx={{ mt: 2 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 3,
                }}
              >
                <LocationOnIcon sx={{ mr: 2, color: "primary.main" }} />
                <Typography>Nagano, Japan</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 3,
                }}
              >
                <EmailIcon sx={{ mr: 2, color: "primary.main" }} />
                <Typography>contact@infinitytrigger.com</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 3,
                }}
              >
                <PhoneIcon sx={{ mr: 2, color: "primary.main" }} />
                <Typography>+81 (0) XX-XXXX-XXXX</Typography>
              </Box>
            </Box>
          </MotionBox>
        </Grid>
      </Grid>

      <Box sx={{ textAlign: "center" }}>
        <Button variant="contained" size="large" onClick={handleClickOpen}>
          Send us a Message
        </Button>
      </Box>

      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ m: 0, p: 2 }}>
          Contact Form
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Box
            component="form"
            id="contact-dialog-form"
            onSubmit={handleSubmit}
            sx={{ pt: 1 }}
          >
            <Grid container spacing={2}>
              {/* @ts-ignore - Ignoring persistent MUI Grid type error */}
              <Grid item xs={12} sm={6}>
                <TextField required fullWidth label="Name" name="name" />
              </Grid>
              {/* @ts-ignore - Ignoring persistent MUI Grid type error */}
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                />
              </Grid>
              {/* @ts-ignore - Ignoring persistent MUI Grid type error */}
              <Grid item xs={12}>
                <TextField required fullWidth label="Subject" name="subject" />
              </Grid>
              {/* @ts-ignore - Ignoring persistent MUI Grid type error */}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Message"
                  name="message"
                  multiline
                  rows={4}
                />
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" form="contact-dialog-form" variant="contained">
            Send Message
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Contact;
