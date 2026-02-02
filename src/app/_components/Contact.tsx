import { CONTACT_EMAIL, GITHUB_URL, LINKEDIN_URL, PHONE_NUMBER, RESUME_URL_DOWNLOAD } from "../configs/config";

export default function Contact() {
  const buttonStyles = `text-center block px-6 py-4 rounded-lg font-semibold
    transform transition duration-300 ease-out
    hover:-translate-y-1 hover:shadow-xl
    active:translate-y-0 active:shadow-md
    bg-gray-900 text-white hover:bg-gray-800
    dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100`;

  return (
    <section className="h-full relative pt-20 md:pt-0 min-h-screen w-screen flex items-center justify-center bg-white dark:bg-[#2f2f2f] px-4">
      <div className="pb-6 max-w-4xl">
        <h1 className="text-4xl font-bold mb-4 text-center text-foreground">Get In Touch</h1>
        <p className="text-xl sm:text-2xl italic text-foreground text-center">Feel free to reach out for collaborations or just a friendly hello!</p>

        <div className="flex flex-col md:flex-row gap-6 justify-between md:items-center mt-8">
          <div className="space-y-4 text-foreground">
            <p className="text-sm">Email <br /> <span className="font-mono font-bold text-xl sm:text-2xl">{CONTACT_EMAIL}</span></p>
            <p className="text-sm">Phone <br /> <span className="font-mono font-bold text-xl sm:text-2xl">{PHONE_NUMBER}</span></p>
          </div>
          <a href={RESUME_URL_DOWNLOAD} download className="inline-block">
            <div className="bg-gray-900 dark:bg-white px-6 py-4 rounded-full shadow-lg flex justify-center items-center text-white dark:text-gray-900 font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all hover:scale-105">
              Download Resume
            </div>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          <a href={`mailto:${CONTACT_EMAIL}`} className={buttonStyles}>
            Send a Mail
          </a>
          <a href={`tel:${PHONE_NUMBER}`} className={buttonStyles}>
            Call Me
          </a>
          <a href={LINKEDIN_URL} className={buttonStyles}>
            LinkedIn
          </a>
          <a href={GITHUB_URL} className={buttonStyles}>
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}