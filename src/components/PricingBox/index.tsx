import React from 'react'

import Button from 'components/Button'
import { gaEvent } from 'utils/ga'

import * as S from './styles'
import { PricingBoxProps } from 'types/api'

const onClick = () =>
  gaEvent({ action: 'click', category: 'buy', label: 'pricing box button' })

type Props = {
  pricingBox: PricingBoxProps
}

const PricingBox = ({ pricingBox }: Props) => (
  <S.Box>
    <S.Prices>
      <S.FullPrice>
        De <span>{`R$${pricingBox.totalPrice}`}</span> por apenas
      </S.FullPrice>
      <S.DiscountPrice>
        <span>{`${pricingBox.numberInstallments}x de`}</span>{' '}
        {`R$${pricingBox.priceInstallment}`}
      </S.DiscountPrice>
    </S.Prices>
    <S.BenefitsList>
      {pricingBox.benefits}
      {/* <S.BenefitsItem>
        Acesso aos <strong>6 módulos</strong> assim que lançados
      </S.BenefitsItem>

      <S.BenefitsItem>
        Código de <strong>todo o projeto</strong> separado em commits
      </S.BenefitsItem>

      <S.BenefitsItem>
        Contato <strong>direto</strong> com os instrutores via Slack
      </S.BenefitsItem>

      <S.BenefitsItem>
        <strong>Lives exclusivas</strong> durante o curso
      </S.BenefitsItem> */}
    </S.BenefitsList>

    <Button href={pricingBox.button.url} onClick={onClick} withPrice>
      <p>{pricingBox.button.label}</p>
      <div>
        <S.ButtonFullPrice>{`R$${pricingBox.totalPrice}`}</S.ButtonFullPrice>
        <S.ButtonDiscountPrice>{`R$${
          pricingBox.priceInstallment * pricingBox.numberInstallments
        }`}</S.ButtonDiscountPrice>
      </div>
    </Button>
  </S.Box>
)

export default PricingBox
