/* eslint-disable react/prop-types */
import React from 'react';

import { Box, Card, Grid, Container, Typography, CardContent } from '@mui/material';

import { useResponsive } from 'src/hooks/use-responsive';

import WhatsAppCom from 'src/components/whatsapp-com';

const LectureCard = ({ label, link }) => (
  <Card sx={{ p: 2 }}>
    <CardContent>
      <iframe
        width="100%"
        height="100%"
        src={link}
        title={label}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      />
    </CardContent>
    <Typography fontFamily="Poppins" textAlign="center" variant="subtitle2" flexWrap>
      {' '}
      {label}{' '}
    </Typography>
  </Card>
);

const LecturesIndex = () => {
  const mdUp = useResponsive('up', 'md');
  const lectures = [
    {
      id: 1,
      label: 'commerce first grade ki taiyari kaise kare',
      link: 'https://youtu.be/m7bwe6Wlso0',
      autoplay: true,
    },
    {
      id: 2,
      label: 'commerce first grade | first grade commerce | school lecturer commerce',
      link: 'https://www.youtube.com/playlist?list=PLW_3FOJV-KgoS9lktgwad0Bdzn2YqWsR6',
    },
    {
      id: 3,
      label: 'First Grade commerce marathon classes',
      link: 'https://www.youtube.com/playlist?list=PLW_3FOJV-Kgobv4jyx7ds319za-VMDg2s',
    }
  ];
  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: 120,
          bgcolor: '#E9204F',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          pr: 5,
        }}
      >
        <Typography fontFamily="Poppins" color="white" fontSize={mdUp ? 30 : 25}>
          Lectures that serve you
        </Typography>
      </Box>
      <Container>
        <Grid container spacing={2}>
          {lectures.map((l) => (
            <Grid item md={4} sm={12} xs={12} key={l.id}>
              <LectureCard {...l} />
            </Grid>
          ))}
        </Grid>
      </Container>

      <WhatsAppCom />
    </>
  );
};

export default LecturesIndex;
