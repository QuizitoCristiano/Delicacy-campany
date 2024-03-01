import React, { useState, useEffect, useRef } from "react";
import { TextField, Typography, Stack, Box, Button } from "@mui/material";
import { IconButton } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import SportsMotorsportsIcon from "@mui/icons-material/SportsMotorsports";
import CloseIcon from "@mui/icons-material/Close";

import MotoBoyIgm from "../image/Quizito.jpeg";
import Quizito from "../image/quizito5.jpeg";
import temotio from "../image/temotio.jpeg";

const MyCardCampanyArray = [
  {
    id: 1,
    nomeDoMotBoy: {
      nome: "Jonathan ",
      img: MotoBoyIgm,
    },
    nomeroDoPedido: "#030C1A",
    nomeDoUser: "Quizito Cristiano ",
    endereco: "Rua Curupis 123",
    motoboy: " Acompanha o motoboy",
  },
  {
    id: 1,
    nomeDoMotBoy: {
      nome: "Nathan ",
      img: Quizito,
    },
    nomeroDoPedido: "#D9S2842",
    nomeDoUser: "Ana Leonardo.G ",
    endereco: "Rua Seminário 107",
    motoboy: " Acompanha o motoboy",
  },
  {
    id: 1,
    nomeDoMotBoy: {
      nome: "Temótio ",
      img: temotio,
    },
    nomeroDoPedido: "#00391A",
    nomeDoUser: "Damarys de souza ",
    endereco: "Rua São Felisberto 426",
    motoboy: " Acompanha o motoboy",
  },

  {
    id: 1,
    nomeDoMotBoy: {
      nome: "Temótio ",
      img: temotio,
    },
    nomeroDoPedido: "#00391A",
    nomeDoUser: "Damarys de souza ",
    endereco: "Rua São Felisberto 426",
    motoboy: " Acompanha o motoboy",
  },
];

