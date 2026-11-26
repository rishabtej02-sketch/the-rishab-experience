export const portfolioOrigin = "https://the-rishab-experience.vercel.app";

const deployment = process.env.VERCEL_ENV;
const indexingSetting = process.env.PORTFOLIO_INDEXABLE;

export const allowIndexing =
  deployment === "production"
    ? indexingSetting !== "false"
    : !deployment && indexingSetting === "true";
