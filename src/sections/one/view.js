'use client';

// @mui
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// components
import { useSettingsContext } from 'src/components/settings';
import { Grid, Button, Paper } from '@mui/material'
import PoolCard from 'src/components/pool-card/PoolCard';
// ----------------------------------------------------------------------

export default function OneView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Typography variant="h4"> STAKING </Typography>

      <Box
        sx={{
          mt: 5,
          width: 1,
          height: 320,
          borderRadius: 2,
          bgcolor: (theme) => alpha(theme.palette.grey[500], 0.04),
          border: (theme) => `dashed 1px ${theme.palette.divider}`,
        }}
      >
          <Grid container spacing={2}>
          <Grid item xs={4}>
            <Paper elevation={3} sx={{ backgroundColor: '#7B1FA2', color: '#fff', p: 2, textAlign: 'center', borderRadius: '12px' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                36,303,408 AIT
              </Typography>
              <Typography variant="subtitle2" sx={{ opacity: 0.8 }}>
                STAKED AIT TOKENS
              </Typography>
            </Paper>
          </Grid> 
          <Grid item xs={4}>
            <Paper elevation={3} sx={{ backgroundColor: '#E3F2FD', color: '#1E88E5', p: 2, textAlign: 'center', borderRadius: '12px' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                $3,329,640 USD
              </Typography>
              <Typography variant="subtitle2" sx={{ opacity: 0.8 }}>
                TOKEN VALUE LOCKED
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper elevation={3} sx={{ backgroundColor: '#7B1FA2', color: '#fff', p: 2, textAlign: 'center', borderRadius: '12px' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                0 AIT / $0
              </Typography>
              <Typography variant="subtitle2" sx={{ opacity: 0.8 }}>
                YOUR STAKED TOKENS
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper elevation={3} sx={{ backgroundColor: '#E3F2FD', color: '#1E88E5', p: 2, textAlign: 'center', borderRadius: '12px' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                0 AIT / $0
              </Typography>
              <Typography variant="subtitle2" sx={{ opacity: 0.8 }}>
                YOUR TOTAL REWARD
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <PoolCard />
      </Box>
      </Container>
  );
}
