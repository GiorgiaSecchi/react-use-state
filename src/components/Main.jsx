import languages from "../data/languages";
// console.log(languages);
import { useState } from "react";

export default function Main() {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  return (
    <main>
      <section className="container">
        {/* bottoni */}
        <div>
          {languages.map((lang, index) => (
            <button
              className={`btn-lang ${
                selectedLanguage.title === lang.title ? `active` : null
              }`}
              key={index}
              onClick={() => setSelectedLanguage(lang)}
            >
              {lang.title}
            </button>
          ))}
        </div>

        {/* card */}
        <div className="card">
          <h3>{selectedLanguage.title}</h3>
          <p>{selectedLanguage.description}</p>
        </div>
      </section>
    </main>
  );
}
