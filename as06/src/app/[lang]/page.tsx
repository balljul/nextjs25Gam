interface PageProps {
  params: { lang: string };
}

export default async function HomePage({ params }: PageProps) {
  const { lang } = params;
  return (
    <div>
      <h1 className="text-4xl font-bold">Hi. I am Julius Ball.</h1>
      <h2 className="text-2xl font-semibold mt-2">I aspire to be a full stack Developer.</h2>
      <p className="mt-4">
        Welcome to my portfolio website! I'm excited to have you here. Let me introduce myself. I'm a
        16-year-old student at HTL Villach IT, where my passion for technology has flourished. Since a
        young age, I've been interrested in various technologies, constantly exploring and learning about
        them.
      </p>
      <p className="mt-4">
        One area of fascination for me is artificial intelligence (AI), but my interests extend beyond that.
        I find myself drawn to a different rangea of technologies, including embedded systems, back-end and
        front-end development, and design. Each of these fields offers unique opportunities for innovation
        and problem-solving.
      </p>
      <p className="mt-4">
        As I continue my journey at HTL, I actively engaged in personal projects that allow me to enhance my
        skills and showcase my technological knowledge. Whether it's coding, designing, or diving into the
        complexities of hardware, I am always learning new things.
      </p>
      <p className="mt-4">
        This portfolio website serves as a platform to showcase my experiences, projects, and growth in the
        world of technology. From my first project to my most recent, I've documented my journey and
        progress. I hope you enjoy exploring my work as much as I enjoyed creating it.
      </p>
      <p className="mt-4">
        Thank you for visiting my portfolio website, and I invite you to explore my work. If you have any
        questions or would like to collaborate on a project, please don't hesitate to reach out to me.
        Let's embark on this technological journey together!
      </p>
    </div>
  );
}