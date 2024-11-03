/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

import { Box, Grid, Card, Stack, Container, Typography } from '@mui/material';

const FeaturesCard = ({ image, label }) => (
  <Stack direction="column" alignItems="center" spacing={3}>
    <Box sx={{ width: 310, height: 200 }}>
      <img src={image} alt={label} width="100%" height="100%" />
    </Box>

    <Typography
      fontFamily="Poppins"
      fontWeight={500}
      textAlign="center"
      color="white"
      fontSize={18}
    >
      {label}
    </Typography>
  </Stack>
);

const ExamCard = ({ primaryLabel, secondaryLabel, link }) => (
  <a href={link || null}>
    <Card
      sx={{
        height: 135,
        width: '100%',
        p: 1,
        transition: 'transform 0.3s',
        '&:hover': {
          transform: 'scale(1.08)',
        },
        cursor: 'pointer',
      }}
    >
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ width: '100%', height: '100%' }}
      >
        {primaryLabel && (
          <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, textAlign: 'center' }}>
            {primaryLabel}
          </Typography>
        )}
        {secondaryLabel && (
          <Typography sx={{ fontFamily: 'Poppins', fontWeight: 500, textAlign: 'center' }}>
            {secondaryLabel}
          </Typography>
        )}
      </Stack>
    </Card>
  </a>
);

const ExamCategories = () => {
  const examCategories = [
    { id: 1, primaryLabel: 'COMMERCE', secondaryLabel: 'First Grade (Hindi Medium)', link: 'https://yuafj.courses.store/131449'},
    { id: 2, primaryLabel: 'COMMERCE', secondaryLabel: 'First Grade (English Medium)', link: 'https://yuafj.courses.store/588689?utm_source%3Dother%26utm_medium%3Dtutor-course-referral%26utm_campaign%3Dcourse-overview-webapp' },
    { id: 3, primaryLabel: 'Economics', link: '' },
    { id: 4, primaryLabel: 'Accounts', link: '' },
    { id: 5, primaryLabel: 'IAS', link: '' },
    { id: 6, primaryLabel: 'SSC', secondaryLabel: 'GD', link: '' },
    { id: 7, primaryLabel: 'SSC', secondaryLabel: 'CGL', link: '' },
    { id: 8, primaryLabel: 'SSC', secondaryLabel: 'CHSL', link: '' },
    { id: 9, primaryLabel: 'Railway', link: '' },
    { id: 10, primaryLabel: 'RAS', link: '' },
    { id: 11, primaryLabel: 'Accounts+Eco.+B.s.', link: '' },
    { id: 12, primaryLabel: 'RPSC', secondaryLabel: 'Teacher Second Grade', link: '' },
    { id: 13, primaryLabel: 'RPSC', secondaryLabel: 'Teacher Third Grade', link: '' },
    { id: 14, primaryLabel: 'REET', link: '' },
    { id: 15, primaryLabel: 'Jr. Accountant', link: '' },
    { id: 16, primaryLabel: 'S.I. (Rajasthan Police)', link: '' },
    { id: 17, primaryLabel: 'Constable (Rajasthan Police)', link: '' },
    { id: 18, primaryLabel: 'Patwari', link: '' },
    { id: 19, primaryLabel: 'LDC', link: '' },
  ];

  const features = [
    { id: 1, label: 'Live/ Schedule lectures', image: '/assets/livelectures.png' },
    {
      id: 2,
      label: 'Structured And Targeted study material',
      image: '/assets/structredmaterial.png',
    },
    {
      id: 3,
      label: 'Test on weekend Basis For Progress Tracking',
      image: '/assets/progresstracking.png',
    },
  ];

  return (
    <>
      <Container sx={{ mt: 10 }}>
        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontWeight: 700,
            fontSize: 30,
          }}
        >
          Explore <span style={{ color: '#E9204F' }}>Exam Categories</span>
        </Typography>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          {examCategories.map((exc) => (
            <Grid item md={3} xs={6} key={exc.id}>
              <ExamCard {...exc} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Box sx={{ bgcolor: '#5A4BDA', mt: 10, py: 5, px: 2.5 }}>
        <Typography
          fontFamily="Poppins"
          fontWeight={600}
          fontSize={30}
          textAlign="center"
          color="white"
        >
          Why you should choose CCMantra?
        </Typography>
        <Typography
          fontFamily="Poppins"
          fontWeight={500}
          fontSize={25}
          textAlign="center"
          color="white"
        >
          Your one step destination for success
        </Typography>
        <Grid mt={1} container justifyContent="center" alignItems="center">
          {features.map((f) => (
            <Grid item md={4} xs={12} key={f.id}>
              <FeaturesCard {...f} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default ExamCategories;
