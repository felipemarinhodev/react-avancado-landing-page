import React from 'react'

import { GrGithub } from 'react-icons/gr'
import { FaDribbble, FaTwitter } from 'react-icons/fa'

import * as S from './styles'
import { getImageUrl } from 'utils/getImageUrl'
import { SocialLink } from 'types/api'

const icons = {
  twitter: <FaTwitter />,
  github: <GrGithub />,
  dribbble: <FaDribbble />
}

type Props = {
  name: string
  role: string
  image: string
  socialLinks: SocialLink[]
  description: string
}

const ProfileCard: React.FC<Props> = ({
  name,
  role,
  image,
  socialLinks,
  description
}) => (
  <S.Card key={name}>
    <S.Image>
      <source srcSet={getImageUrl(image)} type="image/webp" />
      <source srcSet={getImageUrl(image)} type="image/png" />
      <img src={getImageUrl(image)} loading="lazy" alt={name} />
    </S.Image>
    <S.Name>{name}</S.Name>
    <S.Role>{role}</S.Role>
    <S.SocialLinks>
      {socialLinks?.map((item) => (
        <S.Link key={item.url}>
          <a href={item.url} title={item.title}>
            {icons[item.title]}
          </a>
        </S.Link>
      ))}
    </S.SocialLinks>
    <S.Description>{description}</S.Description>
  </S.Card>
)

export default ProfileCard
