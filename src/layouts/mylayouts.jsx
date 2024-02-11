import { Box, Stack } from "@mui/system";
import { MyHeader } from "../Header/Header";





export const MainLayout = ({ children }) => {
    return (
        <>
            <Stack sx={{ width: "100vw", height: "auto" , bgcolor: 'grey	'}}>

                <MyHeader/>
                <Box sx={{ width: "100%", mt: "0vh", height: "100vh", bgcolor: 'black', color:'blue'}}>
                    {children}
                </Box>
            
            </Stack>
        </>
    );
};





