import React from "react";
import styles from "./ContactHeader.module.css";

const ContactHeader = () => {
  return (
    <div
      className={`container
     {styles.contact_section}
    `}
    >
      <h1>CONTACT US</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adip,Lorem ipsum dolor sit amet,
        consectetur adip,Lorem ipsum dolor sit amet, consectetur adip,Lorem
        ipsum dolor sit amet, consectetur adip,Lorem ipsum dolor sit amet,
        consectetur adip.
      </p>
    </div>
  );
};

export default ContactHeader;
