import React, { useState } from 'react'

export default function Composant3({salaries}) {

    const [service, setService] = useState()
    const [filSalaries, setFilSalaries] = useState([])

    const handleclick = () => {
        setFilSalaries(salaries.filter(s => s.service.nomser == service))
    }
  return (
    <div>
        <h1>Recherche par service</h1>
        Entrer le nom du service : 
        <input type="text" name="service" id="service" value={service} onChange={(e) => setService(e.target.value)}/>
        <button onClick={handleclick}>Chercher</button>
        <h1>Résultat : </h1>
        {
            filSalaries.length == 0 ? 'Aucun salarie n est affecte a ce service' :
            <ul>
                {filSalaries.map(s => <li>
                    nom : {s.nom} prenom : {s.prenom}
                </li>)}
            </ul>
        }
    </div>
  )
}
