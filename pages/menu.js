import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';

import Layout from '../components/layout';
import products from '../data/menu.json';

const menu = () => {
    const { t } = useTranslation();
    return (
        <Layout>
            <div className="container">
                <h1 className="h1-responsive font-weight-bold text-center my-5 red ">{t(`common:appetizer`)}</h1>
                <div className="row d-flex justify-content-center">
                    {products.Appetizer.map(dish => (
                        <div key={dish.name} className="col-xl-6 row my-3 ">
                            <div className="col-lg-6 justify-content-sm-center">
                                <h2>
                                    {t(`common:${dish.name}`)}
                                </h2>
                                {dish.price.map(p => (
                                    <div>
                                    <p className="price" key={p.id}>{p.name && t(`common:${p.name}`)} {p.name && p.price && <>:</>} {p.price && `${p.price.toFixed(2)} €`} {p.piece && <>/</>}{p.piece}{p.piece && t(`common:pcs`)}</p>
                                    {p.description && <p>{t(`common:${p.description}`)}</p>}
                                    </div>
                                ))}
                                { !dish.extra &&
                                    <p>
                                        {t(`common:${dish.description}`)}
                                    </p>
                                }
                            </div>
                            <div className="col-lg-6 pimage">
                                <Image src={dish.src} alt={dish.name} layout="fill" />
                            </div>

                        </div>
                                ))}
                </div>

                <h1 className="h1-responsive font-weight-bold text-center my-5 red ">{t(`common:mains`)}</h1>
                <div className="row d-flex justify-content-center">
                    
                    {products.main.map(dish => (
                        <div key={dish.name} className="col-xl-6 row my-3">
                            <div className="col-lg-6">
                                <h2>
                                    {t(`common:${dish.name}`)}
                                </h2>
                                {dish.price.map(p => (
                                    <p className="price" key={p.id}>{p.name && t(`common:${p.name}`)} {p.name && <>:</>}  {p.price.toFixed(2)}€</p>
                                ))}
                                <p>
                                    {t(`common:${dish.description}`)}
                                </p>
                            </div>
                            <div className="col-lg-6 pimage">
                                <Image src={dish.src} alt={dish.name} layout="fill" />
                            </div>

                        </div>
                                ))}
                </div>


                <h1 className="h1-responsive font-weight-bold text-center my-5 red ">{t(`common:drinks`)}</h1>
                <div className="row d-flex justify-content-center">
                    {products.drinks.map(drink => (
                        <div key={drink.name} className="col-lg-3 row my-3">
                                <Image className="mx-2" src={drink.src} alt={drink.name} layout="intrinsic" width={290} height={500}/>
                                <h2 className="h2-responsive d-flex justify-content-center my-2">
                                    {drink.name}: {drink.price.toFixed(2)}€
                                </h2>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    )
}

export default menu