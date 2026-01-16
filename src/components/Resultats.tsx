import React from "react";

type Props = {
  estimation: number;
};

export default function Resultats({ estimation }: Props) {
  return (
    <div style={{ marginTop: 20 }}>
      <h2>Estimation</h2>
      <p><strong>{estimation.toLocaleString()} €</strong></p>
    </div>
  );
}
