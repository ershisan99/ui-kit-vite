type Colors =
  | 'accent'
  | 'danger'
  | 'success'
  | 'info'
  | 'pop'
  | 'darkMode'
  | 'neutralLight'
  | 'neutralDark'

type Tones = '-20' | '-40' | '-60' | '-80' | '0' | '+20' | '+40' | '+60' | '+80'

export const palette: Readonly<{
  [key in Colors]: {
    [key in Tones]: string
  }
}> = {
  accent: {
    ['+80']: '#FDD1DC',
    ['+60']: '#FBA3B9',
    ['+40']: '#F97697',
    ['+20']: '#F74874',
    ['0']: '#F51A51',
    ['-20']: '#C41541',
    ['-40']: '#931031',
    ['-60']: '#620A20',
    ['-80']: '#310510',
  },
  danger: {
    ['+80']: '#FDE3D1',
    ['+60']: '#FBC8A3',
    ['+40']: '#F9AC76',
    ['+20']: '#F79148',
    ['0']: '#F5751A',
    ['-20']: '#C45E15',
    ['-40']: '#934610',
    ['-60']: '#622F0A',
    ['-80']: '#311705',
  },
  darkMode: {
    ['+80']: '#D1D4D7',
    ['+60']: '#A3A8AF',
    ['+40']: '#747D86',
    ['+20']: '#46515E',
    ['0']: '#182636',
    ['-20']: '#131E2B',
    ['-40']: '#0E1720',
    ['-60']: '#0A0F16',
    ['-80']: '#05080B',
  },
  info: {
    ['+80']: '#D1E3FD',
    ['+60']: '#A3C8FB',
    ['+40']: '#76ACF9',
    ['+20']: '#4891F7',
    ['0']: '#1A75F5',
    ['-20']: '#155EC4',
    ['-40']: '#104693',
    ['-60']: '#0A2F62',
    ['-80']: '#051731',
  },
  neutralDark: {
    ['+80']: '#ECEBEB',
    ['+60']: '#ECEBEB',
    ['+40']: '#797476',
    ['+20']: '#797476',
    ['0']: '#40393B',
    ['-20']: '#2D2829',
    ['-40']: '#2D2829',
    ['-60']: '#0D0B0C',
    ['-80']: '#0D0B0C',
  },
  neutralLight: {
    ['+80']: '#FFFEFE',
    ['+60']: '#FFFEFE',
    ['+40']: '#FEF9FA',
    ['+20']: '#FEF9FA',
    ['0']: '#FEF6F8',
    ['-20']: '#B2ACAE',
    ['-40']: '#B2ACAE',
    ['-60']: '#333132',
    ['-80']: '#333132',
  },
  pop: {
    ['+80']: '#F9D1FD',
    ['+60']: '#F4A3FB',
    ['+40']: '#EE76F9',
    ['+20']: '#E948F7',
    ['0']: '#E31AF5',
    ['-20']: '#B615C4',
    ['-40']: '#881093',
    ['-60']: '#5B0A62',
    ['-80']: '#2D0531',
  },
  success: {
    ['+80']: '#D1F9E8',
    ['+60']: '#A3F3D1',
    ['+40']: '#75ECBB',
    ['+20']: '#47E6A4',
    ['0']: '#19E08D',
    ['-20']: '#14B371',
    ['-40']: '#0F8655',
    ['-60']: '#0A5A38',
    ['-80']: '#052D1C',
  },
} as const

const transformPaletteToCssVariables = (
  palette: Readonly<{
    [key in Colors]: {
      [key in Tones]: string
    }
  }>
) => {
  const cssVariables: string[] = []

  for (const color in palette) {
    // @ts-ignore
    for (const tone in palette[color]) {
      let transformedTone = tone

      if (tone === '0') {
        transformedTone = '500'
      }
      if (tone === '-20') {
        transformedTone = '600'
      }
      if (tone === '-40') {
        transformedTone = '700'
      }
      if (tone === '-60') {
        transformedTone = '800'
      }
      if (tone === '-80') {
        transformedTone = '900'
      }
      if (tone === '+20') {
        transformedTone = '400'
      }
      if (tone === '+40') {
        transformedTone = '300'
      }
      if (tone === '+60') {
        transformedTone = '200'
      }
      if (tone === '+80') {
        transformedTone = '100'
      }
      cssVariables.push(
        // @ts-ignore
        `--color-${color}-${transformedTone}: ${palette[color][tone]};`
      )
    }
  }

  return cssVariables.join(' ')
}

console.log(transformPaletteToCssVariables(palette))
