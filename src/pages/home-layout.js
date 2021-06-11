import React from "react";

import SEO from "components/seo";

const HomeLayout = ({ childern }) => {
  return (
    <div>
      <SEO title="Anahata Consultancy Co., Ltd." />
      {childern}
      
    </div>
  );
};

export default HomeLayout;