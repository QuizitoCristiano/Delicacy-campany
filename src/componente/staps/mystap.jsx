import React, { useState } from "react";
import { TextField, Typography, Stack, Box, Button } from "@mui/material";

export const MyNewStap = () => {
  const [formValues, setFormValues] = useState({
    LogisticaEVenda: "",
    HorarioFuncionamento: "",
    FotoLogotipo: "",
    DescricaoEmpresa: "",
  });

  const [errors, setErrors] = useState({
    LogisticaEVenda: "",
    HorarioFuncionamento: "",
    FotoLogotipo: "",
    DescricaoEmpresa: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
    setErrors({ ...errors, [id]: "" }); // Clear error when user types
  };

  const validarFormularioClient = (e) => {
    e.preventDefault();

    let hasError = false;
    const newErrors = { ...errors };

    // Validation logic for each field
    if (formValues.LogisticaEVenda.trim() === "") {
      newErrors.LogisticaEVenda = "Este campo é obrigatório";
      hasError = true;
    }

    if (formValues.HorarioFuncionamento.trim() === "") {
      newErrors.HorarioFuncionamento = "Este campo é obrigatório";
      hasError = true;
    }

    if (formValues.FotoLogotipo.trim() === "") {
      newErrors.FotoLogotipo = "Este campo é obrigatório";
      hasError = true;
    }

    if (formValues.DescricaoEmpresa.trim() === "") {
      newErrors.DescricaoEmpresa = "Este campo é obrigatório";
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
    } else {
      // Form is valid, you can submit it or perform other actions
      console.log("Formulário válido, pode enviar os dados:", formValues);
    }
  };

  return (
    <Stack
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <Box
        sx={{
          width: '659px',
          gap: '1.6rem',
          display: 'flex',
          padding: '20px',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '1px 2px 11px 4px rgb(14 55 54 / 25%)',
          flexDirection: 'column',
          '@media (max-width: 750px)': {
            width: '100%',
          }

        }}>

        <Stack sx={{
          paddingBottom: '1.8rem',
          color: 'var(--green-color)',
          fontSize: '1.8rem',
          gap: '0.9rem',
          width: '100%'
        }}>
          <h4>Cadastro sua Empresa</h4>
        </Stack>

        <Box
          sx={{
            width: '100%',
            display: 'grid',

            gridTemplateColumns: 'repeat(2, 1fr)',
            gridGap: '10px',
            '@media (max-width: 550px)': {
              width: '100%',
              gridTemplateColumns: '1fr',
            }
          }}>
          <Box sx={{
            width: '100%',
            display: 'flex',
            gap: '1.3rem',
            justifyContent: 'center',
            alignItems: 'flex-start',
            flexDirection: 'column',

          }}>
            <TextField
              sx={{
                width: '100%',
                fontSize: '1.3rem',
                '& .MuiInput-root.Mui-error': {
                  border: '1px solid red',
                },
              }}
              type="text"
              label="Logística e Vendas"
              id="LogisticaEVenda"
              placeholder="Logística e Vendas"
              InputLabelProps={{ shrink: true }}
              variant="outlined"
              size="small"
              value={formValues.LogisticaEVenda}
              onChange={handleChange}

            />
            <Typography sx={{ fontSize: '1.3rem', color: 'red' }}

              class="error">
              {errors.LogisticaEVenda}
            </Typography>
          </Box>


          <Box>
            <TextField
              sx={{
                width: '100%',
                marginBottom: '1.5rem',
                display: 'flex',
                textAlign: 'center',
                fontSize: '1.3rem',
                '& .MuiInput-root.Mui-error': {
                  border: '1px solid red',
                },
              }}
              type="text"
              label="Horário de Funcionamento"
              id="HorarioFuncionamento"
              placeholder="Opções de Entrega/Retirada"
              InputLabelProps={{ shrink: true }}
              variant="outlined"
              size="small"
              value={formValues.HorarioFuncionamento}
              onChange={handleChange}
            />
            <Typography sx={{ fontSize: '1.3rem', color: 'red' }}
              id="celularErro" class="error">
              {errors.HorarioFuncionamento}
            </Typography>
          </Box>
        </Box>

        <Box sx={{
          width: '100%',
          display: 'grid',

          gridTemplateColumns: 'repeat(2, 1fr)',
          gridGap: '10px',
          '@media (max-width: 550px)': {
            width: '100%',
            gridTemplateColumns: '1fr',
          }
        }}>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              gap: '1.3rem',
              justifyContent: 'center',
              alignItems: 'flex-start',
              flexDirection: 'column',

            }}
          >
            <TextField
              sx={{
                width: '100%',
                fontSize: '1.3rem',
                '& .MuiInput-root.Mui-error': {
                  border: '1px solid red',
                },
              }}
              type="text"
              label="Foto/Logotipo da Empresa"
              id="FotoLogotipo"
              placeholder="Foto/Logotipo da Empresa"
              InputLabelProps={{ shrink: true }}
              variant="outlined"
              size="small"
              value={formValues.FotoLogotipo}
              onChange={handleChange}
            />
            <Typography sx={{ fontSize: '1.3rem', color: 'red' }} class="error">
              {errors.FotoLogotipo}
            </Typography>
          </Box>

          <Box
            sx={{
              width: '100%',
              display: 'flex',
              gap: '1.3rem',
              justifyContent: 'center',
              alignItems: 'flex-start',
              flexDirection: 'column',

            }}>
            <TextField
              sx={{
                width: '100%',
                fontSize: '1.3rem',
                '& .MuiInput-root.Mui-error': {
                  border: '1px solid red',
                },
              }}
              type="text"
              label="Descrição da Empresa"
              id="DescricaoEmpresa"
              placeholder="Descrição da Empresa"
              InputLabelProps={{ shrink: true }}
              variant="outlined"
              size="small"
              value={formValues.DescricaoEmpresa}
              onChange={handleChange}
            />
            <Typography sx={{ fontSize: '1.3rem', color: 'red' }}
              class="error">
              {errors.DescricaoEmpresa}
            </Typography>
          </Box>
        </Box>

        <Button onClick={validarFormularioClient} sx={{
          display: 'inline-block',
          padding: '12px 28px',
          backgroundColor: 'var(--green-color)',
          borderRadius: '5px',
          color: 'var(--bg-color)',
          fontSize: '1rem',
          letterSpacing: '1px',
          fontWeight: 600,
          transition: 'all 0.45s ease',
          border: 'none',
          outline: 'none',
          ':hover': {
            background: 'var(--light-orange-color)',
            border: 'none',
            outline: 'none',
            color: 'var(--bg-color)',
            transition: 'all 0.45s ease'
          }
        }}>
          Insira os Dados
        </Button>
      </Box>
    </Stack>
  );
};
