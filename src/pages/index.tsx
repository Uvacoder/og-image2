import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="bg-[#121212] text-white h-screen w-screen flex items-center justify-center">
      <div className="flex flex-col gap-y-4 md:gap-y-6 text-center">
        <h1 className="text-4xl md:text-5xl">OG Image generator</h1>
        <div className="flex gap-x-4 self-center">
          <a
            href="https://github.com/tszhong0411/og-image"
            className="underline"
          >
            Github
          </a>
          <a
            href="/blog?title=Your post title&description=Your post description"
            className="underline"
          >
            Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
