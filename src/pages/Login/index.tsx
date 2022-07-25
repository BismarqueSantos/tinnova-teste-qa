import React from "react";

import { Button } from "components";
import { useAuth } from "contexts/Auth";

const PageLogin = () => {
  const { handleLogin } = useAuth();
  return (
    <>
      oi
      <Button label="Entrar" onClick={handleLogin} />
      <br />
    </>
  );
};

export default PageLogin;
