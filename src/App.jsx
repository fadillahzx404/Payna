import os from "os";
import ReactPlayer from "react-player";
import "./css/App.css";

//Logo
import Logo from "/logo.png";

//img header
import imgCont from "/image-content.png";
import imgCont2 from "/image-content2.png";
import imgCont3 from "/image-content3.png";

//img brand
import brand1 from "/brand1.png";
import brand2 from "/brand2.png";
import brand3 from "/brand3.png";
import brand4 from "/brand4.png";
import brand5 from "/brand5.png";

//icon-product

import icon1 from "/icon-product1.png";
import icon2 from "/icon-product2.png";
import icon3 from "/icon-product3.png";
import icon4 from "/icon-product4.png";
import icon5 from "/icon-product5.png";
import icon6 from "/icon-product6.png";

function App() {
  return (
    <>
      <nav className="navbar flex px-24 max-sm:px-5 mx-auto py-8 justify-between">
        <a
          href=""
          className="logo flex flex-row hover:scale-90 transition duration-300"
        >
          <img src={Logo} alt="" />
          <p className="place-self-center text-lg font-semibold">Payna</p>
        </a>
        <div className="menu flex flex-row gap-12 place-self-center max-lg:hidden max-sm:hidden">
          <a href="" className="text-[#070F18] font-semibold text-md ">
            Home
          </a>
          <a
            href=""
            className="text-[#070F18] hover:font-semibold transition duration-300 delay-150"
          >
            Features
          </a>
          <a
            href=""
            className="text-[#070F18] hover:font-semibold transition duration-300 delay-150"
          >
            Showcase
          </a>
          <a
            href=""
            className="text-[#070F18] hover:font-semibold transition duration-300 delay-150"
          >
            Pricing
          </a>
        </div>
        <div className="button-login place-self-center py-2 px-8 rounded-3xl text-[#070F18] bg-[#F5F6FB] hover:bg-gray-300 hover:text-gray-600 hover:scale-90 transition duration-300 max-sm:hidden">
          <a href="">{os.userInfo().username}</a>
        </div>
      </nav>
      <div className="container [@media(width:768px)]:px-5 px-28 mt-12 mx-auto max-sm:px-5 max-sm:mt-5">
        <section className="header  flex flex-row [@media(width:768px)]:grid">
          <div className="content-header-1 grid content-center [@media(width:768px)]:place-items-center [@media(width:768px)]:text-center ">
            <p className="text-5xl [@media(width:768px)]:text-5xl [@media(width:768px)]:leading-relaxed font-bold max-md:w-full w-8/12 leading-relaxed max-sm:text-[2.5rem]/relaxed">
              Manage Payroll Like an Expert
            </p>
            <p className="font-light text-sm max-md:w-full w-7/12 pt-2 mb-8 leading-7">
              Payna is helping you to setting up the payroll without required
              any finance skills or knowledge before
            </p>

            <a
              href=""
              className="w-48 py-3 text-center rounded-3xl text-sm text-white bg-[#1F7CFF] hover:scale-90 transition duration-300"
            >
              Get Started
            </a>
          </div>
          <div className="content-header-2 relative max-lg:hidden">
            <img src={imgCont} alt="" />
            <img src={imgCont2} className="absolute top-28 -left-36" alt="" />
            <img src={imgCont3} className="absolute top-10 -right-16" alt="" />
          </div>
        </section>
        <section className="brand [@media(max-width:1024px)]:justify-center max-xl:grid [@media(max-width:1024px)]:text-center flex flex-row mt-[70px] justify-between [@media(max-width:625px)]:text-start">
          <p className="text-md font-medium ">
            Trusted by
            <br className="[@media(max-width:1024px)]:hidden" /> Global
            Companies
          </p>
          <div className="img-brand md:mt-6 flex flex-row gap-9 max-sm:gap-5 max-sm:mt-5 max-sm:flex-wrap place-items-center">
            <img
              src={brand1}
              className="h-8  [@media(width:768px)]:h-5"
              alt=""
            />
            <img
              src={brand2}
              className="h-8  [@media(width:768px)]:h-5 "
              alt=""
            />
            <img
              src={brand3}
              className="h-8  [@media(width:768px)]:h-5"
              alt=""
            />
            <img
              src={brand4}
              className="h-8  [@media(width:768px)]:h-5"
              alt=""
            />
            <img
              src={brand5}
              className="h-8  [@media(width:768px)]:h-5"
              alt=""
            />
          </div>
        </section>
        <section className="product">
          <div className="text-product-header text-center mt-28 mb-16">
            <p className="text-[#F75C4E] text-sm font-bold mb-2">WORK BETTER</p>
            <p className="text-3xl font-bold mb-5">For Your Business</p>
            <p className="text-[#575455] text-sm font-light max-sm:text-lg">
              We did research what your company needs and{" "}
              <br className="max-sm:hidden" /> here we are providing all of them
              just for you
            </p>
          </div>
          <div className="product-item mb-20 [@media(max-width:1024px)]:grid-cols-2 grid grid-cols-3 [@media(max-width:625px)]:grid-cols-1  gap-x-7 gap-y-16 justify-items-center">
            <div className="item-1 flex flex-row gap-5">
              <img src={icon1} className="w-auto h-14" alt="" />
              <div className="grid">
                <p className="font-bold mb-2">Share Insights</p>
                <p className="text-[#575455] text-sm font-light w-52">
                  Working together with your team to make decisions
                </p>
              </div>
            </div>
            <div className="item-2 flex flex-row gap-5">
              <img src={icon2} className="w-auto h-14" alt="" />
              <div className="grid">
                <p className="font-bold mb-2">Track Leads</p>
                <p className="text-[#575455] font-light text-sm w-52">
                  See where your money goes and comes in business
                </p>
              </div>
            </div>
            <div className="item-3 flex flex-row gap-5">
              <img src={icon3} className="w-auto h-14" alt="" />
              <div className="grid">
                <p className="font-bold mb-2">Offline Mode</p>
                <p className="text-[#575455] font-light text-sm w-52">
                  Use the feature while off from internet? sure can
                </p>
              </div>
            </div>
            <div className="item-1 flex flex-row gap-5 ">
              <img src={icon4} className="w-auto h-14" alt="" />
              <div className="grid">
                <p className="font-bold mb-2">Kanban Mode</p>
                <p className="text-[#575455] font-light text-sm w-52">
                  Organize the report that easy to be understand
                </p>
              </div>
            </div>
            <div className="item-1 flex flex-row gap-5">
              <img src={icon5} className="w-auto h-14" alt="" />
              <div className="grid">
                <p className="font-bold mb-2">Reward System</p>
                <p className="text-[#575455] font-light text-sm w-52">
                  Motivate your team working harder and receive a gift
                </p>
              </div>
            </div>
            <div className="item-1 flex flex-row gap-5">
              <img src={icon6} className="w-auto h-14" alt="" />
              <div className="grid">
                <p className="font-bold mb-2">189 Country</p>
                <p className="text-[#575455] font-light text-sm w-52">
                  Working together worldwide people from anywhere
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="save-more-time [@media(max-width:1024px)]:grid flex flex-row justify-center gap-16 max-xl:gap-5 mt-28 mb-20">
          <div className="player-wrapper rounded-3xl overflow-hidden z-10">
            <ReactPlayer
              className="react-player"
              url="https://www.youtube.com/watch?v=8F2xbQJgHs4"
            />
          </div>
          <div className="text-save-more-time [@media(max-width:1024px)]:text-center [@media(max-width:1024px)]:mt-12 [@media(max-width:768px)]:justify-self-center self-center">
            <p className="text-[#F75C4E] text-sm font-bold mb-2">
              SAVE MORE TIME
            </p>
            <p className="text-3xl font-bold mb-5">And Boost Productivity</p>
            <p className="text-[#575455] text-sm max-lg:text-lg font-light">
              Your employees can bring any success into your{" "}
              <br className="max-sm:hidden" /> business, so we need to take care
              of them
            </p>
            <div className="flex-flex-row mt-12 max-sm:grid max-sm:gap-5 max-sm:mx-8">
              <input
                type="text"
                className="p-2.5  bg-[#F5F6FB] rounded-3xl focus:outline-none focus:border-0 focus:ring-0"
                placeholder="  Email Address"
              />
              <a
                href=""
                className="-ml-8 [@media(min-width:1024)]:ml-0  max-sm:m-0 py-3 px-10 text-center rounded-3xl text-sm text-white bg-[#1F7CFF] hover:bg-blue-800"
              >
                Get Started
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
