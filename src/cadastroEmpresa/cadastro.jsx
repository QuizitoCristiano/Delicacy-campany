import React, { useState } from "react";
import { Typography, Stack, Box } from "@mui/material";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import StepCards from "../StepCard/stepCadastro";
import InputFields from "../componente/Inputs/InputFields";
import MyNewStep from "../componente/staps/mystap";

const steps = ["Nome da Empresa", "Tempo"];

export default function RegisterCompany() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const [controlStep, setControlStep] = useState({
    name: "",
    nameError: "",
    email: "",
    emailError: "",
    password: "",
    passwordError: "",
    telefone: "",
    telefoneError: "",
  });

  const [error, setError] = useState(true);

  const [controlSteFields, setControlSteFields] = useState({
    cnpj: "",
    cnpjError: "",
    endereco: "",
    enderecoError: "",
    horaAbertura: "",
    horaAberturaError: "",
    fechamento: "",
    funcionamentoError: "",
  });

  const [controlMyNewStep, setControlMyNewStep] = useState({
    fotoLogotipo: "",
    fotoLogotipoError: "",
    formasDePagamento: "",
    formasDePagamentoError: "",
    descricaoEmpresa: "",
    descricaoEmpresaError: "",
    logisticaDeVendas: "",
    logisticaDeVendasError: "",
  });

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    if (!controlStep.name) {
      alert("Não tem alguma coisa");
      return;
    }
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Stack
      sx={{
        width: "100%",
        padding: "110px 3% 60px",
        height: "100vh",
        display: "flex",
        alignItems: "space-between",
        justifyContent: "center",

        bgcolor: "#fff",

        position: "relative",
        "@media (max-width: 800px)": {
          padding: "110px 1% 60px",
          width: "98%",
        },
      }}
    >
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = <Typography variant="caption"></Typography>;
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === 0 && (
        <Stack
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <StepCards
            error={error}
            controlStep={controlStep}
            setControlStep={setControlStep}
          />
        </Stack>
      )}
      {activeStep === 1 && (
        <Stack
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            position: "relative",
          }}
        >
          <InputFields
            error={error}
            controlSteFields={controlSteFields}
            setControlSteFields={setControlSteFields}
          />
        </Stack>
      )}
      {activeStep === 2 && (
        <Stack
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            position: "relative",
          }}
        >
          <MyNewStep
    error={error}
    controlMyNewStep={controlMyNewStep} // Corrigir o nome da propriedade aqui
    setControlMyNewStep={setControlMyNewStep}
/>

        </Stack>
      )}
      {activeStep === steps.length ? (
        <React.Fragment>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Stack
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              position: "relative",
              gap: "2rem",
            }}
          >
            <Typography
              sx={{
                mt: 2,
                mb: 1,
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "1.2rem",
                color: "var(--green-color)",
                fontFamily: "Poppins",
              }}
            >
              {activeStep === 0 && `Primeiro Pasinho ${activeStep + 1}`}
              {activeStep === 1 &&
                `Você está indo bem, só mais um Passo ${activeStep + 1}`}
              {activeStep === 2 && `Agora você está quase lá ${activeStep + 1}`}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2, gap: 5 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{
                  display: "inline-block",
                  padding: "10px 20px",
                  background: "var(--light-orange-color)",
                  borderRadius: "5px",
                  color: "#fff",
                  fontSize: "1rem",
                  letterSpacing: "1px",
                  fontWeight: 600,
                  transition: "all 0.45s ease",
                  border: "none",
                  outline: "none",
                }}
              >
                Voltar
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
                onClick={handleNext}
              >
                {activeStep === steps.length - 1 ? "Finalizar" : "Proximo"}
              </Button>
            </Box>
          </Stack>
        </React.Fragment>
      )}
    </Stack>
  );
}
