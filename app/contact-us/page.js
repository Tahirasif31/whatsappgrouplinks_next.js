"use client";
import { useState } from "react";
import styles from "./ContactUs.module.css";
import { supabase } from "./../supabase";

function ContactUs() {
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [groupName, setGroupName] = useState();
  const [link, setLink] = useState();
  const [desc, setDesc] = useState();

  async function handleSubmit(e) {
    e.preventDefault();

    const { data, error } = await supabase
      .from("uploadRequest")
      .insert([{ name, phone, groupName, link, desc }])
      .select();

    setName("");
    setPhone("");
    setGroupName("");
    setLink("");
    setDesc("");
    console.log(data, error);
  }

  return (
    <main>
      <div>
        <h2 className={styles.title}>Submit Your Groups</h2>
        <p className={styles.description}>
          Send your groups to us for submission to this site
        </p>
      </div>
      <form className={styles.formContainer} onSubmit={(e) => handleSubmit(e)}>
        <div className={styles.form}>
          <div className={styles.inputContainer}>
            <label htmlFor="name" className={styles.name}>
              Name
            </label>
            <input
              id="name"
              type="text"
              className={styles.nameInput}
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
              className={styles.nameInput}
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
              className={styles.nameInput}
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
              className={styles.nameInput}
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
    </main>
  );
}
export default ContactUs;
