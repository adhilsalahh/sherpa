import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import EventIcon from "@mui/icons-material/Event";
import LogoutIcon from "@mui/icons-material/Logout";
import { Divider, Drawer, useMediaQuery } from "@mui/material";

const menu = [
  { title: "Orders", icon: <ShoppingBagIcon /> },
  { title: "Favorites", icon: <FavoriteIcon /> },
  { title: "Address", icon: <HomeIcon /> },
  { title: "Payments", icon: <AccountBalanceWalletIcon /> },
  { title: "Notification", icon: <NotificationsActiveIcon /> },
  { title: "Events", icon: <EventIcon /> },
  { title: "Logout", icon: <LogoutIcon /> },
];

function ProfileNavigation({ open, handleClose }) {
  const isSmallScreen = useMediaQuery("(max-width:1080px)");
  const navigate = useNavigate();

  const handleNavigates = (item) => {
    navigate(`/my-profile/${item.title.toLowerCase()}`);
  };
  

  return (
    <Drawer
      variant={isSmallScreen ? "temporary" : "permanent"}
      onClose={handleClose}
      open={isSmallScreen ? open : true}
      anchor="left"
      sx={{ zIndex: 1 }} // Removed position: "sticky" and fixed zIndex
    >
      <div className="w-[50vw] lg:w-[20vw] h-[100vh] pt-20 flex flex-col justify-center text-xl gap-6">
        {menu.map((item, i) => (
          <React.Fragment key={i}> {/* Added key to avoid React warning */}
            <div
              onClick={() => handleNavigates(item)} // Corrected function call
              className="px-5 flex items-center space-x-5 cursor-pointer"
            >
              {item.icon}
              <span>{item.title}</span>
            </div>
            {i !== menu.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </div>
    </Drawer>
  );
}

export default ProfileNavigation;
