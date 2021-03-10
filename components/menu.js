import Layout from '../components/layout'
import products from '../menu.json'
import useTranslation from "next-translate/useTranslation"

const menu = () => {
    const { t } = useTranslation();
    return (
        <Layout>
            <div className="container">
                <h1 className="h1-responsive font-weight-bold text-center my-5 red ">{t(`menu:appetizer`)}</h1>
                <div className="row d-flex justify-content-center">
                    {/*products.Appetizer.map(dish => (
                        <div key={dish.name} className="col-xl-6 row my-3 ">
                            <div className="col-md-6 justify-content-sm-center">
                                <h2 className="h2-responsive">
                                    {t(`menu:${dish.name}`)}
                                </h2>
                                {dish.price.map(p => (
                                    <p className="price" key={p.id}>{p.name && t(`menu:${p.name}`)} {p.name && <>:</>} {p.price.toFixed(2)}€ {p.piece && <>/</>}{p.piece}{p.piece && t(`menu:pcs`)}</p>
                                ))}
                                <p>
                                    {t(`menu:${dish.description}`)}
                                </p>
                            </div>
                            <div className="col-md-6 pimage">
                                <img src={dish.src} alt={dish.name} className="dishimage" />
                            </div>

                        </div>
                                ))*/}
                </div>

                <h1 className="h1-responsive font-weight-bold text-center my-5 red ">{t(`menu:mains`)}</h1>
                <div className="row d-flex justify-content-center">
                    
                    {/*products.main.map(dish => (
                        <div key={dish.name} className="col-md-6 row my-3">
                            <div className="col-sm-6">
                                <h2 className="h2-responsive">
                                    {t(`menu:${dish.name}`)}
                                </h2>
                                {dish.price.map(p => (
                                    <p className="price" key={p.id}>{p.name && t(`menu:${p.name}`)} {p.name && <>:</>}  {p.price.toFixed(2)}€</p>
                                ))}
                                <p>
                                    {t(`menu:${dish.description}`)}
                                </p>
                            </div>
                            <div className="col-sm-6 pimage">
                                <img src={dish.src} alt={dish.name} className="dishimage" />
                            </div>

                        </div>
                                ))*/}
                </div>


                <h1 className="h1-responsive font-weight-bold text-center my-5 red ">{t(`menu:drinks`)}</h1>
                <div className="row d-flex justify-content-center">
                    {/*products.drinks.map(drink => (
                        <div key={drink.name} className="col-md-4 row my-3">
                                <img src={drink.src} alt={drink.name} className="drinkimage" />
                                <h2 className="h2-responsive d-flex justify-content-center my-2">
                                    {drink.name}: {drink.price.toFixed(2)}€
                                </h2>

                        </div>
                    ))*/}
                </div>
            </div>
        </Layout>
    )
}

export default menu