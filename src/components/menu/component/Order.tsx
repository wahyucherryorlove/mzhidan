"use client";

import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useRouter } from "next/navigation";
import type { Dispatch, SetStateAction } from "react";

import MinusIcons from "@icons/minus.svg";
import PlusIcons from "@icons/plus.svg";

import { FoodProps } from "../interface";

interface OrderModalProps extends FoodProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export function OrderModal({
  id,
  foodName,
  price,
  isOpen,
  setIsOpen,
}: OrderModalProps) {
  const router = useRouter();
  const [isOrder, setIsOrder] = useState(1);

  function closeModal() {
    setIsOpen(false);
  }

  function minus() {
    setIsOrder(isOrder - 1);
  }

  function plus() {
    setIsOrder(isOrder + 1);
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-[9999]"
        onClose={closeModal}
        key={id}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-start sm:items-center justify-center pt-28 px-4 sm:p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle flex flex-col justify-between shadow-xl transition-all min-h-[400px]">
                <div>
                  <Dialog.Title
                    as="h2"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Your Order
                  </Dialog.Title>
                  <div className="flex items-center justify-between gap-x-4 mt-8">
                    <div className="w-1/3">
                      <h4 className="text-sm font-semibold">{foodName}</h4>
                    </div>
                    <div className="flex items-center gap-x-4">
                      <button
                        className={`w-5 h-5 bg-transparent border-2 border-[#FBA834] active:bg-[#FBA834]/30 active:backdrop-blur-md rounded-full flex items-center justify-center ${
                          isOrder === 1 && "cursor-default"
                        }`}
                        onClick={minus}
                        disabled={isOrder === 1 ? true : false}
                      >
                        <MinusIcons className="w-3 h-3 fill-[#FBA834]" />
                      </button>
                      <span>{isOrder}</span>
                      <button
                        className={`w-5 h-5 bg-transparent border-2 border-[#FBA834] active:bg-[#FBA834]/30 active:backdrop-blur-md rounded-full flex items-center justify-center`}
                        onClick={plus}
                      >
                        <PlusIcons className="w-3 h-3 fill-[#FBA834]" />
                      </button>
                    </div>
                    <h6 className="text-[15px] font-semibold">Rp. {price}</h6>
                  </div>
                </div>

                <div className="">
                  <div className="flex justify-between mb-5 px-4">
                    <h5 className="text-lg font-semibold">Total Price</h5>
                    <h5 className="text-lg font-semibold">
                      IDR. {isOrder * price}
                    </h5>
                  </div>

                  <button
                    type="button"
                    className="bg-green-600 w-full py-2 rounded-[50px] font-semibold text-neutral-100"
                    onClick={() => router.push(`./id/${id}`)}
                  >
                    Order now
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
