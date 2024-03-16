import { ConfigProvider, theme } from "antd";
import { CatModal } from "../../components/partThree/CatModal";
import { BaseForm } from "../../components/partThree/BaseForm";
import { useEffect, useState } from "react";
import { BackBtn } from "../../components/ui/BackBtn";
import { Container } from "../../components/ui/Container";

const PartThree = () => {
  const [state, setState] = useState(false);

  useEffect(() => {
    const preventUserToLeaveHander = (e: Event) => {
      if (state) {
        e.preventDefault();
      }
    };
    window.addEventListener("click", preventUserToLeaveHander);
    return () => {
      window.addEventListener("click", preventUserToLeaveHander);
    };
  }, [state]);

  return (
    <div>
      <button
        onClick={() => {
          setState((prev) => {
            return (prev = !prev);
          });
        }}
      >
        click
      </button>
      <BackBtn to={"/"} />
      <Container className="max-w-lg">
        <ConfigProvider
          theme={{
            algorithm: theme.darkAlgorithm,
            token: {},
          }}
        >
          <BaseForm />
          <CatModal />
        </ConfigProvider>
      </Container>
    </div>
  );
};

export default PartThree;
