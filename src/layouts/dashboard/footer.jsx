import React from 'react';
import { Icon } from '@iconify/react';

import { Box, Grid, Link, Stack, Container, Typography } from '@mui/material';

import { useResponsive } from 'src/hooks/use-responsive';

const Footer = () => {
  const lgUp = useResponsive('up', 'lg');
  const socialLinks = [
    {
      id: 1,
      link: 'https://www.facebook.com/ccmantraclassesajmer',
      icon: 'mingcute:meta-fill',
      label: 'Meta',
    },
    { id: 2, link: 'https://t.me/ccmantra', icon: 'la:telegram', label: 'Telegram' },
    {
      id: 3,
      link: 'https://www.instagram.com/ccmantraclassesajmer',
      icon: 'ri:instagram-fill',
      label: 'Instagram',
    },
    {
      id: 4,
      link: 'https://api.whatsapp.com/send/?phone=919694501023&text&type=phone_number&app_absent=0',
      icon: 'ri:whatsapp-fill',
      label: 'WhatsApp',
    },
    {
      id: 5,
      link: 'https://www.youtube.com/@ccmantraeducation',
      icon: 'mingcute:youtube-fill',
      label: 'YouTube',
    },
  ];

  return (
    <Box sx={{ width: '100%', bgcolor: 'black', py: 1 }}>
      <Container>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item md={6} xs={12}>
            <Stack direction="column" spacing={2} mt={3}>
              <Stack direction="row" spacing={3} alignItems="center">
                <Link href="/" mt={5}>
                  <img src="/assets/ccmantralogo.png" alt="ccmantra" width={105} height={105} />
                </Link>
                <Typography color="white" fontFamily="Poppins" fontWeight={600} fontSize={25}>
                  CC Mantra
                </Typography>
              </Stack>
              <Typography color="#E9204F" fontFamily="Poppins" fontSize={25}>
                Get in touch
              </Typography>
              <Typography color="white" fontFamily="Poppins" fontWeight={500}>
                Opposite of Chandra Store, Martindale Bridge
              </Typography>
              <Typography color="white" fontFamily="Poppins" fontWeight={500}>
                Shri Nagar Road, Ajmer
              </Typography>
              <Typography color="white" fontFamily="Poppins" fontWeight={500}>
                +91 9694501023
              </Typography>
              <Typography
                color="white"
                fontFamily="Poppins"
                fontWeight={500}
                component="a"
                href="mailto:ccmantra@gmail.com"
                sx={{
                  ':hover': {
                    color: '#E9204F',
                  },
                }}
              >
                ccmantra@gmail.com
              </Typography>
            </Stack>
          </Grid>
          <Grid item md={6} xs={12}>
            <Stack
              direction={lgUp ? 'column' : 'row'}
              spacing={3}
              justifyContent="center"
              alignItems="center"
              mt={10}
            >
              {socialLinks.map((s) => (
                <Stack
                  key={s.id}
                  direction="row"
                  alignItems="center"
                  justifyContent="flex-start"
                  spacing={2}
                  width={125}
                  component="a"
                  href={s.link}
                  target="__blank"
                  sx={{ textDecoration: 'none' }}
                >
                  <Icon
                    icon={s.icon}
                    width={30}
                    color="black"
                    style={{ backgroundColor: 'white', padding: 5, borderRadius: 50 }}
                  />
                  {lgUp && (
                    <Typography fontFamily="Poppins" fontWeight={500} color="white">
                      {s.label}
                    </Typography>
                  )}
                </Stack>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <Typography textAlign="center" color="#ffb703" fontFamily="Poppins" fontWeight={500} my={2}>
        Developed and designed by BlackFoxGraphics Community
      </Typography>
    </Box>
  );
};

export default Footer;
