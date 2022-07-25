import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import swal from "sweetalert";

import { Button, InputText, InputCpf } from "components";
import { registerData } from "@types";
import { postInDb, getItem, updatePost } from "utils/dbActions";
import { maskCPF, maskPhone } from "utils/masks";

const PageForm: React.FC = () => {
  const initialValues = { name: "", email: "", cpf: "", phone: "" };
  const [isEdit, setIsEdit] = useState("");
  const [loading, setLoading] = useState(false);
  const [isView, setIsView] = useState(false);
  // eslint-disable-next-line
  const [error, setError] = useState("");
  const [formData, setFormData] = useState(initialValues as registerData);

  let { cpf } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (cpf) {
      (async () => {
        const data = await getItem(cpf);
        setFormData(data);
        setIsEdit(data.cpf);
      })();
    }

    setIsView(location.pathname.split("/")[2] === "view");
    // eslint-disable-next-line
  }, []);

  const emptyField = () => {
    swal({
      title: "Atenção",
      text: "Todos os campos devem ser preenchidos",
      icon: "warning",
    });

    return;
  };

  const handleOnSubmit = () => {
    Object.keys(formData).forEach((item) => {
      formData[item] !== "" ? setLoading(false) : emptyField();
    });

    if (formData.name === "") return;

    setLoading(true);

    isView! && navigate("/");

    isEdit ? updatePost(isEdit, formData) : postInDb(formData);

    setTimeout(() => {
      setFormData(initialValues);
      setLoading(false);
      navigate("/");
    }, 600);
  };

  return (
    <>
      <InputText
        label="Nome completo"
        placeholder="Digite seu nome"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setFormData({ ...formData, name: e.target.value });
        }}
        name="name"
        error={error === "name" && "todos os campos devem ser prenchidos"}
        disabled={isView}
        value={formData?.name}
      />

      <InputText
        label="E-mail"
        placeholder="Digite seu e-mail"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setFormData({ ...formData, email: e.target.value });
        }}
        name="email"
        error={error && "todos os campos devem ser prenchidos"}
        disabled={isView}
        value={formData?.email}
      />

      <InputCpf
        label="CPF"
        placeholder="Digite seu CPF"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setFormData({ ...formData, cpf: maskCPF(e.target.value) });
        }}
        maxLength={14}
        name="cpf"
        error={error && "todos os campos devem ser prenchidos"}
        disabled={isView}
        value={formData?.cpf}
      />

      <InputText
        label="Telefone"
        placeholder="Digite seu telefone"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setFormData({ ...formData, phone: maskPhone(e.target.value) });
        }}
        maxLength={15}
        name="phone"
        error={error && "todos os campos devem ser prenchidos"}
        disabled={isView}
        value={formData?.phone}
      />

      <Button
        label={isEdit ? (isView ? "VOLTAR" : "ATUALIZAR") : "GUARDAR"}
        onClick={handleOnSubmit}
        isLoading={loading}
      />
    </>
  );
};

export default PageForm;
