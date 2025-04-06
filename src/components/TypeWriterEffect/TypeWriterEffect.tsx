"use client";
import Typewriter from "typewriter-effect";

const TypewriterEffect = () => {
  const strings = [
    "Full-Stack Developer 💻",
    "Android Developer 📱",
    "AI/ML Explorer 🤖",
    "Open Source Contributor 🌍",
    "Product Builder 🛠️",
    "Cloud & DevOps Learner ☁️",
  ];

  return (
    <Typewriter
      options={{
        autoStart: true,
        loop: true,
      }}
      onInit={(typewriter) => {
        strings.forEach((str) => {
          typewriter
            .typeString(str)
            .pauseFor(4000)
            .deleteAll()
            .pauseFor(2000);
        });
        typewriter.start();
      }}
    />
  );
};

export default TypewriterEffect;
