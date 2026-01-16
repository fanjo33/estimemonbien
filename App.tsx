import React, { useState } from "react";
import Formulaire from "./src/components/Formulaire";
import Resultats from "./src/components/Resultats";

export default function App() {
  const [estimation, setEstimation] = useState(0);

  return (
    <div style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>EstimeMonBien</h1>
      <p>Remplissez le formulaire ci-dessous pour obtenir une estimation rapide :</p>
      
      <Formulaire onEstimation={setEstimation} />
      {estimation > 0 && <Resultats estimation={estimation} />}

      <div style={{ marginTop: 20, padding: 10, backgroundColor: "#FFF3CD", border: "1px solid #FFEEBA" }}>
        <strong>Note:</strong> Cette estimation est basée sur une analyse automatique. Pour une évaluation précise, consultez un professionnel de l'immobilier.
      </div>
    </div>
  );
}
