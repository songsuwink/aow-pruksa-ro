import React, { Suspense } from 'react';
import { styled } from '@mui/material/styles';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { Container } from '@mui/material';

const ContainerStyled = styled(Container)({
  paddingLeft: '0px',
  paddingRight: '0px',
});

const Home = React.lazy(() => import('./pages/home/HomePage'));
const CentralLab = React.lazy(() =>
  import('./pages/dungeon/central-lab/CenLabPage')
);

function Routers() {
  return (
    <ContainerStyled maxWidth='lg'>
      <Suspense>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dungeon/central-lab' element={<CentralLab />} />
        </Routes>
      </Suspense>
    </ContainerStyled>
  );
}

export default Routers;
