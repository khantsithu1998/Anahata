import React from "react";
import { Box, Container, Flex, Heading, Text } from "theme-ui";
import Image from "components/image";
import { IoIosCheckmarkCircle } from "react-icons/io";
import image1 from "assets/whatwedo.svg";

const WhatWeDo = () => {
  return (
    <Box sx={styles.whatwedo}>
      <Container>
        <Box sx={styles.row}>
          <Flex sx={styles.col}>
            <Box sx={styles.content}>
              <Box sx={styles.titleBox}>
                <Heading as="h3">What We Do</Heading>
              </Box>
              <Box as="ul" sx={styles.list}>
                <Text as="li">
                  <IoIosCheckmarkCircle color="#92E3A9"/>
                  Software Development
                </Text>
                <Text as="li">
                  <IoIosCheckmarkCircle color="#92E3A9"/>
                  Embedded / IOT Solutions
                </Text>
                <Text as="li">
                  <IoIosCheckmarkCircle color="#92E3A9"/>
                  Web Application Development
                </Text>
                <Text as="li">
                  <IoIosCheckmarkCircle color="#92E3A9"/>
                  Mobile App Development
                </Text>
                <Text as="li">
                  <IoIosCheckmarkCircle color="#92E3A9"/>
                  Automated Testing
                </Text>
                <Text as="li">
                  <IoIosCheckmarkCircle color="#92E3A9"/>
                  Manual Testing
                </Text>
                <Text as="li">
                  <IoIosCheckmarkCircle color="#92E3A9"/>
                  Database Development
                </Text>
                <Text as="li">
                  <IoIosCheckmarkCircle color="#92E3A9"/>
                  Technology Consultancy
                </Text>
                <Text as="li">
                  <IoIosCheckmarkCircle color="#92E3A9"/>
                  Project planning and Management
                </Text>
                <Text as="li">
                  <IoIosCheckmarkCircle color="#92E3A9"/>
                  Product Maintenance
                </Text>
                <Text as="li">
                  <IoIosCheckmarkCircle color="#92E3A9"/>
                  ECommerce Solutions
                </Text>
                <Text as="li">
                  <IoIosCheckmarkCircle color="#92E3A9"/>
                  Cyber Security Services
                </Text>
              </Box>
            </Box>
          </Flex>
          <Flex sx={styles.col}>
            <Image src={image1} sx={styles.image} alt="" />
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default WhatWeDo;

const styles = {
  whatwedo: {
    // pt: ["50px", null, null, "50px", "60px", null, "90px"],
  },
  row: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: ["column", null, null, "row-reverse"],
  },
  col: {
    flex: ["0 0 100%", null, null, "0 0 50%"],
  },
  image: {
    mt: ["25px", null, null, "0"],
    display: "flex",
    marginLeft: ["0", null, null, null, "auto"],
    marginRight: ["0", null, null, null, "auto"],
    height: ["385px", null, null, "auto"],
    position: "relative",
    top: [null, null, null, "-20px", "-45px", "auto"],
  },
  list: {
    margin: 0,
    padding: 0,
    listStyle: "none",
    ml: ["25px", null, null, "0"],
    mb: ["10px"],
    mt: ["30px"],
    li: {
      display: "flex",
      alignItems: "center",
      justifyContent: ["flex-start", null, null, null, null, "flex-start"],
      fontSize: [1, null, 2, null, "18px"],
      color: "text_secondary",
      lineHeight: [2.56],
      svg: {
        width: [17, null, null, 23],
        height: [17, null, null, 23],
        color: "#DADADA",
        borderRadius: "50%",
        marginRight: ["10px"],
      },
    },
  },
  titleBox: {
    textAlign: ["center", null, null, "left"],
    h3: {
      color: "black",
      fontSize: [5, null, null, "21px", "36px", "32px", 8],
      lineHeight: [1.6, null, null, "1.5"],
      fontWeight: "bold",
      letterSpacing: ["-0.5px", null, null, null, null, null, "-1.5px"],
    },
    p: {
      fontSize: [0, null, 2, null, "17px"],
      color: "text_secondary",
      opacity: ".6",
      lineHeight: ["26px", null, null, 1.8, null, 2.06],
      padding: ["0 20px", null, null, "0"],
      mt: ["15px"],
    },
  },
  content: {
    width: "100%",
    textAlign: ["center", null, "center", null, "left"],
    // pt: [null, null, null, null, null, "100px"],
    // // pl: [null, null, null, null, null, "60px", "140px"],
    marginLeft: [null, null, null, null, null, "70px", "70px"],
  },
};
