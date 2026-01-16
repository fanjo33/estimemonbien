import React, { useState } from "react";

type Props = {
  onEstimation: (value: number) => void;
};

export default function Formulaire({ onEstimation }: Props) {
  const [surface, setSurface] = useState("");
  const [terrain, setTerrain] = useState("");
  const [pieces, setPieces] = useState("");
  const [chambres, setChambres] = useState("");
  const [sdb, setSdb] = useState("");
  const [annee, setAnnee] = useState("");

  const calculer = () => {
    const base = Number(surface) * 3000; // estimation très simple
    onEstimation(Math.round(base));
  };

  return (
    <div style={{ marginTop: 20 }}>
      <input placeholder="Surface habitable (m²)" value={surface} onChange={e => setSurface(e.target.value)} />
      <input placeholder="Surface terrain (m²)" value={terrain} onChange={e => setTerrain(e.target.value)} />
      <input placeholder="Nombre de pièces" value={pieces} onChange={e => setPieces(e.target.value)} />
      <input placeholder="Chambres" value={chambres} onChange={e => setChambres(e.target.value)} />
      <input placeholder="Salles de bain" value={sdb} onChange={e => setSdb(e.target.value)} />
      <input placeholder="Année de construction" value={annee} onChange={e => setAnnee(e.target.value)} />
      <button onClick={calculer} style={{ display: "block", marginTop: 10 }}>Estimer</button>
    </div>
  );
}
