import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../../context/store";

import NoContent from "../NoContent";

import "./styles.css";

const Services = () => {
  const [services, setServices] = useState([]);
  const { dispatch, getServices } = useContext(GlobalContext);

  const fetchServices = async () => {
    const services = await getServices()(dispatch);

    setServices(services);
  };

  useEffect(() => {
    fetchServices();
  }, []);
  return (
    <div className="services-wrapper">
      <div className="section-main-header">My Services</div>
      <div className="section-description">What I offer</div>
      <div className="section-main-content">
        {services.length === 0 ? (
          <NoContent message="No services" />
        ) : (
          <div className="each-category">
            {services.map((service, key) => (
              <div key={key} className="each-card-wrapper">
                <div className="title-wrapper">
                  <h6 className="title">{service.name}</h6>
                </div>
                <div className="service-list">
                  <ul>
                    {service.services.map((item, key) => {
                      return <li key={key}>{item}</li>;
                    })}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
