import Image from "next/image";
import React from "react";

const Prizes = () => {
  return (
    <div className="bg-gray-100 px-5 py-4 my-3">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-sky-800">Top Performers Prizes</h2>
          <p className="text-gray-600">Weekly top scorers will be rewarded</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow flex items-center justify-center flex-col rounded-lg p-8">
            <div className="mb-4">
              <span className="text-sm font-semibold bg-blue-200 text-blue-800 py-1 px-3 rounded-full">
                1st Place
              </span>
            </div>
            <Image
              src="/amazon.svg"
              alt="amazon"
              height={100}
              width={100}
              className="rounded-lg drop-shadow-md border object-cover"
            />
            <h3 className="text-xl font-bold text-center my-2">Amazon Gift Card</h3>
            <p className="text-center text-gray-600">Get a ₹1000 Amazon Gift Card</p>
          </div>
          <div className="bg-white shadow flex items-center justify-center flex-col rounded-lg p-8">
            <div className="mb-4">
              <span className="text-sm font-semibold bg-green-200 text-green-800 py-1 px-3 rounded-full">
                2nd Place
              </span>
            </div>
            <Image
              src="/flipkart.svg"
              alt="amazon"
              height={100}
              width={100}
              className="rounded-lg drop-shadow-md border object-cover"
            />
            <h3 className="text-xl font-bold text-center my-2">Flipkart Voucher</h3>
            <p className="text-center text-gray-600">Get a ₹750 Flipkart Voucher</p>
          </div>
          <div className="bg-white shadow flex items-center justify-center flex-col rounded-lg p-8">
            <div className="mb-4">
              <span className="text-sm font-semibold bg-yellow-200 text-yellow-800 py-1 px-3 rounded-full">
                3rd Place
              </span>
            </div>
            <Image
              src="/zomato.svg"
              alt="amazon"
              height={100}
              width={100}
              className="rounded-lg drop-shadow-md border object-cover"
            />
            <h3 className="text-xl font-bold text-center my-2">Zomato Coupon</h3>
            <p className="text-center text-gray-600">Get a ₹500 Zomato Coupon code</p>
          </div>
        </div>
        <p className="text-slate-500 font-medium mt-4">* Winners will be announced Weekly</p>
      </div>
    </div>
  );
};

export default Prizes;
