
// components

import { Link } from "react-router-dom";

export default function ServicesPage() {
  return (
    <>
  
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                  Faire passer votre projet au niveau supérieur.
                  </h1>
                  <p className="mt-4 text-lg text-white">
                  Notre philosophie, nos valeurs et nos expertises dans le domaine du digital vous offrent notre compréhension en même temps que notre capacité à imaginer les meilleurs moyens pour développer votre productivité,
                   votre activité en ligne, votre visibilité sur le web et donc votre chiffre d’affaires.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
           

            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-user-friends text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Travailler avec nous est un plaisir
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                Notre philosophie, nos valeurs et nos expertises dans le domaine du digital 
                vous offrent notre compréhension en même temps que notre capacité à imaginer 
                les meilleurs moyens pour développer votre productivité, votre activité 
                en ligne, votre visibilité sur le web et donc votre chiffre d’affaires.
                </p>
           
                <Link to="/" className="font-bold text-blueGray-700 mt-8">
                Demander Un Devis
                </Link>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                   
                    <h4 className="text-xl font-bold text-indigo-600">
                      
                        Nos experts
                    </h4>
                    <p className="text-md font-light mt-2 ">
                   
                    une équipe performante a un objectif et des valeurs clairement définis, des méthodes de travail efficaces, un état d’esprit d’excellence et de 
                    respect mutuel, et une forte implication des membres dans la réussite du projet
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

     

  

     
      
      </main>
     
    </>
  );
}
