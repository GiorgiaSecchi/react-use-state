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
          <div className="card">
            <h3>title</h3>
            <p>description</p>
          </div>
        </div>
      </section>
    </main>
  );
}
