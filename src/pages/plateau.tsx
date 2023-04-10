import { App } from '@/components/App'
import { Global, css } from '@emotion/react'
import { NextPage } from 'next'

const Index: NextPage = () => {
  return (
    <>
      <Global
        styles={css`
          html,
          body,
          #__next {
            width: 100%;
            height: 100%;
            margin: 0;
          }
        `}
      />
      <App />
    </>
  )
}

export default Index
