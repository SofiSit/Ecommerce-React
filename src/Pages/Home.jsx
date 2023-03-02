import React from "react";
import '../index.css'
import Carousel from '../components/Carousel/Carousel';
import Courses from "../components/CoursesHome/Courses";
import InfoHome from "../components/InfoHome/InfoHome";

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
