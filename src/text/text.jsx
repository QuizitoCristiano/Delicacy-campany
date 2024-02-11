import React, { useState } from "react";
import { TextField, Button, Container, Typography, Stack, Box } from "@mui/material";
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { InputAdornment, IconButton } from "@mui/material";
const CadastrarEmpresa = () => {
  const [fields, setFields] = useState([
    { name: "nome", label: "Nome", value: "", error: "" },
    { name: "email", label: "Email", value: "", error: "" },
    { name: "senha", label: "Senha", value: "", error: "" },
    { name: "confirmarSenha", label: "Confirmar Senha", value: "", error: "" }
  ]);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (fieldName, value) => {
    setFields(fields.map(field => 
      field.name === fieldName ? { ...field, value } : field
    ));
  };

  const togglePasswordVisibility = (fieldName) => {
    if (fieldName === "senha") {
      setShowPassword(!showPassword);
    } else if (fieldName === "confirmarSenha") {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  const validateForm = () => {
    const errors = {};

    if (fields.some(field => field.name === "nome" && (field.value.trim() === "" || field.value.split(" ").length < 2))) {
      errors["nome"] = "Por favor, digite seu nome completo.";
    }

    if (fields.some(field => field.name === "senha" && field.value.length < 6)) {
      errors["senha"] = "A senha deve ter pelo menos 6 caracteres.";
    }

    if (fields.some(field => field.name === "confirmarSenha" && field.value !== fields.find(item => item.name === "senha").value)) {
      errors["confirmarSenha"] = "As senhas não coincidem.";
    }

    if (fields.some(field => field.name === "email" && (field.value.trim() === "" || !isValidEmail(field.value)))) {
      errors["email"] = "Por favor, digite um e-mail válido.";
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      // Enviar formulário
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <Container sx={{
    }} maxWidth="sm">
      <Stack sx={{
         padding: '10px',
         boxShadow: '1px 2px 11px 4px rgb(14 55 54 / 25%)',
         borderRadius: '0.5rem',
         gap: '0.9rem',
         width: '100% !important'
      }
      }>
        <Typography variant="h4"  
        sx={{
          display: 'flex',
          fontWeight:'700',
          
          justifyContent: 'center',
          alignItems: 'center',
          color: 'var(--green-color)'
        }}>
          Cadastro de Empresa
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box sx={{
           width: '100%',
           display: 'grid',
           gridTemplateColumns: 'repeat(2, 1fr)',
           
           gap: '6px',
           '@media (max-width: 800px)': {
             width: '100%', // Adicionei esta linha para garantir que a largura seja 100% em telas menores
             gridTemplateColumns: 'repeat(1, 1fr)',
             gap: '0px',
             // background: '#c0eb7b', // Removi esta linha porque ela estava comentada e não é usada
           }
          }}>
            {fields.map((field, index) => (
              <div key={index}>
                <TextField sx={{width: '100%'}}
                  label={field.label}
                  type={field.name === "senha" ? (showPassword ? 'text' : 'password') : (field.name === "confirmarSenha" ? (showConfirmPassword ? 'text' : 'password') : 'text')}
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={field.value}
                  onChange={(e) => handleInputChange(field.name, e.target.value)}
                  error={!!formErrors[field.name]}
                  helperText={formErrors[field.name]}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={() => togglePasswordVisibility(field.name)} edge="end">
                          {field.name === "senha" ? (showPassword ? <Visibility /> : <VisibilityOff />) : (field.name === "confirmarSenha" ? (showConfirmPassword ? <Visibility /> : <VisibilityOff />) : '')}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
            ))}
          </Box>
          <Stack  sx={{
              marginBottom: '1rem',
              marginTop: '1rem',
              display: 'flex',
              fontSize: '1.5rem',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
              color: '#ff7e00'
            }}>
            <Button   type="submit"
              sx={{
                backgroundColor: 'var(--green-color)',
                color: 'white',
                border: 'none',
                padding: '10px 15px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                borderRadius: '5px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',

                '&:hover': {
                  backgroundColor: 'var(--orange-color)',
                },
              }}>
              Cadastrar
            </Button>
          </Stack>
        </form>
      </Stack>
    </Container>
  );
};

export default CadastrarEmpresa;
