import React, { useState } from "react";
import "./styles/styleFilds.css";
import { TextField, Typography, Stack, Box, Button } from "@mui/material";

const InputFields = () => {
  const [cnpj, setCnpj] = useState("");
  const [cnpjError, setCnpjError] = useState("");

  const [endereco, setEndereco] = useState("");
  const [enderecoError, setEnderecoError] = useState("");

  const [horaAbertura, setHoraAbertura] = useState("");
  const [horaAberturaError, setHoraAberturaError] = useState("");

  const [fechamento, setFechamento] = useState("");
  const [funcionamentoError, setFuncionamentoError] = useState("");

  const validarFormularioClient = () => {
    let isValid = true;

    if (horaAbertura.trim() === "") {
      setHoraAberturaError("Campo de horário de abertura é obrigatório");
      isValid = false;
    } else {
      setHoraAberturaError("");
    }
    

    if (fechamento.trim() === "") {
      setFuncionamentoError("Campo de horário de fechamento é obrigatório");
      isValid = false;
    } else {
      setFuncionamentoError("");
    }

    if (cnpj.trim() === "") {
      setCnpjError("Campo CNPJ da empresa é obrigatório");
      isValid = false;
    } else if (!validarCnpj(cnpj.trim())) {
      setCnpjError(" Informe um CNPJ válido");
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

    return isValid;
  };


  const handleEnderecoChange = (e) => {
    const input = e.target.value;
    setEndereco(input);
    if (input.trim() === "") {
      setEnderecoError("Campo de endereço é obrigatório");
    } else if (!/\d/.test(input) && !/^\d{5}-?\d{3}$/.test(input)) {
      setEnderecoError("Por favor, inclua o número do endereço ou um CEP válido.");
    } else {
      setEnderecoError("");
    }
  };
 
  // Função para validar a entrada de hora de fechamento
  const handleFechamentoChange = (e) => {
    const input = e.target.value;
    // Verifica se o input contém apenas números e o caractere ":"
    if (/^[0-9:]*$/.test(input) || input === "") {
      setFechamento(input);
      // Verifica se a hora de fechamento é igual à hora de abertura
      if (input === horaAbertura) {
        setFuncionamentoError(
          "A hora de fechamento deve ser diferente da hora de abertura"
        );
        return;
      } else {
        setFuncionamentoError("");
      }
    } else {
      setFuncionamentoError(
        "Por favor, informe uma horário de fechamento válido"
      );
    }
  };

  // Função para validar entrada de hora de abertura
  const handleHoraAberturaChange = (e) => {
    const input = e.target.value;
    // Verifica se o input contém apenas números e o caractere ":"
    if (/^[0-9:]*$/.test(input) || input === "") {
      setHoraAbertura(input);
      setHoraAberturaError("");
    } else {
      setHoraAberturaError("Por favor, informe um horário válido");
    }
  };

  const validarCnpj = (cnpj) => {
    const cnpjRegex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;
    return cnpjRegex.test(cnpj);
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
                borderColor:
                  horaAberturaError || funcionamentoError ? "red" : null,
              }}
              type="text"
              label="Horário de Abertura"
              id="Abertura"
              placeholder="Horário de Abertura (HH:MM)"
              variant="outlined"
              size="small"
              value={horaAbertura}
              onChange={handleHoraAberturaChange}
              error={!!horaAberturaError}
            />
            <Typography sx={{ fontSize: "1.3rem", color: "red" }} className="error">
              {horaAberturaError}
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
              variant="outlined"
              size="small"
              value={cnpj}
              onChange={(e) => setCnpj(e.target.value)}
              error={!!cnpjError}
            />
            <Typography
              sx={{ fontSize: "1.3rem", color: "red" }}
              id="celularErro"
              className="error"
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
                marginBottom: "1.5rem",
                display: "flex",
                textAlign: "center",
                fontSize: "1.6rem", // Ajuste o tamanho da fonte conforme necessário
                borderColor: enderecoError ? "red" : null,
              }}
              type="text"
              label="Endereço da empresa"
              variant="outlined"
              size="small"
              value={endereco}
              onChange={handleEnderecoChange}
              error={!!enderecoError}
            />
            <Typography
              sx={{ fontSize: "1.3rem", color: "red" }}
              id="enderecoError"
              className="error"
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
                borderColor:
                  horaAberturaError || funcionamentoError ? "red" : null,
              }}
              type="text"
              label="Horário de Fechamento"
              id="Fechamento"
              placeholder="Horário de Fechamento (HH:MM)"
              variant="outlined"
              size="small"
              value={fechamento}
              onChange={handleFechamentoChange}
              error={!!funcionamentoError}
            />
            <Typography sx={{ fontSize: "1.3rem", color: "red" }} className="error">
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
