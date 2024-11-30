import ContactCard from "./components/ContactCard";
import { contactInfoArray } from "./data";
import "./App.css";

function App() {
  return (
    <div>
      <h1 className="app-header">
        №17 Демонстрация на CI/CD - дизайн, създаване и изпълнение на pipelines
        чрез популярни инструменти
      </h1>
      <section className="contact-section">
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
    </div>
  );
}

export default App;
