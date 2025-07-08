const getTypography = (theme, borderRadius, fontFamily) => ({
  fontFamily,
  h1: {
    fontSize: '2.25rem',
    fontWeight: 700,
    color: theme.palette.text.primary
  },
  h6: {
    fontSize: '1.1rem',
    fontWeight: 600,
    color: theme.palette.primary.main
  },
  subtitle1: {
    fontSize: '0.95rem',
    fontWeight: 500,
    color: theme.palette.text.secondary
  },
  body1: {
    fontSize: '0.9rem',
    color: theme.palette.text.primary
  },
  body2: {
    fontSize: '0.8rem',
    color: theme.palette.text.secondary
  },
  button: {
    textTransform: 'none',
    fontWeight: 600,
    fontSize: '0.9rem'
  },
  caption: {
    fontSize: '0.75rem',
    color: theme.palette.text.disabled
  }
});

export default getTypography;
