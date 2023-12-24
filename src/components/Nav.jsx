import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div className="flex gap-4 justify-center mb-6 flex-wrap w-full mt-10 px-5">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/question1">Question 1</NavLink>
      <NavLink to="/question2">Question 2</NavLink>
      <NavLink to="/question3">Question 3</NavLink>
      <NavLink to="/question4">Question 4</NavLink>
      <NavLink to="/question5">Question 5</NavLink>
      <NavLink to="/question6">Question 6</NavLink>
      <NavLink to="/question7">Question 7</NavLink>
      <NavLink to="/question8">Question 8</NavLink>
      <NavLink to="/question9">Question 9</NavLink>
      <NavLink to="/question10">Question 10</NavLink>
      <NavLink to="/question11">Question 11</NavLink>
    </div>
  );
}
