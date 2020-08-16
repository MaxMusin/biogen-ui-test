import React from 'react';

import ContainerText from '../../components/container/ContainerText'
import BodyText from '../../components/text/BodyText'
import Title from '../../components/title/MainTitle'
import TransitionPage from '../../components/transition/TransitionPage'

const ClinicalDataPage = () => (
  <TransitionPage>
    <ContainerText>
      <Title>Clinical data</Title>
      <BodyText>
        Vivamus suscipit tortor eget felis porttitor volutpat. Nulla porttitor
        accumsan tincidunt. Vestibulum ac diam sit amet quam vehicula elementum
        sed sit amet dui. Vestibulum ante ipsum primis in faucibus orci luctus et
        ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam
        vel, ullamcorper sit amet ligula. Mauris blandit aliquet elit, eget
        tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada.
        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur
        arcu erat, accumsan id imperdiet et, porttitor at sem. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Vestibulum ac diam sit amet quam
        vehicula elementum sed sit amet dui.
      </BodyText>
    </ContainerText>
  </TransitionPage>
)

export default ClinicalDataPage;
