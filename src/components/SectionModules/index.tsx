import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'
import CardModule from 'components/CardModule'

import content from './content'
import * as S from './styles'
import { SectionModulesProps } from 'types/api'

type Props = {
  sectionModules: SectionModulesProps
}

const SectionModules = ({ sectionModules }: Props) => (
  <Container>
    <Heading reverseColor>{sectionModules.title}</Heading>
    <S.Content>
      {sectionModules.modules.map(({ title, subtitle, description }, index) => (
        <CardModule key={index} title={title} subTitle={subtitle}>
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </CardModule>
      ))}
    </S.Content>
  </Container>
)

export default SectionModules
