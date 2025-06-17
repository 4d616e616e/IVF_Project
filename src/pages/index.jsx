import { CarouselContainer } from "@/components/Home/en/CarouselContainer";
import { FormContainer } from "@/components/Home/en/FormContainer";
import { HealthcareStats } from "@/components/Home/en/HealthcareStats";
import { LastContainer } from "@/components/Home/en/LastContainer";
import { MiddleContainer } from "@/components/Home/en/MiddleContainer";
import { RoadMapContainer } from "@/components/Home/en/RoadMapContainer";
import { StagesContainer } from "@/components/Home/en/StagesContainer";
import { TopContainer } from "@/components/Home/en/TopContainer";
import { WhyIVFContainer } from "@/components/Home/en/WhyIVFContainer";
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
        <HealthcareStats />
        <FormContainer formRef={formRef} />
        <RoadMapContainer />
        <StagesContainer scrollToForm={scrollToForm} />
        <MiddleContainer scrollToForm={scrollToForm} />
        <WhyIVFContainer />
        <CarouselContainer scrollToForm={scrollToForm} />
        <LastContainer />
      </Layout>
    </>
  );
}

//4d616e616e
