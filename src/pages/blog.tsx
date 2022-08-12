import { GetServerSideProps } from "next";

interface Props {
  params: {
    title: string;
    description: string;
    url?: string;
    username?: string;
    image?: string;
    author?: string;
  };
}

export default function Blog({ params }: Props) {
  const { title, description, url, username, image, author } = params;

  return (
    <div className="w-screen h-screen flex flex-col justify-between items-center bg-[#151515] bg-bg-pattern text-white text-center py-16 px-12">
      <div className="w-full flex items-center gap-x-6">
        <img
          src={image || "https://honghong.me/static/images/logo/logo-black.png"}
          className="rounded-full h-24 w-24"
          alt="Logo"
        />
        <span className="font-bold text-3xl">{author || "小康"}</span>
      </div>
      <div>
        <h1 className="bg-clip-text font-bold text-[3.5rem] bg-gradient-to-tr from-[#ff416c] to-[#ff4b2b] text-transparent">
          {title}
        </h1>
        <p className="text-[#f3f4f6] text-[2rem] font-bold">{description}</p>
      </div>
      <div className="flex items-center justify-between w-full">
        <p className="text-3xl text-[#f3f4f6] font-bold">
          {url || "honghong.me"}
        </p>
        <p className="text-3xl text-[#f3f4f6] font-bold">
          {username || "@tszhong0411"}
        </p>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      params: context.query,
    },
  };
};
