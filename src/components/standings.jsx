import React from 'react';
import { fazeTable, torontoTable, opticTable, newyorkTable, minnesotaTable, lagTable, vegasTable, seattleTable, carolinaTable, latTable, miamiTable, bostonTable } from '../assets/standings/standingsIndex';
import '../styles/standings/standingsToChamps.css';

const Standings = () => {
  // Datos de ejemplo para las posiciones
  const standingsData = [
    { id: 'team1', rank: 1, logo: fazeTable, cdlPoints: 335, team: 'Faze Clan' },
    { id: 'team2', rank: 2, logo: torontoTable, cdlPoints: 285, team: 'Toronto Ultra' },
    { id: 'team3', rank: 3, logo: opticTable, cdlPoints: 275, team: 'OpTic Chicago' },
    { id: 'team4', rank: 4, logo: newyorkTable, cdlPoints: 190, team: 'New York Subliners' },
    { id: 'team5', rank: 5, logo: minnesotaTable, cdlPoints: 120, team: 'Minnesota Rokkr' },
    { id: 'team6', rank: 6, logo: lagTable, cdlPoints: 110, team: 'Los Angeles Guerrillas' },
    { id: 'team7', rank: 7, logo: vegasTable, cdlPoints: 100, team: 'Las Vegas Legion' },
    { id: 'team8', rank: 8, logo: seattleTable, cdlPoints: 100, team: 'Seattle Surge' },
    { id: 'team9', rank: 9, logo: carolinaTable, cdlPoints: 95, team: 'Carolina Heretics' },
    { id: 'team10', rank: 10, logo: latTable, cdlPoints: 90, team: 'LAT Los Angeles' },
    { id: 'team11', rank: 11, logo: miamiTable, cdlPoints: 80, team: 'Miami Mutineers' },
    { id: 'team12', rank: 12, logo: bostonTable, cdlPoints: 50, team: 'Boston Uprising' }
  ];
  

  return (
    <div className="table-container">
      <h2>Standings</h2>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Team</th>
              <th>CDL Points</th>
            </tr>
          </thead>
          <tbody>
            {standingsData.map((teamData, index) => (
              <tr key={index} id={teamData.id} className="team-row">
                <td><span className="rank-number">{teamData.rank}</span></td>
                <td>
                  <img src={teamData.logo} alt={teamData.team} className="team-logo" />
                  {teamData.team}
                </td>
                <td><span className="cdl-points-number">{teamData.cdlPoints}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Standings;

