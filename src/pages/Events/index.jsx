import React from 'react'

import Title from '../../components/title/MainTitle'
import BodyText from '../../components/text/BodyText'
import ContainerText from '../../components/container/ContainerText'
import TransitionPage from '../../components/transition/TransitionPage'

const EventsPage = () => (
  <TransitionPage>
    <ContainerText>
      <Title>Events</Title>
      <BodyText>
        Cras ultricies ligula sed magna dictum porta. Vestibulum ante ipsum primis
        in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit
        neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Praesent
        sapien massa, convallis a pellentesque nec, egestas non nisi. Proin eget
        tortor risus. Curabitur non nulla sit amet nisl tempus convallis quis ac
        lectus. Nulla quis lorem ut libero malesuada feugiat. Quisque velit nisi,
        pretium ut lacinia in, elementum id enim. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Donec rutrum congue leo eget malesuada. Nulla
        quis lorem ut libero malesuada feugiat.
      </BodyText>
    </ContainerText>
  </TransitionPage>
)

export default EventsPage
