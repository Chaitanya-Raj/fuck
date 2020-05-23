import React, { useState } from "react";
import FoaasCard from "react-foaas-card";
import "./App.css";

const fucks = [
  "asshole",
  "awesome",
  "bag",
  "because",
  "bucket",
  "bye",
  "college",
  "cool",
  "cup",
  "diabetes",
  "even",
  "everyone",
  "everything",
  "exams",
  "family",
  "fascinating",
  "flying",
  "ftfy",
  "fyyff",
  "give",
  "horse",
  "immensity",
  "jinglebells",
  "idea",
  "life",
  "logs",
  "looking",
  "maybe",
  "me",
  "mornin",
  "no",
  "pink",
  "programmer",
  "question",
  "ratsarse",
  "retard",
  "ridiculous",
  "rtfm",
  "sake",
  "shit",
  "single",
  "thanks",
  "that",
  "this",
  "too",
  "tucker",
  "what",
  "zero",
];

const fuckers = [
  "Mahatma Gandhi",
  "Joseph Stalin",
  "Adolf Hitler",
  "Queen Elizabeth II",
  "Genghis Khan",
  "Abraham Lincoln",
  "George Washington",
  "Jawaharlal Nehru",
  "Barack Obama",
  "The Foundation",
  "SCP-682",
  "SCP-049",
  "God",
  "Vladmir Putin",
  "Donald Trump",
  "Narendra Modi",
  "Amit Shah",
  "Ravish Kumar",
  "Rasputin",
  "Vladmir Lenin",
  "Tanshi Nayak",
  "Prateek Balchandani",
  "Simran Saini",
  "Mehul Shrivastav",
  "Naina",
  "Joy",
  "Tuhinder",
  "Sonal Verma",
  "Subhoshree Bose",
  "Salman Khan",
  "Naruto Uzumaki",
  "Goku",
  "The Joker",
  "Batman",
  "Albert Einstein",
  "Issac Newton",
  "Some asshole",
];

function App() {
  const [type, setType] = useState("programmer");
  const [from, setFrom] = useState("Chaitanya Raj");
  return (
    <div className="container">
      <button
        className="btn"
        type="button"
        onClick={() => {
          setType(fucks[Math.floor(Math.random() * fucks.length)]);
          setFrom(fuckers[Math.floor(Math.random() * fuckers.length)]);
        }}
      >
        <span>Fuck</span>
      </button>
      <FoaasCard
        className="card"
        type={type}
        from={from}
        darkMode
        middleFinger={false}
      />
    </div>
  );
}

export default App;
