import { Jumbotron } from "@components/contact/Jumbotron";
import { FormInput } from "@components/contact/FormInput";

export default function Page() {
  return (
    <>
      <main className="mt-[90px]">
        <Jumbotron />

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248.36863302496067!2d119.52358101074908!3d-5.12011524151165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbefbbefb4ebdcd%3A0x6c458f7ad02032c6!2sWahyu%20Van%20Zitter%20Page!5e0!3m2!1sid!2sid!4v1711461862735!5m2!1sid!2sid"
          className="w-full h-[300px] mt-[6rem] px-6 lg:px-40 flex flex-col gap-y-4"
          loading="lazy"
        />

        <FormInput />
      </main>
    </>
  );
}
