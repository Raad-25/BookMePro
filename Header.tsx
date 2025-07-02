<img
  src="/images/logo.png"
  alt="Logo"
  style={{ width: "100px" }}
  onError={(e) => {
    const target = e.target as HTMLImageElement;
    target.style.display = "none";
  }}
/>;
