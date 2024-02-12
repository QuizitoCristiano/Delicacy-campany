
import React, { useState } from "react";
import './styles/styleFilds.css';
import { TextField, Typography, Stack, Box, Button } from "@mui/material";

const InputFields = () => {
  const [tipoProduto, setTipoProduto] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [endereco, setEndereco] = useState("");
  const [funcionamento, setFuncionamento] = useState("");
  const [tipoProdutoError, setTipoProdutoError] = useState("");
  const [cnpjError, setCnpjError] = useState("");
  const [enderecoError, setEnderecoError] = useState("");
  const [funcionamentoError, setFuncionamentoError] = useState("");

  const validarFormularioClient = () => {
    let isValid = true;

    if (tipoProduto.trim() === "") {
      setTipoProdutoError("Campo tipo de Produto obrigatório");
      isValid = false;
    } else {
      setTipoProdutoError("");
    }

    if (cnpj.trim() === "") {
      setCnpjError("Campo CNPJ da empresa é obrigatório");
      isValid = false;
    } else {
      setCnpjError("");
    }

    if (endereco.trim() === "") {
      setEnderecoError("Campo Localização  da empresa é obrigatório");
      isValid = false;
    } else {
      setEnderecoError("");
    }

    if (funcionamento.trim() === "") {
      setFuncionamentoError("Indique os horários em que a empresa está aberta.");
      isValid = false;
    } else {
      setFuncionamentoError("");
    }

    return isValid;
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
          width: "659px",
          gap: "2.6rem",
          display: "flex",
          padding: "20px",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "1px 2px 11px 4px rgb(14 55 54 / 25%)",
          flexDirection: "column",
          "@media (max-width: 750px)": {
            width: "100%",
          },
        }}
      >
        <Stack
          sx={{
            paddingBottom: "1.8rem",
            color: "var(--green-color)",
            fontSize: "1.8rem",
            gap: "0.9rem",
            width: "100%",
          }}
        >
          <h4>Cadastro sua Empresa</h4>
        </Stack>

        <Box
          sx={{
            width: "100%",
            display: "grid",

            gridTemplateColumns: "repeat(2, 1fr)",
            gridGap: "10px",
            "@media (max-width: 550px)": {
              width: "100%",
              gridTemplateColumns: "1fr",
            },
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              gap: "1.3rem",
              justifyContent: "center",
              alignItems: "flex-start",
              flexDirection: "column",
            }}
          >
            <TextField
              sx={{
                width: "100%",
                fontSize: "1.3rem",
                borderColor: tipoProdutoError ? "red" : null,
              }}
              type="text"
              label="Tipo de Produto/Serviço"
              placeholder="Tipo de Produto/Serviço"
              id="nomeCompleto"
              InputLabelProps={{ shrink: true }}
              variant="outlined"
              size="small"
              value={tipoProduto}
              onChange={(e) => setTipoProduto(e.target.value)}
              error={!!tipoProdutoError}
            />
            <Typography sx={{ fontSize: "1.3rem", color: "red" }} class="error">
              {tipoProdutoError}
            </Typography>
          </Box>

          <Box>
            <TextField
              sx={{
                width: "100%",
                marginBottom: "1.5rem",
                display: "flex",
                textAlign: "center",
                fontSize: "2.6rem!important",
                borderColor: cnpjError ? "red" : null,
              }}
              type="text"
              label="CNPJ"
              id="celular"
              placeholder="Número de registro da empresa"
              InputLabelProps={{ shrink: true }}
              variant="outlined"
              size="small"
              value={cnpj}
              onChange={(e) => setCnpj(e.target.value)}
              error={!!cnpjError}
            />
            <Typography
              sx={{ fontSize: "1.3rem", color: "red" }}
              id="celularErro"
              class="error"
            >
              {cnpjError}
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "grid",

            gridTemplateColumns: "repeat(2, 1fr)",
            gridGap: "10px",
            "@media (max-width: 550px)": {
              width: "100%",
              gridTemplateColumns: "1fr",
            },
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              gap: "1.3rem",
              justifyContent: "center",
              alignItems: "flex-start",
              flexDirection: "column",
            }}
          >
            <TextField
              sx={{
                width: "100%",
                fontSize: "1.3rem",
                borderColor: enderecoError ? "red" : null,
              }}
              type="text"
              label="Endereço da empresa"
              id="Endereco"
              placeholder="Endereço da empresa"
              InputLabelProps={{ shrink: true }}
              variant="outlined"
              size="small"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
              error={!!enderecoError}
            />
            <Typography
              sx={{ fontSize: "1.3rem", color: "red" }}
              id="enderecoError"
              class="error"
            >
              {enderecoError}
            </Typography>
          </Box>

          <Box
            sx={{
              width: "100%",
              display: "flex",
              gap: "1.3rem",
              justifyContent: "center",
              alignItems: "flex-start",
              flexDirection: "column",
            }}
          >
            <TextField
              sx={{
                width: "100%",
                fontSize: "1.3rem",
                borderColor: funcionamentoError ? "red" : null,
              }}
              type="text"
              label="Horário de Funcionamento"
              id="Funcionamento"
              placeholder="Horário de Funcionamento"
              InputLabelProps={{ shrink: true }}
              variant="outlined"
              size="small"
              value={funcionamento}
              onChange={(e) => setFuncionamento(e.target.value)}
              error={!!funcionamentoError}
            />
            <Typography
              sx={{ fontSize: "1.3rem", color: "red" }}
              id="funcionamentoError"
              class="error"
            >
              {funcionamentoError}
            </Typography>
          </Box>
        </Box>

        <Button
          sx={{
            display: "inline-block",
            padding: "12px 28px",
            backgroundColor: "var(--green-color)",
            borderRadius: "5px",
            color: "var(--bg-color)",
            fontSize: "1rem",
            letterSpacing: "1px",
            fontWeight: 600,
            transition: "all 0.45s ease",
            border: "none",
            outline: "none",
            ":hover": {
              background: "var(--light-orange-color)",
              border: "none",
              outline: "none",
              color: "var(--bg-color)",
              transition: "all 0.45s ease",
            },
          }}
          onClick={(e) => {
            if (validarFormularioClient()) {
              // Se o formulário for válido, faça algo aqui
            } else {
              // Se houver erros, você pode lidar com isso aqui
            }
          }}
        >
          Insira os Dados
        </Button>
      </Box>
    </Stack>
  );
};

export default InputFields;
