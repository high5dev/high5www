import React from "react";
import Typewriter from "typewriter-effect";

function TypeWriter() {
  return (
    <Typewriter
      options={{
        strings: [
          "Eager to Learn",
          "Stay on Up-to-date",
          "Optimistic",
          "10 Years of Experience",
          "Senior Software Engineer",
          "Healthcare industry",
          "IT solution",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default TypeWriter;
