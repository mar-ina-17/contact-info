import React from "react";
import ContactCard from "./components/ContactCard";
import { contactInfoArray } from "./data";

function App() {
  return (
    <section>
      {contactInfoArray.map((contactInfo, id) => (
        <ContactCard
          key={id}
          name={contactInfo.name}
          about={contactInfo.about}
          avatar={contactInfo.avatar}
          email={contactInfo.email}
          fc_number={contactInfo.fc_number}
        />
      ))}
    </section>
  );
}

export default App;
