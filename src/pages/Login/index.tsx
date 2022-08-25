import React, { useState } from "react";

import { Button } from "components";
import { useAuth } from "contexts/Auth";

const PageLogin = () => {
  const [showModalRegister, setShowModalRegister] = useState(false);
  const { handleLogin } = useAuth();

  return (
    <>
      Boa sorte, e divirta-se no processo, isso é uma experiência. aproveite ao máximo.
      <Button label="Entrar" onClick={handleLogin} />
      <Button label="Cadastrar" onClick={handleLogin} />
    </>
  );
};

export default PageLogin;

git config --global user.email "bismarquesilva25@gmail.com"
  git config --global user.name "BismarqueSantos"
