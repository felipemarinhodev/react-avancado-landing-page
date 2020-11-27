import React from 'react'

import Container from 'components/Container'
import Heading from 'components/Heading'

import * as S from './styles'
import { SectionConceptsProps } from 'types/api'

type Props = {
  sectionConcepts: SectionConceptsProps
}

const SectionConcepts = ({ sectionConcepts }: Props) => (
  <Container>
    <S.Box>
      <Heading lineBottom>{sectionConcepts.title}</Heading>
      <S.List>
        {sectionConcepts.concepts.map((concept) => (
          <S.Item key={concept.title}>{concept.title}</S.Item>
        ))}
      </S.List>
    </S.Box>
  </Container>
)

export default SectionConcepts
