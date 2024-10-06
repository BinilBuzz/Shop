"use client";

export default function Product() {
  return (
    <section className="font-sans p-5 mx-auto lg:max-w-7xl md:max-w-3xl sm:max-w-full">
      <div className="w-full mx-auto px-6 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mx-auto max-md:px-2">
          <div className="img">
            <div className="img-box h-full max-lg:mx-auto">
              <img
                src="https://pagedone.io/asset/uploads/1700471600.png"
                alt="Yellow Tropical Printed Shirt image"
                className="max-lg:mx-auto lg:ml-auto h-full object-cover"
              />
            </div>
          </div>
          <div className="data w-full lg:pr-8 pr-0 xl:justify-start justify-center flex items-center max-lg:pb-10 xl:my-2 lg:my-5 my-0">
            <div className="data w-full max-w-xl">
              <p className="text-lg font-medium leading-8 text-indigo-600 mb-4">
                Clothing / Menswear
              </p>
              <h2 className="font-manrope font-bold text-3xl leading-10 text-gray-900 mb-2 capitalize">
                Basic Yellow Tropical Printed Shirt
              </h2>
              <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                <h6 className="font-manrope font-semibold text-2xl leading-9 text-gray-900 pr-5 sm:border-r border-gray-200 mr-5">
                  $220
                </h6>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {/* Repeatable SVG Stars */}
                    {[...Array(4)].map((_, index) => (
                      <svg
                        key={index}
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_12029_1640)">
                          <path
                            d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                            fill="#FBBF24"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_12029_1640">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    ))}
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_12029_1640)">
                        <path
                          d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                          fill="#F3F4F6"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_12029_1640">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <span className="pl-2 font-normal leading-7 text-gray-500 text-sm">
                    1624 reviews
                  </span>
                </div>
              </div>
              <p className="text-gray-500 text-base font-normal mb-5">
                Introducing our vibrant Basic Yellow Tropical Printed Shirt - a celebration of style and sunshine! Embrace the essence of summer wherever you go with this eye-catching piece that effortlessly blends comfort and tropical flair.{" "}
                <a href="#" className="text-indigo-600">More....</a>
              </p>
              <ul className="grid gap-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="26" height="26" rx="13" fill="#4F46E5" />
                    <path
                      d="M7.66669 12.629L10.4289 15.3913C10.8734 15.8357 11.0956 16.0579 11.3718 16.0579C11.6479 16.0579 11.8701 15.8357 12.3146 15.3913L18.334 9.37183"
                      stroke="white" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                  <span className="font-normal text-base text-gray-900">Branded shirt</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="26" height="26" rx="13" fill="#4F46E5" />
                    <path
                      d="M7.66669 12.629L10.4289 15.3913C10.8734 15.8357 11.0956 16.0579 11.3718 16.0579C11.6479 16.0579 11.8701 15.8357 12.3146 15.3913L18.334 9.37183"
                      stroke="white" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                  <span className="font-normal text-base text-gray-900">100% cotton</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="26" height="26" rx="13" fill="#4F46E5" />
                    <path
                      d="M7.66669 12.629L10.4289 15.3913C10.8734 15.8357 11.0956 16.0579 11.3718 16.0579C11.6479 16.0579 11.8701 15.8357 12.3146 15.3913L18.334 9.37183"
                      stroke="white" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                  <span className="font-normal text-base text-gray-900">Stylish design</span>
                </li>
              </ul>
              <div className="flex gap-3">
                <button className="flex justify-center items-center bg-gray-900 text-white rounded-md text-base leading-6 h-12 w-full">
                  Add to Cart
                </button>
                <button className="flex justify-center items-center border-2 border-gray-900 text-gray-900 rounded-md text-base leading-6 h-12 w-full">
                  Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
