import React, { useState } from "react";
import useOutsideClick from "../hooks/useOutsideClick";
const Header = () => {
  const [featureMenuOpen, setFeatureMenuOpen] = useState(false);
  const [subFeatureMenuOpen, setSubFeatureMenuOpen] = useState(false);
  const [subCompanyMenuOpen, setSubCompanyMenuOpen] = useState(false);
  const [companyMenuOpen, setCompanyMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const resetMenus = () => {
    setFeatureMenuOpen(false);
    setCompanyMenuOpen(false);
  };
  useOutsideClick(resetMenus);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const toggleSubCompanyMenu = () => {
    setSubCompanyMenuOpen(!subCompanyMenuOpen);
  };
  const toggleSubFeatureMenu = () => {
    setSubFeatureMenuOpen(!subFeatureMenuOpen);
  };
  return (
    <nav className="w-full flex justify-between items-center ">
      <div className="flex justify-center items-center gap-16 ">
        <div className="self-end">
          <img src="/images/logo.svg" alt="" />
        </div>
        <ul className="hidden  md:flex items-center md:justify-center md:gap-8 text-MediumGray">
          <li
            onClick={(e) => {
              resetMenus();
              e.stopPropagation();
              setFeatureMenuOpen(!featureMenuOpen);
            }}
            className="relative group hover:text-AlmostBlack hover:cursor-pointer transition mr-4"
          >
            <span className="absolute top-2 -right-4">
              <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
                <path
                  className="group-hover:stroke-AlmostBlack"
                  stroke="#686868"
                  strokeWidth="1.5"
                  fill="none"
                  d={featureMenuOpen ? "m1 5 4-4 4 4" : "m1 1 4 4 4-4"}
                />
              </svg>
            </span>
            <div
              className={`absolute  rounded-lg pr-4 pl-10 py-4 top-8 -right-4 bg-white shadow-2xl text-MediumGray transition  
               ${featureMenuOpen ? "visible" : "invisible"} `}
            >
              <ul className="flex flex-col justify-center items-start gap-4 text-xs ">
                <li className="relative before:absolute before:content-[url('/images/icon-todo.svg')] before:-left-6 before:-bottom-1 transition hover:text-AlmostBlack">
                  Todo List
                </li>
                <li className="relative before:absolute before:content-[url('/images/icon-calendar.svg')] before:-left-6 before:-bottom-1 transition hover:text-AlmostBlack">
                  Calendar{" "}
                </li>
                <li className="relative before:absolute before:content-[url('/images/icon-reminders.svg')] before:-left-6 before:-bottom-1 transition hover:text-AlmostBlack">
                  Reminders
                </li>
                <li className="relative before:absolute before:content-[url('/images/icon-planning.svg')] before:-left-6 before:-bottom-1 transition hover:text-AlmostBlack">
                  Planning
                </li>
              </ul>
            </div>
            Features
          </li>
          <li
            onClick={(e) => {
              resetMenus();
              e.stopPropagation();
              setCompanyMenuOpen(!companyMenuOpen);
            }}
            className="relative  group hover:text-AlmostBlack hover:cursor-pointer transition mr-4"
          >
            <span className="absolute top-2 -right-4">
              <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
                <path
                  className="group-hover:stroke-AlmostBlack"
                  stroke="#686868"
                  strokeWidth="1.5"
                  fill="none"
                  d={companyMenuOpen ? "m1 5 4-4 4 4" : "m1 1 4 4 4-4"}
                />
              </svg>
            </span>
            <div
              className={`absolute  rounded-lg px-4 py-4 top-8 -right-8 bg-white shadow-2xl text-MediumGray transition ${
                companyMenuOpen ? "visible" : "invisible"
              }`}
            >
              <ul className="flex flex-col justify-center items-start gap-4 text-xs">
                <li className="relative transition hover:text-AlmostBlack ">
                  History
                </li>
                <li className="relative transition hover:text-AlmostBlack whitespace-nowrap">
                  Our Team
                </li>
                <li className="relative transition hover:text-AlmostBlack ">
                  Blog
                </li>
              </ul>
            </div>
            Company
          </li>
          <li className="hover:text-AlmostBlack hover:cursor-pointer transition">
            Careers
          </li>
          <li className="hover:text-AlmostBlack hover:cursor-pointer transition">
            About
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-end gap-8 text-MediumGray">
        <button className="hidden md:inline-block hover:text-AlmostBlack transition">
          Login
        </button>
        <button className="hidden md:inline-block px-4 py-2 rounded-2xl border-MediumGray border-2 hover:text-AlmostBlack hover:border-AlmostBlack transition">
          Register
        </button>
        <div className="md:hidden cursor-pointer " onClick={toggleMobileMenu}>
          <img src="/images/icon-menu.svg" alt="" />
        </div>
      </div>
      {/* mobile menu */}

      <div
        className={`${
          mobileMenuOpen ? "visible " : "invisible"
        } fixed md:hidden w-full h-full bg-black/60 top-0 left-0 right-0 `}
      >
        <div
          className={` absolute top-0  ${
            mobileMenuOpen ? "right-0" : "-right-72"
          }  w-64  bg-white px-8 h-screen overflow-y-scroll pb-16 transition-all duration-1000`}
        >
          <span
            onClick={toggleMobileMenu}
            className="absolute top-4 right-4 cursor-pointer "
          >
            <img src="/images/icon-close-menu.svg" alt="" />
          </span>
          <ul className="flex flex-col items-start justify-center mt-16  gap-6 text-MediumGray">
            <li
              onClick={toggleSubFeatureMenu}
              className="relative group hover:text-AlmostBlack hover:cursor-pointer transition mr-4"
            >
              <span className="absolute top-2 -right-4">
                <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
                  <path
                    className="group-hover:stroke-AlmostBlack"
                    stroke="#686868"
                    strokeWidth="1.5"
                    fill="none"
                    d={featureMenuOpen ? "m1 5 4-4 4 4" : "m1 1 4 4 4-4"}
                  />
                </svg>
              </span>
              Features
            </li>
            {/* sub feature menu */}
            {subFeatureMenuOpen && (
              <ul className="flex flex-col justify-center items-start gap-4 text-xs ml-14 ">
                <li className="relative before:absolute before:content-[url('/images/icon-todo.svg')] before:-left-6 before:-bottom-1 transition hover:text-AlmostBlack cursor-pointer">
                  Todo List
                </li>
                <li className="relative before:absolute before:content-[url('/images/icon-calendar.svg')] before:-left-6 before:-bottom-1 transition hover:text-AlmostBlack cursor-pointer">
                  Calendar{" "}
                </li>
                <li className="relative before:absolute before:content-[url('/images/icon-reminders.svg')] before:-left-6 before:-bottom-1 transition hover:text-AlmostBlack cursor-pointer">
                  Reminders
                </li>
                <li className="relative before:absolute before:content-[url('/images/icon-planning.svg')] before:-left-6 before:-bottom-1 transition hover:text-AlmostBlack cursor-pointer">
                  Planning
                </li>
              </ul>
            )}
            <li
              onClick={toggleSubCompanyMenu}
              className="relative  group hover:text-AlmostBlack hover:cursor-pointer transition mr-4"
            >
              <span className="absolute top-2 -right-4">
                <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
                  <path
                    className="group-hover:stroke-AlmostBlack"
                    stroke="#686868"
                    strokeWidth="1.5"
                    fill="none"
                    d={companyMenuOpen ? "m1 5 4-4 4 4" : "m1 1 4 4 4-4"}
                  />
                </svg>
              </span>
              Company
            </li>
            {/* sub company menu */}
            {subCompanyMenuOpen && (
              <ul className="flex flex-col justify-center items-start ml-10 gap-4 text-xs">
                <li className="relative transition hover:text-AlmostBlack cursor-pointer ">
                  History
                </li>
                <li className="relative transition hover:text-AlmostBlack whitespace-nowrap cursor-pointer ">
                  Our Team
                </li>
                <li className="relative transition hover:text-AlmostBlack cursor-pointer ">
                  Blog
                </li>
              </ul>
            )}
            <li className="hover:text-AlmostBlack hover:cursor-pointer transition">
              Careers
            </li>
            <li className="hover:text-AlmostBlack hover:cursor-pointer transition">
              About
            </li>
            <li className="self-center mt-4">
              <button className=" hover:text-AlmostBlack transition">
                Login
              </button>
            </li>
            <li className="self-stretch">
              <button className="w-full px-4 py-2 rounded-2xl border-MediumGray border-2 hover:text-AlmostBlack hover:border-AlmostBlack transition">
                Register
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
