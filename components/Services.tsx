import { useState, useEffect } from 'react';

interface Service {
  id: string;
  img: string;
  title: string;
  content: Array<string>;
}

let services: Array<Service> = [
  {
    id: 'Standard',
    title: 'From $30/hour (min 3 hours per visit apply)',
    img: 'Standard.jpg',
    content: [
      'Every time we clean we provide these services',
      'Bathrooms, Tile walls, shower doors, vanity, sink, mirrors, and chrome fixtures, floors, carpets, toilets, windows sills, ledges, blinds and doors Kitchen & Eating area, Counter tops, range hood, drip pans or glass, sink and chrome, microwave, front of all appliances, cobwebs removed, floor damp mopped and general dusting.',
      'Sleeping & leaving areas, Flat areas hand wiped, doors and door frames spot cleaned, picture frames, ceiling fans, lamp shades, intricate items, heavy knickknack areas, windows sills, ledges, blinds and more…',
    ],
  },
  {
    id: 'Premium',
    title: 'Premium From $40/hour (min 3 hours per visit apply)',
    img: 'Premium.jpg',
    content: [
      'Includes all standard cleaning services plus',
      'Bathrooms, tile grounding scrubbed, knickknacks individually, fronts of cabinets, baseboards, floors extra attention, faucets, sinks and drains tooth-brushed. Kitchen & Eating area, Inside of range hood, drip pans or glass top surfaces, knickknacks areas, fronts of cabinets, baseboards, appliances cleaned and shined, floors given extra attention and all kitchen furniture hand wiped',
      'Sleeping & living areas, Accesibles areas under furniture, ceiling fans, frames, furniture and upholstery vacuumed, carpet edges and more…',
    ],
  },
  {
    id: 'Additional Services',
    title: 'Additional Services  From $25/hour (min 3 hours per visit apply)',
    img: 'Extra.jpg',
    content: [
      'Office Cleaning You chase your Professional goals,we will chase away the office germs and dust!',
      'After Building Cleaning',
      'We can take care of the mess the builders left with ease',
      'Holiday Rental Cleaning',
      'Have your AirBnB rental cleaned and prepared for your next guest',
      'End of tenancy cleaning',
      'Winning that Security deposit is a piece of cake!',
      'Heavy Duty Cleaning',
      'Don’t Sweat Get the experience of getting years of dirt out of your House!',
      'Oven Cleanin',
      'Everything tastes better when cooked in a clean oven!',
      'Fridge Cleaning',
      "Let 's get it Done",
      'Wash and Fold Laundry Servic',
      'We will make it easy for you.',
      'Organizer Service',
      'Be ready to clear out the clutter in your life!',
    ],
  },
];

const Services = () => {
  let [service, setService] = useState(0);

  return (
    <>
      <div className="_services-container">
        <div className="tabs is-large _services">
          <h2 className="title is-1">Services</h2>
          <ul>
            {services.map((_service, index) => (
              <li
                className={service === index ? 'is-active' : ''}
                key={index}
                onClick={() => setService(index)}
              >
                <a>{_service.id}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="_service-carousel-container">
        {services.map((_service, i) => (
          <div
            key={i}
            className={
              service === i
                ? 'columns _service-carousel is-active'
                : 'columns _service-carousel'
            }
          >
            <div className="column">
              <div>
                <h3 className="title">{_service.title}</h3>
                <div className="text-content">
                  {_service.content.map((p, i) => (
                    <p className="is-size-5" key={i}>
                      {p}
                    </p>
                  ))}
                </div>
                <button className="button is-large is-link">
                  BOOK THIS SERVICE
                </button>
              </div>
            </div>
            <div className="column">
              <img src={`/images/${_service.img}`} alt="" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Services;
