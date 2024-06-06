"use client";
import React, { useState } from "react";
import styles from "@/app/contact/contact.module.css"
import globalStyle from "@/app/styles/common.module.css"

import {Mulish} from "next/font/google";
const mulish = Mulish({
    subsets: ['latin'],
    display: 'swap',
    weight: ['300', '400', '500', '600', '700', '800', '900']
})

let formObj = {
  title: "",
  type: "",
  synopsis: "",
  image:  "",
};
const PostPage = () => {
  const [form, setForm] = useState(formObj);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    let name = e.target.name;
    if (name === "image") {
      setForm((form) => {
        return { ...form, image: e.target.files[0] };
      });
    } else
      setForm((form) => {
        return { ...form, [name]: e.target.value };
      });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newForm = new FormData();
    let x = form;
    console.log(x);
    for (let item in x) newForm.append(item, form[item]);

    const res = await fetch("/api/movie", {
      method: "POST",

      body: newForm,
    });
    if (res.status === 200) {
        setStatus('success');
    } else {
        setStatus('error');
    }
  };
  return (
    <div className={globalStyle.container}>
       <form className={styles.contact_form} >
            <div className={styles.input_field}>
                <label htmlFor="title" className={styles.label}>
                    Enter Movie/Series Title
                    <input type="text" name="title" id="title"
                        placeholder="Enter title here"
                           className={mulish.className}
                           value={form.title}
                           onChange={handleChange}
                           required
                    />
                </label>
            </div>
            <div className={styles.input_field}>
                <label htmlFor="image" className={styles.label}>
                    Image
                    <input  type="file" name="image" id="image"  onChange={handleChange} />
                    
                </label>
            </div>

            <div className={styles.input_field}>
                <label htmlFor="type" className={styles.label}>
                    type
                    <input type="text" name="type" id="type"
                           placeholder="Enter type here eg-Movie, series"
                           className={mulish.className}
                           value={form.type}
                           onChange={handleChange}
                           required
                         
                    />
                </label>
            </div>

            

            <div className={styles.input_field}>
                <label htmlFor="synopsis" className={styles.label}>
                    Synopsis
                    <textarea  name="synopsis" id="synopsis" rows={5}
                           placeholder="Enter synopsis"
                           className={mulish.className}
                               value={form.synopsis}
                               onChange={handleChange}
                               required
                              
                    />
                </label>
            </div>

            <div>
                {status === 'success' && <p className={styles.success_msg}>Success. Thank you! </p>}
                {status === 'error' && <p className={styles.error_msg}>There was an error submitting your message. Please try again.</p>}

                <button type="submit" className={mulish.className} onClick={handleSubmit}>Send Message</button>
            </div>
        </form>

      {/* <form id="form">

        <input type="text" name="title" value={form.name} onChange={handleChange}/>
        <input type="text" name="type" value={form.type} onChange={handleChange}/>
        <textarea rows={10} cols={10} name="synopsis" value={form.synopsis} onChange={handleChange}/>
        <input type="file" name="image"   onChange={handleChange} />
        <button onClick={handleSubmit}>submit</button>

    </form> */}
    </div>
  );
};

export default PostPage;
