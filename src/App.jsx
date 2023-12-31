import Review from "./review";
import reviews from "./data";
import { useState } from "react";

const App = () => {
  const [index, setIndex] = useState(0);

  const next = () =>
    index === reviews.length - 1 ? setIndex(0) : setIndex(index + 1);

  const prev = () =>
    index === 0 ? setIndex(reviews.length - 1) : setIndex(index - 1);

  const supriseMe = () => setIndex(Math.floor(Math.random() * 4));
  return (
    <main>
      <Review
        key={reviews[index].id}
        {...{ ...reviews[index], next, prev, supriseMe }}
      />
    </main>
  );
};
export default App;
