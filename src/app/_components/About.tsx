"use client";

import { useRef, useState } from "react";
import { EXPERIENCE_YEARS, HOME_LOCATION, PLAYLIST_ID, RESUME_URL } from "../configs/config";

export default function About() {

    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [shouldLoad, setShouldLoad] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    const close = () => {
        setIsLoaded(false);
        setShouldLoad(false);
        document.body.style.overflow = "";
    };



    return (
        <section className="relative p-4 md:px-12  bg-[#2f2f2f] pt-20 text-[#d2eef4] font-mono">
            <div className="max-w-5xl mx-auto">

                <h1 className="py-4 opacity-60">{`<start/>`}</h1>
                <p>
                    Hi, I’m <span className="font-bold text-[#ffb700] uppercase">Mayowa</span><button
                        onClick={() => audioRef?.current?.play()}
                        className="ml-2 text-[#ffb700] hover:scale-110 transition cursor-pointer animate-pulse"
                        aria-label="Play name pronunciation"
                    >
                        🔊
                    </button>

                    <audio ref={audioRef} src="/name.m4a" preload="none" title="Play this audio" />
                    , I'm a software engineer based in the <span className="font-bold text-[#ffb700]">{HOME_LOCATION}</span>.
                    Over the past {EXPERIENCE_YEARS} years, I've built systems that process millions in transactions, architected platforms that scale across continents, and led engineering pivots that transformed business models from the ground up.
                    From building seamless third-party integrations to modernizing legacy systems with reliable infrastructure, automated deployments, and cloud-native workflows, I thrive in the space where technical excellence meets real-world impact. I
                    believes the best code tells a story—one where users are the heroes, and technology is the invisible force that makes their journey seamless.
                </p>

                <p className="py-4">
                    My journey started with civil engineering (B.Sc , <span className="font-bold text-[#ffb700]">M.Sc (Distinction))</span>—building physical infrastructure—before I discovered I could build digital worlds instead.
                    That foundation in engineering principles still shapes how I approach software: with precision, scalability, and an unwavering focus on reliability.
                    I recently completed my <span className="font-bold text-[#ffb700]">Master's in Artificial Intelligence and Data Science</span> at <span className="font-bold">The University of Hull</span> with <span className="font-bold text-[#ffb700]">Distinction</span>, deepening my expertise in machine learning, data analysis, and intelligent systems that push the boundaries of what's possible.
                    You can check out my resume <a href={RESUME_URL} className="text-amber-500">here</a>.

                </p>


                <p>
                    Beyond the terminal and IDE, I'm fascinated by the intersection of AI, data, and human experience.
                    Whether it's experimenting with new frameworks, diving into machine learning algorithms, or exploring how intelligent systems can augment human decision-making, I'm constantly learning and building.
                    When I'm not engineering solutions, you'll find me lost in music (check out my carefully curated playlist <button disabled={shouldLoad}
                        className={`inline-flex items-center gap-2 text-blue-500 cursor-pointer transition
          ${shouldLoad ? "opacity-60 cursor-not-allowed" : "hover:opacity-80"}
        `}
                        aria-busy={shouldLoad} onClick={() => setShouldLoad(true)}>{shouldLoad ? (
                            <>
                                <span className="h-4 w-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
                                Loading playlist…
                            </>
                        ) : (
                            "YouTube Music"
                        )}</button>), analyzing football tactics, or contemplating how artificial intelligence will reshape our world.
                </p>


                {shouldLoad && (
                    <iframe
                        className="hidden"
                        src={`https://www.youtube.com/embed/playlist?list=${PLAYLIST_ID}`}
                        allow="encrypted-media"
                        onLoad={() => {
                            setIsLoaded(true);
                            document.body.style.overflow = "hidden";
                        }}
                    />
                )}
                {/* Modal — only after iframe loaded */}
                {isLoaded && (
                    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center">
                        <div className="relative w-full max-w-3xl mx-4 animate-[fadeIn_0.3s_ease-out]">
                            <button
                                onClick={close}
                                className={`absolute -top-10 right-0 text-white text-sm opacity-80 hover:opacity-100  cursor-pointer`}
                            >
                                Close ✕
                            </button>

                            <iframe
                                className="w-full h-112.5 rounded-xl border border-white/10"
                                src={`https://www.youtube.com/embed/playlist?list=${PLAYLIST_ID}`}
                                allow="encrypted-media"
                                title="Curated Playlist"
                            />
                        </div>
                    </div>
                )}


                <p className="pt-4">
                    I believe we're living through the most exciting era in technology—where AI, cloud computing, and intuitive design converge to create experiences that seemed impossible just years ago. And I'm here to help build that future, one line of code at a time.
                </p>

                <p className="pt-5 opacity-60">{`<stop/>`}</p>

                <div className="pt-10">
                    <h2 className="text-2xl font-bold mb-4 text-center">Skills & Technologies</h2>
                    <p className="text-xl font-bold uppercase py-2">Full Stack Development</p>
                    <ul className="flex flex-col md:flex-row flex-wrap m-0 p-0 list-disc justify-between gap-4">
                        <li>JavaScript (ES6+)</li>
                        <li>TypeScript</li>
                        <li>Python</li>
                        <li>React</li>
                        <li>Next.js</li>
                        <li>Linux</li>
                        <li>Node.js</li>
                        <li>SQL</li>
                        <li>PostgreSQL</li>
                        <li>Tailwind CSS</li>
                        <li>HTML5 & CSS3</li>
                        <li>Styled Components</li>
                        <li>Redux & Zustand</li>
                        <li>Nestjs</li>
                        <li>NoSQL (MongoDB, Firebase)</li>
                        <li>Express.js</li>
                        <li>Django</li>
                        <li>Flask</li>
                    </ul>
                    <p className="text-xl uppercase font-semibold py-4">Infrastructure & Devops</p>
                    <ul className=" flex flex-col md:flex-row flex-wrap m-0 p-0 list-disc justify-between gap-4">
                        <li>Docker</li>
                        <li>AWS</li>
                        <li>GCP</li>
                        <li>Kubernetes</li>
                        <li>Terraform</li>
                        <li>Ansible</li>
                        <li>Git</li>
                        <li>Github Actions</li>
                    </ul>

                    <p className="text-xl  uppercase font-semibold py-4">Web Services & Protocols</p>
                    <ul className=" flex flex-col md:flex-row flex-wrap m-0 p-0 list-disc justify-between gap-4">
                        <li>GraphQL</li>
                        <li>tRPC</li>
                        <li>RESTful API Design</li>
                        <li>Nginx</li>
                        <li>WebSockets</li>
                        <li>Redis</li>

                    </ul>

                    <p className="text-xl  uppercase font-semibold py-4">Machine Learning & Data Science</p>
                    <ul className=" flex flex-col md:flex-row flex-wrap m-0 p-0 list-disc justify-between gap-4  ">
                        <li>Machine Learning</li>
                        <li>Data Analysis</li>
                        <li>Jupyter notebook, Scikit learn</li>
                    </ul>
                </div>

                <div className="py-10">
                    <h2 className="text-2xl font-bold mb-4 text-center">Let's Connect</h2>
                    <p>
                        Let's connect and build something amazing together! <a href="contact" className="text-amber-500">Contact Me</a>
                    </p>


                </div>
            </div>
        </section>
    )
}