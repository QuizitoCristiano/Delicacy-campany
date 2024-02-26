import * as React from "react";
import "./header.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

import LocalMallIcon from "@mui/icons-material/LocalMall";
import { TextField, Typography, Stack, Box } from "@mui/material";
import { useState } from "react";

const pages = ["Home", "Produtos", "SobreNos", "Clientes"];

export const MyHeader = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [avatarFile, setAvatarFile] = useState(null);

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    // Lógica para salvar a imagem ou atualizar o avatar no estado, por exemplo.
    console.log("Imagem selecionada:", file);
  };

  const handleSaveButtonClick = async () => {};

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#fff",
        boxShadow: "0 8px 11px rgb(14 55 54 / 25%)",
        transition: "0.5s",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box>
            <a href="" className="logo">
              <LocalMallIcon className="bx bxs-basket" />
              <i className="bx bxs-basket">Delicacy</i>
            </a>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    color: "#1a2428",
                    display: "flex",
                    fontSize: "10px",
                    alignContent: "center",
                    justifyItems: "center",
                    flexDirection: "row",
                    gap: "1.3rem",
                    fontWeight: 800,
                  }}
                >
                  <Typography
                    sx={{
                      display: "flex",
                      fontSize: "1.2rem",
                      gap: "1.3rem",
                      alignContent: "center",
                      justifyItems: "center",
                      flexDirection: "row",
                      fontWeight: 800,
                    }}
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
  {pages.map((page) => (
    <Button
      key={page}
      onClick={handleCloseNavMenu}
      className="header-button"
      sx={{
        my: 2,
        color: "#1a2428",
        display: "flex",
        border: 'none', 
        outline: 'none',
        textDecoration: 'none',
        alignContent: "center",
        justifyItems: "center",
        flexDirection: "row",
        gap: "1.3rem",
        fontWeight: 800,
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <Typography
        sx={{
          display: "flex",
          gap: "1.2rem",
          alignContent: "center",
          justifyItems: "center",
          flexDirection: "row",
          color: 'red',
          fontWeight: 800,
          fontSize: "1rem", // Alteração da fonte aqui
          textDecoration: 'transparent', // Decoração do texto transparente
        }}
      >
        {page}
      </Typography>
    </Button>
  ))}
</Box>

          <Stack
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "row",
              gap: "1.9rem",
            }}
          >
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem
                  sx={{
                    height: "200px",
                    width: "190px",
                    justifyContent: "space-around",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <label htmlFor="avatarInput">
                    <Typography textAlign="center">Adicionar imagem</Typography>
                  </label>
                  <input
                    id="avatarInput"
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleAvatarChange}
                  />

                  <Button
                    onClick={handleSaveButtonClick}
                    sx={{
                      border: "none",
                      outline: "none",
                      color: "var(--bg-color)",
                      background: "var(--green-color)",
                      padding: "8px 20px",
                      borderRadius: "8px",
                      fontSize: "16px",
                      fontWeight: "bold",
                    }}
                  >
                    Salvar
                  </Button>
                </MenuItem>
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open carinho">
                <IconButton
                  onClick={handleOpenNavMenu}
                  sx={{
                    visibility: "hidden",
                    "@media (max-width: 910px)": {
                      visibility: "visible",
                    },
                  }}
                >
                  <MenuIcon
                    sx={{
                      fontSize: "1.6rem",
                      color: "black",
                      fontWeight: "600",
                    }}
                  />
                </IconButton>
              </Tooltip>
            </Box>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
