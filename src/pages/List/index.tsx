import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import {AiOutlineEdit, AiOutlineDelete, AiOutlineZoomIn} from 'react-icons/ai'

import { getList, getFirstList, removePost } from 'utils/dbActions'
import { maskCPF, maskPhone } from 'utils/masks'
import { registerData } from '@types';

import { TableList, Button, ButtonAction } from 'components'
import { useList } from "contexts/List";

const PageList: React.FC = () => {
  const [data, setData] = useState<registerData[]>([] as registerData[]);
  const { isPopulated, handleOnSet } = useList();

  const history = useHistory()

  useEffect(() => {
    const data: any = getList()

    if (data.length === 0) {
      if (isPopulated === "true") {
        return
      }

      (async () => {
        const data: any = await getFirstList()
        setData(data)
      })()

      handleOnSet()
      return
    }

    setData(data)
    // eslint-disable-next-line
  }, [])

  const configTable = [
    {
      label: "Nome",
      path: 'name',
      size: 22
    },
    {
      label: "Telefone",
      path: (data) => maskPhone(data.phone),
      size: 17
    },
    {
      label: "E-mail",
      path: 'email',
      size: 23
    },
    {
      label: "CPF",
      path: (data) => maskCPF(data.cpf),
      size: 22
    },
    {
      label: "Ações",
      path: (data) => (
        <>
          <ButtonAction onClick={() => {
            history.push(`/form/view/${data.cpf}`);
          }
          }>
            <AiOutlineZoomIn/>
          </ButtonAction>
          <ButtonAction onClick={() => {
            history.push(`/form/edit/${data.cpf}`);
          }
          }>
            <AiOutlineEdit/>
          </ButtonAction>
          <ButtonAction
            onClick={() => {
              swal({
                title: "Deseja mesmo remover?",
                icon: "warning",
                dangerMode: true,
                buttons: ['Não', 'Sim']
              })
                .then((willDelete) => {
                  if (willDelete) {
                    removePost(data)
                    window.location.reload()
                  }
                });
            }
            }>
            <AiOutlineDelete/>
          </ButtonAction>
        </>
      ),
      size: 15
    },
  ]

  return (
    <>
      {data.length === 0 ?
        (
          <h3>Sem dados</h3>
        ) : (
          <TableList config={configTable} data={data || []} />
        )}

      <Button label="Adicionar" onClick={() => history.push('./form')} />
    </>
  )
}

export default PageList