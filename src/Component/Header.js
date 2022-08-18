import { useLocation } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";

export function Header() {
  const { pathname } = useLocation();

  return (
    <div>
      {pathname === "/" ? (
        <>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Google Maps"
            className="searchInput"
          />
          <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </>
      ) : (
        <h3>즐겨찾기</h3>
      )}
    </div>
  );
}
