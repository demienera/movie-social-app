import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import Typography from '@mui/material/Typography';

export const Logo = () => {
  return (
    <Typography
      variant="h6"
      noWrap
      component="a"
      href="/"
      sx={theme => ({
        mr: 2,
        display: { xs: 'none', md: 'flex' },
        alignItems: 'center',
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: theme.palette.text.primary,
        textDecoration: 'none',
      })}
    >
      <LocalMoviesIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
      LOGO
    </Typography>
  );
};
