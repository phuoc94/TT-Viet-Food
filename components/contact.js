import emailjs from 'emailjs-com';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import {
  toast,
  ToastContainer,
} from 'react-nextjs-toast';

import contactData from '../data/contactData.json';

export default function Contact() {
  const { t } = useTranslation();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        e.target,
        process.env.NEXT_PUBLIC_USER_ID
      )
      .then(
        (result) => {
          toast.notify(t("common:mailsend"), {
            duration: 10,
            type: "success",
          });
        },
        (error) => {
          toast.notify(t("common:mailerror"), {
            duration: 10,
            type: "error",
          });
        }
      );
    e.target.reset();
  }

  const displayHours = (hours) =>
    hours === "closed" ? t("common:closed") : hours;

  return (
    <>
      <ToastContainer />
      <div className="container mb-4">
        <div className="row">
          <h1 className="h1-responsive font-weight-bold text-center my-5 red">
            {t("common:contactus")}
          </h1>
          <p>
            <b>{t("common:contactusmessage")}</b>
          </p>
          <div className="col-md-9">
            <form onSubmit={sendEmail}>
              <div className="mb-3">
                <div className="row">
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label">
                      {t("common:name")}
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">
                      {t("common:email")}
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="subject" className="form-label">
                  {t("common:subject")}
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  name="subject"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  {t("common:message")}
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="3"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                {t("common:submit")}
              </button>
            </form>
          </div>
          <div className="col-md-3 text-center my-4">
            <ul className="list-unstyled mb-0">
              <li>
                <i className="fas fa-map-marker-alt fa-2x blue-text"></i>
                <p>
                  <Link href={contactData.contactInfo.address.url}>
                    <a>{contactData.contactInfo.address.text}</a>
                  </Link>
                </p>
              </li>
              <li>
                <i className="fas fa-phone fa-2x mt-4 blue-text"></i>
                <p>
                  <Link href={contactData.contactInfo.phone.url}>
                    <a>{contactData.contactInfo.phone.text}</a>
                  </Link>
                </p>
              </li>
              <li>
                <i className="fas fa-envelope fa-2x mt-4 blue-text"></i>
                <p className="mb-0">
                  <Link href={contactData.contactInfo.email.url}>
                    <a>{contactData.contactInfo.email.text}</a>
                  </Link>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <iframe
        title="google map"
        className="map"
        src={contactData.contactInfo.googleMapEmbedUrl}
        allowFullScreen
        loading="lazy"
      />

      <h1 className="h1-responsive font-weight-bold text-center my-5 red">
        {t("common:openingHours")}
      </h1>
      <div className="opening-hours">
        <p>{t("common:monday")}: {displayHours(contactData.openingHours.monday)}</p>
        <p>{t("common:tuesday")}: {displayHours(contactData.openingHours.tuesday)}</p>
        <p>{t("common:wednesday")}: {displayHours(contactData.openingHours.wednesday)}</p>
        <p>{t("common:thursday")}: {displayHours(contactData.openingHours.thursday)}</p>
        <p>{t("common:friday")}: {displayHours(contactData.openingHours.friday)}</p>
        <p>{t("common:saturday")}: {displayHours(contactData.openingHours.saturday)}</p>
        <p>{t("common:sunday")}: {displayHours(contactData.openingHours.sunday)}</p>
      </div>
    </>
  );
}
