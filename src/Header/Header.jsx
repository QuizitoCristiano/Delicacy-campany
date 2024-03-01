import React, { useRef, useState } from "react";
import { Link, useNavigate, useLocation  } from "react-router-dom";
import "./header.css";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Stack, Typography } from "@mui/material";


const myLink = [
    {
        label: 'Home',
        link: '/',


    },

    {
        label: 'Cadastro',
        link: '/cadastro',
    },

    {
        label: 'QuemSomos',
        link: '/quem_Somos',
    },

    {
        label: 'Contato',
        link: '/contato',
    },

]



export const MyHeader = () => {

    const location = useLocation();
    console.log(location);
  const [abreMeno, setAbreMeno] = useState(false);

  const abrirMenu = () => {
    setAbreMeno(true);
  };

  const fecharMenu = () => {
    setAbreMeno(false);
  };

  return (
    <>
      <Stack
        sx={{
          background: "#b3d6e4",
          fontFamily: '"Almarai","Helvetica","Arial",sans-serif',
          width: "100%",
          height: "80px",
          position: " fe",
          padding:' 20px 50px',
          top: "0",
          left: " 0",
          right: "0",
          flexDirection: "row",
          display: "flex",
          background: "var(--bg-color)",
          boxShadow: " 0 8px 11px rgb(14 55 54 / 15%)",
          transition: " 0.5s",
          alignItems: "center",
          justifyContent: " space-between",
          zIndex: "1000",
        }}
      >
        <Stack
          sx={{
            background: "red",
          }}
        >
          <p>Logo My Fite</p>
        </Stack>

        <Stack className="myNaveLink">
            
          <div className="logo-links">
           {
            myLink.map((item, index) => {
                const isLink = item.link === location.pathname
              return (
                <Link style={{
                    color: isLink ? '#fff' : 'black',
                    borderRadius: '5px',
                    padding: isLink && '4px',
                    boxShadow: isLink && ' rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px',

                    transition: 'all .3s',
                    background: isLink && '#3cb815' 
                    
                }} to={item.link} key={index}>
                  <p>{item.label}</p>
                </Link>
              );
            })
           }
            
          </div>
          <div className="logo-icons">
            <span onClick={abrirMenu}>
              {abreMeno ? <CloseIcon /> : <DehazeIcon />}
            </span>
          </div>

          {abreMeno && (
            <div className="menu-celular">
              <div className="icone-fechar">
                <span onClick={fecharMenu}>
                  Fechar
                  <CloseIcon />
                </span>
              </div>
              <div className="itens-menu-celular">
                <p>Home</p>
                <p>Compras</p>
                <p>Quem Somos</p>
                <p>Contato</p>
              </div>
            </div>
          )}
        </Stack>
      </Stack>
    </>
  );
};
