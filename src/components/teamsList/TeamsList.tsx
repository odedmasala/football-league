import React, { useEffect, useState } from "react";
import { TeamsProp } from "../../footballLeague.model";

const TeamsList: React.FC<TeamsProp> = ({ teamsLeague }) => {
  return (
    <div className="teams">
      <ul className="team-list">
        {Array.isArray(teamsLeague) &&
          teamsLeague.length > 0 &&
          teamsLeague.map((team, index) => (
            <li key={index}>
              <p>{team.strTeam}</p>
              <img className="team-logo" src={team.strTeamBadge} alt="" />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TeamsList;
