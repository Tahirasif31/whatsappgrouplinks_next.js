"use client";
import { useState } from "react";
import styles from "./ContactUs.module.css";
import { supabase } from "./../supabase";
import Thanks from "../components/Thanks";

function ContactUs() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [groupName, setGroupName] = useState("");
  const [link, setLink] = useState("");
  const [desc, setDesc] = useState("");
  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [groupError, setGroupError] = useState(false);
  const [linkError, setLinkError] = useState(false);
  const [message, setMessage] = useState("");
  const [submited, setSubmited] = useState(false);

  // async function handleSubmit(e) {
  //   e.preventDefault();

  //   if (name < 5) {
  //     setMessage("Enter Correct Name");
  //     setNameError(true);
  //     return;
  //   } else if (phone < 8) {
  //     setMessage("Enter valid Phone Number");
  //     setPhoneError(true);
  //     return;
  //   } else if (groupName < 4) {
  //     setMessage("Enter valid Group Name");
  //     setGroupError(true);
  //     return;
  //   } else if (link < 8) {
  //     setMessage("Enter Group Link");
  //     setLinkError(true);
  //     return;
  //   } else {
  //     const { data, error } = await supabase
  //       .from("uploadRequest")
  //       .insert([{ name, phone, groupName, link, desc }])
  //       .select();
  //     setNameError(false);
  //     setPhoneError(false);
  //     setGroupError(false);
  //     setLinkError(false);
  //     setName("");
  //     setPhone("");
  //     setGroupName("");
  //     setLink("");
  //     setDesc("");
  //     setMessage("login succedd");
  //     setSubmited(true);
  //   }
  //   console.log(message);

  //   // console.log(data, error);
  // }
  async function handleSubmit(e) {
    e.preventDefault();

    if (name.length < 5) {
      setMessage("Enter Correct Name");
      setNameError(true);
      return;
    } else if (phone.length < 8) {
      setMessage("Enter valid Phone Number");
      setPhoneError(true);
      return;
    } else if (groupName.length < 4) {
      setMessage("Enter valid Group Name");
      setGroupError(true);
      return;
    } else if (link.length < 8) {
      setMessage("Enter Group Link");
      setLinkError(true);
      return;
    } else {
      const { data, error } = await supabase
        .from("uploadRequest")
        .insert([{ name, phone, groupName, link, desc }])
        .select();
      setNameError(false);
      setPhoneError(false);
      setGroupError(false);
      setLinkError(false);
      setName("");
      setPhone("");
      setGroupName("");
      setLink("");
      setDesc("");
      setMessage("Login succeeded"); // Fixed typo in "succedd"
      setSubmited(true);
    }
    console.log(message); // It's better to use `console.log` inside the `else` block if you want to log the updated value.
  }

  return (
    <main className={styles.contactContainer}>
      <div>
        <h2 className={styles.title}>Submit Your Groups</h2>
        <p className={styles.description}>
          Send your groups to us for submission to this site
        </p>
      </div>
      {!submited && (
        <form
          className={styles.formContainer}
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className={styles.form}>
            <div className={styles.inputContainer}>
              <label htmlFor="name" className={styles.name}>
                Name
              </label>
              <input
                id="name"
                type="text"
                className={`${styles.nameInput} ${
                  nameError ? styles.error : ""
                }`}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="phone" className={styles.name}>
                Phone
              </label>
              <input
                id="phone"
                type="text"
                className={`${styles.nameInput} ${
                  phoneError ? styles.error : ""
                }`}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="group-name" className={styles.name}>
                Group Name
              </label>
              <input
                id="group-name"
                type="text"
                className={`${styles.nameInput} ${
                  groupError ? styles.error : ""
                }`}
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
              />
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="name" className={styles.name}>
                Group Link
              </label>
              <input
                id="name"
                type="text"
                className={`${styles.nameInput} ${
                  linkError ? styles.error : ""
                }`}
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </div>
          </div>
          <div className={`${styles.inputContainer} ${styles.marginTopSmall}`}>
            <label htmlFor="desc" className={styles.name}>
              Description
            </label>
            <input
              id="desc"
              className={`${styles.nameInput} ${styles.desc}`}
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
          <button className={styles.btn}>Submit</button>
        </form>
      )}
      {submited && <Thanks />}
    </main>
  );
}
export default ContactUs;
