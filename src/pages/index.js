import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';

import Banner from 'sections/banner';
import Services from 'sections/services';
import About from 'sections/about'
import WhatWeDo from 'sections/what-we-do';
import FAQ from 'sections/faq';
import ContactUs from 'sections/contact-us';


export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Anahata Consultancy Co., Ltd." />
          <Banner />
          <Services />
          <About/>
          <WhatWeDo />
          <FAQ/>
          {/* <Careers/> */}
          {/* <ContactUs/> */}
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
