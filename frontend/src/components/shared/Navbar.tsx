"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [state, setState] = useState(false);

  const navigation = [
    { title: "Task 1", path: "/task-1" },
    { title: "Task 2", path: "/task-2" },
    { title: "Task 3", path: "/task-3" },
  ];

  return (
    <nav className="border-b-4 w-full md:static md:text-sm">
      <div className="items-center px-4 max-w-screen mx-auto md:flex">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <div>
            <svg
              width="115"
              height="26"
              viewBox="0 0 115 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.508789 0.739258H35.0248L20.9865 25.1355H16.1154L9.65502 9.06643H14.612L19.2385 20.2449L27.8422 4.63008H2.61056L0.508789 0.739258Z"
                fill="#81EBAB"
              />
              <path
                d="M80.5438 13.4909C80.8719 12.5687 81.3462 11.7622 81.9689 11.0772C82.5916 10.3922 83.3299 9.86202 84.1803 9.48869L84.182 9.48792L84.1837 9.48718C85.0579 9.11252 86.0185 8.92863 87.0593 8.92863C88.1433 8.92863 89.1001 9.14341 89.9132 9.5922C90.6005 9.96268 91.1764 10.4721 91.6399 11.1143L95.1324 8.33005C94.4684 7.3265 93.5181 6.53875 92.2637 5.97011C90.874 5.3401 89.2683 5.01937 87.4375 5.01937C85.583 5.01937 83.9004 5.31252 82.3847 5.89245C80.885 6.47369 79.5975 7.29592 78.5169 8.35794L78.5155 8.35927L78.5141 8.3606C77.4331 9.40439 76.5931 10.6445 75.9943 12.0854C75.3974 13.5219 75.0963 15.0943 75.0963 16.8078C75.0963 18.5015 75.4954 19.9827 76.2829 21.2651C77.0708 22.5289 78.1901 23.5234 79.6559 24.2472C81.1377 24.9693 82.8839 25.3377 84.9063 25.3377C86.6839 25.3377 88.2891 25.0637 89.727 24.5225C91.0345 24.0127 92.2085 23.1796 93.2485 22.0113L90.4522 19.2628C89.7819 19.9653 89.0484 20.4946 88.25 20.8396C87.3617 21.2319 86.4301 21.4284 85.4591 21.4284C84.38 21.4284 83.4205 21.2349 82.5937 20.8321L82.5876 20.8291L82.5817 20.826C81.7786 20.4033 81.1464 19.8163 80.6963 19.0661L80.6926 19.06L80.6891 19.0537C80.2608 18.2828 80.053 17.4039 80.053 16.4296C80.053 15.3769 80.2149 14.396 80.5438 13.4909Z"
                fill="#81EBAB"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M34.5697 20.9735H43.916L44.7322 24.9303H49.5527L44.4016 5.42669H38.5505L27.2781 24.9303H32.2905L34.5697 20.9735ZM41.4516 9.02644L43.2176 17.588H36.5199L41.4516 9.02644Z"
                fill="#81EBAB"
              />
              <path
                d="M67.102 17.3102L69.4736 5.42669H74.2384L70.3377 24.9303H66.1923L59.0123 13.0146L56.6343 24.9303H51.8694L55.7701 5.42669H59.916L67.102 17.3102Z"
                fill="#81EBAB"
              />
              <path
                d="M101.045 21.3411L101.952 16.7549H111.019L111.694 13.3112H102.634L103.485 9.01591H113.756L114.484 5.42669H99.4206L95.5199 24.9303H110.966L111.716 21.3411H101.045Z"
                fill="#81EBAB"
              />
            </svg>
          </div>
          <div className="md:hidden">
            <button
              className="text-gray-500 hover:text-gray-800"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <li
                  key={idx}
                  className="text-gray-700 font-bold hover:text-indigo-600"
                >
                  <Link href={item.path} className="block">
                    {item.title}
                  </Link>
                </li>
              );
            })}
            <span className="hidden w-px h-6 bg-gray-300 md:block"></span>
            <div className="space-y-3 items-center gap-x-6 md:flex md:space-y-0">
              <li>
                <Link
                  href="/about"
                  className="block py-3 text-center font-semibold text-gray-700 hover:text-indigo-600 border rounded-lg md:border-none"
                >
                  About Project
                </Link>
              </li>
              <li>
                <Link
                  href="/docs"
                  className="block py-3 px-4 font-medium text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow md:inline"
                >
                  Documentation
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}
