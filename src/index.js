import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const devSkills = [
  { name: "React", level: "beginner", color: "orange" },
  {
    name: "COBOL",
    level: "intermediate",
    color: "teal",
  },
  {
    name: "Javascript",
    level: "intermediate",
    color: "blue",
  },
  {
    name: "MuleSoft",
    level: "intermediate",
    color: "yellow",
  },
];

const devBio = "The old man has been in IT for over 50 years and still at it.";

function App() {
  let skills = devSkills;
  let bio = devBio;
  let avatar = "./avatars/gjh-avatar.jpg";
  console.log(bio);
  return (
    <div className="card">
      <Avatar avatar={avatar} />
      <div className="data">
        <Intro bio={bio} />
        <ul className="skill-list">
          {skills.map((skill) => (
            <Skill skillObj={skill} key={skill.name} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function Avatar({ avatar }) {
  return (
    <div align="center">
      <br></br>
      <img className="avatar" src={avatar}></img>
    </div>
  );
}

function Intro({ bio }) {
  return (
    <div>
      <h3>Greg Hughlett</h3>
      <p>
        <i>{bio}</i>
      </p>
      <br></br>
    </div>
  );
}

function Skill({ skillObj }) {
  const { name, level, image, color } = { ...skillObj };
  let src = "";
  if (level === "beginner") src = "./emojis/down.png";
  if (level === "intermediate") src = "./emojis/up.png";
  if (level === "advanced") src = "./emojis/flexing.png";

  return (
    <div className="skill" style={{ backgroundColor: color, borderRadius: 15 }}>
      <span>{name}</span>
      <span>
        <img src={src} height="50px" width="50px" />
      </span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
