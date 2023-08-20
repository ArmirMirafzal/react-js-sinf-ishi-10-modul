import { Box, Title } from '@mantine/core'

import { Navbar } from 'components'

const Home = () => (
  <>
    <Navbar />
    <Box className="container" pt={10}>
      <Title>Chess Game</Title>
    </Box>
  </>
)

export default Home
