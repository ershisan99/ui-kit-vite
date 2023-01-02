import { ButtonVariant } from '../../../components/button'
import { palette } from '../../palette'

type ButtonProps = 'backgroundColor' | 'color' | 'border' | 'boxShadow' | 'fontWeight'

type ButtonStates = 'default' | 'hover' | 'active'
export const createButtonStyles = (
  isDarkTheme: boolean
): Readonly<{
  [key in ButtonVariant]: {
    [key in ButtonProps]: {
      [key in ButtonStates]: string
    }
  }
}> => {
  return {
    primary: {
      backgroundColor: {
        default: palette.accent['0'],
        hover: '#FF3769',
        active: '#CC1D49',
      },
      color: {
        default: 'white',
        hover: 'white',
        active: 'white',
      },
      border: {
        default: 'none',
        hover: 'none',
        active: 'none',
      },
      boxShadow: {
        default: '0 4px 18px rgba(245, 26, 81, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
        hover: '0 4px 18px rgba(255, 55, 105, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
        active: '0 4px 18px rgba(204, 29, 73, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
      },
      fontWeight: {
        default: '600',
        hover: '600',
        active: '600',
      },
    },
    secondary: {
      backgroundColor: {
        default: '#FCFCFC',
        hover: 'white',
        active: '#F0F0F0',
      },
      color: {
        default: '#0F0D04',
        hover: '#0F0D04',
        active: '#0F0D04',
      },
      border: {
        default: 'none',
        hover: 'none',
        active: 'none',
      },
      boxShadow: {
        default:
          '0px 2px 10px rgba(109, 109, 109, 0.25), inset 0px 1px 0px rgba(255, 255, 255, 0.3)',
        hover: '0px 2px 10px rgba(109, 109, 109, 0.25), inset 0px 1px 0px rgba(255, 255, 255, 0.3)',
        active:
          '0px 2px 10px rgba(109, 109, 109, 0.25), inset 0px 1px 0px rgba(255, 255, 255, 0.3)',
      },
      fontWeight: {
        default: '600',
        hover: '600',
        active: '600',
      },
    },
    outlined: {
      backgroundColor: {
        default: 'transparent',
        hover: 'rgba(245, 26, 81, 0.05)',
        active: 'rgba(245, 26, 81, 0.1)',
      },
      color: {
        default: palette.accent['0'],
        hover: palette.accent['0'],
        active: palette.accent['0'],
      },
      border: {
        default: `1px solid ${palette.accent['0']}`,
        hover: `1px solid ${palette.accent['0']}`,
        active: `1px solid ${palette.accent['0']}`,
      },
      boxShadow: {
        default: 'none',
        hover: 'none',
        active: 'none',
      },
      fontWeight: {
        default: '500',
        hover: '500',
        active: '500',
      },
    },
  }
}
