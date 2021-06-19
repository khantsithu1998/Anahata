import {
  Box,
  Container,
  Image,
  Heading,
  Text,
  Flex,
  Grid,
  Label,
  Textarea,
  Input,
  Button,
  Message,
  Spinner,
  Alert,
} from "theme-ui";
import image1 from "assets/contact-us.svg";
import { useState } from "react";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailAlertVisible, setEmailAlertVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitBtnEnalbed, setSubmitBtnEnabled] = useState(false);
  const [spinnerVisible, setSpinnerVisible] = useState(false);

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
        setSpinnerVisible(false);
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
                {emailAlertVisible == true ? (
                  <Alert sx={{ backgroundColor: "red" }}>
                    Email Address is invalid!
                  </Alert>
                ) : (
                  ""
                )}
                <Label htmlFor="email">Email</Label>
                <Input
                  name="email"
                  id="email"
                  mb={3}
                  type="email"
                  onChange={(e) => {
                    let pattern = new RegExp(
                      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
                    );
                    if (pattern.test(e.target.value)) {
                      setEmail(e.target.value);
                      setEmailAlertVisible(false);
                    } else {
                      setEmailAlertVisible(true);
                    }
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
                {spinnerVisible? <Spinner></Spinner> : name != "" && email != "" && message != "" ? (
                  <Button
                    sx={{
                      pl: ["50px"],
                      pr: ["50px"],
                      backgroundColor: "primary",
                    }}
                    onClick={(e) => {
                      setSpinnerVisible(true);
                      handleSubmit(e);
                    }}
                  >
                    Submit
                  </Button>
                ) : (
                  <Button
                    sx={{
                      pl: ["50px"],
                      pr: ["50px"],
                      backgroundColor: "grey",
                      "&:hover": {
                        bg: "grey",
                      },
                    }}
                  >
                    Submit
                  </Button>
                )}

                {submitted == true ? (
                  <Message sx={styles.message}>
                    Email has been sent successfully
                  </Message>
                ) : (
                  <div></div>
                )}
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
  message: {
    mt: ["20px"],
    backgroundColor: "primary",
  },
};
