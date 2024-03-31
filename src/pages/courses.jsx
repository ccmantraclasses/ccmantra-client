/* eslint-disable react/prop-types */
import React from 'react';

import {
  Box,
  Card,
  Link,
  Grid,
  Stack,
  Button,
  CardMedia,
  Container,
  Typography,
} from '@mui/material';

import { useResponsive } from 'src/hooks/use-responsive';

import WhatsAppCom from 'src/components/whatsapp-com';

const CourseCard = ({ title, image, price, link }) => (
  <Card
    sx={{
      width: '100%',
      height: 410,
      p: 3,
      display: 'flex',
      flexDirection: 'column',
    }}
    elevation={5}
  >
    <Stack direction="column">
      <CardMedia sx={{ height: 230, borderRadius: 1 }} image={image} title={title} />

      <Link color="inherit" underline="hover" mt={1} height={50}>
        <Typography variant="subtitle2" wrap fontFamily="Poppins">
          {title}
        </Typography>
      </Link>

      <Typography variant="subtitle1" mt={1}>
        ₹ {price}
      </Typography>
    </Stack>

    <Button
      variant="contained"
      sx={{
        width: '100%',
        bgcolor: '#E9204F',
        mt: 'auto',
        ':hover': {
          bgcolor: '#5A4BDA',
        },
      }}
      href={link}
      target="__blank"
    >
      Buy Now
    </Button>
  </Card>
);

const CourseIndex = () => {
  const mdUp = useResponsive('up', 'md');
  const courses = [
    {
      id: 1,
      title: 'Class XII(CBSE)- Accounts+Eco.+B.s.(2024-25)',
      image:
        'https://firebasestorage.googleapis.com/v0/b/ccmantra-c6ad2.appspot.com/o/courses%2F%5BOriginal%20size%5D%20AADHUNIK%20EMPORIUM.png?alt=media&token=953f1238-8516-467b-823f-32da2737af85',
      price: '4000',
      link: 'https://yuafj.courses.store/478117?utm_source%3Dother%26utm_medium%3Dtutor-course-referral%26utm_campaign%3Dcourse-overview-webapp',
    },
    {
      id: 2,
      title: 'Class XII(CBSE)-Business Studies(2024-25)',
      image:
        'https://firebasestorage.googleapis.com/v0/b/ccmantra-c6ad2.appspot.com/o/courses%2FCC%20Mantra.png?alt=media&token=90f802f0-c741-4ad8-851d-c3e945539cbe',
      price: '1500',
      link: 'https://yuafj.courses.store/478115?utm_source%3Dother%26utm_medium%3Dtutor-course-referral%26utm_campaign%3Dcourse-overview-webapp',
    },
    {
      id: 3,
      title: 'Class XII(CBSE)-Economics(2024-25)',
      image:
        'https://firebasestorage.googleapis.com/v0/b/ccmantra-c6ad2.appspot.com/o/courses%2FCC%20Mantra%20(1).png?alt=media&token=d86f1d82-38b7-406b-9dab-93daab81fd53',
      price: '1500',
      link: 'https://yuafj.courses.store/478114?utm_source%3Dother%26utm_medium%3Dtutor-course-referral%26utm_campaign%3Dcourse-overview-webapp',
    },
    {
      id: 4,
      title: 'Class XII(CBSE)-Accounts(2024-25)',
      image:
        'https://firebasestorage.googleapis.com/v0/b/ccmantra-c6ad2.appspot.com/o/courses%2FCC%20Mantra%20(2).png?alt=media&token=fa3ea8e7-dc72-439f-84d1-aaadca384263',
      price: '1500',
      link: 'https://yuafj.courses.store/478111?utm_source%3Dother%26utm_medium%3Dtutor-course-referral%26utm_campaign%3Dcourse-overview-webapp',
    },
    {
      id: 5,
      title: 'Hindi Grammer Full Course (Online Test Series)',
      image:
        'https://firebasestorage.googleapis.com/v0/b/ccmantra-c6ad2.appspot.com/o/courses%2FA7.png?alt=media&token=b348b36c-64e6-47cb-9e70-e11f175a86da',
      price: '25',
      link: 'https://yuafj.courses.store/429221?utm_source%3Dother%26utm_medium%3Dtutor-course-referral%26utm_campaign%3Dcourse-overview-webapp',
    },
    {
      id: 6,
      title: 'First Grade (RPSC) - Commerce School Lecturer',
      image:
      'https://firebasestorage.googleapis.com/v0/b/ccmantra-c6ad2.appspot.com/o/courses%2FA8.png?alt=media&token=5a7a3416-1d4f-4442-84e9-0df1c59ae0b6',
      price: '25',
      link: 'https://yuafj.courses.store/476134?utm_source%3Dother%26utm_medium%3Dtutor-course-referral%26utm_campaign%3Dcourse-overview-webapp',
    },
    {
      id: 7,
      title: 'First Grade (RPSC) - Commerce School Lecturer',
      image:
        'https://firebasestorage.googleapis.com/v0/b/ccmantra-c6ad2.appspot.com/o/courses%2FA1.png?alt=media&token=6a810aef-f1c0-4f5c-b296-df8ab93df803',
      price: '999',
      link: 'https://yuafj.courses.store/131449',
    },
    {
      id: 8,
      title: 'Junior Accountant (Paper-2) (RSMSSB)',
      image:
        'https://firebasestorage.googleapis.com/v0/b/ccmantra-c6ad2.appspot.com/o/courses%2FA2.png?alt=media&token=204d94fe-6151-4daf-af62-889319f5975f',
      price: '999',
      link: 'https://yuafj.courses.store/398924',
    },
    {
      id: 9,
      title: 'Junior Accountant (RSMSSB) Online Test Series',
      image:
        'https://firebasestorage.googleapis.com/v0/b/ccmantra-c6ad2.appspot.com/o/courses%2FDOWNLOAD%20NOW%20CC%20MANTRA.jpg?alt=media&token=a143f0b6-affa-4915-8a97-85c8db724fec',
      price: '50',
      link: 'https://yuafj.courses.store/365904',
    },
    {
      id: 10,
      title: 'Rajasthan G.K. Online Test Series',
      image:
        'https://firebasestorage.googleapis.com/v0/b/ccmantra-c6ad2.appspot.com/o/courses%2FA4.png?alt=media&token=b3491995-34e6-4feb-913f-e6ccc43571c1',
      price: '149',
      link: 'https://yuafj.courses.store/364525',
    },
    {
      id: 11,
      title: 'English Grammer Online Test Series',
      image:
        'https://firebasestorage.googleapis.com/v0/b/ccmantra-c6ad2.appspot.com/o/courses%2FA5.png?alt=media&token=f7f5dea4-a686-4909-bb55-d45ef262503a',
      price: '50',
      link: 'https://yuafj.courses.store/353312',
    },
    {
      id: 12,
      title: 'Macro Economics & Indian Economic Development',
      image:
        'https://firebasestorage.googleapis.com/v0/b/ccmantra-c6ad2.appspot.com/o/courses%2FA6.png?alt=media&token=a05ccd9e-2de5-4fed-af34-3c0b61d57e83',
      price: '1000',
      link: 'https://yuafj.courses.store/85902',
    },
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
          Courses we offer
        </Typography>
      </Box>
      <Container mt={5}>
        <Grid container spacing={2} mt={1}>
          {courses.map((c) => (
            <Grid item md={4} sm={12} xs={12} key={c.id}>
              <CourseCard {...c} />
            </Grid>
          ))}
        </Grid>
      </Container>

      <WhatsAppCom />
    </>
  );
};

export default CourseIndex;
