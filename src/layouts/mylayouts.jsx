import { Box, Stack } from "@mui/system";
import { MyHeader } from "../Header/Header";
import { Face2, Highlight, Home } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";

export const MainLayout = ({ children }) => {
  const location = useLocation();
  const links = [
    {
      label: "Home",
      link: "/",
      icon: <Home />,
    },
    {
      label: "Pedidos",
      link: "/Pedidos",
      icon: <Highlight />,
    },
    {
      label: "Produtos",
      link: "/Produtos",
      icon: <Face2 />,
    },
  ];
  return (
    <Stack
      sx={{
        width: "100vw",
        height: "auto",
        bgcolor: "grey	",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
  
       
        flexDirection: "row",
      }}
    >
      <MyHeader />
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-end",
          flexDirection: "column",
          height: "90vh",
          width: "20vw",
          gap: "0.9rem",
          backgroundColor: "var(--bg-color)",
        }}
      >
        {links.map((link, i) => {
          return (
            <Link
              to={link.link}
              style={{
                width: "76%",
                height: "50px",
                mt: i === 0 ? "3rem" : "0px",
                marginRight: "16px",
                textDecoration: "none",
                ":hover": {
                  background: "var(--light-orange-color)",
                },
              }}
              key={i}
            >
              <Stack
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  flexDirection: "row",
                  width: "100%",
                  height: "50px",
                  boxSizing: "border-box",
                  paddingInline: "10px",
                  gap: "1rem",
                  color: "black",
                  borderl: (location.pathname === link.link) && '3px solid orange'
                }}
              >
                {link.label}
                {link.icon}
              </Stack>
            </Link>
          );
        })}
      </Box>
      <Stack
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "100vh",
          width: "80vw",
        }}
      >
        <Box>{children}</Box>
      </Stack>
    </Stack>
  );
};
