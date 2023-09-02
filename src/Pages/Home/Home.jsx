import React from "react";
import Banner from "../../Components/Banner/Banner";
import ExploreMenu from "../../Components/ExploreMenu/ExploreMenu";
import BSeller from "../../Components/BSeller/BSeller";
import TopDeal from "../../Components/TopDeals/TopDeal";
import Deal from "../../Components/Deal/Deal";

const Home = () => {
  return (
    <>
      <Banner />
      <ExploreMenu />
      <BSeller />
      <TopDeal />
      <Deal />
    </>
  );
};

export default Home;
