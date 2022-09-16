import React from 'react';

export default function Gus() {
  return (
    <div className="ticket2">
      <div className="illustration">
        <div className="spikes">
          <div className="spike"></div>
          <div className="spike"></div>
          <div className="spike"></div>
          <div className="spike"></div>
          <div className="spike"></div>
          <div className="spike"></div>
          <div className="spike"></div>
          <div className="spike"></div>
          <div className="spike"></div>
        </div>
        <div className="new-label">Going Live!</div>
        <div className="new-label2">12/13/2022</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 7.42 145"
          className="spikes"
        >
          <g data-name="Layer 2">
            <path
              fill="#fbad18"
              fill-rule="evenodd"
              d="M.33 0H0v145h.33l7.09-6.59-7.09-6.59 7.09-6.59-7.09-6.59 7.09-6.59-7.09-6.6 7.09-6.59-7.09-6.59 7.09-6.59-7.09-6.59 7.09-6.59-7.09-6.59 7.09-6.59-7.09-6.59 7.09-6.59-7.09-6.59 7.09-6.6-7.09-6.59 7.09-6.59-7.09-6.59 7.09-6.59L.33 0z"
              data-name="Layer 1"
            />
          </g>
        </svg>
      </div>

      <div className="ornament">
        <div className="ornament__sharp"></div>
        <div className="ornament__cut ornament__cut--1"></div>
        <div className="ornament__cut ornament__cut--2"></div>
        <div className="ornament__tail"></div>
        <div className="content">
          <p>
            Selamat! Anda Dapat
            <br />
            Disc. 20% untuk
            <br />
            Transaksi Pertama Anda.
          </p>
          <a href="#" className="link-join">
            Bergabung Sekarang
          </a>
        </div>
      </div>
    </div>
  );
}
