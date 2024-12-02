import languages from "../data/languages";
// console.log(languages);

export default function Main() {
  return (
    <main>
      <section className="container">
        <div>
          {languages.map((lang, index) => (
            <button className="btn-lang" key={index}>
              {lang.title}
            </button>
          ))}
        </div>
        <div className="card">
          <h3>{languages[0].title}</h3>
          <p>{languages[0].description}</p>
        </div>
      </section>
    </main>
  );
}
