import React, { useEffect } from 'react'
import ResizeObserver from 'resize-observer-polyfill'
import { Review } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

import * as S from './styles'

const ReviewCard: React.FC<Review> = ({ name, photo, text, id }) => {
  useEffect(() => {
    const texts = document.querySelectorAll('p.text')

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const isTextExpanded =
          entry.target.scrollHeight > entry.contentRect.height + 25
        entry.target.classList[isTextExpanded ? 'add' : 'remove']('truncated')
      }
    })

    texts.forEach((text) => observer.observe(text))
  })

  return (
    <S.Card>
      <S.User>
        <S.Image
          src={getImageUrl(photo.url)}
          loading="lazy"
          alt={photo.alternativeText}
        />
        <S.Name>{name}</S.Name>
      </S.User>
      <S.Text>
        <input type="checkbox" id={`review-${id}`} />
        <p className="text">{text}</p>
        <label className="label-more" htmlFor={`review-${id}`}>
          Ver tudo
        </label>
      </S.Text>
    </S.Card>
  )
}

export default ReviewCard
