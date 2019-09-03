import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Ops!</h1>
    <p>You're looking for something that probably no longer exists.</p>
  </Layout>
)

export default NotFoundPage
