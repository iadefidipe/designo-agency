import React from "react"
import {
  ErrorPageContainer,
  PageContent,
  PageCta,
} from "../styles/page-style/404.style"
import Cta from "../comps/Cta"
import Link from "next/link"

const Error = () => {
  return (
    <ErrorPageContainer>
      <PageContent>
        <h1>404</h1>
        <h2>PAGE NOT FOUND!</h2>
        <p>
          Go back to the{" "}
          <span>
            <Link href='/'>Homepage</Link>
          </span>
        </p>
      </PageContent>

      <PageCta>
        <Cta />
      </PageCta>
    </ErrorPageContainer>
  )
}

export default Error
