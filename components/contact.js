import Link from 'next/link';
import useTranslation from "next-translate/useTranslation"

export default function Contact() {
    const { t } = useTranslation();
    return (
        <>
            <div class="container mb-4">
                <div class="row">
                    <h1 class="h1-responsive font-weight-bold text-center my-5 red ">{t('common:contactus')}</h1>

                    <div class="col-md-9">
                        <form>
                            <div class="mb-3">
                                <div class="row">
                                    <div class="col-md-6">
                                        <label for="name" class="form-label">{t('common:name')}</label>
                                        <input type="text" class="form-control" id="name" />
                                    </div>
                                    <div class="col-md-6">
                                        <label for="Email" class="form-label">{t('common:email')}</label>
                                        <input type="email" class="form-control" id="Email" />
                                    </div>
                                </div>
                            </div>

                            <div class="mb-3">
                                <label for="subject" class="form-label">{t('common:subject')}</label>
                                <input type="text" class="form-control" id="subject" />
                            </div>
                            <div class="mb-3">
                                <label for="message" class="form-label">{t('common:message')}</label>
                                <textarea class="form-control" id="message" rows="3"></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary">{t('common:submit')}</button>
                        </form>
                    </div>
                    <div class="col-md-3 text-center my-4">
                        <ul class="list-unstyled mb-0">
                            <li>
                                <i class="fas fa-map-marker-alt fa-2x blue-text"></i>
                                <p>Kuninkaanväylä 33, 21280 Raisio</p>
                            </li>
                            <li>
                                <i class="fas fa-phone fa-2x mt-4 blue-text"></i>
                                <p>+358 41 4746 795</p>
                            </li>
                            <li>
                                <i class="fas fa-envelope fa-2x mt-4 blue-text"></i>
                                <p class="mb-0"><Link href="mailto:ttvietfood@gmail.com"><a>ttvietfood@gmail.com</a></Link></p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <iframe
                class="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1964.723458664283!2d22.227699516296468!3d60.49929188208342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468c75fd42c038b5%3A0xc1a51cf81369b64f!2sKuninkaanv%C3%A4yl%C3%A4%2033%2C%2021280%20Raisio!5e0!3m2!1sen!2sfi!4v1615209123722!5m2!1sen!2sfi"
                allowFullScreen loading="lazy"
            />


            <h1 class="h1-responsive font-weight-bold text-center my-5 red ">{t('common:openingHours')}</h1>
            <div class="opening-hours">
                <p>{t('common:monday')}: 09:00-18:00</p>
                <p>{t('common:tuesday')}: 09:00-14:00</p>
                <p>{t('common:wednesday')}: 09:00-14:00</p>
                <p>{t('common:thursday')}: 09:00-14:00</p>
                <p>{t('common:friday')}: 09:00-18:00</p>
                <p>{t('common:saturday')}: 09:00-18:00</p>
                <p>{t('common:sunday')}: {t('common:closed')}</p>
            </div>

        </>
    )
}