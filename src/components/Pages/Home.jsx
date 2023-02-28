import React from "react";
import "../../index.css";
import Carousel from "../Carousel/Carousel";
import Courses from "../CoursesHome/Courses";
import InfoHome from "../InfoHome/InfoHome";

const Index = () => {
  return (
    <>
      <Carousel />
      <InfoHome />
      <Courses />
    </>
  );
};

export default Index;
