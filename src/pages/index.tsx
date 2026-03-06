import React from "react";

import HomeTemplates from "@/components/Templates/HomeTemplates/HomeTemplates";
import BaseLayout from "@/components/Layout/BaseLayout";

const Home = () => {
  return (
    <>
      <BaseLayout>
        <HomeTemplates />
      </BaseLayout>
    </>
  );
};

export default Home;
