import { Routes, Route } from "react-router-dom";
import Main from "@/pages/Main";
import Question1 from "@/pages/Question1";
import Question2 from "@/pages/Question2";
import Question3 from "@/pages/Question3";
import Question4 from "@/pages/Question4";
import Question5 from "@/pages/Question5";

export default function App() {
  console.log("import.meta.env :>> ", import.meta.env);

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/1" element={<Question1 />} />
      <Route path="/2" element={<Question2 />} />
      <Route path="/3" element={<Question3 />} />
      <Route path="/4" element={<Question4 />} />
      <Route path="/5" element={<Question5 />} />
    </Routes>
  );
}
