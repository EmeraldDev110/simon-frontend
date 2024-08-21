import { Button } from '@mui/material';

export default function StakeButton() {
  return (
    <Button
      variant="contained"
      sx={{
        background: 'linear-gradient(90deg, #fca5f1 0%, #b5ffff 100%)',
        borderRadius: '12px',
        color: '#fff',
        fontWeight: 'bold',
        textTransform: 'none',
        width: '80px',
      }}
    >
      Stake
    </Button>
  );
}
