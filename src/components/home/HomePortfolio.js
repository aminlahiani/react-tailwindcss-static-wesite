import React from "react";

/* This example requires Tailwind CSS v2.0+ */


function HomePortfolio() {
    return (
        <div>
           <div className="py-12 bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">portefeuilles</h2>
         
        </div>

       
      </div>
    </div>

 <section className="block  bg-blueGray-600">
        <div className="container mx-auto">
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-12/12">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                  Application Mobile
                  </h5>
                 
                    <div className="  flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="https://s3.amazonaws.com/creativetim_bucket/products/260/original/opt_nuprn_thumbnail.jpg"
                      />
                    </div>
                
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                  Application Web
                  </h5>
                
                    <div className="flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="https://s3.amazonaws.com/creativetim_bucket/products/71/thumb/material-dashboard-react.jpg"
                      />
                    </div>
                
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                  Site Web
                  </h5>
                
                    <div className="flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="https://s3.amazonaws.com/creativetim_bucket/products/83/thumb/opt_mk_react_thumbnail.jpg"
                      />
                    </div>
              
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        </div>
    );
}

export default HomePortfolio;
