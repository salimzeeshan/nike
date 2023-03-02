import { Box, Text } from '@chakra-ui/react'
import React from 'react'

function ScrollGrid({img1, img2, img3, title}) {
  return (
    <Box mt={"90px"}>
        <Text mb={"20px"} fontWeight={"bold"} fontSize={"3xl"}>
          {title}
        </Text>
        <div className="grid-three">
          <img src={img1} />
          <img src={img2} />
          <img src={img3} />
        </div>
      </Box>
  )
}

export default ScrollGrid