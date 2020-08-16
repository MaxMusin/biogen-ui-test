import React from 'react'

import Title from '../../components/title/MainTitle'
import BodyText from '../../components/text/BodyText'
import ContainerText from '../../components/container/ContainerText'
import TransitionPage from '../../components/transition/TransitionPage';

const HomePage = () => (
  <TransitionPage>
    <ContainerText>
      <Title>Home</Title>
      <BodyText>
        Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus
        magna justo, lacinia eget consectetur sed, convallis at tellus. Proin eget
        tortor risus. Donec rutrum congue leo eget malesuada. Vivamus suscipit
        tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam
        vehicula elementum sed sit amet dui. Nulla porttitor accumsan tincidunt.
        Pellentesque in ipsum id orci porta dapibus. Mauris blandit aliquet elit,
        eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget
        consectetur sed, convallis at tellus.
      </BodyText>
    </ContainerText>
  </TransitionPage>
)

export default HomePage
