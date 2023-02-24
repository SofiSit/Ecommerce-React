import React from "react";
import img3 from "../../assets/images/taller-de-cerámica-2021-2.png";
import img4 from "../../assets/images/estudio-ceramica-proceso-creacion-ceramica_344168-615.avif"; //cambiar nombre a pages y cambiarle el nombre al doc por home y linkear todos los archivos
import img5 from "../../assets/images/trabajo-artesanal-profesional-taller.jpg";
import img6 from "../../assets/images/manos-alfarero-femenino-irreconocible-haciendo-jarron-arcilla-rueda-lanzamiento.jpg";
import img7 from "../../assets/images/herramientas-alfareria-mesa.jpg";
import "../../index.css";

const Index = () => {
  return (
    <>
      <>
        <div className="getInspo__container">
          <div className="pic">
            <img src={img7} alt="panton" width={900} />
          </div>
          <div className="getInspo--column">
            <h5 className="h5News">
              May Pottery is a ceramics school for all levels, from those who
              have never had any contact with clay to those who just need a
              space to experiment! The feeling that contact with the mud gives
              you is unique and it is precisely that feeling that we want to
              find. Ceramics requires a fairly high level of concentration on
              the piece, so that you immediately forget everything that is going
              through your head and focus solely on what you are doing, on your
              hands and the clay. Nothing else. If you come you will find
              everything you need to be able to take a cup, a bowl, a vase or
              whatever you have in mind and want to do with your own hands!
            </h5>
          </div>
        </div>
      </>
      {/*   <div className="news__container">
        <div className="news__container--column">
          <img src={img3} alt="panton" />
          <h5 className="h5News">DESIGNED BY Verner Panton</h5>
          <p className="pNews">
            {" "}
            Verner Panton started out as a painter before studying architecture
            at the Royal Academy of Fine Arts in Copenhagen. After an
            apprenticeship with architect/designer Arne Jacobsen, Panton pursued
            a path in furniture and interior design. It was during this part of
            his career that he became famous for his avant-garde work, such as a
            series of chairs with no legs and a sofa curated to be placed
            vertically against a wall. In the 60's and 70's, his passion for
            designing entire environments led to immersive interiors featuring
            his hypnotic patterns and futuristic designs for furniture,
            lighting, wallpapers, posters and rugs.
          </p>
        </div>

        <div className="news__container--column">
          <img src={img4} alt="spaceCopenhague" />
          <h5 className="h5News">Designed by Space Copenhagen</h5>
          <p className="pNews">
            Established in 2005 by Signe Bindslev Henriksen and Peter Bundgaard
            Rützou, Space Copenhagen is a design studio works across multiple
            disciplines from furniture, lighting and refined objects, to art
            installations, art direction and interior design for private homes,
            hotels and restaurants all over the world. The ambition is to forge
            new paths by balancing opposites — classic and modern, industrial
            and organic, sculptural and minimal, light and shade. Duality and
            contrast. Curiosity as a fundamental human condition.
          </p>
        </div>

        <div className="news__container--column">
          <img src={img5} alt="Welling" />
          <h5 className="h5News">Hee Welling: Designer of november</h5>
          <p className="pNews">
            Hee Welling (born 1974) is an award-winning furniture designer. In
            addition to being exhibited at fairs and museums worldwide, his
            products can be found in a diverse array of interiors, from The Oslo
            Opera House to Australia's parliament.Raised in the Danish
            countryside, Welling's lifelong appreciation for the outdoors can be
            seen in the honest minimalism of his pieces. Each of his creations
            is united by a distinctive visual identity as he focuses on clean
            lines and simple silhouettes. Welling works with a wide array of
            materials, with wood and metals used alongside non-natural elements
            like plastic.
          </p>
        </div>
      </div> */}

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
            <h5 className="h5News">Oven technique and temperatures</h5>
          </div>

          <div className="news__container--column">
            <img src={img5} alt="art" />
            <h5 className="h5News"></h5>
          </div>

          <div className="news__container--column">
            <img src={img6} alt="ceramic" />
            <h5 className="h5News"> </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
