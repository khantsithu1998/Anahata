import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';

import Banner from 'sections/banner';
import Services from 'sections/services';
import WhatWeDo from 'sections/what-we-do';
import ContactUs from 'sections/contact-us';
import About from 'sections/about';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Anahata Technology Company" />
          <Banner />
          <Services />
          <About/>
          <WhatWeDo />
          {/* <Careers/> */}
          {/* <ContactUs/> */}
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
