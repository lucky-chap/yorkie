import Demo from '@/components/Demo';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main meta={<Meta title="Yorkie" description="" />}>
      <main className="font-alt">
        <section className="max-w-3xl text-center mx-auto mt-8">
          <h3 className="font-bold text-6xl leading-[4rem]">
            Create beautiful and delightful tickets!
          </h3>
          <Demo />
        </section>
      </main>
    </Main>
  );
};

export default Index;
