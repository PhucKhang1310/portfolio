import { Breadcrumbs, Chip, emphasize, styled } from "@mui/material";
import "../styles/NavBar.css";
import PlanetCanvas from "./PlanetCanvas";
import type React from "react";

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  return {
    backgroundColor: theme.palette.grey[100],
    height: theme.spacing(3),
    color: (theme.vars || theme).palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: emphasize(theme.palette.grey[100], 0.06),
      ...theme.applyStyles("dark", {
        backgroundColor: emphasize(theme.palette.grey[800], 0.06),
      }),
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.grey[100], 0.12),
      ...theme.applyStyles("dark", {
        backgroundColor: emphasize(theme.palette.grey[800], 0.12),
      }),
    },
    ...theme.applyStyles("dark", {
      backgroundColor: theme.palette.grey[800],
    }),
  };
}) as typeof Chip;

function handleClick(event: React.MouseEvent<Element, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div>
          <PlanetCanvas size={1} />
        </div>
        <div></div>
        <div className="navbar-links">
          <div role="presentation" onClick={handleClick}>
            <Breadcrumbs aria-label="breadcrumb">
              <StyledBreadcrumb
                component="a"
                href="#"
                label="Home"
              />
              <StyledBreadcrumb component="a" href="#" label="Catalog" />
              <StyledBreadcrumb
                label="Accessories"
              />
            </Breadcrumbs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
