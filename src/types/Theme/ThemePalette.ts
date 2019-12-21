/** Defines an hexadecimal color string (e.g. #222222) */
type ColorHexadecimal = string;

/** Defines the color palette in use in this application */
export interface ThemePalette {
  /** Primary color used in the application */
  primary: ColorHexadecimal;

  /** Secondary color used to highlight some information */
  secondary: ColorHexadecimal;

  /** Tertiary color used for backgrounds and emphasis */
  tertiary: ColorHexadecimal;

  /** Neutral color used for regular content, text color, etc. */
  neutral: ColorHexadecimal;

  /** Muted color used for backgrounds, etc. */
  muted: ColorHexadecimal;
}
