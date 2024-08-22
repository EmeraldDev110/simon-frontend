import { Typography, Grid, Paper, Box } from '@mui/material';
import StakeButton from 'src/components/stake-button';

const PoolCard = ({ onStakeButtonClick, mode = 'Active' }) => {
  const pools = [
    {
      version: '14 Days - V2',
      ethRewards: '3%',
      apr: '8%',
      lockTerm: '14 Days',
      stakedTokens: '391.6K AIT',
    },
    {
      version: '30 Days - V2',
      ethRewards: '7%',
      apr: '18%',
      lockTerm: '30 Days',
      stakedTokens: '1.4M AIT',
    },
    {
      version: '56 Days - V2',
      ethRewards: '90% + secret',
      apr: '28%',
      lockTerm: '56 Days',
      stakedTokens: '28.3M AIT',
    },
  ];

  return (
    <Paper
      elevation={3}
      sx={{
        borderRadius: '12px',
        padding: '20px',
        backgroundColor: '#f5f7fb',
        border: '1px solid #e0e0e0',
      }}
    >
      <Typography
        variant="h6"
        sx={{
          mb: 2,
          fontWeight: 'bold',
          color: '#7B1FA2',
          textTransform: 'uppercase',
        }}
      >
        {`${mode.toUpperCase()} POOLS`}
      </Typography>

      {/* Header Row */}
      <Grid container spacing={0} alignItems="center" sx={{ borderBottom: '1px solid #e0e0e0' }}>
        <Grid item xs={2} sx={{ padding: '10px', backgroundColor: '#E3F2FD', textAlign: 'center' }}>
          <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
            POOLS
          </Typography>
        </Grid>
        <Grid
          item
          xs={2.5}
          sx={{ padding: '10px', backgroundColor: '#E3F2FD', textAlign: 'center' }}
        >
          <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
            VERSION
          </Typography>
        </Grid>
        {mode === 'Active' && (
          <Grid
            item
            xs={2.5}
            sx={{ padding: '10px', backgroundColor: '#E3F2FD', textAlign: 'center' }}
          >
            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
              WTAO REWARDS
            </Typography>
          </Grid>
        )}
        <Grid
          item
          xs={mode === 'Active' ? 2 : 4.5}
          sx={{ padding: '10px', backgroundColor: '#E3F2FD', textAlign: 'center' }}
        >
          <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
            ETH REWARDS
          </Typography>
        </Grid>
        <Grid item xs={1} sx={{ padding: '10px', backgroundColor: '#E3F2FD', textAlign: 'center' }}>
          <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
            APR
          </Typography>
        </Grid>
        <Grid item xs={1} sx={{ padding: '10px', backgroundColor: '#E3F2FD', textAlign: 'center' }}>
          <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
            LOCK TERM
          </Typography>
        </Grid>
        <Grid item xs={1} sx={{ padding: '10px', backgroundColor: '#E3F2FD', textAlign: 'center' }}>
          <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
            STAKED TOKENS
          </Typography>
        </Grid>
      </Grid>

      {/* Content Rows */}
      {pools.map((pool, index) => (
        <Grid
          container
          spacing={0}
          alignItems="center"
          key={index}
          sx={{
            borderBottom: index !== pools.length - 1 ? '1px solid #e0e0e0' : 'none',
            '&:nth-of-type(odd)': {
              backgroundColor: '#fafafa',
            },
          }}
        >
          <Grid
            item
            xs={2}
            sx={{
              padding: '10px',
              textAlign: 'center',
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            <img src="/favicon/logo.png" width={56} height={24} />
            <StakeButton onClick={onStakeButtonClick} />
          </Grid>
          <Grid item xs={2.5} sx={{ padding: '10px', textAlign: 'center' }}>
            <Typography variant="body2">{pool.version}</Typography>
          </Grid>
          {mode === 'Active' && (
            <Grid item xs={2.5} sx={{ padding: '10px', textAlign: 'center' }}>
              <Typography variant="body2">N/A</Typography>
            </Grid>
          )}
          <Grid item xs={mode === 'Active' ? 2 : 4.5} sx={{ padding: '10px', textAlign: 'center' }}>
            <Typography variant="body2">{pool.ethRewards}</Typography>
          </Grid>
          <Grid item xs={1} sx={{ padding: '10px', textAlign: 'center' }}>
            <Typography
              variant="body2"
              sx={{
                backgroundColor: '#B2DFDB',
                borderRadius: '12px',
                padding: '5px 10px',
                textAlign: 'center',
                fontWeight: 'bold',
              }}
            >
              {pool.apr}
            </Typography>
          </Grid>
          <Grid item xs={1} sx={{ padding: '10px', textAlign: 'center' }}>
            <Typography variant="body2">{pool.lockTerm}</Typography>
          </Grid>
          <Grid item xs={1} sx={{ padding: '10px', textAlign: 'center' }}>
            <Typography variant="body2">{pool.stakedTokens}</Typography>
          </Grid>
        </Grid>
      ))}
    </Paper>
  );
};

export default PoolCard;
