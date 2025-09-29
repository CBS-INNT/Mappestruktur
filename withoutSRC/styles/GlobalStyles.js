// Farver og simple design tokens
const Colors = {
  primary: '#4F46E5',
  onPrimary: '#FFFFFF',
  background: '#F7F7FB',
  surface: '#FFFFFF',
  textPrimary: '#111827',
  textSecondary: '#6B7280',
  border: '#E5E7EB'
};

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32
};

export const Typography = {
  h1: { fontSize: 28, fontWeight: '700' },
  h2: { fontSize: 22, fontWeight: '700' },
  body: { fontSize: 16, color: Colors.textSecondary },
  button: { fontSize: 16, fontWeight: '600' }
};

export const Radius = {
  sm: 6,
  md: 10,
  lg: 14
};

export default Colors;
