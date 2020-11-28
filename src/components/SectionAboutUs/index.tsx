import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'
import ProfileCard from 'components/ProfileCard'

import content from './content'
import * as S from './styles'
import { SectionAboutUsProps } from 'types/api'

type Props = {
  sectionAboutUs: SectionAboutUsProps
}

const SectionAboutUs = ({ sectionAboutUs }: Props) => (
  <Container>
    <Heading reverseColor>{sectionAboutUs.title}</Heading>

    <S.Content>
      {sectionAboutUs.authors.map((author) => (
        <ProfileCard
          key={author.name}
          name={author.name}
          role={author.role}
          image={author.photo.url}
          socialLinks={author.socialLinks}
          description={author.description}
        />
      ))}
    </S.Content>
  </Container>
)

export default SectionAboutUs
