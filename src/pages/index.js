import React from "react";
import { Box, Container, Grid, Heading, Text, Flex } from "theme-ui";

import Image from "components/image";

import bannerImg from "assets/development-banner.svg";
import image1 from "assets/company.svg";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "components/link";

const IndexPage = () => {
  return (
    <Box sx={styles.banner}>
      <Container sx={styles.container}>
        <Grid sx={styles.grid}>
          <Box sx={styles.content}>
            <Heading as="h3">
              "The best preparation for tomorrow is doing your best today."
            </Heading>
            <Heading as="h4">- H. Jackson Brown, Jr.</Heading>
            <Text as="p">
              We help build and manage a team of world-class developers to bring
              your vision to life
            </Text>
          </Box>
          <Box sx={styles.image}>
            <Image src={bannerImg} alt="" />
          </Box>
        </Grid>
      </Container>
      <Box sx={styles.secondbanner}>
        <Container>
          <Grid sx={styles.second_grid}>
            <Box styles={styles.image}>
              <Image src={image1} alt="" />
            </Box>
            <Box sx={styles.content_more}>
              <Box sx={styles.titleBox}>
                <Heading as="h3">Who We Are</Heading>
                <Text as="p">
                  Our software team is specialized in producing software to
                  assist you to oper- ate your entire industry smoothly. Our
                  development team consists of experienced and qualified system
                  analysts, application developers, solution developers,
                  database administrators, programmers, Security Researchers,
                  Pentesters and testers. In each step of development, we use
                  creative ideas, cutting-edge technologies and proven
                  methodologies. It is rest assured that the software will be
                  top-rated and most user-friendly.
                </Text>
                <Link path="/about" as="learn_more">
                  Learn More <FaAngleRight />
                </Link>
              </Box>
            </Box>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default IndexPage;

const styles = {
  banner: {
    pt: ["110px", null, null, null, "150px", "200px"],
    pb: ["50px", null, null, null, "60px", null, "0"],
    backgroundColor: "#F6F8FB",
    overflow: "hidden",
  },
  container: {
    width: [null, null, null, null, null, null, "1390px"],
  },
  grid: {
    display: "grid",
    gridTemplateColumns: ["1fr", null, null, "1fr 1fr"],
    gridGap: "0",
  },
  content: {
    h3: {
      color: "black",
      fontWeight: "bold",
      lineHeight: [1.39],
      letterSpacing: ["-.7px", "-1.5px"],
      mb: ["15px", null, null, null, "20px"],
      width: ["100%"],
      maxWidth: ["100%", null, null, "90%", "100%", "540px"],
      fontSize: [6, null, null, "36px", null, "55px", 9],
    },
    p: {
      fontSize: [1, null, null, 2, null, 3],
      lineHeight: ["26px", null, null, null, 2.33],
      color: "text_secondary",
      mb: ["20px", null, null, null, null, "30px"],
      width: ["100%"],
      maxWidth: ["100%", null, null, null, null, "410px"],
      br: {
        display: ["none", null, null, null, "inherit"],
      },
    },
  },

  image: {
    img: {
      mt: ["25px", null, null, "0"],
      display: "flex",
      marginLeft: ["0", null, null, null, "auto"],
      marginRight: ["0", null, null, null, "auto"],
      height: ["385px", null, null, "auto"],
      position: "relative",
      top: [null, null, null, "-20px", "-45px", "auto"],
    },
  },
  secondbanner: {
    pt: ["30px", null, null, "40px", "40px"],
  },
  second_grid: {
    display: "grid",
    gridTemplateColumns: ["1fr", null, null, "1fr 1fr"],
    gridGap: "0",
  },
  content_more: {
    width: "100%",
    textAlign: ["left", null, null, null, "left"],
    pt: [null, null, null, null, null, "100px"],
    pl: [null, null, null, null, null, "60px", "140px"],
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
    learn_more: {
      color: "primary",
      fontSize: [1, null, 2],
      display: "inline-block",
      verticalAlign: "middle",
      fontWeight: "bold",
      pl: ["30px", null, null, "4px", null, "4px"],
      mt: ["5px", null, null, null, "10px"],
      svg: {
        position: "relative",
        top: "3px",
      },
      float: ["center", null, null, "right", "right"],
    },
  },
};
