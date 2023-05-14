import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { cardVariant, parentVariant } from './motion'
import products from './products/'
import ProductCard from './NFTCard'
import ProductModal from './NFTModal'
import { Box, Flex, Center, Spacer, SimpleGrid, Text, Link, Heading, Collapse, useDisclosure, IconButton, UnorderedList, ListItem } from '@chakra-ui/react'
import Head from 'next/head'
import NextLink from 'next/link'
import styles from '@styles/MintButton.module.css'
import { TbArrowBigDownLines, TbArrowBigUpLines } from 'react-icons/tb'
// import TaurosDAOIcon from '@components/TaurosDAOIcon'

const MotionSimpleGrid = motion(SimpleGrid)
const MotionBox = motion(Box)
const MotionIconButton = motion(IconButton)

export default function RenderNFTCards() { 
  const [modalData, setModalData] = useState(null)
  const { isOpen, onToggle } = useDisclosure()

  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false
});

const buttonVariants = {
  initial: {
    scale: 1
  },
  whileInView: {
    scale: [1.5, 1],
    transition: {repeat: Infinity, type: "spring", duration: 2}
  },
  hover: {
    color: "#008080"
  },
  tap: {
    scale: 2
  }
}

  return (
    <Box>
        <Box pt={20} pb={20} align="center">
          <MotionSimpleGrid
            mt="4"
            minChildWidth="250px"
            spacing="4em"
            minH="full"
            variants={parentVariant}
            animate={inView ? "animate" : "initial"}
            ref={ref}
          >
            {products.map((product, i) => (
              <MotionBox variants={cardVariant} key={i}>
                <ProductCard product={product} setModalData={setModalData} />
              </MotionBox>
            ))}
            </MotionSimpleGrid>
            <ProductModal
              isOpen={modalData ? true : false}
              onClose={() => setModalData(null)}
              modalData={modalData}
            />
        </Box>
    </Box>
  );
}
