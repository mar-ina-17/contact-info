import React from "react";

interface ContactProps {
  name: string;
  about?: string;
  avatar?: string;
  email?: string;
  fc_number?: number;
}

const ContactInfo: React.FC<ContactProps> = ({
  name,
  about,
  avatar,
  email,
  fc_number,
}: ContactProps) => {
  return (
    <div className="contact-card">
      <div className="contact-info">
        <img src={avatar} alt={name} />
        <h2>{name}</h2>
        {about && <p>{about}</p>}
        {email && <a href={`mailto:${email}`}>{email}</a>}
        {fc_number && <p>Full Contact Number: {fc_number}</p>}
      </div>
    </div>
  );
};

export default ContactInfo;
