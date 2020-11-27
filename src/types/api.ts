export type LogoProps = {
  alternativeText: string
  url: string
}

export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: {
    alternativeText: string
    url: string
  }
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  image: {
    alternativeText: string
    url: string
  }
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

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
}
