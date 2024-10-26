"use client";
import Typewriter from "typewriter-effect";

const TypewriterEffect = () => {
  const strings = [
    "Full-Stack Developer",
    "Android Developer",
    "ML Enthusiast",
    "CyberSecurity Newbie",
  ];

  return (
    <Typewriter
      options={{
        autoStart: true,
        loop: true,
      }}
      onInit={(typewriter) => {
        typewriter
          .typeString(strings[0])
          .pauseFor(4000)
          .deleteAll()
          .pauseFor(2000)
          .typeString(strings[1])
          .pauseFor(4000)
          .deleteAll()
          .pauseFor(2000)
          .typeString(strings[2])
          .pauseFor(4000)
          .deleteAll()
          .pauseFor(2000)
          .typeString(strings[3])
          .pauseFor(4000)
          .deleteAll()
          .start();
      }}
    />
  );
};

export default TypewriterEffect;
