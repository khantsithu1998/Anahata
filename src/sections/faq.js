import { Box, Container, Grid, Heading, Text } from "theme-ui";
import { IoIosCheckmarkCircle } from "react-icons/io";

const FAQ = () => {
  return (
    <Box sx={styles.faq} id="faq">
      <Container>
        <Heading as="h3"> FAQ</Heading>
        <Heading as="h4"> ❖ Does this long-distance outsourcing work? </Heading>
        <Text as="p">
          Definitely, it works. We have been working on outsourced projects
          since 2016. It entirely depends on the company you are working with.
          We keep in touch and update the progress regularly over phone, skype
          and other online systems. Furthermore, If a company is practicing
          agile, that means you are in close collaboration with them, we follow
          Agile Methodology specifically Scrum method for software development.
        </Text>
        <Heading as="h4">
          {" "}
          ❖ Can I expand the system if required in future?{" "}
        </Heading>
        <Text as="p">
          We develop software keeping in mind that a product always evolves. We
          design the system using separate layers for each concern making a
          loose coupling. You may want to convert a desktop based application
          into a web application. As the business logic, data access and
          infrastructure services remain in separate layers, you will not need a
          complete rewrite, developing the web UI in the presentation layer will
          do the work. Same goes with databases and so on.
        </Text>
        <Heading as="h4"> ❖ How do you ensure quality? </Heading>
        <Text as="p">
          We ensure quality from the very beginning to delivery. We have adopted
          Test Driven Development, it is a practice in which a test is written
          first and actual coding is done to pass the test. Our developers write
          unit tests as many as required to maximize the code coverage. We
          conduct Integration test, regression test and automatic UI test at the
          end of each iteration. We regularly arrange SQA related training for
          the development team to increase awareness.
        </Text>
        <Heading as="h4"> ❖ How do you keep the cost low? </Heading>
        <Text as="p">
          This is true that we charge lower for the same quality jobs done in
          the US or Europe. However, this is not done by a team with amateur
          members, nor by developing substandard software. We operate from
          Bangladesh, where living costs are lower; and the primary reason is
          that we have our processes, templates, software libraries ready for
          work which gives us the advantage to develop quality software by
          properly utilizing resources.
        </Text>
        <Heading as="h4"> ❖ How do you assure confidentiality? </Heading>
        <Text as="p">
          We do not even add your project name in our portfolio. The software
          product which we develop for you on the basis of “Work made on hire”
          is entirely yours. We may sign a non-disclosure agreement as required.
          Our employees are bound by company confidentiality and non-disclosure
          agreement. We have also had our privacy policy defined to protect your
          privacy.
        </Text>
      </Container>
    </Box>
  );
};

export default FAQ;

const styles = {
  faq: {
    pt: ["80px", null, null, null, "150px", "100px"],
    h3: {
      margin: 0,
      pb: "40px",
      color: "black",
      fontSize: [5, null, null, "21px", "36px", "32px", 8],
      letterSpacing: ["-0.5px", null, null, null, null, "-1.5px"],
      fontWeight: "bold",
      lineHeight: [1.6, null, null, 1.25],
      textAlign: "center",
    },
    h4: {
      margin: 0,
      pt: "20px",
      lineHeight: [1.6, null, null, 1.25],
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
    pt: ["80px", null, null, null, null, null, "140px"],
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
