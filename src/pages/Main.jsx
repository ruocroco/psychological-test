import { useState } from "react";

import Landing from "@/components/Landing";
import Start from "@/components/Start";
import Level from "@/components/Level";
import Name from "@/components/Name";
import Character from "@/components/Character";

export default function Main() {
  const [user, setUser] = useState({ name: "" });
  const [scores, setScores] = useState(null);

  const isLanding = scores === null;
  const isStart = scores?.length === 0;
  const isLevel =
    scores?.length === 4 && scores.reduce((sum, score) => sum + score) < 11;
  const isName =
    scores?.length === 4 &&
    scores.reduce((sum, score) => sum + score) === 11 &&
    !user.name;
  const isCharacter =
    scores?.length === 4 &&
    scores.reduce((sum, score) => sum + score) === 11 &&
    user.name;

  return (
    <>
      {isLanding && <Landing setScores={setScores} />}
      {isStart && <Start setScores={setScores} />}
      {isLevel && <Level scores={scores} setScores={setScores} />}
      {isName && <Name scores={scores} setUser={setUser} />}
      {isCharacter && <Character scores={scores} user={user} />}
    </>
  );
}
