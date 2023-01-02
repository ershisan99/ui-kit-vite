import { ButtonHTMLAttributes, FC } from 'react'

import clsx from 'clsx'
import styled, { css } from 'styled-components'

import s from './styles.module.scss'

type DefaultButtonProps = ButtonHTMLAttributes<HTMLButtonElement>
export type ButtonVariant = 'primary' | 'secondary' | 'outlined'
interface ButtonProps extends DefaultButtonProps {
  variant?: ButtonVariant
}

export const Button: FC<ButtonProps> = ({ variant = 'primary', className, ...rest }) => {
  const classes = clsx(s[variant], className)

  return <button className={classes} {...rest} />
}

const StyledButton = styled.button<{ variant: ButtonVariant }>`
  //all: unset;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 9px 28px 8px;
  border-radius: 30px;
  font-size: 16px;
  line-height: 19px;

  ${({ variant, theme }) => {
    const { boxShadow, backgroundColor, color, border, fontWeight } =
      theme.components.button[variant]

    return css`
      box-shadow: ${boxShadow.default};
      background-color: ${backgroundColor.default};
      color: ${color.default};
      border: ${border.default};
      font-weight: ${fontWeight.default};
      font-family: ${theme.typography.fontFamily};

      &:hover,
      &:focus {
        box-shadow: ${boxShadow.hover};
        background-color: ${backgroundColor.hover};
        color: ${color.hover};
        border: ${border.hover};
        font-weight: ${fontWeight.hover};
      }
      &:active {
        box-shadow: ${boxShadow.active};
        background-color: ${backgroundColor.active};
        color: ${color.active};
        border: ${border.active};
        font-weight: ${fontWeight.active};
      }
    `
  }}
`
