import { useState, useEffect } from 'react';

let services = [
  {
    id: 'standard',
    title: 'From $30/hour (min 3 hours per visit apply)',
    img: 'Standard.jpg',
    content: [
      'Every time we clean we provide these services',
      'Bathrooms, Tile walls, shower doors, vanity, sink, mirrors, and chrome fixtures, floors, carpets, toilets, windows sills, ledges, blinds and doors Kitchen & Eating area, Counter tops, range hood, drip pans or glass, sink and chrome, microwave, front of all appliances, cobwebs removed, floor damp mopped and general dusting.',
      'Sleeping & leaving areas, Flat areas hand wiped, doors and door frames spot cleaned, picture frames, ceiling fans, lamp shades, intricate items, heavy knickknack areas, windows sills, ledges, blinds and more…',
    ],
  },
  {
    id: 'premium',
    title: 'Premium From $40/hour (min 3 hours per visit apply)',
    img: 'Premium.jpg',
    content: [
      'Includes all standard cleaning services plus',
      'Bathrooms, tile grounding scrubbed, knickknacks individually, fronts of cabinets, baseboards, floors extra attention, faucets, sinks and drains tooth-brushed. Kitchen & Eating area, Inside of range hood, drip pans or glass top surfaces, knickknacks areas, fronts of cabinets, baseboards, appliances cleaned and shined, floors given extra attention and all kitchen furniture hand wiped',
      'Sleeping & living areas, Accesibles areas under furniture, ceiling fans, frames, furniture and upholstery vacuumed, carpet edges and more…',
    ],
  },
  {
    id: 'additionalServices',
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
  let [service, setService] = useState('standard');
  let [serviceBody, setServiceBody] = useState<{
    id: string;
    img: string,
    title: string;
    content: Array<string>;
  }>({ id: '', title: '', img: '', content: [] });

  useEffect(() => {
    setServiceBody(services.filter((s) => s.id === service)[0]);

    console.log(serviceBody);
    // console.log(serviceBody != null ? serviceBody.content.map(c => console.log(c)) : '');
  }, [service]);

  const handleClick = (e) => {
    setService(e.target.id);
  };

  return (
    <>
      <div className="_services-container">
        <div className="tabs is-large _services">
          <h2 className="title is-1">Services</h2>
          <ul onClick={(e) => handleClick(e)}>
            <li className="is-active">
              <a id="standard">Standard</a>
            </li>
            <li>
              <a id="premium">Premium</a>
            </li>
            <li>
              <a id="additionalServices">Additional Services</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="columns _service-carousel">
        <div className="column">
          <div>
            <h3 className="title">
              {/* From $30/hour (min 3 hours per visit apply) */}
              {serviceBody.title}
            </h3>
            <div className="text-content">
              {serviceBody.content.map((p) => (
                <p className="is-size-5">{p}</p>
              ))}
            </div>
            <button className="button is-large is-link">
              BOOK THIS SERVICE
            </button>
          </div>
        </div>
        {/* <div className="column"> */}
        <div className="column">
          <img src={`/images/${serviceBody.img}`} alt="" />
        </div>
      </div>
    </>
  );
};

export default Services;
