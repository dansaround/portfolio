import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container flex gap-5 flex-wrap justify-center items-center">
        <article className="bg-bg-variant p-5 rounded-[1.2rem] text-center min-w-[15rem] border border-transparent transition-all duration-400">
          <MdOutlineEmail className="text-[1.5rem] mb-2 mx-auto" />
          <h4>Email</h4>
          <h5>Kcomtdaniel@gmail.com</h5>
          <a
            href="mailto:kcomtdaniel@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-[0.8rem]"
          >
            Send a Message
          </a>
        </article>

        <article className="bg-bg-variant p-5 rounded-[1.2rem] text-center min-w-[15rem] border border-transparent transition-all duration-400">
          <RiMessengerLine className="text-[1.5rem] mb-2 mx-auto" />
          <h4>Messenger</h4>
          <h5>Daniel Kcomt</h5>
          <a
            href="https://m.me/DanKcomt"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-[0.8rem]"
          >
            Send a Message
          </a>
        </article>

        <article className="bg-bg-variant p-5 rounded-[1.2rem] text-center min-w-[15rem] border border-transparent transition-all duration-400">
          <BsWhatsapp className="text-[1.5rem] mb-2 mx-auto" />
          <h4>Whatsapp</h4>
          <h5>+57 300 322 3023</h5>
          <a
            href="https://wa.me/573003223023/?text=Hi%20Dan.%20I%20saw%20your%20Portfolio%20and%20wanted%20to%20contact%20you"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-[0.8rem]"
          >
            Send a Message
          </a>
        </article>
      </div>
    </section>
  );
};

export default Contact;
