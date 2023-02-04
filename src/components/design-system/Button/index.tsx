import { ButtonProps } from '@mui/material'
import { CustomButton } from './styles'

interface IButtonProps extends ButtonProps {}

export const Button = ({ children, ...props }: IButtonProps) => {
  return <CustomButton {...props}>{children}</CustomButton>
}
