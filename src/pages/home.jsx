import React, {useState } from 'react'
import './styles/homeStyles.css'
import { TextField, Typography, Stack, Box } from '@mui/material'
import RegisterCompany from '../cadastroEmpresa/cadastro'



export const HomeCompany = () => {

  return (
    <>
      <Stack
        sx={{
          minHeight: '100vh',
          width: '100%',
          gap: '2rem',
          bgcolor: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'colunm',


          '@media only screen and (max-width: 800px)': {
            width: '100%',
            marginTop: '4rem',
            position: 'relative',
          },
        }}
      >


        <RegisterCompany/>

        <Stack>
          <button
            className="logoutButton"
          >
            Sair
          </button>
        </Stack>

      </Stack>
    </>
  )
}
