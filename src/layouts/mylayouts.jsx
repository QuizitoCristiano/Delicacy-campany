import { Box, Stack } from "@mui/system";
import { MyHeader } from "../Header/Header";
import { Face2, Highlight, Home } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";



export const MainLayout = ({ children }) => {
  const location = useLocation();
  // const links = [
  //   {
  //     label: "Home",
  //     link: "/MyCardCampany",
  //     icon: <Home />,
  //   },
  //   {
  //     label: "Pedidos",
  //     link: "/Pedidos",
  //     icon: <Highlight />,
  //   },
  //   {
  //     label: "Produtos",
  //     link: "/Produtos",
  //     icon: <Face2 />,
  //   },
  // ];
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
    
      <Stack
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
      
          height: "100vh",
          width: "100vw",
         
        }}
      >
        <Box>{children}</Box>
      </Stack>
    </Stack>
  );
};
