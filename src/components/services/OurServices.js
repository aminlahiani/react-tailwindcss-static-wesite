/* This example requires Tailwind CSS v2.0+ */
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'Site Web',
    description:
      'Nous développons des sites internet qui associent créativité, technologie de pointe et facilité d’utilisation. Que vous souhaitiez informer, communiquer, vendre ou recruter, Eminence, votre agence de solutions digitales à Tunis, conçoit votre site sur-mesure.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Référencement Naturel(SEO)',
    description:
      'Notre Equipe SEO/SEA, met en place une feuille de route de référencement qui s’harmonie avec les exigences de votre projet de visibilité Une étude des mots se fixe soigneusement pour rentabiliser la mission de référencement.',
    icon: ScaleIcon,
  },
  {
    name: 'Application Web',
    description:
      'Nous développons des Application web sur mesure, Progressive web apps, applications interactives ou Intégration API et outils tiers, nous vous proposons la technologie la plus adaptée à vos objectifs et à votre budget.',
    icon: AnnotationIcon,
  },
  {
    name: 'Application Mobile',
    description:
      'Nous développons des applications mobiles natives sur les plateformes les plus populaires (Android et iOS) conformément aux dernières tendances UX, ainsi que des applications hybrides multiplateformes utilisant React Native ou Flutter ainsi que des jeux mobiles utilisant Unity.',
    icon: LightningBoltIcon,
  },
  {
    name: 'Marketing Digital',
    description:
      'Eminence, agence de solutions digitales à Tunis, exploite des tactiques digitales qui génèrent du trafic, optimisent vos chances d’être remarqué par votre audience cible et vous positionne dans un cycle vertueux d’augmentation votre chiffre d’affaires.',
    icon: AnnotationIcon,
  },
  {
    name: 'Réseaux sociaux',
    description:
      'Désormais incontournables, les réseaux sociaux vous offrent la possibilité de communiquer plus efficacement avec votre cible et d’acquérir de nouveaux clients. Eminence, votre agence digitale à Tunis, utilise des techniques pionnières pour bénéficier au mieux de ces canaux de communications.',
    icon: AnnotationIcon,
  },
]

export default function OurServices() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Nos Services</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Nos Services
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          Notre expertise comprend un ensemble de solutions complémentaires
           pour permettre à votre entreprise un positionnement performant.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
