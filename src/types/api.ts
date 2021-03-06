export type Image = {
  url: string
  alternativeText: string
}

export type LogoProps = Image

export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: Image
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  image: Image
}

type TechIcon = {
  icon: {
    url: string
    alternativeText: string
  }
  title: string
}

export type SectionTechProps = {
  title: string
  techIcons: [TechIcon]
}

export type SectionConceptsProps = {
  title: string
  concepts: Array<{
    title: string
  }>
}

type Module = {
  title: string
  subtitle: string
  description: string
}

export type SectionModulesProps = {
  title: string
  modules: [Module]
}

export type SectionAgendaProps = {
  title: string
  description: string
}

export type PricingBoxProps = {
  totalPrice: number
  numberInstallments: number
  priceInstallment: number
  benefits: string
  button: {
    label: string
    url: string
  }
}

export type SocialLink = {
  title: string
  url: string
}

export type Author = {
  name: string
  role: string
  description: string
  socialLinks: [SocialLink]
  photo: Image
}

export type SectionAboutUsProps = {
  title: string
  authors: [Author]
}

export type Review = {
  id: number
  name: string
  text: string
  photo: Image
}

export type SectionReviewsProps = {
  title: string
  reviews: Review[]
}

type Question = {
  question: string
  answer: string
}

export type SectionFaqProps = {
  title: string
  questions: [Question]
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionAgenda: SectionAgendaProps
  pricingBox: PricingBoxProps
  sectionAboutUs: SectionAboutUsProps
  sectionReviews: SectionReviewsProps
  sectionFaq: SectionFaqProps
}
