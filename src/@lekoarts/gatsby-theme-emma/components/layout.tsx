import * as React from "react"
import { Global } from "@emotion/react"
import { Box, get } from "theme-ui"
import useSiteMetadata from "../hooks/use-site-metadata"
import useNavigation from "../hooks/use-navigation"
import Footer from "./footer"
import Header from "./header"
import Seo from "./seo"

type LayoutProps = { children: React.ReactNode; className?: string }

const Layout = ({ children, className = `` }: LayoutProps) => {
  const meta = useSiteMetadata()
  const nav = useNavigation()

  return (
    <React.Fragment>
      <Global
        styles={(t) => ({
          "*": {
            boxSizing: `inherit`,
          },
          html: {
            WebkitTextSizeAdjust: `100%`,
          },
          img: {
            borderStyle: `none`,
          },
          pre: {
            fontFamily: `monospace`,
            fontSize: `1em`,
          },
          "[hidden]": {
            display: `none`,
          },
          "::selection": {
            backgroundColor: get(t, `colors.text`),
            color: get(t, `colors.background`),
          },
          a: {
            transition: `all 0.3s ease-in-out`,
          },
        })}
      />
      <Seo />
      <Header meta={meta} nav={nav} />
      <Box as="main" variant="layout.main" className={className}>
        {children}
      </Box>
      <Footer />
    </React.Fragment>
  )
}

export default Layout
