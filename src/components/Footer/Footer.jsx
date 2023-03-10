const Footer = () => {
  return (
    <>
      <footer>
        <section className="ft-main">
          <div className="ft-main-item">
            <p></p>
            <h2 className="ft-title">
              Thanks for visiting us{" "}
              <box-icon
                name="heart-circle"
                animation="burst"
                rotate="90"
                color="white"
              ></box-icon>
            </h2>
          </div>
        </section>

        <section className="ft-legal">
          <ul className="ft-legal-list">
            <li>&copy; 2023 by Sofía Sitjar May</li>
          </ul>
        </section>
      </footer>
    </>
  );
};

export default Footer;
