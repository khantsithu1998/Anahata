import { Link } from "components/link";
import { useRouter } from "next/router";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { Box, Container, Image, Heading, Text, Grid } from "theme-ui";

const SERVICES_DETAILS_DATA = [
  {
    id: 1,
    title: "Software Development",
    body: `Anahata is an experienced software
    development firm providing offshore
    software development services. Our
    cost-effective solutions are built specifi-
    cally for organizations by utilizing an in-
    timate understanding of their business
    and the industry landscape. We offer rich,
    user friendly and robust applications
    in combination with any modern
    database system. The application can be
    totally standalone running in a single
    machine, network solutions or internet
    connected application.
    Services include : `,
    list: [
      "Enterprise Applications",
      "Desktop Applications",
      "Web Application",
      "API and Add-ins",
      "Mobile and Tablet Apps",
      "Software Maintenance",
      "Software Re-engineering",
    ],
  },
  {
    id: 2,
    title: "Database Development",
    body: `We offer different types of database
    development services from design to
    reporting. Infoistic is experienced in standard database technologies like
    Oracle, Microsoft SQL Server, MySQL,
    PostgreSQL and different Big Data and
    Cloud database systems. We maintain
    best practices in planning, develop-
    ment, maintenance and security including
    ongoing monitoring and automation
    when needed.
    Services are :`,
    list: [
      "Database Design",
      "Database Development",
      "Database Integration",
      "Database Performance Tuning",
      "Data Warehouse",
      "Database Analysis & Reporting",
      "Data Security",
      "Database Migration",
    ],
  },
  {
    id: 3,
    title: "Software Testing",
    body: `Anahata owe it to ourselves and to our
    clients to deliver the best application
    it can by providing Software Quality
    Assurance. We offer different types
    of software testing services from test
    case design to test report generation.
    Anahata is experienced in Functional
    and nonfunctional testing. We maintain
    best practices in test planning, test
    case design, test environment creation,
    test case execution, bug reporting process,
    and finally test report generation.`,
    list: [
      "Black box and White box Test",
      "Integration Test",
      "Regression Test",
      "Performance Test",
      "Compatibility Test",
      "Data and UI Security Test",
      "Load Test",
    ],
  },
  {
    id: 4,
    title: "Mobile App Development",
    body: `Our team of experienced mobile apps
    developers and designers can build
    an app that will live up to your vision
    enabling you to leverage mobility to
    maximize productivity. Infoistic is
    developing business critical solutions for
    mobile devices for Android, iPhone and
    Windows Phone giving you and your team
    more flexibility when you are moving.
    Anahata team is experienced in
    developing mobile applications.
    Platforms :`,
    list: ["Android", "iOS", "Windows Mobile"],
  },
  {
    id: 5,
    title: "Technology Consultancy",
    body: `Anahata provides high-end and mission
    critical enterprise solutions meeting all
    your requirements to achieve your ultimate
    business goal. We offer consultancy services
    that span the entire IT lifecycle, from
    business process re-engineering to
    software system design, development
    and implementation. Our consultancy
    services are tailored to satisfy your
    business requirements with the help
    of our individual and combined
    experience in design, implementation,
    and management of IT and communication
    systems around the world. Consultancy Areas :`,
    list: [
      "Enterprise Solutions",
      "Application Development Services",
      "Mobile Development Services",
      "Software Application Testing Services",
      "Technical and Management Training",
      "Project Management",
    ],
  },
];


export async function getStaticPaths() {
  const paths = SERVICES_DETAILS_DATA.map(item => {
    return {
       params: {id: item.id.toString()}
    }
  })
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const data = SERVICES_DETAILS_DATA.filter(
    (item) => item.id == parseInt(id)
  )[0];
  
  return {
    props: data
  }
}

const Details = (content) => {

  return (
    <Box sx={styles.services_post_details}>
      <Container>
        <Grid sx={styles.content_grid}>
          <Box sx={styles.titleBox}>
            <Heading as="h3">{content.title}</Heading>
            <Text as="p">{content.body}</Text>
            <Box as="ul" sx={styles.list}>
              {/* {content.list.map((item) => (
                <Text as="li">
                  <IoIosCheckmarkCircle color="#92E3A9" />
                  {item}
                </Text>
              ))} */}
            </Box>
          </Box>
          <Box>
            <Box as="ul" sx={styles.service_list}>
              {SERVICES_DETAILS_DATA.map((service) => (
                <Text
                  as="li"
                  key={service.id}
                  color={content.id == service.id ? "#FFFFFF" : "#000000"}
                  backgroundColor={
                    content.id == service.id ? "primary" : "#FFFFF"
                  }
                >
                  <Link path={"/services/" + service.id}>{service.title}</Link>
                </Text>
              ))}
            </Box>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default Details;

const styles = {
  services_post_details: {
    pt: ["110px", null, null, null, "150px", "200px"],
  },
  content_grid: {
    display: "grid",
    gridTemplateColumns: ["1fr", null, null, "1fr 1fr"],
    gridGap: "0",
    // pt: ["30px", "40px", "40px", "60px"],
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
  list: {
    margin: 0,
    pl: ["30px", null, null, "90px"],
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
  service_list: {
    ml: ["60px", null, null, "100px"],
    mt: ["60px", null, null, "100px"],
    li: {
      display: "flex",
      padding: "15px",
      alignItems: "center",
      justifyContent: ["flex-start", null, null, null, null, "center"],
      fontSize: [1, null, 2, null, "18px"],

      lineHeight: [2.56],
      // backgroundColor: "primary",
    },
  },
};
