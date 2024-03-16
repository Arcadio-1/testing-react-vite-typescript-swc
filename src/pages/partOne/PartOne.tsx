import { Suspense, useState } from "react";
import { ConfigProvider, theme } from "antd";
import { Container } from "../../components/ui/Container";
import { BackBtn } from "../../components/ui/BackBtn";
import { StepsStatus } from "../../components/partOne/ui/StepsStatus";
import { lazy } from "react";
import Loading from "../../components/partOne/ui/Loading";
import { Helmet } from "react-helmet-async";

const StepOne = lazy(() => import("../../components/partOne/forms/stepOne"));
const Steptwo = lazy(() => import("../../components/partOne/forms/steptwo"));
const Result = lazy(() => import("../../components/partOne/result"));

const PartOne = () => {
  const [stepOneData, setStepOneData] = useState<{
    name: string;
    countryCode: string;
    phone: string;
    dateRange: string[];
  } | null>(null);

  const [stepTwoData, setStepTwoData] = useState<
    | {
        color: string;
        number: number;
        date: string;
      }[]
    | []
  >([]);
  const [step, setStep] = useState<0 | 1 | 2>(0);
  const resetHandler = () => {
    setStep(0);
    setStepOneData(null);
    setStepTwoData([]);
  };

  return (
    <div className="">
      <Helmet>
        <title>Part One</title>
        <link rel="icon" type="image/svg+xml" href="/fish.svg" />
        <meta name="description" content="first part of task one" />
      </Helmet>
      <BackBtn to={"/"} />
      <Container className="max-w-lg">
        <ConfigProvider
          theme={{
            algorithm: theme.darkAlgorithm,
          }}
        >
          <StepsStatus step={step} />
          {step === 0 && (
            <Suspense fallback={<Loading />}>
              <StepOne setStep={setStep} setStepOneData={setStepOneData} />
            </Suspense>
          )}
          {step === 1 && stepOneData && (
            <Suspense fallback={<Loading />}>
              <Steptwo
                setStep={setStep}
                stepOneData={stepOneData}
                setStepTwoData={setStepTwoData}
              />
            </Suspense>
          )}
          {step === 2 && stepTwoData.length && (
            <Suspense fallback={<Loading />}>
              <Result resetHandler={resetHandler} stepTwoData={stepTwoData} />
            </Suspense>
          )}
        </ConfigProvider>
      </Container>
    </div>
  );
};

export default PartOne;
