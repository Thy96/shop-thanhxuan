import React from "react";

import HomeTemplates from "@/components/Templates/HomeTemplates/HomeTemplates";
import BaseLayout from "@/components/Layout/BaseLayout";

const Home = () => {
  // const { data: bestsellerData } = useBestsellers();
  // const { data: blogData } = useBlogs();

  // const handleChange = (data: Product) => {
  //     console.log(data);
  // };

  console.log("1");
  return (
    <>
      <BaseLayout>
        <HomeTemplates />
      </BaseLayout>
    </>
  );
};

export default Home;
