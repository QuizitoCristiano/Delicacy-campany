import React, { useState } from "react";
import { TextField, Typography, Stack, Box, Button } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { useAuth } from "../globalsAuthContext/index";

// Login.jsx ou App.jsx
import { PasswordRecovery } from "../recovery/recoverySenha";
import RegisterCompany from "../cadastroEmpresa/cadastro";

export const Login = () => {
  const { handleSignIn, emailError, passwordError } = useAuth();  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignIn(email, password);
  };

  return (
    <Box
      sx={{
        width: "659px",
        gap: "2.6rem",
        display: "flex",
        padding: "20px",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "1rem",
        boxShadow: "1px 2px 11px 4px rgb(14 55 54 / 25%)",
        flexDirection: "column",
        backgroundColor: "white",
        "@media (max-width: 750px)": {
          width: "96%",
        },
      }}
    >
      <Box
        sx={{
          color: "var(--orange-color)",
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          fontSize: "1.8rem",
          width: "100%",
        }}
      >
        <CloseIcon
          sx={{
            fontSize: "2rem",
            fontWeight: 800,
          }}
        />
      </Box>

      <Stack
        sx={{
          paddingBottom: "1.8rem",
          color: "var(--green-color)",
          fontSize: "1.8rem",
          gap: "0.9rem",
          width: "100%",
        }}
      >
        <h4>Para garantir a sua segurança, faça login</h4>
      </Stack>

      <Box
        sx={{
          width: "100%",
          display: "grid",

          gridTemplateColumns: "repeat(2, 1fr)",
          gridGap: "10px",
          "@media (max-width: 550px)": {
            gap: "2.2rem",
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
              borderColor: emailError ? "red" : null,
            }}
            type="text"
            label="E-mail da empresa"
            id="email"
            placeholder="Insira o e-mail da empresa"
            variant="outlined"
            size="small"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!emailError}
          />

          <Typography
            sx={{ fontSize: "1.3rem", color: "red" }}
            className="error"
          >
            {emailError}
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
              borderColor: passwordError ? "red" : null,
            }}
            type="password"
            label="Senha"
            id="password"
            variant="outlined"
            size="small"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={!!passwordError}
          />
          <Typography
            sx={{ fontSize: "1.3rem", color: "red" }}
            id="password-error"
            className="error"
          >
            {passwordError}
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
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
          onClick={handleSubmit}
        >
          Entrar
        </Button>

        {/* <Link to="/password-recovery">
          <Typography>Esqueceu sua senha?</Typography>
        </Link> */}

        <Link
          sx={{
            color: "#f75f1d",
            textDecoration: "none",
            cursor: "pointer",
            ":hover": {
              color: "var(--light-orange-color)",
              textDecoration: "none",
            },
          }}
          to="/cadastroEmpresa/cadastro"
        >
          <Typography
            sx={{
              color: " #f75f1d",
              fontWeight: "600",
              fontSize: "1.3rem",
            }}
          >
            Cadastrar-se
          </Typography>
        </Link>

        <Link to="MyCardCampany">bt</Link>
      </Box>
    </Box>
  );
};
