import Link from "next/link";

const Jumbotron = () => {
  return (
    <section className="py-[9rem] bg-[url('/images/thumnail/home.jpg')] bg-cover bg-fixed bg-left px-20">
      <h2 className="font-bold text-5xl text-neutral-100">MOM{"'"}S ZHIDAN</h2>
      <p className="w-1/2 text-neutral-100 mt-7 mb-8">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur,
        eos! Vero officiis quos perferendis. Neque doloremque ab ut dolorem.
        Aliquid perferendis unde sapiente autem voluptatibus sint facilis
        corrupti harum fugit?
      </p>

      <Link
        href=""
        className="text-neutral-900 text-sm font-semibold px-5 py-4 bg-yellow-400 rounded-md"
      >
        Lihat Selengkapnya
      </Link>
    </section>
  );
};

export { Jumbotron };
