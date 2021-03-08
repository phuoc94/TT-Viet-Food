import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation"

export default function Layout({ children }) {
  const router = useRouter();
  const {t} = useTranslation();
  return (
    <div>
      <Head>
        <title>T&T Viet Food</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <nav>
          <Link href="/">
            <a>{t('common:home')}</a>
          </Link>
          <Link href="/menu">
            <a>{t('common:menu')}</a>
          </Link>
          <Link href="/contact">
            <a>{t('common:contact')}</a>
          </Link>

          {router.locales.map(locale => (
                <Link href={router.asPath} locale={locale}>
                    <a>{locale}</a>
                </Link>
          ))}
        </nav>
      </header>

      <main>{children}</main>

      <footer>
        <p>© 2021</p>
      </footer>
    </div>
  )
}