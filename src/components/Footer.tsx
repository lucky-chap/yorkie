import Image from 'next/image';
import React from 'react';

export default function Footer() {
  return (
    <footer className="flex justify-between items-center font-alt h-10 mt-auto">
      <h1 className="font-bold text-base">
        <a href="https://quavo.vercel.app" target="_blank" rel="noreferrer">
          Quavo
        </a>
      </h1>
      <p>
        <a
          href="https://townhall.hashnode.com/aws-amplify-hackathon"
          target="_blank"
          rel="noreferrer"
        >
          #Hashnode_AWS_AMPLIFY_Hackathon
        </a>
      </p>
      <a
        href="https://github.com/lucky-chap/yorkie"
        target="_blank"
        rel="noreferrer"
      >
        <button className="font-semibold text-sm flex items-center">
          <span className="inline-block mr-2">Code</span>{' '}
          <Image
            src="/assets/images/github.svg"
            width={30}
            height={30}
            alt="Source Code"
          />
        </button>
      </a>
    </footer>
  );
}
