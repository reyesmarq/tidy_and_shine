import { useState, useEffect } from 'react';

let reviewsData = [
  {
    customerName: 'John Doe 1',
    reviewContent:
      "I love what they do and for what it is woth I'm a Cancer patient and it is very important to have and keep and clean environment. If you need tomseone to clean your house or business I promise you will not be disappointed with this company.",
  },
  {
    customerName: 'John Doe 2',
    reviewContent:
      'Rocio and her team have been the best house cleaning service I have ever used.',
  },
  {
    customerName: 'John Doe 3',
    reviewContent:
      "I'm very pleased whit the work that tidy & shine has done for me, I highly recommend their services and looking forward to book again, they are great.",
  },
];

const Reviews = () => {
  const [curr, setCurr] = useState(0);

  const goToNext = () => {
    setCurr(curr === reviewsData.length - 1 ? 0 : curr + 1);
  };

  useEffect(() => {
    setTimeout(goToNext, 5000);
  }, [curr]);

  return (
    <div className="_reviews_content">
      {reviewsData.map((r, i) => (
        <blockquote key={i} className={i === curr ? 'is-active' : ''}>
          <h4 className="title">{r.customerName}</h4>
          <p>{r.reviewContent}</p>
        </blockquote>
      ))}
    </div>
  );
};

export default Reviews;
