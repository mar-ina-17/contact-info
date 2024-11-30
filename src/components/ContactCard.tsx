import React from "react";
import "./ContactCard.css";
import { ContactProps } from "../data";

const ContactInfo: React.FC<ContactProps> = ({
  name,
  about,
  avatar,
  email,
  fc_number,
}: ContactProps) => {
  return (
    <div className="contact-card">
      <div className="contact-avatar">
        <img src={avatar || "https://via.placeholder.com/100"} alt={name} />
      </div>
      <div className="contact-details">
        <h2>{name}</h2>
        {about && <p className="contact-about">{about}</p>}
        {email && (
          <a className="contact-email" href={`mailto:${email}`}>
            {email}
          </a>
        )}
        {fc_number && <p className="contact-number">FC Number: {fc_number}</p>}
      </div>
    </div>
  );
};

export default ContactInfo;
