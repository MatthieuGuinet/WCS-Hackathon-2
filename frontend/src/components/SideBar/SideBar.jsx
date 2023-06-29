import { useEffect, useState } from "react";
import axios from "axios";
import "./SideBar.scss";

function SideBar() {
  const [search, setSearch] = useState("");

  const models = ["Model 3", "Model Y", "Model X", "Model S"];
  const brands = ["Marque 1", "Marque 2", "Marque 3"];
  const states = ["Très bon état", "Bon état", "Mauvais état"];

  useEffect(() => {
    axios.get(
      `http://localhost:5000/phones?brand_id=1&model_id=1,2,3&state_id=1`
    );
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="side-bar">
      <div className="input-field">
        <label htmlFor="search">
          <div className="input">
            <i className="fi fi-rr-search" />
            <input
              onChange={handleSearch}
              type="text"
              placeholder="Search"
              value={search}
              id="search"
            />
          </div>
        </label>
      </div>
      <div className="tags" />
      <hr />
      <div className="brand">
        <h3>
          <span className="brand-color-red">•</span> Marque
        </h3>
        {brands.map((brand) => (
          <div className="input-checkbox input-checkbox--sm">
            <label htmlFor={brand}>
              <input type="checkbox" id={brand} name={brand} />
              <div className="checkbox checkbox-red" /> {brand}
            </label>
          </div>
        ))}
      </div>
      <div className="model">
        <h3>
          <span className="brand-color-yellow">•</span> Modèle
        </h3>
        {models.map((model) => (
          <div className="input-checkbox input-checkbox--sm">
            <label htmlFor={model}>
              <input type="checkbox" id={model} name={model} />
              <div className="checkbox checkbox-yellow" /> {model}
            </label>
          </div>
        ))}
      </div>
      <div className="state">
        <h3>
          <span className="brand-color-green">•</span> Etat
        </h3>
        {states.map((state) => (
          <div className="input-checkbox input-checkbox--sm">
            <label htmlFor={state}>
              <input type="checkbox" id={state} name={state} />
              <div className="checkbox checkbox-green" /> {state}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
