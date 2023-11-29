import emailjs from 'emailjs-com';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import {
  toast,
  ToastContainer,
} from 'react-nextjs-toast';

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

  return (
    <>
      <ToastContainer />
      <div className="container mb-4">
        <div className="row">
          <h1 className="h1-responsive font-weight-bold text-center my-5 red ">
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
                  <Link href="https://goo.gl/maps/z1p6JKTbX2fP4nrj6">
                    <a>Kuninkaanväylä 33, 21280 Raisio</a>
                  </Link>
                </p>
              </li>
              <li>
                <i className="fas fa-phone fa-2x mt-4 blue-text"></i>
                <p>
                  <Link href="tel:+358414746795">
                    <a>+358 41 4746 795</a>
                  </Link>
                </p>
              </li>
              <li>
                <i className="fas fa-envelope fa-2x mt-4 blue-text"></i>
                <p className="mb-0">
                  <Link href="mailto:ttvietfood@gmail.com">
                    <a>ttvietfood@gmail.com</a>
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
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1964.723458664283!2d22.227699516296468!3d60.49929188208342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468c75fd42c038b5%3A0xc1a51cf81369b64f!2sKuninkaanv%C3%A4yl%C3%A4%2033%2C%2021280%20Raisio!5e0!3m2!1sen!2sfi!4v1615209123722!5m2!1sen!2sfi"
        allowFullScreen
        loading="lazy"
      />

      <h1 className="h1-responsive font-weight-bold text-center my-5 red ">
        {t("common:openingHours")}
      </h1>
      <div className="opening-hours">
        <p>{t("common:monday")}: 10:00-18:00</p>
        <p>{t("common:tuesday")}: 10:00-18:00</p>
        <p>{t("common:wednesday")}: 10:00-18:00</p>
        <p>{t("common:thursday")}: 10:00-18:00</p>
        <p>{t("common:friday")}: 10:00-18:00</p>
        <p>
          {t("common:saturday")}: {t("common:closed")}
        </p>
        <p>
          {t("common:sunday")}: {t("common:closed")}
        </p>
      </div>
    </>
  );
}
