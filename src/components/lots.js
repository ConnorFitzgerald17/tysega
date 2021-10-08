import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { StaticImage, GatsbyImage } from 'gatsby-plugin-image'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const SlideShow = () => {
  const pageQuery = useStaticQuery(graphql`
    query {
      slideShow: allFile(
        filter: { relativeDirectory: { eq: "lats" } }
        sort: { order: ASC, fields: base }
      ) {
        edges {
          node {
            id
            base
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
  `)
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <Slider {...settings}>
      {pageQuery.slideShow.edges.map(({ node }) => (
        <GatsbyImage
          key={node.id}
          image={node.childImageSharp.gatsbyImageData}
          alt={node.base}
        />
      ))}
    </Slider>
  )
}

export default SlideShow
