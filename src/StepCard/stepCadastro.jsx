import React, { useState } from "react";
import './styles/myModal.css';
import { Container, Button, Box, Stack, TextField } from "@mui/material";

const StepCards = () => {
  const [fields, setFields] = useState([
    { name: "nome", label: "Nome da Empresa", value: "", error: "" },
    { name: "email", label: "E-mail da empresa", value: "", error: "" },
    { name: "senha", label: "senha", value: "", error: "" },
    { name: "telefone", label: "Telefone", value: "", error: "" },
  ]);
  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (fieldName, value) => {
    setFields(
      fields.map((field) =>
        field.name === fieldName ? { ...field, value } : field
      )
    );
  };

  const validateForm = () => {
    const errors = {};
  
    if (!fields.some(field => field.name === "nome" && field.value.trim() !== "")) {
      errors["nome"] = "O campo nome da empresa é obrigatório.";
    }
    
    if (!fields.some(field => field.name === "email" && field.value.trim() !== "")) {
      errors["email"] = "O campo e-mail da empresa é obrigatório.";
    } else if (!isValidEmail(fields.find(field => field.name === "email").value)) {
      errors["email"] = "Por favor, insira um e-mail válido.";
    }
  
    if (!fields.some(field => field.name === "senha" && field.value.trim() !== "")) {
      errors["senha"] = "O campo senha é obrigatório.";
    } else if (fields.find(field => field.name === "senha").value.length < 8) {
      errors["senha"] = "A senha deve ter pelo menos 8 caracteres.";
    }
  
    if (!fields.some(field => field.name === "telefone" && field.value.trim() !== "")) {
      errors["telefone"] = "O campo telefone é obrigatório.";
    } else if (!isValidPhone(fields.find(field => field.name === "telefone").value)) {
      errors["telefone"] = "Por favor, insira um número de telefone válido.";
    }
  
    setFormErrors(errors);
  
    // Retornar verdadeiro se não houver erros
    return Object.keys(errors).length === 0;
  };
  
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

  
    const isValidPhone = (phoneNumber) => {
      // Remover caracteres não numéricos
      const cleanedPhoneNumber = phoneNumber.replace(/\D/g, '');
  
      // Verificar se o número possui o formato correto (11 dígitos para celular ou 10 dígitos para telefone fixo)
      const isMobile = /^(\d{11})$/.test(cleanedPhoneNumber);
      const isLandline = /^(\d{10})$/.test(cleanedPhoneNumber);
  
      return isMobile || isLandline;
  };
  
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      // Enviar formulário
    }
  };

  return (
    <Container sx={{ width: '100%' }}>
      <Stack sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
      }}>
        <Box 
        sx={{
          width: '459px',
          display:'flex',
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
          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            {fields.map((field, index) => (
              <Box key={index} sx={{
                width: '100%',
                display:'flex',
                justifyContent: 'center',
                alignItems: 'center',
                
              }}>
                <TextField sx={{
                  width: '100%',
                  marginBottom: '1.5rem',
                  display:'flex',
                  textAlign: 'center',
                  
                  fontSize: '2.6rem !important', 
                }}
                  label={field.label}
                 
                  value={field.value}
                
                  onChange={(e) => handleInputChange(field.name, e.target.value)}
                  error={!!formErrors[field.name]}
                  helperText={formErrors[field.name]}
                
                />
              </Box>
            ))}
            <Box className="d-grid gap-2" sx={{ width: '100%' }}>
              <Button  type="submit"
              sx={{
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
              }}
              
              >Cadastrar</Button>
            </Box>
          </form>
        </Box>
      </Stack>
    </Container>
  );
};

export default StepCards;
