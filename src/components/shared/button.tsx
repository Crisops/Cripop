import type { ButtonProps } from '@heroui/button'
import { Button as ButtonHeroui } from '@heroui/button'

const Button = (props: ButtonProps) => {
  return <ButtonHeroui {...props}>{props.children}</ButtonHeroui>
}

export default Button
