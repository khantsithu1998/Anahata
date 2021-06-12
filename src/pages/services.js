import React from "react";
import { Box, Container, Grid, Heading, Text, Image, Button } from "theme-ui";

import icon1 from "assets/icons/service-1-1.svg";
import icon2 from "assets/icons/service-1-2.svg";
import icon3 from "assets/icons/service-1-3.svg";
import icon4 from "assets/icons/service-1-4.svg";
import icon5 from "assets/icons/service-1-5.svg";
import image1 from "assets/services.svg";
import { Link } from "components/link";

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
        <Grid sx={styles.banner_grid}>
          <Box sx={styles.image}>
            <Image src={image1} />
          </Box>
          <Box sx={styles.content}>
            <Box sx={styles.titleBox}>
              <Heading as="h3">Anahata</Heading>
              <Text as="p">
                Anahata is a competent provider of any kind of software
                solutions including mission critical business applications,
                complex engineering software, data centric analytical software,
                smart device solutions, web solutions, eCommerce solutions,
                Cyber Security solutions and so on. Our expertise lies in
                clearly perceiving the business goals of our customers, choosing
                the most appropriate technologies and efficiently developing
                solutions catered to the business needs.
              </Text>
            </Box>
          </Box>
        </Grid>
        <Box sx={styles.head}>
          <Heading as="h3">Our Services</Heading>
        </Box>
        <Grid sx={styles.grid}>
          {SERVICES_DATA.map((service, index) => (
            <Box
              className="service-card"
              sx={styles.serviceCard}
              key={`service-post-${index}`}
            >
              <Image src={service.icon} alt="" />
              {/* <Heading as="h3">{service.title}</Heading> */}
              <Link sx={styles.links} path="/services">
                {service.title}
              </Link>
              <Button as="p" variant="primary">
                Read More
              </Button>
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
      mb: ["50px", null, null, null, "120px"],
    },

    br: {
      display: ["none", null, null, "inherit"],
    },
    pt: ["130px", null, null, null, null, null, "120px"],
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
  banner_grid: {
    display: "grid",
    gridTemplateColumns: ["1fr", null, null, "1fr 1fr"],
    gridGap: "0",
    pt: ["20px", "40px", "40px", "50px"],
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
    pt: ["10px", "40px", "40px", "60px"],
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
    mt: ["40px", "40px", "40px", "60px"],
  },
  head: {
    mt: "20px",
    mb: "20px",
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
      color: "#FFFFFF",
      width: "100%",
      maxWidth: [null, null, null, null, "84%", "100%"],
      mx: [null, null, null, null, "auto", "0"],
      mt: ["20px", "20px", "20px", "20px"],
    },
  },
};
