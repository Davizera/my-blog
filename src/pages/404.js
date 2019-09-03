import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404</h1>
    <p>Ops! You're looking for <s></s>omething that probably no longer exists.</p>
  </Layout>
)

export default NotFoundPage
