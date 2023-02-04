import { ButtonProps, Button as MuiButton, styled } from '@mui/material'

export const CustomButton = styled(MuiButton)<ButtonProps>(({ theme }) => ({
  background: theme.colors.purple.p300,
  margin: theme.spacings.inline.md,
  '&.MuiButtonBase-root:hover': {
    background: theme.colors.purple.p500,
  },
}))
