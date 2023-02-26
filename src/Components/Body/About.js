import { useEffect, useState } from "react";

const title = "About Me";
const info =
  "I’m a web developer from Perú! There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.";

let index = 0;

export default function About() {
  const [displayedInfo, setDisplayedInfo] = useState("");
  const [showTerminalBlock, setShowTerminalBlock] = useState(true);
  useEffect(() => {
    if (index < info.length - 1) {
      setTimeout(() => {
        setDisplayedInfo(info.slice(0, index));
      }, 20);
      index += 1;
    } else {
      setTimeout(() => {
        setShowTerminalBlock(!showTerminalBlock);
      }, 700);
    }
  }, [displayedInfo, showTerminalBlock]);

  return (
    <div className="about">
      <p>{title}</p>
      <p>{displayedInfo + (showTerminalBlock ? "█" : ".")}</p>
    </div>
  );
}
