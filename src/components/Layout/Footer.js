import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Typography } from "@mui/material";
const Footer = () => {
  return (
    <>
      <Box
        sx={{ textAlign: "center", bgcolor: "rgb(72, 156, 208)", color: "rgb(52, 52, 52)", p: 2 }}
      >
        <Box
          sx={{
            my: 3,
            "& svg": {
              fontSize: "40px",
              cursor: "pointer",
              mr: 2,
            },
            "& svg:hover": {
              color: "goldenrod",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
          }}
        >
          {/* icons */}

          <TwitterIcon />
          <YouTubeIcon />
        </Box>
        <Typography
          variant="p"
          sx={{
            "@media (max-width:600px)": {
              fontSize: "2rem",
            },
          }}
        >
 &copy; 2024 Հայաստանի Պատմության Թանգարան: Հեղինակային իրավունքները պաշտպանված են: Կայքի արդիականացումը և վերաոճավորումը՝ HK Digital Agency

Սույն կայքում տեղադրված լուսանկարները պաշտպանվում են հեղինակային և հարակից իրավունքների մասին Հայաստանի Հանրապետության օրենսդրությամբ:

Արգելվում է տեղադրված լուսանկարների վերարտադրումը, տարածումը, նկարազարդումը, հարմարեցումը և այլ ձևերով վերափոխումը, ինչպես նաև այլ եղանակներով օգտագործումը, եթե մինչև նման օգտագործումը ձեռք չի բերվել Հայաստանի Պատմության թանգարանի թույլտվությունը:
        </Typography>
      </Box>
    </>
  );
};

export default Footer;