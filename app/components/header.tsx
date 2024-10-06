"use client";
import { useState } from "react";
import Link from "next/link";

function Header() {
  // Mobile Menu
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <header className="sticky top-0 bg-white border-b z-50">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label=""
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Shop</span>
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="232"
                height="51"
                viewBox="0 0 300.000000 115.000000"
              >
                <g
                  transform="translate(0.000000,115.000000) scale(0.100000,-0.100000)"
                  fill="#000000"
                  stroke="none"
                >
                  <path
                    d="M1017 1134 c-15 -8 -32 -26 -37 -40 -6 -14 -10 -95 -10 -180 0 -152
0 -155 -29 -207 -16 -28 -32 -66 -36 -84 -8 -38 15 -89 45 -98 19 -6 20 -15
20 -161 l0 -155 93 3 92 3 3 228 2 228 26 9 c44 17 91 12 121 -14 l28 -24 5
-214 5 -213 93 -3 94 -3 -4 228 c-3 221 -4 230 -29 283 -14 30 -41 70 -60 88
-46 44 -151 77 -225 69 l-54 -6 0 100 c0 116 -13 151 -61 168 -41 14 -48 14
-82 -5z"
                  />
                  <path
                    d="M516 864 c-100 -36 -151 -113 -144 -218 8 -122 79 -183 237 -205 87
-12 109 -31 75 -65 -25 -26 -104 -21 -148 9 -20 14 -42 25 -48 25 -12 0 -128
-92 -128 -101 0 -15 86 -83 129 -102 55 -24 161 -33 217 -18 156 42 216 229
111 347 -42 49 -92 72 -182 83 -74 9 -94 19 -95 48 0 35 100 46 165 19 83 -35
145 -5 145 69 0 92 -201 158 -334 109z"
                  />
                  <path
                    d="M1818 857 c-216 -91 -291 -335 -162 -524 154 -225 507 -193 622 55
22 47 26 72 27 142 0 71 -4 94 -26 141 -37 79 -90 133 -167 171 -57 28 -79 33
-152 36 -71 2 -94 -1 -142 -21z m220 -194 c93 -69 97 -190 9 -257 -116 -89
-280 14 -253 158 8 43 49 94 91 112 40 19 119 12 153 -13z"
                  />
                  <path
                    d="M2526 830 c-93 -37 -131 -96 -142 -221 -7 -66 -11 -77 -41 -105 -20
-19 -33 -41 -33 -55 0 -27 34 -106 55 -129 11 -12 15 -54 17 -165 l3 -150 95
0 95 0 3 86 3 87 82 4 c141 6 249 76 305 197 22 46 26 71 26 136 0 65 -4 90
-26 136 -33 72 -95 134 -167 167 -76 36 -202 41 -275 12z m194 -182 c56 -29
96 -99 86 -152 -16 -86 -106 -149 -183 -130 l-38 9 -3 127 -3 126 27 21 c34
27 59 26 114 -1z"
                  />
                  <path
                    d="M115 493 c-59 -16 -105 -76 -105 -138 0 -103 97 -168 195 -130 139
53 114 247 -35 268 -19 3 -44 3 -55 0z"
                  />
                </g>
              </svg>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-10 lg:pr-8">
            <div className="relative">
              <button
                type="button"
                className="flex items-center gap-x-1 text-base font-normal leading-6 text-gray-900"
                aria-expanded={isDropdownOpen ? "true" : "false"}
                onClick={toggleDropdown}
              >
                Home
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                   
                    <Link href="">
                      <a className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100">
                        Shop
                      </a>
                    </Link>

                  </div>
                </div>
              )}
            </div>
            <Link
              href="/about"
              className="text-base font-normal leading-6 text-gray-900 gap-x-1"
            >
              About
            </Link>
            <Link
              href=""
              className="text-base font-normal leading-6 text-gray-900 gap-x-1"
            >
              Shop
            </Link>
            <Link
              href=""
              className="text-base font-normal leading-6 text-gray-900 gap-x-1"
            >
              Contact Us
            </Link>
            <Link
              href=""
              className="text-base font-normal leading-6 text-gray-900 gap-x-1"
            >
              SignIn
            </Link>
          </div>
        </nav>

        {isMenuOpen && (
          <div role="dialog" aria-modal="true">
            <div className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Click Shop</span>
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={toggleMenu}
                >
                  <span className="sr-only">Close menu</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <a
                      href="/about"
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-normal leading-7 text-gray-900 hover:bg-gray-400/10"
                    >
                      About
                    </a>
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-normal leading-7 text-gray-900 hover:bg-gray-400/10"
                    >
                      Shop
                    </a>
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-normal leading-7 text-gray-900 hover:bg-gray-400/10"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
export default Header;
