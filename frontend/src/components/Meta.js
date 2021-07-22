import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};

Meta.defailtProps = {
  title: "Welcome to ProShop",
  description: "sell stuff",
  keywords: "keyword1, keyword2",
};

export default Meta;
