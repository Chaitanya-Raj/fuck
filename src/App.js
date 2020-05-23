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
  "question",
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
  "Abraham Lincoln",
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
  "Monjulika Dutta",
  "Tanshi Nayak",
  "Prateek Balchandani",
  "Simran Saini",
  "Mehul Shrivastav",
  "Naina",
  "Joy",
  "Tuhinder",
  "Sonal Verma",
  "Subhoshree Bose",
  "Ankit Verma",
  "Kshitiz",
  "Adhik Nijwala",
  "Devender Samant",
  "Ankit Negi",
  "Ishita Jain",
  "Jatin Dehmiwal",
  "Jagriti Verma",
  "Niyati",
  "Yatharth Shakya",
  "Tanveer Alam",
  "Shubheshwar Gupta",
  "Kojo",
  "Payal",
  "Shreya Singh",
  "Diksha",
  "Jhanvi Mundra",
  "Salman Khan",
  "Naruto Uzumaki",
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
