import React, { useState } from "react";
import { Container, Button, Box, Stack } from "@mui/material";

const StepCards = () => {
  const [fields, setFields] = useState([
    { name: "nome", label: "Nome da Empresa", value: "", error: "" },
    { name: "email", label: "Tipo de Produto", value: "", error: "" },
    { name: "senha", label: "Localização", value: "", error: "" },
    { name: "confirmarSenha", label: "Telefone, E-mail", value: "", error: "" },
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
  
    if (fields.some(field => field.name === "nome" && field.value.trim() === "")) {
      errors["nome"] = "Digite o nome da empresa.";
    }
        
    // Validar tipo de produto
    if (fields.some(field => field.name === "email" && field.value.trim() === "")) {
      errors["email"] = "Digite o tipo de produto da empresa.";
    }
    
    // Validar localização
    if (fields.some(field => field.name === "senha" && field.value.trim() === "")) {
      errors["senha"] = "Digite a localização da empresa.";
    }
    
    // Validar telefone e email
    if (fields.some(field => field.name === "confirmarSenha" && field.value.trim() === "")) {
      errors["confirmarSenha"] = "Digite o telefone ou e-mail da empresa.";
    }
    
    setFormErrors(errors);
    
    // Retornar verdadeiro se não houver erros
    return Object.keys(errors).length === 0;
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      // Enviar formulário
    }
  };

  return (
    <Container>
      <Stack className="justify-content-center">
        <Box xs={12} md={8} lg={6}>
          <h4 className="text-center mb-4">Cadastro de Empresa</h4>
          <Form onSubmit={handleSubmit}>
            {fields.map((field, index) => (
              <form.Group key={index} controlId={field.name}>
                <Form.Label>{field.label}</Form.Label>
                <Form.Control
                  type="text"
                  value={field.value}
                  onChange={(e) => handleInputChange(field.name, e.target.value)}
                  isInvalid={!!formErrors[field.name]}
                />
                <Form.Control.Feedback type="invalid">
                  {formErrors[field.name]}
                </Form.Control.Feedback>
              </form.Group>
            ))}
            <div className="d-grid gap-2">
              <Button variant="primary" type="submit">
                Cadastrar
              </Button>
            </div>
          </Form>
        </Box>
      </Stack>
    </Container>
  );
};

export default StepCards;
