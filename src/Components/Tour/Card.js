import tourImage from '../../assets/images/pangandaran.jpg';

const TourCard = () => {
  return (
    <div className="card-container">
      <div className="card">

        <div className="card__header">
          <div className="card__picture">
            <div className="card__picture-overlay">&nbsp;</div>
            <img className="card__picure-img" src={tourImage} alt="tour-img" />
          </div>
          <h3 className="heading-tertirary">
            <span>Pangandaran Tour Kuy</span>
          </h3>
        </div>

        <div className="card__details">
          <p className="card__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod porta massa vitae pellentesque. Proin iaculis, nisi sit amet tincidunt tristique, quam ante varius sapien, nec congue risus felis nec augue. Quisque in tempus turpis. Aliquam erat volutpat. In sed quam purus. Integer consectetur, mauris at tempor vestibulum, dui urna tempus nunc, ultricies aliquam orci velit et est.</p>
        </div>

        <div className="card__footer">
          <p>
            <span className="card__footer-value">RP. 10.000</span>
            <span className="card__footer-text">/per person</span>
          </p>
          <p className="card__ratings">
            <span className="card__footer-value">4.5</span>
            <span className="card__footer-value"> rating (10)</span>
          </p>
          <a className="btn btn--green btn--small" href="/tour/details">Details</a>
        </div>
      </div>
    </div>
  )
};

export default TourCard;