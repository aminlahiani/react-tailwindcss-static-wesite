
const Blogs = [
  
  {
    image : "https://images.unsplash.com/photo-1599658880436-c61792e70672",
    title : " Tendances du Marketing Digital ",
    description: "À deux mois de la clôture de 2020, cette année restera une année unique pour les professionnels du marketing. L’impact de la crise sanitaire liée à la Covid-19 n’a épargné aucun secteur...",
    create : "May 20th 2020"
  },
  {
    image : "https://immo2.pro/images/wp-images/2016/01/strategie-linkedin-immobilier.jpg",
       title : "LinkedIn lance des nouvelles",
    description: "LinkedIn, le réseau professionnel en ligne créé en 2002 introduit plusieurs nouveautés en lançant sa propre version de stories au niveau mondial....",
    create : "May 20th 2020"
  },
  {
    image : "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title : "5 leviers incontournables",
    description: "Il est aujourd’hui incontournable d’avoir une communication digitale efficace. En effet, cette constante évolution qui couvre plusieurs domaines ...",
    create : "May 20th 2020"
  },
  {
    image : "https://www.tanit-digital.com/wp-content/uploads/2021/06/Recette-digitale-2021-uai-1440x961.jpeg",
    title : " entreprises en 2021",
    description: "C’est la conviction que les outils numériques d’aujourd’hui peuvent profiter à tous si on les utilise de la bonne manière. Tanit Digital, notre société de communication digitale des entreprises en Tunisie..",
    create : "May 20th 2020"
  },
  {
    image : "https://images.unsplash.com/photo-1616499370260-485b3e5ed653?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title : "Google pénalisera les sites non-https",
    description: "Après que Google a ajouté un label « non-sécurisé » à la barre d’adresse des sites qui n’utilisent pas le protocole HTTPS, le moteur de recherche annonce ",
    create : "May 20th 2020"
  },
    {
      image : "https://images.unsplash.com/photo-1526498460520-4c246339dccb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title : "Qu’est ce que le HTTPS?",
      description: "Vous avez certainement entendu parler de ce terme HTTPS ( Hyper Text Transfer Protocol Secure), qui est la version sécurisée du protocole HTTP.",
      create : "May 20th 2020"
    },
    {
      image : "https://images.unsplash.com/photo-1497493292307-31c376b6e479?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      title : "stratégie de communication ",
      description: "Il est aujourd’hui incontournable d’avoir une communication digitale efficace. En effet, cette constante évolution qui couvre plusieurs domaines numériques ont pour but de transmettre. The point of using Lorem Ipsum is that....",
      create : "May 20th 2020"
    },
    {
      image : "https://images.unsplash.com/photo-1599658880436-c61792e70672",
      title : " Marketing Digital 2022 ",
      description: "À deux mois de la clôture de 2020, cette année restera une année unique pour les professionnels du marketing. L’impact de la crise sanitaire liée à la Covid-19 n’a épargné aucun secteur...",
      create : "May 20th 2020"
    },
  
  
]
function BlogsSection() {
    return (
        <div>
           
<main class="py-12 md:px-20 sm:px-14 px-6">
  <div class="sm:flex items-center shadow-md">
    <div class="md:px-10 sm:px-5">
      <h1 class="text-gray-800 font-bold text-2xl my-2">Analyse SEO</h1>
      <p class="text-gray-700 mb-2 md:mb-6">Pour comprendre l’analyse SEO, jetons un coup d’œil à l’histoire proche. Vous vous souvenez des annuaires téléphoniques ? Les pages jaunes, plus précisément, ...</p>
      <div class="flex justify-between mb-2">
        <span class="font-thin text-sm">May 20th 2020</span>
        <span class="sm:block hidden mb-2 text-gray-800 font-bold">Lire la Suite</span>
      </div>
    </div>
    <div>
      <img class="bg-cover" src="https://www.markentive.com/hubfs/agence-seo.jpg" alt="" />
    </div>
  </div>
  <div class="mt-4 grid grid-cols-4 gap-4 space-x-4">
{Blogs.map((blog) => (
  <div key={blog.name}  class="shadow-md  ">
      <img src={blog.image} alt="" />
      <div class="px-4">
        <h1 class="mt-3 text-gray-800 text-2xl font-bold my-2">{blog.title}</h1>
        <p class="text-gray-700 mb-2">{blog.description}</p>
        <div class="flex justify-between mt-4">
          <span class="font-thin text-sm">May 20th 2020</span>
          <span class="mb-2 text-gray-800 font-bold">Lire la suite</span>
        </div>
        
      </div>
    </div>
))
}
  </div>
 
</main>
        </div>
    )
}

export default BlogsSection
