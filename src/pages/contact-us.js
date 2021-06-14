import {
  Box,
  Container,
  Image,
  Heading,
  Text,
  Grid,
  Label,
  Textarea,
  Input,
  Button,
} from "theme-ui";
import image1 from "assets/contact-us.svg";
import { useState } from "react";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending");
    let data = {
      name,
      email,
      message,
    };
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        setSubmitted(true);
        setName("");
        setEmail("");
        setMessage("");
      }
    });
  };

  return (
    <Box sx={styles.contactus}>
      <Container>
        <Grid sx={styles.banner_grid}>
          <Box sx={styles.image}>
            <Image src={image1} />
          </Box>
          <Box sx={styles.content}>
            <Box sx={styles.titleBox}>
              <Heading as="h3">Contact Us</Heading>
              <Box as="form" onSubmit={(e) => e.preventDefault()}>
                <Label htmlFor="name">Name</Label>
                <Input
                  name="name"
                  id="name"
                  mb={3}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <Label htmlFor="email">Email</Label>
                <Input
                  name="email"
                  id="email"
                  mb={3}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />

                <Label htmlFor="message">Message</Label>
                <Textarea
                  name="message"
                  id="message"
                  rows={6}
                  mb={3}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                />

                <Button
                  onClick={(e) => {
                    handleSubmit(e);
                  }}
                >
                  Submit
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactUs;

const styles = {
  contactus: {
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
