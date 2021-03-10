import Head from "next/head";
import Link from "next/link";
import Image from 'next/image'
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation"

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
                <meta name="Description" content="Tt viet food on vietnamilainen ruoka joka sijaitse raisiossa"></meta>
                <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
            </Head>

            <header className="container">
                <nav className="navbar">
                    <Image src="/logo.jpg" alt="logo" width="76" height="70"/>
                    <ul className="nav">
                        <li className="nav-item">
                            <Link href="/">
                                <a className="nav-link">{t('common:home').toUpperCase()}</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/menu">
                                <a className="nav-link">{t('common:menu').toUpperCase()}</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/contact">
                                <a className="nav-link">{t('common:contact').toUpperCase()}</a>
                            </Link></li>
                    </ul>
                    <ul className="nav justify-content-end">
                        {router.locales.map(locale => (
                            <li className="nav-item" key={locale}>
                                <Link href={router.asPath} locale={locale} >
                                    <a className="nav-link">{locale}</a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
            <main>{children}</main>
            <footer className="mt-5">
                <p className="d-flex justify-content-center">© {new Date().getFullYear()} by T&T Viet Food</p>
            </footer>
        </div>
    )
}