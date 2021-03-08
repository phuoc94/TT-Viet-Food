import { useRouter } from 'next/router'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

export default function Home() {

  const router = useRouter()

  const greeting = router.locale


  return (
      <Layout>
        <h1>home page</h1>
      </Layout>
  )
}
