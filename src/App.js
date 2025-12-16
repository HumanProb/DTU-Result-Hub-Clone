import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const data = [
  { Name: "Home", href: "https://www.resulthubdtu.com/home" },
  { Name: "Results", href: "https://www.google.com/" },
  { Name: "Student Profile", href: "https://www.google.com/" },
  { Name: "Analytics", href: "https://www.google.com/" },
  { Name: "Grade Predictor", href: "https://www.google.com/" },
  { Name: "CGPA Calculator", href: "https://www.google.com/" },
  { Name: "Result Card", href: "https://www.google.com/" },
];

const queans = [
  {
    Ques: "How is the CGPA calculated?",
    Ans: `At ResultHub DTU, CGPA (Cumulative Grade Point Average) is calculated using the following formula:
CGPA = (Σ CGPAi × Creditsi) / Total Credits
Where:
- CGPAi is the CGPA of the ith semester.
- Creditsi is the total number of credits for the ith semester.
- Σ denotes summation over all semesters.
- Total Credits is the sum of credits for all semesters.
For more detailed information, you can refer to the official document published on DTU's website, specifically pages 20-24.`,
  },
  {
    Ques: "Some students have obtained CGPA in semesters I and II but have received 0 CGPA in the 3rd semester or a similar case. However, their CGPA remains comparative and unaffected. Why is this so?",
    Ans: `In cases where a student receives a 0 CGPA for a particular semester, it's typically because they haven't completed any credits during that semester. Since the CGPA is calculated based on the credits earned, a 0 CGPA in a semester with 0 credits has no impact on the overall CGPA.
This is why the CGPA remains comparative and unaffected despite the absence of results for a specific semester. However, it's important to note that this situation may change when the student completes the pending credits. If a student reappears or completes the credits in subsequent semesters, the total credits for the respective student will be modified accordingly.
Consequently, their CGPA will be recalculated based on the updated total credits, potentially affecting their overall academic standing in future semesters. Therefore, while the current CGPA may appear unaffected by a 0 CGPA in a particular semester, it's essential for students to fulfill their credit requirements and monitor their academic progress closely to ensure accurate and reflective CGPA calculations in the long run.`,
  },
  {
    Ques: "How often are results updated on ResultHub DTU?",
    Ans: "Results on ResultHub DTU are typically updated at the end of each semester or academic session. However, the exact timing may vary depending on the release schedule set by the university administration.",
  },
];

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-primary w-full">
      <MenuHeader />
      <Container />
      <Footer />
    </div>
  );
}

function MenuHeader() {
  const [navigation, setNavigation] = useState(false);
  function navigationButtonOn() {
    setNavigation((x) => !x);
    // console.log(navigation);
  }

  return (
    <div className="sm:px-16 px-6 flex justify-center items-center ">
      <div className="xl:max-w-[1280px] w-full">
        <div>
          <header className="header flex items-center">
            <div className="container">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="sm:text-left text-center flex-1 font-poppins font-semibold ss:text-[32px] text-[32px] text-white ss:leading-[100.8px] leading-[75px]">
                    ResultHub DTU
                  </h1>
                </div>
                <div
                  className={
                    !navigation ? "navigation" : "navigation show__menu "
                  }
                  onClick={navigation ? navigationButtonOn : null}
                >
                  <ul className="menu flex items-center gap-[2.7rem]">
                    {data.map((x) => (
                      <li key={x.Name}>
                        <a
                          className={
                            x.Name.includes("Home")
                              ? "text-white text-[16px] leading-7 font-[600]"
                              : "text-white text-[16px] leading-7 font-[450]"
                          }
                          href={x.href}
                          aria-current={
                            window.location.pathname === x.href
                              ? "page"
                              : undefined
                          }
                        >
                          {x.Name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* <div className="navigation" onClick={navigationButtonOn}></div> */}
                <span className="lg:hidden" onClick={navigationButtonOn}>
                  <svg
                    className="w-6 h-6 cursor-pointer text-white"
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
                  </svg>
                </span>
              </div>
            </div>
          </header>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div>
      <div className="bg-primary flex justify-center items-start flex-grow">
        <div className="xl:max-w-[1280px] w-full">
          <div className="bg-[#00040f] text-white  mb-[30px] flex flex-col items-center justify-center relative overflow-hidden">
            <div className="w-full text-center mb-8"></div>
            <div className="container mx-auto px-4 py-16 text-center relative z-10">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Your Academic
                <span className="block text-[#4cc9f0]">Showcase</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                ResultHub DTU is the ultimate platform for tracking academic
                achievements across Delhi's premier technical institutions.
                Discover comprehensive analytics, compare performances, and
                celebrate educational excellence with precision and style.
              </p>
              <div className="flex justify-center space-x-4 "></div>
              <a
                href="https://www.resulthubdtu.com/Results"
                target="blank"
                rel="noopener noreferrer"
              >
                <div className="gap-6 justify-center">
                  <button className="text-lg px-8 py-4 rounded-md font-semibold transition-colors duration-200 items-center justify-center bg-[#4cc9f0] hover:bg-[#3ba8d0] text-[#00040f] hover:text-white">
                    New Text
                  </button>
                  <button className="text-lg px-8 py-4 rounded-md font-semibold transition-colors duration-200 items-center justify-center bg-[#4cc9f0] hover:bg-[#3ba8d0] text-[#00040f] hover:text-white">
                    New Text
                  </button>
                </div>
              </a>
              <div></div>
            </div>
          </div>
          <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white text-center">
            Colleges
          </h2>
          <p className="mx-auto text-gray-500 dark:text-gray-400 max-w-[500px] text-center">
            We proudly present the academic results for top institutions like
            DTU, IGDTUW, and NSUT, showcasing the achievements of their talented
            students.
          </p>
          <div></div>
        </div>
      </div>
      <div>
        <section>
          <section></section>
          <div>
            <h1> </h1>
            <div>
              <div></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="text-center mb-6">
        <h2 className="text-3xl">Relult Hub</h2>
        <p className="text-lg">
          &copy; {new Date().getFullYear()} ResultHub DTU. All rights reserved.
        </p>
      </div>
      <div className="max-w-5xl mx-auto text-center px-6">
        <div className="mt-2 space-x-4">
          <a
            href="https://www.resulthubdtu.com/privacy-policy"
            className="text-gray-400 hover:text-white text-sm"
          >
            Privacy Policy
          </a>
          <a
            href="https://www.resulthubdtu.com/terms-of-service"
            className="text-gray-400 hover:text-white text-sm"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
