import React from "react";
import Card from "./Card";
import emojipedia from "../emojipedia"



function createCard(detail) {
  return <Card


    key={detail.id}
    emoji={detail.emoji}
    name={detail.name}
    meaning={detail.meaning}

  />

}


function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(createCard)}
      </dl>
    </div>
  );
}

export default App;
