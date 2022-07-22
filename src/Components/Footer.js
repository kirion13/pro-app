import React from "react";
const imges = [
  "Facebook Icon.png",
  "GitHub Icon.png",
  "Instagram Icon.png",
  "Twitter Icon.png",
];
export default function Footer() {
  return (
    <div className="Icons">
      <ul className="list">
        {imges.map((e) => (
          <li>
            <img src={`/assets/${e}`} alt="" />
          </li>
        ))}
      </ul>
    </div>
  );
}
