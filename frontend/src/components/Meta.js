import { Category } from "@material-ui/icons";
import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords,category }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
      <meta name="category" content={category} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome To Yuthies Aari",
  description: "We sell the best products for cheap",
  keywords: "electronics, buy electronics, cheap electroincs",
  category: "fresh"
};

export default Meta;
