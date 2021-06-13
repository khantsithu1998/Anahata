import React from "react";
import { Box, Container, Image, Heading, Text ,Grid } from "theme-ui";
import WhatWeDo from "sections/what-we-do";
import image1 from "assets/about-us-2.svg";

const About = () => {
  return (
    <Box sx={styles.about}>
      <Container>
        <Grid sx={styles.banner_grid}>
          <Box sx={styles.image}>
            <Image src={image1} />
          </Box>
          <Box sx={styles.content}>
            <Box sx={styles.titleBox}>
              <Heading as="h3">About Us</Heading>
              <Text as="p">
                Anahata is an emerging software firm in Myanmar producing
                world-class quality software for its clients. We produce
                intelligent and powerful software which completely maneuvers our
                client’s job competently. We are committed to continuous
                advancement in our intellect and expertise and thus
                accomplishing our success through the pursuit of elevated
                performance and quality. We believe that our job is to listen,
                research and understand the requirements unique to each in-
                dividual business. In fact, it is the long-term relationships
                with our clients that has served as a solid foundation for our
                company.
              </Text>
            </Box>
          </Box>
        </Grid>

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
      color: "black",
      fontSize: [5, null, null, "21px", "36px", "32px", 8],
      letterSpacing: ["-0.5px", null, null, null, null, "-1.5px"],
      fontWeight: "bold",
      lineHeight: [1.6, null, null, 1.25],
      textAlign: "center",
    },
    p: {
      fontSize: ["15px", null, null, "17px"],
      lineHeight: ["26px", null, null, 2],
      mt: ["10px", null, null, null, "25px"],
      mb: ["50px", null, null, null, "90px"],
    },
    br: {
      display: ["none", null, null, "inherit"],
    },
    pt: ["110px", null, null, null, "150px", "200px"],
  },
  banner_grid: {
    display: "grid",
    gridTemplateColumns: ["1fr", null, null, "1fr 1fr"],
    gridGap: "0",
    pt: ["30px", "40px", "40px", "60px"],
  },
  titleBox: {
    textAlign: ["center", "center", null, null, null],
    h3: {
      color: "black",
      fontSize: [5, null, null, "21px", "36px", "32px", 8],
      lineHeight: [1.6, null, null, "1.5"],
      fontWeight: "bold",
      letterSpacing: ["-0.5px", null, null, null, null, null, "-1.5px"],
      textAlign: "center",
    },
    p: {
      fontSize: [0, null, 2, null, "17px"],
      color: "text_secondary",
      opacity: ".6",
      lineHeight: ["26px", null, null, 1.8, null, 2.06],
      padding: ["0 20px", null, null, "0"],
      mt: ["15px"],
      textAlign: "left",
      marginLeft: [null, null, null, "30px", "60px"],
    },
    pt: ["30px", "40px", "40px", "60px"],
  },
};
