/* eslint-disable react/prop-types */
import "./Country.css";
export default function Country({
  country: { name, currencies, capital, languages, flags },
}) {
  let langArr = [];
  for (const lang in languages) {
    langArr.push(languages[lang]);
  }

  let currArr = "";
  for (const currency in currencies) {
    currArr += currencies[currency].name + " " + currencies[currency].symbol;
  }

  return (
    <div className="country__card">
      <div className="country__img">
        <img src={flags.png} alt={flags.alt} />
      </div>
      <div className="country__name">
        <h1>{name.common}</h1>
        <div className="country__details">
          <h5>Capital: {capital}</h5>
          <h5>
            {langArr.length > 1 ? "Languages:" : "Language:"}{" "}
            {langArr.toString()}
          </h5>
          <h5>Currency:{currArr}</h5>
        </div>
      </div>
    </div>
  );
}
