import React, { useRef, useEffect } from "react";
import SkillsData from "./SkillsData";

const SkillsComponent = () => {
  const logosRef = useRef(null);

  useEffect(() => {
    const ul = logosRef.current;
    const clonedUl = ul.cloneNode(true);
    ul.parentNode.appendChild(clonedUl);
    ul.nextSibling.setAttribute("aria-hidden", "true");
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
    <div
      className="w-[80vw] inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] mb-10"
    >
      <ul
        ref={logosRef}
        className={`flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll-left`}
      >
        {SkillsData.map((skill, index) => (
          <li key={index} className="flex flex-col justify-center items-center">
            {skill.child}
            <p className="text-xs mt-2">{skill.title}</p>
          </li>
        ))}
      </ul>
    </div>
    <div
    className="w-[80vw] inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
  >
    <ul
      ref={logosRef}
      className={`flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll-right`}
    >
      {SkillsData.map((skill, index) => (
        <li key={index} className="flex flex-col justify-center items-center">
          {skill.child}
          <p className="text-xs mt-2">{skill.title}</p>
        </li>
      ))}
    </ul>
  </div>
  </div>
  );
};

export default SkillsComponent;
