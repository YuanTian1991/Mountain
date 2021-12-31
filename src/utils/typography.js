import Typography from "typography";
import githubTheme from "typography-theme-github";

githubTheme.overrideThemeStyles = ({ rhythm }, options) => ({});

const typography = new Typography(
  {
    baseFontSize: "15px",
    baseLineHeight: 1.6,
    blockMarginBottom: "0.6em",
    fontWeight: "100",
    headerFontFamily: [
      "Ubuntu",
      "Avenir Next",
      "Helvetica Neue",
      "Segoe UI",
      "Helvetica",
      "Arial",
      "sans-serif",
    ],
    bodyFontFamily: [
      "Ubuntu",
      "Avenir Next",
      "Helvetica Neue",
      "Segoe UI",
      "Helvetica",
      "Arial",
      "sans-serif",
    ],
    headerColor: "black",
  },
  githubTheme
);

export default typography;
