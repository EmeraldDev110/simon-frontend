import { Button } from '@mui/material';

const StakeButton = ({ disabled = false, onClick }) => {
  return (
    <Button
      disabled={disabled}
      variant="contained"
      sx={{
        background: 'linear-gradient(90deg, #fca5f1 0%, #b5ffff 100%)',
        borderRadius: '12px',
        color: '#fff',
        fontWeight: 'bold',
        textTransform: 'none',
        width: '80px',
      }}
      onClick={onClick}
    >
      Stake
    </Button>
  );
};

export default StakeButton;
