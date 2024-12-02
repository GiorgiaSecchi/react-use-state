import languages from "../data/languages";

export default function ButtonLang() {
  return (
    <div className="container">
      {languages.map((lang, index) => (
        <button className="btn-lang" key={index}>
          {lang.title}
        </button>
      ))}
    </div>
  );
}
