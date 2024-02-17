import React, { useState } from "react";
import { Button, Box, Stack, Typography, TextField } from "@mui/material";

const MyNewStap = () => {
  const [fotoLogotipo, setFotoLogotipo] = useState("");
  const [fotoLogotipoError, setFotoLogotipoError] = useState("");

  const [formasDePagamento, setFormasDePagamento] = useState("");
  const [formasDePagamentoError, setFormasDePagamentoError] = useState("");

  const [descricaoEmpresa, setDescricaoEmpresa] = useState("");
  const [descricaoEmpresaError, setDescricaoEmpresaError] = useState("");
  const [descricaoModalAberto, setDescricaoModalAberto] = useState(false);

  const [logisticaDeVendas, setLogisticaDeVendas] = useState("");
  const [logisticaDeVendasError, setLogisticaDeVendasError] = useState("");

  const [modalAberto, setModalAberto] = useState(false);

  const handleOpenModal = (e) => {
    e.preventDefault();
    setModalAberto(true);
  };

  const handleCloseModal = () => {
    setModalAberto(false);
  };

  const handleFormaPagamentoChange = (e) => {
    setFormasDePagamento(e.target.value);
    setModalAberto(false);
  };

  const handleOpenDescricaoModal = (e) => {
    e.preventDefault();
    setDescricaoModalAberto(true);
  };

  const handleCloseDescricaoModal = () => {
    setDescricaoModalAberto(false);
  };

  const handleDescricaoChange = (e) => {
    setDescricaoEmpresa(e.target.value);
  };

  const handleDescricaoSubmit = () => {
    if (descricaoEmpresa.length < 20) {
      setDescricaoEmpresaError("A descrição deve ter no mínimo 20 caracteres");
    } else {
      setDescricaoEmpresaError("");
      handleCloseDescricaoModal();
    }
  };

  const validarFormularioClient = () => {
    let isValid = true;

    if (logisticaDeVendas.trim() === "") {
      setLogisticaDeVendasError("Campo de logistica de vendas é obrigatório");
      isValid = false;
    } else {
      setLogisticaDeVendasError("");
    }

    if (descricaoEmpresa.trim() === "") {
      setDescricaoEmpresaError("Campo Descrição da Empresa é obrigatório");
      isValid = false;
    } else {
      setDescricaoEmpresaError("");
    }

    if (formasDePagamento.trim() === "") {
      setFormasDePagamentoError("Campo Formas de Pagamento é obrigatório");
      isValid = false;
    } else {
      setFormasDePagamentoError("");
    }

    if (fotoLogotipo.trim() === "") {
      setFotoLogotipoError("Campo Foto/Logotipo da Empresa é obrigatório");
      isValid = false;
    } else {
      setFotoLogotipoError("");
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
                borderColor: fotoLogotipoError ? "red" : null,
              }}
              type="file"
              variant="outlined"
              size="small"
              onChange={(e) => {
                const file = e.target.files[0];
                setFotoLogotipo(file);
              }}
              error={!!fotoLogotipoError}
              inputProps={{
                accept: "image/*",
              }}
            />
            <Typography
              sx={{ fontSize: "1.3rem", color: "red" }}
              className="error"
            >
              {fotoLogotipoError}
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
                marginBottom: "1.5rem",
                display: "flex",
                textAlign: "center",
                fontSize: "1.6rem",
                borderColor: logisticaDeVendasError ? "red" : null,
              }}
              type="text"
              label="Logística de Vendas"
              variant="outlined"
              size="small"
              value={logisticaDeVendas}
              onChange={(e) => setLogisticaDeVendas(e.target.value)}
              error={!!logisticaDeVendasError}
            />

            <Typography
              sx={{ fontSize: "1.3rem", color: "red" }}
              id="celularErro"
              className="error"
            >
              {logisticaDeVendasError}
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
                borderColor: formasDePagamentoError ? "red" : null,
              }}
              type="text"
              label="Formas de Pagamento Aceitas"
              variant="outlined"
              size="small"
              value={formasDePagamento}
              onFocus={handleOpenModal}
              onChange={(e) => setFormasDePagamento(e.target.value)}
              error={!!formasDePagamentoError}
            />
            <Typography
              sx={{ fontSize: "1.3rem", color: "red" }}
              id="enderecoError"
              className="error"
            >
              {formasDePagamentoError}
            </Typography>
          </Box>

          {modalAberto && (
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "300px",
                height: "300px",
                borderRadius: "8px",
                backgroundColor: "#fff",
                boxShadow: "1px 2px 11px 4px rgb(14 55 54 / 60%)",
                padding: "20px",
                zIndex: "1000",
                "@media (max-width: 750px)": {
                  width: "97%",
                },
              }}
            >
              <select id="formaPagamento" onChange={handleFormaPagamentoChange}>
                <option value="">Forma de Pagamento</option>
                <option value="pix">Pix</option>
                <option value="Cartão de Crédito">Cartão de crédito</option>
                <option value="Cartão de Débito">Cartão de Débito</option>
                <option value="Pagamento Na Entrega">
                  Pagamento na Entrega
                </option>
              </select>
              <Typography id="formaPagamentoError" className="error">
                {formasDePagamentoError}
              </Typography>
            </Box>
          )}

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
                fontSize: "1.6rem",
                borderColor: descricaoEmpresaError ? "red" : null,
              }}
              type="text"
              label="Descrição da Empresa"
              variant="outlined"
              size="small"
              value={descricaoEmpresa}
              onClick={handleOpenDescricaoModal}
              error={!!descricaoEmpresaError}
            />
            <Typography
              sx={{ fontSize: "1.3rem", color: "red" }}
              id="enderecoError"
              className="error"
            >
              {descricaoEmpresaError}
            </Typography>
          </Box>
        </Box>

        {descricaoModalAberto && (
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "650px",
              height: "300px",
              borderRadius: "8px",
              backgroundColor: "#fff",
              boxShadow: "1px 2px 11px 4px rgb(14 55 54 / 60%)",
              padding: "20px",
              zIndex: "1000",
              "@media (max-width: 750px)": {
                width: "97%",
              },
            }}
          >
            <textarea
              value={descricaoEmpresa}
              onChange={handleDescricaoChange}
              rows={5}
              cols={30}
              placeholder="Digite uma descrição (mínimo 20 caracteres)"
              sx={{
                marginBottom: "10px",
                resize: "none",
                height: "240px",
              }}
            />
            <Box
              sx={{
                display: "flex",
                gap: "10px",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
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
                onClick={handleDescricaoSubmit}
              >
                Salvar
              </Button>
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
                onClick={handleCloseDescricaoModal}
              >
                Cancelar
              </Button>
            </Box>
          </Box>
        )}

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

export default MyNewStap;
