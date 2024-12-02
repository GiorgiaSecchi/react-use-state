import languages from "../data/languages";
// console.log(languages);

export default function Main() {
  return (
    <main>
      <div className="container">
        {languages.map((lang, index) => (
          <button className="btn-lang" key={index}>
            {lang.title}{" "}
          </button>
        ))}
      </div>
    </main>
  );
}
