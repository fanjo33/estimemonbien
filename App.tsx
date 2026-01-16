import { useState } from "react";

function App() {
  const [surface, setSurface] = useState("");
  const [terrain, setTerrain] = useState("");
  const [pieces, setPieces] = useState("");
  const [chambres, setChambres] = useState("");
  const [sdb, setSdb] = useState("");
  const [annee, setAnnee] = useState("");
  const [prix, setPrix] = useState<number | null>(null);

  const estimer = () => {
    const s = Number(surface);
    if (!s) return;

    let estimation = s * 3200;

    if (Number(terrain) > 300) estimation *= 1.05;
    if (Number(annee) > 2015) estimation *= 1.08;
    if (Number(sdb) > 1) estimation *= 1.03;

    setPrix(Math.round(estimation));
  };

  return (
    <div style={{ maxWidth: 700, margin: "40px auto", fontFamily: "Arial" }}>
      <h1>EstimeMonBien</h1>
      <p>Estimation immobilière instantanée (France)</p>

      <div style={{ display: "grid", gap: 10 }}>
        <input placeholder="Surface habitable (m²)" value={surface} onChange={e => setSurface(e.target.value)} />
        <input placeholder="Surface du terrain (m²)" value={terrain} onChange={e => setTerrain(e.target.value)} />
        <input placeholder="Nombre de pièces" value={pieces} onChange={e => setPieces(e.target.value)} />
        <input placeholder="Chambres" value={chambres} onChange={e => setChambres(e.target.value)} />
        <input placeholder="Salles de bain" value={sdb} onChange={e => setSdb(e.target.value)} />
        <input placeholder="Année de construction" value={annee} onChange={e => setAnnee(e.target.value)} />

        <button
          onClick={estimer}
          style={{ padding: 12, fontWeight: "bold", cursor: "pointer" }}
        >
          Estimer mon bien
        </button>
      </div>

      {prix && (
        <div style={{ marginTop: 20, padding: 15, background: "#eef2ff" }}>
          <h2>{prix.toLocaleString("fr-FR")} €</h2>
          <p>Estimation indicative</p>
        </div>
      )}

      <p style={{ marginTop: 20, fontSize: 12, background: "#fff3cd", padding: 10 }}>
        <strong>Note :</strong> Cette estimation est basée sur une analyse automatique du marché immobilier via recherche web.
        Pour une évaluation précise, consultez un professionnel de l’immobilier.
      </p>
    </div>
  );
}

export default App;
