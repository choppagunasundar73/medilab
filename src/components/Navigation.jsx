import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Drawer,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id") || "";

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });

      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    if (mobileOpen) {
      setMobileOpen(false);
    }
  };

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#gallery", label: "Gallery" },
    { href: "#departments", label: "Departments" },
    { href: "#doctors", label: "Doctors" },
    { href: "#contact", label: "Contact" },
  ];

  const drawerContent = (
    <Box
      sx={{
        width: 250,
        padding: "1rem",
      }}
    >
      {navItems.map((item) => (
        <Typography
          key={item.href}
          component="a"
          href={item.href}
          onClick={(e) => handleNavClick(e, item.href)}
          sx={{
            display: "block",
            mb: 2,
            color: activeSection === item.href.slice(1) ? "blue" : "gray",
            textDecoration: "none",
            fontSize: "1rem",
          }}
        >
          {item.label}
        </Typography>
      ))}
      <Button
        variant="outlined"
        fullWidth
        onClick={(e) => {
          e.preventDefault();
          const element = document.getElementById("appointment");
          if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }
          setMobileOpen(false);
        }}
      >
        Make an Appointment
      </Button>
    </Box>
  );

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 50,
        backgroundColor: isScrolled ? "white" : "transparent",
        transition: "background-color 0.3s ease",
        boxShadow: isScrolled ? "0 1px 3px rgba(0,0,0,0.1)" : "none",
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "80px",
        }}
      >
        <Typography
          component="a"
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          sx={{
            fontSize: "2rem",
            fontWeight: "bold",
            color: "blue",
            textDecoration: "none",
          }}
        >
          Medilab
        </Typography>

        {/* Desktop Navigation */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: "1rem",
          }}
        >
          {navItems.map((item) => (
            <Typography
              key={item.href}
              component="a"
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              sx={{
                fontSize: "0.875rem",
                fontWeight: 500,
                color: activeSection === item.href.slice(1) ? "blue" : "gray",
                textDecoration: "none",
              }}
            >
              {item.label}
            </Typography>
          ))}
          <Button
            variant="outlined"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById("appointment");
              if (element) {
                const offset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition =
                  elementPosition + window.pageYOffset - offset;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth",
                });
              }
            }}
          >
            Make an Appointment
          </Button>
        </Box>

        {/* Mobile Navigation Button */}
        <IconButton
          color="inherit"
          edge="end"
          onClick={() => setMobileOpen(true)}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          <MenuIcon />
        </IconButton>

        {/* Mobile Drawer */}
        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          ModalProps={{
            keepMounted: true,
          }}
        >
          {drawerContent}
        </Drawer>
      </Box>
    </header>
  );
};

export default Navigation;
