import React from "react";
import { Button } from "semantic-ui-react";

function WeaponsP2(props) {
  return (
    <div>
      <p>You pick up the {props.selectedWeapon.name}</p>
      It has a hitpoints of : {props.selectedWeapon.hitPoints}
      and a defence of: {props.selectedWeapon.defence}
    </div>
  );
}

export default WeaponsP2;
