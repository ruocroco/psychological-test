import { useState } from "react";

import Landing from "@/components/Landing";
import Level from "@/components/Level";
import Name from "@/components/Name";
import Character from "@/components/Character";

export default function Main() {
  const [user, setUser] = useState({ name: "" });
  const [scores, setScores] = useState(null);
  console.log("scores :>> ", scores);
  console.log("user.name :>> ", user.name);
  console.log(
    "scores?.reduce((sum, score) => sum+score) :>> ",
    scores?.reduce((sum, score) => sum + score)
  );
  const isLanding = scores === null;
  const isLevel =
    scores !== null && scores.reduce((sum, score) => sum + score) < 11;
  const isName =
    scores !== null &&
    scores.reduce((sum, score) => sum + score) === 11 &&
    !user.name;
  const isCharacter =
    scores !== null &&
    scores.reduce((sum, score) => sum + score) === 11 &&
    user.name;

  return (
    <>
      {isLanding && <Landing setScores={setScores} />}
      {isLevel && <Level scores={scores} setScores={setScores} />}
      {isName && <Name scores={scores} setUser={setUser} />}
      {isCharacter && <Character scores={scores} user={user} />}
    </>
  );
}
