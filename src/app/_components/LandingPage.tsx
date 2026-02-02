"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { HOME_LOCATION } from "../configs/config";

export default function LandingPage() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      // 1️⃣ IMAGE SCALE & FADE AFTER 10s
      tl.to(".img-container", {
        scale: 5,
        opacity: 0,
        duration: 3,
        ease: "power2.inOut",
        delay: 2, // wait 10s before starting
      });

      // 2️⃣ HERO TEXT FADE-IN AFTER IMAGE
      tl.to(
        ".wrapper",
        {
          opacity: 1,
          visibility: "visible",
          duration: 1.5,
          ease: "power2.out",
        },
        ">0" // start immediately after image animation
      );

      // 3️⃣ Animate individual text lines (optional stagger)
      tl.from(
        ".left-side p, .right-side",
        {
          y: 50,
          opacity: 0,
          stagger: 0.3,
          duration: 1.2,
          ease: "power2.out",
        },
        "<" // animate at the same time as wrapper fade-in
      );
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="relative w-screen h-screen overflow-hidden video-section"
    >
      {/* VIDEO */}
      <div className="sticky top-0 h-screen w-screen">
        <video
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="/flower-poster.jpg"
          preload="metadata"
        >
          {/* WebM for modern browsers (smaller file) */}
          <source src="/flower.webm" type="video/webm" />
          {/* MP4 fallback */}
          <source src="/flower.mp4" type="video/mp4" />
        </video>
      </div>

      {/* IMAGE OVERLAY */}
      <div className="absolute inset-0 img-container pointer-events-none z-10">
        <Image
          src="/window.png"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/40 z-[15] pointer-events-none" />

      {/* HERO TEXT */}
      <div
        className="absolute inset-0 z-20 h-screen flex flex-col md:flex-row items-center justify-center px-4 sm:px-8 md:px-12 wrapper"
        style={{ opacity: 0, visibility: "hidden" }} // hide on load
      >
        <div className="left-side max-w-3xl space-y-2 sm:space-y-4 text-white drop-shadow-lg">
          <p className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
            Mayowa{" "}
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold align-top">Samuel</span>
          </p>
          <p className="text-right text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">Awoyomi</p>

          <p className="mt-4 sm:mt-6 max-w-md font-mono text-sm sm:text-base md:text-lg leading-relaxed text-white/90">
            I am a software Engineer, based in the {HOME_LOCATION}. I am passionate about
            helping brands position themselves effectively by creating unique
            digital experience on the web.
          </p>
        </div>

        <a href="about" className="text-white right-side md:ml-auto text-base sm:text-lg mt-8 sm:mt-12 md:mt-0 hover:text-yellow-400 transition-colors drop-shadow-lg">
          More About Me →
        </a>
      </div>
    </section>
  );
}
