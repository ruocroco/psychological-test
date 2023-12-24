import { Routes, Route } from "react-router-dom";
import HomePage from "@/pages/Home";
import Question1 from "@/pages/Question1";
import Question2 from "@/pages/Question2";
import Question3 from "@/pages/Question3";
import Question4 from "@/pages/Question4";
import Question5 from "@/pages/Question5";
import Question6 from "@/pages/Question6";
import Question7 from "@/pages/Question7";
import Question8 from "@/pages/Question8";
import Question9 from "@/pages/Question9";
import Question10 from "@/pages/Question10";
import Question11 from "@/pages/Question11";
import Nav from "@/components/Nav";

export default function App() {
  console.log("import.meta.env :>> ", import.meta.env);
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/question1" element={<Question1 />} />
        <Route path="/question2" element={<Question2 />} />
        <Route path="/question3" element={<Question3 />} />
        <Route path="/question4" element={<Question4 />} />
        <Route path="/question5" element={<Question5 />} />
        <Route path="/question6" element={<Question6 />} />
        <Route path="/question7" element={<Question7 />} />
        <Route path="/question8" element={<Question8 />} />
        <Route path="/question9" element={<Question9 />} />
        <Route path="/question10" element={<Question10 />} />
        <Route path="/question11" element={<Question11 />} />
      </Routes>
    </>
  );
}
