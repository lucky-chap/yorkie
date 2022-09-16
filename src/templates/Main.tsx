import type { ReactNode } from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <main className="w-full text-white flex flex-col min-h-screen bg-black cursor-default py-5 px-8 font-body antialiased">
    {props.meta}
    <Header />

    <div className="">{props.children}</div>

    <Footer />
  </main>
);

export { Main };
