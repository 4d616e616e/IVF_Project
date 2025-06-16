import { CarouselContainer } from "@/components/Home/ml/CarouselContainer";
import { FormContainer } from "@/components/Home/ml/FormContainer";
import { LastContainer } from "@/components/Home/ml/LastContainer";
import { MiddleContainer } from "@/components/Home/ml/MiddleContainer";
import { RoadMapContainer } from "@/components/Home/ml/RoadMapContainer";
import { StagesContainer } from "@/components/Home/ml/StagesContainer";
import { TopContainer } from "@/components/Home/ml/TopContainer";
import { WhyIVFContainer } from "@/components/Home/ml/WhyIVFContainer";
import { Layout } from "@/components/Layout/Layout";
import Head from "next/head";
import { useReducer } from "react";

export default function Home() {
  const formRef = useReducer(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Head>
        <title>IVF Treatment at Home | India’s Trusted Fertility Expert</title>
        <meta
          name="description"
          content="Experience IVF treatment in the comfort and privacy of your home with HomeIVF. We are the first to offer expert consultations, fertility testing, and hormone injections at home."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout scrollToForm={scrollToForm}>
        <TopContainer scrollToForm={scrollToForm} />
        <FormContainer formRef={formRef} /> {/* Done */}
        <RoadMapContainer /> {/* Done */}
        <StagesContainer scrollToForm={scrollToForm} /> {/* Done */}
        <MiddleContainer scrollToForm={scrollToForm} /> {/* Done */}
        <WhyIVFContainer /> {/* Done */}
        <CarouselContainer scrollToForm={scrollToForm} /> {/* Done */}
        <LastContainer /> {/* Done */}
      </Layout>
    </>
  );
}
