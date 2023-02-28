import React from "react";
import img7 from '../../assets/images/94961214_3031603743545716_3361534657626636288_n.jpg';

const InfoHome = () => {
  return (
    <>
      <div className="info__container">
        <div className="pic">
          <img src={img7} alt="tools" width={600} />
        </div>
        <div className="info--column">
          <h5 className="h5News">
            May Pottery is a ceramics school for all levels, from those who have
            never had any contact with clay to those who just need a space to
            experiment! The feeling that contact with the mud gives you is
            unique and it is precisely that feeling that we want to find.
            Ceramics requires a fairly high level of concentration on the piece,
            so that you immediately forget everything that is going through your
            head and focus solely on what you are doing, on your hands and the
            clay. Nothing else. If you come you will find everything you need to
            be able to take a cup, a bowl, a vase or whatever you have in mind
            and want to do with your own hands!
          </h5>
        </div>
      </div>
    </>
  );
};

export default InfoHome;
