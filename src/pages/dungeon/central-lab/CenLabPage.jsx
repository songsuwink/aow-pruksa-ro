import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import {
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Divider,
} from '@mui/material';
import TextFieldStyled from '../../../components/TextFieldStyled';
import ButtonStyled from '../../../components/ButtonStyled';

const HeaderBoxStyled = styled(Box)(({ theme }) => ({
  '& .MuiTypography-h6': {
    fontWeight: '600',
  },
}));

const CardStyled = styled(Card)(({ theme }) => ({
  marginTop: theme.spacing(5),
  borderRadius: '16px',
  '& .MuiCardContent-root': {
    padding: '24px 48px',
  },
  '& .MuiTypography-body1': {
    fontWeight: '500',
  },
}));

const NumberDivStyled = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#fafafa',
  border: '1px solid #eeeeee',
  width: '50px',
  height: '50px',
  padding: '5px',
  textAlign: 'center',
  margin: '8px',
  borderRadius: '8px',
  fontSize: '2.4rem',
  fontWeight: '600',
}));

function CenLabPage() {
  const [decimalNumber, setDecimalNumber] = useState(0);
  const [binaryText, setBinaryText] = useState('00000000');

  const handleOnNumberChange = (e) => {
    var newValue = Number(e.target.value);
    if (isNaN(newValue) || newValue < 0) {
      // not integer or negative
      return;
    }
    if (newValue === 0) {
      // empty input
      setDecimalNumber('');
    } else {
      // positive integer
      setDecimalNumber(newValue.toFixed(0));
    }
  };

  function decimalToBinary(decimal) {
    let binary = '';
    let remainder;

    while (decimal > 0) {
      remainder = decimal % 2;
      binary = remainder + binary;
      decimal = Math.floor(decimal / 2);
    }

    return binary;
  }

  const generateDecimalNumber = (decimal) => {
    let binaryString = decimalToBinary(decimal);
    const loops = 8 - binaryString.length;

    for (let i = 0; i < loops; i++) {
      binaryString = '0' + binaryString;
    }

    setBinaryText(binaryString);
  };

  const handleOnConvert = () => {
    if (decimalNumber > 0) {
      generateDecimalNumber(decimalNumber);
    }
  };

  useEffect(() => {
    const today = new Date();
    const date = today.getDate();
    const month = today.getMonth() + 1;

    const accessNumber = (date + month) * 5;
    setDecimalNumber(accessNumber);
    generateDecimalNumber(accessNumber);
  }, []);

  return (
    <div>
      <HeaderBoxStyled>
        <Typography variant='h6'>Central Laboratory</Typography>
      </HeaderBoxStyled>
      <Grid container justifyContent='center'>
        <Grid item xs={12} md={6} lg={6}>
          <CardStyled variant='outlined'>
            <CardContent>
              <Typography variant='body1'>ใส่ตัวเลข</Typography>
              <TextFieldStyled
                value={decimalNumber}
                onChange={handleOnNumberChange}
                type='number'
              />
              <Box sx={{ mt: 2, textAlign: 'right' }}>
                <ButtonStyled variant='contained' onClick={handleOnConvert}>
                  แปลงตัวเลข
                </ButtonStyled>
              </Box>
              <Box sx={{ mt: 8 }}>
                <Grid container spacing={4}>
                  <Grid item xs={6}>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                      <NumberDivStyled>
                        {binaryText.substring(0, 1)}
                      </NumberDivStyled>
                      <NumberDivStyled>
                        {binaryText.substring(1, 2)}
                      </NumberDivStyled>
                      <NumberDivStyled>
                        {binaryText.substring(2, 3)}
                      </NumberDivStyled>
                      <NumberDivStyled>
                        {binaryText.substring(3, 4)}
                      </NumberDivStyled>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                      <NumberDivStyled>
                        {binaryText.substring(4, 5)}
                      </NumberDivStyled>
                      <NumberDivStyled>
                        {binaryText.substring(5, 6)}
                      </NumberDivStyled>
                      <NumberDivStyled>
                        {binaryText.substring(6, 7)}
                      </NumberDivStyled>
                      <NumberDivStyled>
                        {binaryText.substring(7, 8)}
                      </NumberDivStyled>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </CardContent>
          </CardStyled>
        </Grid>
      </Grid>
    </div>
  );
}

export default CenLabPage;
