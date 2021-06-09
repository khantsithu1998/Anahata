import React from "react";
import { Box, Container, Grid, Heading, Text } from "theme-ui";
import BlockTitle from "components/block-title";
import { IoIosCheckmarkCircle } from 'react-icons/io';

import { FaAngleRight } from 'react-icons/fa';

const About = () => {
  return (
    <Box sx={styles.about} id="about">
      <Container>
        <BlockTitle slogan="" title="About Us" styles={styles.blockTitle} />
        <Text as="p">
          Anahata is an emerging software firm in Myanmar producing world-class
          quality software for its clients. We produce intelligent and powerful
          software which completely maneuvers our client’s job competently. We
          are committed to continuous advancement in our intellect and expertise
          and thus accomplishing our success through the pursuit of elevated
          performance and quality. We believe that our job is to listen,
          research and understand the requirements unique to each in- dividual
          business. In fact, it is the long-term relationships with our clients
          that has served as a solid foundation for our company.
        </Text>
        <br/>
        <BlockTitle slogan="" title="Who We Are" styles={styles.blockTitle} />
        <Text as="p">
          Our software team is specialized in producing software to assist you
          to oper- ate your entire industry smoothly. Our development team
          consists of experienced and qualified system analysts, application
          developers, solution developers, database administrators, program-
          mers, Security Researchers, Pentesters and testers. In each step of
          development, we use creative ideas, cutting-edge technologies and
          proven methodologies. It is rest assured that the software will be
          top-rated and most user-friendly.
        </Text>
        
      </Container>
    </Box>
  );
};

export default About;

const styles = {
  about: {
    pt: ["70px", null, null, "80px", "120px", null, "130px"],
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
    width: ["80px", null, null, "110px"],
    height: ["80px", null, null, "110px"],
    justifyContent: "center",
    alignItems: "center",
    borderRadius: ["20px", null, null, "40px"],
    backgroundImage:
      "linear-gradient(323.91deg, #FFCC40 7.09%, rgba(255, 204, 64, 0.5) 88.82%)",
  },
};