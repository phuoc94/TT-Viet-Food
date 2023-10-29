import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  Nav,
  Navbar,
} from 'react-bootstrap';

export default function Layout({ children }) {
  const router = useRouter();
  const { t } = useTranslation();
  return (
    <div>
      <Head>
        <title>T&T Viet Food</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://ttvietfood.fi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="Description"
          content="Tt viet food on vietnamilainen ruoka joka sijaitse raisiossa"
        ></meta>
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossorigin="anonymous"
        />
      </Head>

      <header className="container">
        <Navbar expand="md" className="topbar">
          <Navbar.Brand href="/" className="logo">
            <Image
              src="/logo.png"
              alt="logo"
              width="220"
              height="200"
              className="dimage"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-center"
            id="basic-navbar-nav"
          >
            <Nav>
              <Nav.Link href="/">{t("common:home").toUpperCase()}</Nav.Link>
              <Nav.Link href="/menu/">
                {t("common:menu").toUpperCase()}
              </Nav.Link>
              <Nav.Link href="/contact/">
                {t("common:contact").toUpperCase()}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse
            className="justify-content-end"
            id="basic-navbar-nav"
          >
            <Nav>
              {router.locales.map((locale) => (
                <li className="nav-item" key={locale}>
                  <Link href={router.asPath} locale={locale}>
                    <a className="nav-link">{locale}</a>
                  </Link>
                </li>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
      <main>{children}</main>
      <footer className="mt-5">
        <div className="d-flex justify-content-center">
          <a href="https://www.oivahymy.fi/hae-yrityksia/#text=T%20T%20Viet%20Food">
            <Image
              src="/oiva_sinettilogo_rgb-300x300.gif"
              alt="oiva logo"
              width="150"
              height="150"
              className="dimage"
            />
          </a>
        </div>
        <p className="d-flex justify-content-center">
          © {new Date().getFullYear()} by T&T Viet Food
        </p>
      </footer>
    </div>
  );
}
