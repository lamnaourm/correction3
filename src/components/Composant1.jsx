import React, { useState } from 'react'

export default function Composant1() {

    const [matricule, setMatricule] = useState()
    const [marque, setMarque] = useState()
    const [datemiseCir, setDatemise] = useState()
    const [couleur, setCouleur] = useState()

    const handleClick = () => {
        document.getElementById('res').innerHTML = `Matricule : ${matricule}`
        document.getElementById('res').innerHTML += `Marque : ${marque}`
        document.getElementById('res').innerHTML += `Date mise en circulation : ${datemiseCir}`
        document.getElementById('res').innerHTML += `Couleur : ${couleur}`
    }

    return (
        <div>
            <h1>Gestion Voitures</h1>
            <div>
                Matricule : <input type="text" name="mtr" id="mtr" value={matricule} onChange={(e) => setMatricule(e.target.value)} />
            </div>
            <div>
                Marque : <input type="text" name="mrq" id="mrq" value={marque} onChange={(e) => setMarque(e.target.value)} />
            </div>
            <div>
                Date mise en circulation : <input type="date" name="datemise" id="datemise" value={datemiseCir} onChange={(e) => setDatemise(e.target.value)}/>
            </div>
            <div>
                Couleur : <input type="text" name="couleur" id="couleur" value={couleur} onChange={(e) => setCouleur(e.target.value)}/>
            </div>
            <div>
                <input type="button" value="Confirmer" onClick={handleClick} />
            </div>
            <div>
                <h2>Recapitultif des informations : </h2>
                <ul id='res'>

                </ul>
            </div>
        </div>

    )
}
