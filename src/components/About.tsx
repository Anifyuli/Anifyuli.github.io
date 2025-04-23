import { TypewriterText } from "./ui/TypewriterText";

export function About() {
  const pStyle = "text-lg sm:text-xl text-justify sm:leading-relaxed leading-loose my-4";
  const delay = 60;
  const repeatCount = 3;

  return (
    <section id="about" className="my-3 mx-8 md:mx-24 py-8 scroll-mt-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        About Me
      </h2>
      <div className="w-full max-w-4xl mx-auto">
        <p className={pStyle}>
          Hi! I am
          <TypewriterText
            content={
              " a Computer Science student with a strong passion for programming, Linux system administration, and DevOps. I believe in the transformative power of technology and strive to contribute meaningfully to the world of open source through FLOSS (Free/Libre and Open Source Software) projects."
            }
            delay={delay}
            className={pStyle}
            repeatCount={repeatCount}
          />
        </p>
        <p className={pStyle}>
          Through this website,
          <TypewriterText
            content={
              " I’m excited to showcase some of my best projects that reflect my skills and interests. Feel free to reach out to me via the contact information provided if you'd like to discuss, collaborate, or share ideas!"
            }
            delay={delay}
            className={pStyle}
            repeatCount={repeatCount}
          />
        </p>
      </div>
    </section>
  );
}
