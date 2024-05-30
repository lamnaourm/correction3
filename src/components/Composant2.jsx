import React from 'react'

export default function Composant2({salaries}) {
  return (
    <div>
        <table>
            <tr>
                <th>nom</th>
                <th>prenom</th>
                <th>fonction</th>
                <th>service</th>
            </tr>
            {
                salaries.map(s => <tr key={s._id}>
                    <td>{s.nomsal}</td>
                    <td>{s.prenomsal}</td>
                    <td>{s.fonction}</td>
                    <td>{s.service.nomser}</td>
                </tr>)
            }
        </table>
    </div>
  )
}
