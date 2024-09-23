import {ColorType} from '../types'

export function applyTheme(theme: any) {
  const root = document.documentElement;
  Object.keys(theme).forEach((cssVar) => {
    root.style.setProperty(cssVar, theme[cssVar]);
  });
}

export function createTheme({
  primary,
  secondary,
  titleColor,
  subTitleColor,
  textColor,
  borderColor
}: ColorType) {
  return {
    "--theme-primary": primary,    
    "--theme-secondary": secondary,
    "--theme-title-color": titleColor,
    "--theme-sub-title-color": subTitleColor,
    "--theme-text-color": textColor,
    "--theme-border-color": borderColor,
  };
}