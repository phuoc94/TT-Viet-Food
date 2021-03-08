import Layout from '../components/layout'
import useTranslation from "next-translate/useTranslation"
import Contact from '../components/contact'
export default function Home() {
  const { t } = useTranslation();
  return (
    <Layout>
      <div class="jumbotron jumbotron-fluid">
        <div class="position-absolute bottom-0 overlay d-flex justify-content-center">
          <h1 class="headerText">{t('common:homeHeader').toUpperCase()}</h1>
        </div>
      </div>

      <Contact/>
      
    </Layout>
  )
}
