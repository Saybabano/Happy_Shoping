import { Box, Grid, Typography, Link, Divider } from "@mui/material";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";

export default function Footer() {
  return (
    <Box
       sx={{
        width: "100%", // Full width to match navbar
        color: "#555",
        p: { xs: 4, md: 6 },
        mt: 4,
        boxSizing: "border-box",
      }}
    >
      <Grid container spacing={4} sx={{ justifyContent: "space-between" }}>
        
        {/* Categories Section */}
        <Grid item xs={12} sm={3}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, color: "blue" }}>
            Categories
          </Typography>
          {[
            "Vegetables & Fruits",
            "Breakfast & Bakery",
            "Beverages",
            "Snacks & Gourmet",
            "Organic & Gourmet",
            "Baby care",
            "Cleaning essentials",
            "Personal care",
          ].map((item) => (
            <Link
              key={item}
              href="#"
              sx={{
                display: "block",
                textDecoration: "none",
                color: "#555", // Updated text color
                fontSize: "15px",
                mb: 1,
                transition: "0.3s",
                "&:hover": { color: "#00bfff", textDecoration: "underline" },
              }}
            >
              {item}
            </Link>
          ))}
        </Grid>

        {/* Get to Know Us */}
        <Grid item xs={12} sm={3}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, color: "blue" }}>
            Get to Know Us
          </Typography>
          {["Company", "About", "Blog", "Help Center", "Our Values"].map((item) => (
            <Link
              key={item}
              href="#"
              sx={{
                display: "block",
                textDecoration: "none",
                color: "#555", // Updated text color
                fontSize: "15px",
                mb: 1,
                transition: "0.3s",
                "&:hover": { color: "#00bfff", textDecoration: "underline" },
              }}
            >
              {item}
            </Link>
          ))}
        </Grid>

        {/* For Consumers */}
        <Grid item xs={12} sm={3}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, color: "blue" }}>
            For Consumers
          </Typography>
          {["Payments", "Shipping", "Product Returns", "Shop Checkout"].map((item) => (
            <Link
              key={item}
              href="#"
              sx={{
                display: "block",
                textDecoration: "none",
                color: "#555", // Updated text color
                fontSize: "15px",
                mb: 1,
                transition: "0.3s",
                "&:hover": { color: "#00bfff", textDecoration: "underline" },
              }}
            >
              {item}
            </Link>
          ))}
        </Grid>

        {/* Become a Shopper */}
        <Grid item xs={12} sm={3}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, color: "blue" }}>
            Become a Shopper
          </Typography>
          {["Shopper Opportunities", "Become a Shopper", "Earnings"].map((item) => (
            <Link
              key={item}
              href="#"
              sx={{
                display: "block",
                textDecoration: "none",
                color: "#555", // Updated text color
                fontSize: "15px",
                mb: 1,
                transition: "0.3s",
                "&:hover": { color: "#00bfff", textDecoration: "underline" },
              }}
            >
              {item}
            </Link>
          ))}
        </Grid>
      </Grid>

      <Divider sx={{ my: 4, borderColor: "#1e3a8a" }} />

      {/* Payment & Delivery */}
      <Grid container spacing={4} sx={{ justifyContent: "center", textAlign: "center" }}>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1" sx={{ fontWeight: "bold", mb: 2, color: "blue"}}>
            Payment Partners
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
            {[
              { src: "https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg", alt: "Visa", link: "https://www.visa.com" },
              { src: "https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg", alt: "MasterCard", link: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/2560px-MasterCard_Logo.svg.png" },
              { src: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Rupay-Logo.png", alt: "RuPay", link: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Rupay-Logo.png" }, // ✅ Updated working RuPay link
              { src: "https://w7.pngwing.com/pngs/1002/997/png-transparent-amex-payment-method-card-icon-thumbnail.png", alt: "American Express", link: "https://w7.pngwing.com/pngs/1002/997/png-transparent-amex-payment-method-card-icon-thumbnail.png" }
            ].map(({ src, alt, link }, index) => (
              <Link key={index} href={link} target="_blank" rel="noopener noreferrer">
                <img
                  src={src}
                  alt={alt}
                  style={{
                    height: "25px",
                    backgroundColor: "#fff",
                    padding: "5px",
                    borderRadius: "5px",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
                  }}
                />
              </Link>
            ))}
          </Box>


        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1" sx={{ fontWeight: "bold", mb: 2, color: "blue" }}>
            Get Deliveries with FreshCart
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
            {/* App Store Button */}
            <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg" 
                alt="App Store" 
                style={{ height: "40px" }} 
              />
            </a>

            {/* Google Play Button */}
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                alt="Google Play" 
                style={{ height: "40px" }} 
              />
            </a>
          </Box>

        </Grid>
      </Grid>

      <Divider sx={{ my: 4, borderColor: "#1e3a8a" }} />

      {/* Bottom Footer */}
      <Box sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", alignItems: "center" }}>
        <Typography variant="body2" sx={{ color: "#555" }}>
          © 2025 FreshCart. All rights reserved.
        </Typography>

        {/* Social Icons */}
        <Box sx={{ display: "flex", gap: 3 }}>
          {[Facebook, Twitter, Instagram, YouTube].map((Icon, index) => (
            <Link
              key={index}
              href="#"
              sx={{
                color: "white",
                transition: "0.3s",
                bgcolor: "blue",
                borderRadius: "50%",
                padding: "8px",
                display: "inline-flex",
                "&:hover": { color: "#fff", bgcolor: "blue" },
              }}
            >
              <Icon fontSize="medium" />
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
