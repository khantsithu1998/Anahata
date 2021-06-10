import React from "react";
import { Box, Container, Grid, Heading, Text } from "theme-ui";
import BlockTitle from "components/block-title";
import Image from "components/image";

import icon1 from "assets/icons/service-1-1.svg";
import icon2 from "assets/icons/service-1-2.svg";
import icon3 from "assets/icons/service-1-3.svg";
import icon4 from "assets/icons/service-1-4.svg";
import icon5 from "assets/icons/service-1-5.svg";

const SERVICES_DATA = [
  {
    icon: icon1,
    title: "Software Development",
    text: "",
  },
  {
    icon: icon2,
    title: "Database Development",
    text: "",
  },
  {
    icon: icon3,
    title: "Software Testing",
    text: "",
  },
  {
    icon: icon4,
    title: "Mobile App Development",
    text: "",
  },
  {
    icon: icon5,
    title: "Technology Consultancy",
    text: "",
  },
];

const Services = () => {
  return (
    <Box sx={styles.services}>
      <Container>
      <BlockTitle slogan="" title="Services" styles={styles.blockTitle} />
        <Text as="p">
        Anahata is a competent provider of any kind of software solutions including
mission critical business applications, complex engineering software, data centric analytical
software, smart device solutions, web solutions, eCommerce solutions, Cyber Security solutions
and so on. Our expertise lies in clearly perceiving the business goals of our customers,
choosing the most appropriate technologies and efficiently developing solutions catered to the
business needs.
        </Text>

        <Grid sx={styles.grid}>
          {SERVICES_DATA.map((service, index) => (
            <Box
              className="service-card"
              sx={styles.serviceCard}
              key={`service-post-${index}`}
            >
              <Box className="service-icon" sx={styles.icon}>
                <Image src={service.icon} alt="" />
              </Box>
              <Heading as="h2">{service.title}</Heading>
              <Text as="p">{service.text}</Text>
            </Box>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  services: {
    h3: {
      margin: 0,
      color: 'black',
      fontSize: [5, null, null, '21px', '36px', '32px', 8],
      letterSpacing: ['-0.5px', null, null, null, null, '-1.5px'],
      fontWeight: 'bold',
      lineHeight: [1.6, null, null, 1.25],
      textAlign: "center",
    },
    p: {
      fontSize: ['15px', null, null, '17px'],
      lineHeight: ['26px', null, null, 2],
      mt: ['10px', null, null, null, '25px'],
      mb: ['50px', null, null, null, '120px'],
    },
    br: {
      display: ['none', null, null, 'inherit'],
    },
    pt: ["130px", null, null, null, null, null, "120px"],
  },
  blockTitle: {
    textAlign: "center",
  },
  grid: {
    display: "grid",
    gridGap: ["15px", null, null, null, null, "30px"],
    gridTemplateColumns: [
      "1fr",
      null,
      null,
      "1fr 1fr",
      null,
      "1fr 1fr 1fr 1fr 1fr",
      
    ],
  },
  icon: {
    display: "flex",
    ml: "auto",
    mr: "auto",
    width: ["90px", null, null, "110px"],
    height: ["90px", null, null, "110px"],
    justifyContent: "center",
    alignItems: "center",
    borderRadius: ["20px", null, null, "40px"],
      
  },
  serviceCard: {
    textAlign: "center",
    h3: {
      margin: 0,
      fontSize: ["18px", null, null, 3],
      fontWeight: "bold",
      lineHeight: 1,
      color: "black",
      mt: ["30px", null, null],
      mb: ["20px", null, null],
    },
    p: {
      margin: 0,
      fontSize: [0, null, null, "15px"],
      color: "heading_secondary",
      width: "100%",
      maxWidth: [null, null, null, null, "84%", "100%"],
      mx: [null, null, null, null, "auto", "0"],
    },
  },
};
