"use client";
import Typewriter from "typewriter-effect";

const TypewriterEffect = () => {
  const strings = [
    "Full-Stack Developer",
    "Hybrid Mobile Developer",
    "ML Enthusiast",
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
          .start();
      }}
    />
  );
};

export default TypewriterEffect;
