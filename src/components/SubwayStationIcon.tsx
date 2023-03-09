import React from "react";
import { Train } from "../data/stations";


export const SubwayStationIcon: React.FC<{ trains?: Train[] }> = ({ trains }) => (
    <span>
      {trains?.map((train) => (
        <span className={`line-icon line-${train}`} key={train}>
          {train}
        </span>
      ))}
    </span>
  );