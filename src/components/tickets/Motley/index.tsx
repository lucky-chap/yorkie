import React from 'react';

import styles from './motley.module.css';

export default function Motley() {
  return (
    <div className={styles.ticket}>
      <div className={styles.stub}>
        <div className={styles.top}>
          <span className={styles.admit}>Admit</span>
          <span className={styles.line}></span>
          <span className={styles.num}>
            Invitation
            <span>31415926</span>
          </span>
        </div>
        <div className={styles.number}>1</div>
        <div className={styles.invite}>Invite for you</div>
      </div>
      <div className={styles.check}>
        <div className={styles.big}>Motley</div>
        <div className={styles.number}>#1</div>
        <div className={styles.info}>
          <section>
            <div className={styles.title}>Date</div>
            <div>4/27/2016</div>
          </section>
          <section>
            <div className={styles.title}>Issued By</div>
            <div>Ampersand</div>
          </section>
          <section>
            <div className={styles.title}>Invite Number</div>
            <div>31415926</div>
          </section>
        </div>
      </div>
    </div>
  );
}
