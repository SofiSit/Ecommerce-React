import React from "react";
import img3 from "../../assets/images/taller-de-cerámica-2021-2.png";
import img4 from "../../assets/images/estudio-ceramica-proceso-creacion-ceramica_344168-615.avif"; //cambiar nombre a pages y cambiarle el nombre al doc por home y linkear todos los archivos
import img5 from "../../assets/images/trabajo-artesanal-profesional-taller.jpg";
import img6 from "../../assets/images/manos-alfarero-femenino-irreconocible-haciendo-jarron-arcilla-rueda-lanzamiento.jpg";

const Courses = () => {
  return (
    <>
      <div className="containerInspired">
        <div className="containerInspired2">
          <h3 className="containerInspiredH3">Our space and Courses</h3>
        </div>
        <div className="news__container">
          {
            <div className="news__container--column">
              <img src={img3} alt="studioClay" />
              <h5 className="h5News">Hand modeling</h5>
            </div>
          }

          <div className="news__container--column">
            <img src={img4} alt="potteryart" />
            <h5 className="h5News">Choose your own design</h5>
          </div>

          <div className="news__container--column">
            <img src={img5} alt="art" />
            <h5 className="h5News">Oven technique and temperatures</h5>
          </div>

          <div className="news__container--column">
            <img src={img6} alt="ceramic" />
            <h5 className="h5News"> Lathe Course</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
