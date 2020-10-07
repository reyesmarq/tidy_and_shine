import React from 'react';
import ServicesCarousel from './ServicesCarousel';

const Services = () => {
  return (
    <>
      <div className="tabs is-large _services">
        <h2 className="title is-1">Services</h2>
        <ul>
          <li className="is-active">
            <a>Standard</a>
          </li>
          <li>
            <a>Premium</a>
          </li>
          <li>
            <a>Additional Services</a>
          </li>
        </ul>
      </div>

      <ServicesCarousel />
    </>
  );
};

export default Services;
