type Image = {
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

type Concepts = {
  title: string
}

export type SectionConceptsProps = {
  title: string
  concepts: [Concepts]
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

type Author = {
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
}
