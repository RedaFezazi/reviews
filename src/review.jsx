import backImg from "./assets/back.png";
import nextImg from "./assets/next.png";

export const Review = ({
  id,
  name,
  job,
  image,
  text,
  next,
  prev,
  supriseMe,
}) => {
  return (
    <>
      <article className="review">
        <figure className="img-container">
          <img className="person-img" src={image} alt={name} />
          <div className="quote-icon"></div>
        </figure>
        <h3 className="author">{name}</h3>
        <h2 className="job">{job}</h2>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button onClick={prev} className="prev-btn">
            <img src={backImg} alt="back arrow" />
          </button>
          <button onClick={next} className="next-btn">
            <img src={nextImg} alt="next arrow" />
          </button>
        </div>
        <button onClick={supriseMe} className="btn">
          Suprise Me
        </button>
      </article>
    </>
  );
};
export default Review;
