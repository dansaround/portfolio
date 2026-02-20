import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header className="h-screen pt-12 overflow-hidden">
      <div className="container relative h-full text-center">
        <h5>Hello I&apos;m</h5>
        <h1>Daniel Kcomt</h1>
        <h5 className="text-white/60">Front-End Developer</h5>
        <CTA />
        <HeaderSocials />
        <div
          className="object-contain bg-gradient-to-b from-primary to-transparent
                      w-[22rem] h-[30rem] absolute left-[calc(50%-11rem)] mt-16
                      rounded-[12rem_12rem_0_0] overflow-hidden pt-20 px-6 pb-6"
        >
          <img src="/assets/pp.bgless.png" alt="Daniel Kcomt" />
        </div>
        <a
          href="#contact"
          className="hidden sm:block absolute -right-8 bottom-20 rotate-90 font-light text-[0.9rem]"
        >
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
