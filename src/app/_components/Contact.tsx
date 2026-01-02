import { CONTACT_EMAIL, GITHUB_URL, LINKEDIN_URL, PHONE_NUMBER, RESUME_URL, RESUME_URL_DOWNLOAD } from "../configs/config";

export default function Contact() {
  return (
    <section className="h-full relative pt-20 md:pt-0 min-h-screen w-screen flex items-center justify-center  bg-[#2f2f2f]  px-4">
      <div className="pb-6">
        <h1 className="text-4xl font-bold mb-4 text-center text-background dark:text-foreground">Get In Touch</h1>
        <p className="text-2xl italic text-background dark:text-foreground">Feel free to reach out for collaborations or just a friendly hello!</p>
        <div className="flex flex-col md:flex-row gap-6 justify-between md:items-center  ">
          <div className="space-y-4 mt-6 text-background dark:text-foreground">
            <p className="text-sm">Email <br /> <span className="font-mono font-bold text-2xl">{CONTACT_EMAIL}</span> </p>
            <p className="text-sm">Phone <br /> <span className=" font-mono font-bold text-2xl">{PHONE_NUMBER}</span></p>
          </div>
          <a  href={RESUME_URL_DOWNLOAD} download className="inline-block transition animate-pulse">
            <div className="bg-[#ffb700] px-6 py-3 rounded-full shadow-lg flex justify-center items-center text-black dark:text-white font-semibold hover:bg-yellow-500 transition-colors">
              Download <br /> Resume
            </div>
          </a>

        </div>

        <div className=" size-20 rounded-full shadow "></div>

        <div className="md:flex mt-10 justify-evenly space-y-4 md:space-y-0 ">
          {/* <a className="text-center block animate-heartbeat hover:bg-[#fead01] p-4 border rounded-lg dark:hover:bg-white dark:hover:text-black" href="mailto:mayowaawoyomi@gmail.com">Send a Mail</a> */}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-center block animate-heartbeat p-4 border rounded-lg 
             bg-[#ffb700] text-black font-semibold 
             shadow-lg shadow-yellow-400/50
             transform transition duration-300 ease-out
             hover:-translate-y-1 hover:shadow-2xl hover:bg-[#fead01] hover:text-white
             active:translate-y-0 active:shadow-lg
             dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white"
          >
            Send a Mail
          </a>

          <a className="text-center block p-4 border rounded-lg 
             bg-[#ffb700] text-black font-semibold 
             shadow-lg shadow-yellow-400/50
             transform transition duration-300 ease-out
             hover:-translate-y-1 hover:shadow-2xl hover:bg-[#fead01] hover:text-white
             active:translate-y-0 active:shadow-lg
             dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white" href={`tel:${PHONE_NUMBER}`}>Call Me</a>
          <a className="text-center block p-4 border rounded-lg 
             bg-[#ffb700] text-black font-semibold 
             shadow-lg shadow-yellow-400/50
             transform transition duration-300 ease-out
             hover:-translate-y-1 hover:shadow-2xl hover:bg-[#fead01] hover:text-white
             active:translate-y-0 active:shadow-lg
             dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white" href={LINKEDIN_URL}>LinkedIn</a>
          <a className="text-center block p-4 border rounded-lg 
             bg-[#ffb700] text-black font-semibold 
             shadow-lg shadow-yellow-400/50
             transform transition duration-300 ease-out
             hover:-translate-y-1 hover:shadow-2xl hover:bg-[#fead01] hover:text-white
             active:translate-y-0 active:shadow-lg
             dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white" href={GITHUB_URL}>GitHub</a>

        </div>



      </div>
    </section>
  )
}