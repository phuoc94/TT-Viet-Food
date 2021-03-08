import Head from "next/head";
import Link from "next/link";
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
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
            </Head>

            <header className="container">
                <nav className="navbar">
                    <img src="/logo.jpg" alt="logo" width="76" height="70" />
                    <ul class="nav">
                        <li class="nav-item">
                            <Link href="/">
                                <a className="nav-link">{t('common:home').toUpperCase()}</a>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link href="/menu">
                                <a className="nav-link">{t('common:menu').toUpperCase()}</a>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link href="/contact">
                                <a className="nav-link">{t('common:contact').toUpperCase()}</a>
                            </Link></li>
                    </ul>
                    <ul class="nav justify-content-end">
                        {router.locales.map(locale => (
                            <li class="nav-item">
                                <Link href={router.asPath} locale={locale} key={locale}>
                                    <a class="nav-link">{locale}</a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
            <main>{children}</main>
            <footer class="mt-5">
                <p class="d-flex justify-content-center">© {new Date().getFullYear()} by T&T Viet Food</p>
            </footer>
        </div>
    )
}