import "./styles/myModal.css";
import { Button, Box, Stack, TextField } from "@mui/material";

export const StepCards = (props) => {
  const { controlStep, setControlStep } = props;
  const {
    name,
    nameError,
    email,
    emailError,
    password,
    passwordError,
    telefone,
    telefoneError,
  } = controlStep;

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPhone = (phoneNumber) => {
    // Remover caracteres não numéricos
    const cleanedPhoneNumber = phoneNumber.replace(/\D/g, "");

    // Verificar se o número possui o formato correto (11 dígitos para celular ou 10 dígitos para telefone fixo)
    const isMobile = /^(\d{11})$/.test(cleanedPhoneNumber);
    const isLandline = /^(\d{10})$/.test(cleanedPhoneNumber);

    return isMobile || isLandline;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Enviar formulário
    }
  };

  const validateForm = () => {
    let isValid = true;
    if (!name.trim()) {
      setControlStep((prevState) => ({
        ...prevState,
        nameError: "O campo nome da empresa é obrigatório.",
      }));
      isValid = false;
    } else {
      setControlStep((prevState) => ({ ...prevState, nameError: "" }));
    }

    if (!email.trim()) {
      setControlStep((prevState) => ({
        ...prevState,
        emailError: "O campo e-mail da empresa é obrigatório.",
      }));
      isValid = false;
    } else if (!isValidEmail(email)) {
      setControlStep((prevState) => ({
        ...prevState,
        emailError: "Por favor, insira um e-mail válido.",
      }));
      isValid = false;
    } else {
      setControlStep((prevState) => ({ ...prevState, emailError: "" }));
    }

    if (!password.trim()) {
      setControlStep((prevState) => ({
        ...prevState,
        passwordError: "O campo senha é obrigatório.",
      }));
      isValid = false;
    } else if (password.length < 8) {
      setControlStep((prevState) => ({
        ...prevState,
        passwordError: "A senha deve ter pelo menos 8 caracteres.",
      }));
      isValid = false;
    } else {
      setControlStep((prevState) => ({ ...prevState, passwordError: "" }));
    }

    if (!telefone.trim()) {
      setControlStep((prevState) => ({
        ...prevState,
        telefoneError: "O campo telefone é obrigatório.",
      }));
      isValid = false;
    } else if (!isValidPhone(telefone)) {
      setControlStep((prevState) => ({
        ...prevState,
        telefoneError: "Por favor, insira um número de telefone válido.",
      }));
      isValid = false;
    } else {
      setControlStep((prevState) => ({ ...prevState, telefoneError: "" }));
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

        <Stack
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
              sx={{ width: "100%" }}
              type="text"
              label="Nome da Empresa"
              variant="outlined"
              size="small"
              value={name}
              onChange={(e) =>
                setControlStep((prevState) => ({
                  ...prevState,
                  name: e.target.value,
                }))
              }
              error={!!nameError}
              helperText={nameError}
            />
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
              sx={{ width: "100%" }}
              type="text"
              label="E-mail da empresa"
              variant="outlined"
              size="small"
              value={email}
              onChange={(e) =>
                setControlStep((prevState) => ({
                  ...prevState,
                  email: e.target.value,
                }))
              }
              error={!!emailError}
              helperText={emailError}
            />
          </Box>
        </Stack>

        <Stack
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
              sx={{ width: "100%" }}
              type="password"
              label="Senha"
              variant="outlined"
              size="small"
              value={password}
              onChange={(e) =>
                setControlStep((prevState) => ({
                  ...prevState,
                  password: e.target.value,
                }))
              }
              error={!!passwordError}
              helperText={passwordError}
            />
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
              sx={{ width: "100%" }}
              type="text"
              label="Telefone"
              variant="outlined"
              size="small"
              value={telefone}
              onChange={(e) =>
                setControlStep((prevState) => ({
                  ...prevState,
                  telefone: e.target.value,
                }))
              }
              error={!!telefoneError}
              helperText={telefoneError}
            />
          </Box>
        </Stack>

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
          type="submit"
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Insira os Dados
        </Button>
      </Box>
    </Stack>
  );
};


