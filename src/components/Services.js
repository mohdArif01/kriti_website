import React from "react";
import img from "../images/web.svg";
import img2 from "../images/app.svg";
import img3 from "../images/hosting.svg";
import img4 from "../images/consultation.svg";

const Services = () => {
  return (
    <div id="services" className=" bg-transparent py-12">
      <section data-aos="zoom-in-down">
        <div className="my-4 py-4">
          <h2 className="my-2 text-center text-5xl text-blue-900 uppercase font-bold">
            themes
          </h2>
        </div>

          <div className="px-12" data-aos="fade-down" data-aos-delay="600">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div
                  className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                <div className="m-2 text-justify text-sm">
                  <img
                      alt="card img"
                      className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                      src={img}
                  />
                  <h2 className="font-semibold my-4 text-2xl text-center">
                    Health and Well-being
                  </h2>
                  <p className="text-md font-medium">
                    Design solutions that promote physical and mental health. This
                    theme focuses on creating apps, platforms, or interfaces that
                    encourage healthy living, provide mental health support, or
                    track fitness and wellness goals.
                  </p>
                </div>
              </div>

              <div
                  className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                <div className="m-2 text-justify text-sm">
                  <img
                      alt="card img"
                      className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                      src={img2}
                  />
                  <h2 className="font-semibold my-4 text-2xl text-center">
                    Smart Cities and Urban Innovation
                  </h2>
                  <p className="text-md font-medium">
                    Develop digital experiences that contribute to the evolution
                    of smart cities. Participants will focus on creating
                    innovative solutions for urban challenges, such as smarter
                    transportation, energy management, and enhancing public
                    services.
                  </p>
                </div>
              </div>

              <div
                  className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                <div className="m-2 text-justify text-sm">
                  <img
                      alt="card img"
                      className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                      src={img3}
                  />
                  <h2 className="font-semibold my-4 text-2xl text-center ">
                    Digital Education and Lifelong Learning
                  </h2>
                  <p className="text-md font-medium">
                    Create user-friendly tools that transform how people learn.
                    This theme encourages designs that make education more
                    accessible, engaging, and effective for learners of all ages.
                  </p>
                </div>
              </div>

            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
              <div className="m-2 text-justify text-sm">
                <img
                  alt="card img"
                  className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                  src={img4}
                />
                <h2 className="font-semibold my-4 text-2xl text-center ">
                  Financial Wellness and Digital Economy
                </h2>
                <p className="text-md font-medium">
                  Build interfaces that empower users to take control of their
                  finances. This theme emphasizes creating solutions for
                  budgeting, investing, financial literacy, and supporting the
                  digital economy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
      <div className="mb py-4 mt-12">
          <h2 className="my-6 text-center text-5xl text-blue-900 uppercase font-bold">
            FAQs
          </h2>
        </div>
        <div className="m-auto -mt-12 max-w-6xl p-2 md:p-10 h-5/6">
          <div
            className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left"
            data-aos="zoom-out"
          >
            <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
              <div className="text-blue-900 mb-4"></div>
              <h3 className="text-3xl  text-blue-900 font-bold">
                What is <span className="font-black">Kriti?</span>
              </h3>
              <div>
                <p className="my-3 text-xl text-gray-600 font-semibold">
                Kriti is an Online & Offline participants, Kriti is set 
to be a landmark event in the design community, 
attracting talent from diverse fields and offering a 
platform to showcase and enhance their skills.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
              <div className="text-blue-900 mb-4"></div>
              <h3 className="text-3xl  text-blue-900 font-bold">
                Is Kriti <span className="font-black">Free/Paid?</span>
              </h3>
              <div>
                <p className="my-3 text-xl text-gray-600 font-semibold">
                  Participating and attending any of the event of Kriti is completely free of Cost. You don't need to pay anything for the event
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
              <div className="text-blue-900 mb-4"></div>
              <h3 className="text-3xl  text-blue-900 font-bold">
                Team <span className="font-black">Formation</span>
              </h3>
              <div>
                <p className="my-3 text-xl text-gray-600 font-semibold">
                Each event under the Kriti team should be comprised of a minimum of 1 and a maximum of 3 members.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
              <div className="text-blue-900 mb-4"></div>
              <h3 className="text-3xl  text-blue-900 font-bold">
                How to <span className="font-black">Register?</span>
              </h3>
              <div>
                <p className="my-3 text-xl text-gray-600 font-semibold">
                Registration for Kriti is exclusively available on Devfolio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
