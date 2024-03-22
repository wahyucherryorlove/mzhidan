"use client";

interface PaymentProps {
  id: number;
  price: number;
  shipping: number;
  isOrder: number;
}

export function Payment({ id, price, shipping, isOrder }: PaymentProps) {
  return (
    <section
      className="mt-[40px] w-[85%] md:w-1/2 sm:w-3/4 lg:w-[40%] mx-auto p-4 md:p-6 bg-neutral-50 rounded-md shadow-md"
      key={id}
    >
      <h2 className="font-semibold text-lg">Payment Summary</h2>
      <div className="mt-4">
        <div className="flex justify-between items-center">
          <h4 className="text-base font-normal text-neutral-600">Price</h4>
          <h4 className="text-base font-normal text-neutral-600">
            Rp. {price * isOrder}
          </h4>
        </div>
        <div className="flex justify-between items-center">
          <h4 className="text-base font-normal text-neutral-600 w-[40%] sm:w-auto">
            Biaya penanganan dan pengiriman
          </h4>
          <h4 className="text-base font-normal text-neutral-600">
            Rp. {shipping}
          </h4>
        </div>
        <div className="flex justify-between items-center">
          <h4 className="font-bold mt-4 text-base md:text-lg">Total payment</h4>
          <h4 className="font-bold mt-4 text-base md:text-lg ">
            Rp. {(price + shipping) * isOrder}
          </h4>
        </div>
      </div>
    </section>
  );
}
