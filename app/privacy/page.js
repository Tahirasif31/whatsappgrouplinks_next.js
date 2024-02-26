import styles from "./Privacy.module.css";

function Privacy() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Privacy Policy</h1>
      <p className={styles.text}>
        At whatsappconnect.online, we are committed to protecting your privacy
        and ensuring the security of your personal information. This Privacy
        Policy outlines the types of information we collect, how we use it, and
        how we safeguard your information when you use our website.
      </p>
      <h2 className={styles.secTitle}>Information We Collect:</h2>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <p className={styles.text}>
            <b className={styles.bold}> Personal Information:</b> We may collect
            personal information such as your name, email address, and any other
            information voluntarily provided by you when submitting or accessing
            WhatsApp group links on our website.
          </p>
        </li>
        <li className={styles.listItem}>
          <p className={styles.text}>
            <b className={styles.bold}> Usage Information:</b> We may collect
            non-personal information about your visit to our website, including
            your IP address, browser type, operating system, and the pages you
            viewed. This information helps us analyze user behavior and improve
            the functionality of our website.
          </p>
        </li>
      </ul>
      <h2 className={styles.secTitle}>How We Use Your Information:</h2>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <p className={styles.text}>
            <b className={styles.bold}>WhatsApp Group Links:</b> The primary
            purpose of collecting your personal information is to facilitate the
            submission and sharing of WhatsApp group links on our platform. Your
            information may be displayed publicly on our website in connection
            with the submitted group links.
          </p>
        </li>
        <li className={styles.listItem}>
          <p className={styles.text}>
            <b className={styles.bold}>Communication:</b> We may use your email
            address to communicate with you regarding your submissions, provide
            updates about our services, respond to inquiries, or send
            promotional materials related to our website
          </p>
        </li>
      </ul>
      <h2 className={styles.secTitle}>Information Sharing:</h2>
      <p className={styles.text}>
        We do not sell, trade, or otherwise transfer your personal information
        to outside parties without your consent. However, we may share your
        information with trusted third parties who assist us in operating our
        website, conducting our business, or servicing you, provided that those
        parties agree to keep this information confidential.
      </p>
      <h2 className={styles.secTitle}>Data Security:</h2>
      <p className={styles.text}>
        We implement appropriate security measures to protect your personal
        information against unauthorized access, alteration, disclosure, or
        destruction. These measures include encryption, secure socket layer
        (SSL) technology, and regular security assessments of our website.
      </p>
      <h2 className={styles.secTitle}>Disclaimer:</h2>
      <p className={styles.text}>
        whatsappconnect.online serves as a platform for users to submit and
        access WhatsApp group links. We do not own or control the content of
        these groups, nor are we responsible for the actions or activities of
        group members. Users are solely responsible for the content they submit
        and any interactions or consequences that may arise from joining or
        participating in WhatsApp groups accessed through our platform.
      </p>
      <h2 className={styles.secTitle}>Changes to This Privacy Policy:</h2>
      <p className={styles.text}>
        We reserve the right to update or change our Privacy Policy at any time.
        Any changes will be posted on this page, and the effective date will be
        updated accordingly.
        <br />
        By using our website, you consent to our Privacy Policy and Disclaimer.
        <br />
        If you have any questions or concerns about our Privacy Policy or
        practices, please contact us at Tahirasif31@gmail.com
        <br />
        <br />
        www.whatsappconnects.online
        <br />
        Tahirasif31@gmail.com
        <br />
        Date: 26/02/2024
      </p>
    </main>
  );
}
export default Privacy;