const MyCardCampany = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [icon, setIcon] = useState(<HighlightOffIcon />);
  const [filterBoxOpen, setFilterBoxOpen] = useState(false); // Estado para controlar a visibilidade do filtro
  const [filtroSelecionado, setFiltroSelecionado] = useState(""); // Estado para armazenar o valor selecionado
  const modalRef = useRef(); // Ref para o elemento do modal

  const [showScrollbar, setShowScrollbar] = useState(false);
  const [newScrollbar, setNewScrollbar] = useState(false);

  const handleMouseEnter = () => {
    setShowScrollbar(true);
  };

  const handleMouseLeave = () => {
    setShowScrollbar(false);
  };

  const handleNewMouseEnter = () => {
    setNewScrollbar(true);
  };

  const handleNewMouseLeave = () => {
    setNewScrollbar(false);
  };

  useEffect(() => {
    if (isLoading) {
      setIcon(<SportsMotorsportsIcon />);
      const interval = setInterval(() => {
        setLoadingProgress((prevProgress) =>
          prevProgress >= 100 ? 100 : prevProgress + 1
        );
      }, 50);

      setTimeout(() => {
        clearInterval(interval);
        setIsLoading(false);
        setIcon(<HighlightOffIcon />);
      }, 5000);
    }
  }, [isLoading]);

  const handleClick = () => {
    setIsLoading(true);
    setLoadingProgress(0);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setFilterBoxOpen(false); // Fecha o modal se o clique ocorrer fora dele
      }
    };

    // Adiciona um event listener para capturar cliques fora do modal
    document.addEventListener("mousedown", handleClickOutside);

    // Remove o event listener quando o componente é desmontado
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleFilterClick = () => {
    setFilterBoxOpen(!filterBoxOpen); // Alterna a visibilidade do filtro
  };

  const handleFormaPagamentoChange = (event) => {
    const valorSelecionado = event.target.value;
    setFiltroSelecionado(valorSelecionado); // Atualiza o estado com o valor selecionado
  };

  const handleCloseModal = () => {
    setFilterBoxOpen(false); // Fecha o modal
  };

  return (
    <Stack
      sx={{
        display: "flex",
        position: "relative",
        justifyContent: "start",
        alignItems: "start",
        bgcolor: "#fff",
        flexDirection: "row",
        gap: "10px",
        width: "100%",
        height: "100vh",
        padding: "130px 3% 20px",
      }}
    >
      <Stack
        sx={{
          paddingBottom: "1.8rem",
          position: "relative",
          color: "var(--green-color)",
          bgcolor: "#f5f5f5",

          fontSize: "2rem",
          borderRadius: "5px 5px 0 0",
          gap: "0.9rem",
          width: "40%",
          height: "100vh",
        }}
      >
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            color: "ActiveCaption",
            height: "auto",
            gap: "0.9rem",
            boxShadow: "1px 2px 11px 4px rgb(14 55 54 /40%)",

            width: "100%",
            "@media screen and (max-width:790px)": {
              flexDirection: "column",
              width: "100%",
            },
          }}
        >
          <Box>
            <TextField
              sx={{
                width: "100%",
                fontSize: "1.3rem",
              }}
              type="text"
              id="pesquisar"
              placeholder="pesquisar"
              variant="outlined"
              size="small"
            />
          </Box>

          <Box>
            <TextField
              sx={{
                width: "100%",
                fontSize: "1.3rem",
              }}
              type="text"
              id="filter"
              placeholder="Filtro"
              variant="outlined"
              size="small"
              value={filtroSelecionado}
              onClick={handleFilterClick}
            />
          </Box>
        </Stack>

        {filterBoxOpen && (
          <Box
            ref={modalRef}
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
            <CloseIcon
              onClick={handleCloseModal}
              sx={{
                position: "absolute",
                top: "10px",
                right: "10px",
                color: "var(--light-orange-color)",
                cursor: "pointer",
              }}
            />

            <select id="filtroDaEntrega" onChange={handleFormaPagamentoChange}>
              <option value="">Estado do pedido</option>
              <option value="pedido em preparo">pedido em preparo</option>
              <option value="aguardando o entregador">
                aguardando o entregador
              </option>
              <option value="Pedido sai da loja">Pedido sai da loja</option>
              <option value="Aceitar o pedido">Aceitar o pedido</option>
              <option value="O pedido está pronto">O pedido está pronto</option>
              <option value="Pedido Concluído">Pedido Concluído</option>
            </select>
          </Box>
        )}

        <Stack
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "center",
            position: "relative",
            color: "ActiveCaption",
           
            gap: "0.9rem",
            width: "100%",
            height: " 50%",

            overflowY: newScrollbar ? "auto" : "hidden",
          }}
          onMouseEnter={handleNewMouseEnter}
          onMouseLeave={handleNewMouseLeave}
        >
          <Typography
            sx={{
              fontSize: "1.2rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              boxShadow: "1px 2px 11px 4px rgb(14 55 54 /40%)",

              fontWeight: "bold",
              color: "var(--green-color)",
              width: "100%",
              textAlign: "center",
            }}
          >
            Em antamendo
          </Typography>
          {MyCardCampanyArray.map((item, index) => (
            <Stack
              key={index}
              sx={{
                paddingBottom: "1.8rem",

                padding: "0.5rem",
                position: "relative",
                fontSize: "1.8rem",
                gap: "0.9rem",
                borderRadius: "10px",
                height: "190px",
                color: "var(--green-color)",
                // bgcolor: "#b9b6b9",
                boxShadow: "1px 2px 11px 4px rgb(14 55 54 / 35%)",
                cursor: "pointer",
                width: "100%",
                ":hover": {
                  border: "2px solid rgba(0, 0, 0.9)",
                  boxShadow: "1px 2px 11px 4px rgb(14 55 54 / 50%)",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "10px",
                  width: "100%",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "1rem",
                    fontWeight: "800",
                    color: "var(--light-orange-color)",
                  }}
                >
                  {item.nomeDoMotBoy.nome}
                </Typography>
                <img
                  src={item.nomeDoMotBoy.img}
                  style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                />
              </Box>

              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",

                  height: "20px",
                  alignItems: "center",
                  gap: "0.9rem",
                  width: "100%",
                  "@media screen and (max-width:790px)": {
                    flexDirection: "column",
                    width: "100%",
                  },
                }}
              >
                <Box
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "10px",
                    borderRadius: "10px",
                    backgroundColor: "#f0f0f0",
                  }}
                >
                  <Box
                    style={{
                      position: "absolute",
                      width: `${loadingProgress}%`,
                      height: "100%",
                      borderRadius: "10px",
                      backgroundColor: "var(--light-orange-color)",
                      transition: "width 0.1s ease",
                    }}
                  />
                  <IconButton
                    sx={{
                      position: "absolute",
                      top: "0",
                      right: "0px",
                      color: "var(--light-orange-color)",

                      cursor: "pointer",
                    }}
                    onClick={handleClick}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <CircularProgress size={24} />
                    ) : loadingProgress === 100 ? (
                      <CheckCircleIcon />
                    ) : (
                      icon
                    )}
                  </IconButton>
                </Box>
              </Stack>

              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  gap: "1.3rem",
                  justifyContent: "start",
                  alignItems: "flex-end",
                  flexDirection: "row",
                  color: "black",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: "var(--green-color)",
                  }}
                >
                  {item.nomeroDoPedido}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "800",
                  }}
                >
                  {item.endereco}
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  gap: "1.3rem",
                  justifyContent: "start",
                  alignItems: "flex-end",
                  flexDirection: "row",
                  color: "black",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "800",
                  }}
                >
                  Nome: {item.nomeDoUser}
                </Typography>
              </Box>
            </Stack>
          ))}
        </Stack>

        <Stack
          sx={{
            display: "flex",
            flexDirection: "column",
            borderTop: "10px solid #616364",
            borderRadius: "10px",
            justifyContent: "start",
            alignItems: "center",
            position: "relative",
            color: "ActiveCaption",
           
            gap: "0.9rem",
            width: "100%",
            height: " 45%",
            overflowY: showScrollbar ? "auto" : "hidden",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Typography
            sx={{
              fontSize: "1.2rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              boxShadow: "1px 2px 11px 4px rgb(14 55 54 /40%)",

              fontWeight: "bold",
              color: "var(--light-orange-color)",
              width: "100%",
              textAlign: "center",
            }}
          >
            Entregas concluídos
          </Typography>

          {MyCardCampanyArray.map((item, index) => (
            <Stack
              key={index}
              sx={{
                paddingBottom: "1.8rem",

                padding: "0.5rem",
                position: "relative",
                fontSize: "1.8rem",
                gap: "0.9rem",
                borderRadius: "10px",
                height: "190px",
                color: "var(--green-color)",
                // bgcolor: "#b9b6b9",
                boxShadow: "1px 2px 11px 4px rgb(14 55 54 / 35%)",
                cursor: "pointer",
                width: "100%",
                ":hover": {
                  border: "2px solid rgba(0, 0, 0.9)",
                  boxShadow: "1px 2px 11px 4px rgb(14 55 54 / 50%)",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "10px",
                  width: "100%",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "1rem",
                    fontWeight: "800",
                    color: "var(--light-orange-color)",
                  }}
                >
                  {item.nomeDoMotBoy.nome}
                </Typography>
                <img
                  src={item.nomeDoMotBoy.img}
                  style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                />
              </Box>

              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",

                  height: "20px",
                  alignItems: "center",
                  gap: "0.9rem",
                  width: "100%",
                  "@media screen and (max-width:790px)": {
                    flexDirection: "column",
                    width: "100%",
                  },
                }}
              >
                <Box
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "10px",
                    borderRadius: "10px",
                    backgroundColor: "#f0f0f0",
                  }}
                >
                  <Box
                    style={{
                      position: "absolute",
                      width: `${loadingProgress}%`,
                      height: "100%",
                      borderRadius: "10px",
                      backgroundColor: "var(--light-orange-color)",
                      transition: "width 0.1s ease",
                    }}
                  />
                  <IconButton
                    sx={{
                      position: "absolute",
                      top: "0",
                      right: "0px",
                      color: "var(--light-orange-color)",

                      cursor: "pointer",
                    }}
                    onClick={handleClick}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <CircularProgress size={24} />
                    ) : loadingProgress === 100 ? (
                      <CheckCircleIcon />
                    ) : (
                      icon
                    )}
                  </IconButton>
                </Box>
              </Stack>

              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  gap: "1.3rem",
                  justifyContent: "start",
                  alignItems: "flex-end",
                  flexDirection: "row",
                  color: "black",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: "var(--green-color)",
                  }}
                >
                  {item.nomeroDoPedido}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "800",
                  }}
                >
                  {item.endereco}
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  gap: "1.3rem",
                  justifyContent: "start",
                  alignItems: "flex-end",
                  flexDirection: "row",
                  color: "black",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "800",
                  }}
                >
                  Nome: {item.nomeDoUser}
                </Typography>
              </Box>
            </Stack>
          ))}
        </Stack>
      </Stack>

      <Box
        sx={{
          width: "60%",
          height: "100vh",
          gap: "2.6rem",
          display: "flex",

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
            padding: "5px",
            gap: "0.9rem",
            width: "100%",
            height: "100%",
          }}
        >
          <Box
            sx={{
              bgcolor: "#ebebeb",
              fontSize: "1.8rem",
              borderRadius: "5px",
              boxShadow: "1px 2px 11px 4px rgb(14 55 54 / 35%)",
              width: "100%",
            }}
          >
            <h4>Bedido do Cliente</h4>
          </Box>

          <Stack
            sx={{
              display: "flex",
              
              borderRadius: "5px",
              position: "relative",
              flexDirection: "column",
              gap: "1.3rem",
              justifyContent: "start",

              alignItems: "center",
              width: "100%",
              height: "100%",
              boxShadow: "1px 2px 11px 4px rgb(14 55 54 / 25%)",
            }}
          >
            <Box
              sx={{
                paddingBottom: "1.8rem",
                color: "var(--text-color)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                boxShadow: "1px 2px 11px 4px rgb(14 55 54 / 15%)",
                fontSize: "1.8rem",
                borderRadius: "5px",
                padding: "5px",
                width: "100%",
                height: "auto",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "700",
                  color: "var(--text-color)",
                }}
              >
                Nome Do Motoboy: Jonathan felipe
              </Typography>
              <img
                src={MotoBoyIgm}
                style={{ width: "40px", height: "40px", borderRadius: "50%" }}
              />
            </Box>

            <Box
              sx={{
                paddingBottom: "1.8rem",
                color: "var(--text-color)",
                display: "flex",
                justifyContent: "start",
                flexDirection: "column",
                alignItems: "start",
                fontSize: "1.8rem",
                padding: "5px",
                width: "100%",
                borderRadius: "15px",
                height: "369px",
                overflowY: "auto",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "700",
                  color: "var(--text-color)",
                }}
              >
                Dados do Cliente: Arlesia Fernando.A
              </Typography>

              <Typography
                sx={{
                  fontWeight: "700",
                  color: "var(--text-color)",
                }}
              >
                <h2>Combo de alimentos </h2>
                <Typography>1x. Banana</Typography>
                <Typography>3x. Uva</Typography>
                <Typography>1x. Manga</Typography>
                <Typography>1X. Melancia</Typography>
                <Typography>1x. Banana</Typography>
                <Typography>3x. Uva</Typography>
                <Typography>1x. Manga</Typography>
              </Typography>
            </Box>

            <Box
              sx={{
                color: "var(--text-color)",
                display: "flex",
                justifyContent: "start",
                position: "absolute",
                flexDirection: "column",
                alignItems: "start",
                boxShadow: "1px 2px 11px 4px rgb(14 55 54 / 15%)",
                fontSize: "1.8rem",
                padding: "5px",
                width: "100%",
                height: "auto",
                bottom: "0px",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "700",
                  color: "var(--text-color)",
                }}
              >
                <h2>Dados para entrega </h2>
                <Typography>Cidede de: Curitiba PR</Typography>
                <Typography>Rua Princesa Isabel, 459 - Rio Verde</Typography>
              </Typography>
            </Box>
          </Stack>
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
        >
          Adiantar o Preparo
        </Button>
      </Box>
    </Stack>
  );
};

export default MyCardCampany;
