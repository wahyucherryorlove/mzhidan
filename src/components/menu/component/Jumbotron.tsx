import { usePathname } from "next/navigation";

const Jumbotron = () => {
  const pathName = usePathname();

  return (
    <section className="py-[6rem] md:py-[9rem] bg-[url('/images/thumnail/home.jpg')] bg-cover bg-fixed bg-left px-6 flex items-center justify-center flex-col text-center">
      <h2 className="font-bold text-5xl text-[#0C2D57] uppercase">
        {pathName === "/menu/makanan"
          ? "Makanan"
          : pathName === "/menu/minuman"
          ? "Minuman"
          : "Menu"}
      </h2>
    </section>
  );
};

export { Jumbotron };
