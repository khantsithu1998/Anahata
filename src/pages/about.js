import React from "react";
import { Box, Container, Grid, Heading, Text } from "theme-ui";
import BlockTitle from "components/block-title";
import WhatWeDo from "sections/what-we-do";

const About = () => {
  return (
    <Box sx={styles.about}>
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
        <WhatWeDo />
      </Container>
    </Box>
  );
};

export default About;

const styles = {
  about: {
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
      mb: ['50px', null, null, null, '90px'],
    },
    br: {
      display: ['none', null, null, 'inherit'],
    },
    pt: ["130px", null, null, null, null, null, "120px"],
  },
  blockTitle: {
    textAlign: "center",
  },
};
