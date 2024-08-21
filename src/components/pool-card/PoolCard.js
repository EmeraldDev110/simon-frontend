import { Box, Typography, Grid, Paper } from '@mui/material';
import StakeButton from 'src/components/stake-button/StakeButton';

export default function PoolCard() {
  const pools = [
    { version: '14 Days - V2', ethRewards: '3%', apr: '8%', lockTerm: '14 Days', stakedTokens: '391.6K AIT' },
    { version: '30 Days - V2', ethRewards: '7%', apr: '18%', lockTerm: '30 Days', stakedTokens: '1.4M AIT' },
    { version: '56 Days - V2', ethRewards: '90% + secret', apr: '28%', lockTerm: '56 Days', stakedTokens: '28.3M AIT' }
  ];

  return (
    <Paper elevation={3} sx={{ borderRadius: '12px', padding: '20px', backgroundColor: '#f5f7fb' }}>
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: '#7B1FA2' }}>
        Active Pools
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={2}><Typography variant="body2">POOLS</Typography></Grid>
        <Grid item xs={2}><Typography variant="body2">VERSION</Typography></Grid>
        <Grid item xs={2}><Typography variant="body2">WTAO REWARDS</Typography></Grid>
        <Grid item xs={2}><Typography variant="body2">ETH REWARDS</Typography></Grid>
        <Grid item xs={1}><Typography variant="body2">APR</Typography></Grid>
        <Grid item xs={1}><Typography variant="body2">LOCK TERM</Typography></Grid>
        <Grid item xs={2}><Typography variant="body2">STAKED TOKENS</Typography></Grid>
      </Grid>
      {pools.map((pool, index) => (
        <Grid container spacing={2} alignItems="center" key={index} sx={{ mt: 2 }}>
          <Grid item xs={2}>
            <StakeButton />
          </Grid>
          <Grid item xs={2}>
            <Typography variant="body2">{pool.version}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="body2">N/A</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="body2">{pool.ethRewards}</Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography variant="body2" sx={{ backgroundColor: '#B2DFDB', borderRadius: '12px', padding: '5px 10px', textAlign: 'center' }}>
              {pool.apr}
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography variant="body2">{pool.lockTerm}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="body2">{pool.stakedTokens}</Typography>
          </Grid>
        </Grid>
      ))}
    </Paper>
  );
}
