import React from "react";
import heroImg from "./assets/hero.svg";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Contentful is a headless CMS that allows you to create, manage, and
            distribute content across any digital platform. It provides a
            flexible and scalable solution for managing content, making it easy
            to deliver consistent experiences across websites, mobile apps, and
            other digital channels.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="hero" className="img" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
Hero;
