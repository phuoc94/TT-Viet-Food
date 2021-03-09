import Layout from '../components/layout'
import useTranslation from "next-translate/useTranslation"
import Contact from '../components/contact'
export default function Home() {
  const { t } = useTranslation();
  return (
    <Layout>
      <div className="jumbotron jumbotron-fluid">
        <div className="position-absolute bottom-0 overlay d-flex justify-content-center">
          <h1 className="headerText">{t('common:homeHeader').toUpperCase()}</h1>
        </div>
      </div>

      <Contact/>
      
    </Layout>
  )
}
