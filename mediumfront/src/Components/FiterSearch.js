import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";

const Container = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "16px",
  marginBottom: "16px",
});
const FilterLabel = styled("label")(({ theme }) => ({
  fontWeight: "bold",
  marginBottom: theme.spacing(1),
  flex: "0 0 100px",
}));

const StyledSelect = styled("select")(({ theme }) => ({
  padding: theme.spacing(1),
  border: "1px solid #ccc",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.common.white,
  outline: "none",
  "&:focus": {
    borderColor: theme.palette.primary.main,
  },
}));
const Search = styled("div")(({ theme }) => ({
  flex: 1,
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
const FilterSearch = ({ handleFilter, handleSearch }) => {
  return (
    <Container>
      <StyledSelect id="filter" onChange={handleFilter}>
        <option value="">--Select--</option>
        <option value="title">Title</option>
        <option value="author">Author</option>
        <option value="date">Date</option>
        <option value="likes">Number of Likes</option>
        <option value="comments">Number of Comments</option>
      </StyledSelect>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          onChange={handleSearch}
        />
      </Search>
    </Container>
  );
};

export default FilterSearch;
