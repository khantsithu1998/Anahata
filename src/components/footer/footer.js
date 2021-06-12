/** @jsx jsx */
import { jsx, Box, Text, Container } from 'theme-ui';
import { Link } from 'components/link';
import Logo from 'components/logo';

export default function Footer() {
  return (
    <footer
      sx={{
        variant: 'layout.footer',
        backgroundColor: '#fff',
      }}
    >
      <Container
        sx={{
          variant: 'layout.toolbar',
          justifyContent: 'center',
          flexDirection: 'column',
          paddingTop: [30, 40],
          paddingBottom: [30, 65],
        }}
      >
        <Box sx={styles.center}>
          <Logo />
          <Text as="p">
            &copy; {new Date().getFullYear()} Anahata Consultancy Co.,Ltd.All right reserved
          </Text>
          <Text as="p">
            +95 95145973 • No, 26, Danathaid Street, Ohakphosu Quarter, Thanlyin Township, Yangon, Myanmar.
          </Text>
          <Text as="p">
            09 253118754 • No, 8, Aung Tha Pyay Street, Myawadi Quarter, Monywa Township, Sagaing, Myanmar.
          </Text>
          
        </Box>
        
      </Container>
    </footer>
  );
}

const styles = {
  center: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    p: {
      fontSize: [0, 1],
      color: 'black',
      opacity: 0.9,
      mt: ['10px', null, '0'],
    },
  },
};
