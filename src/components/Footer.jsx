import Order from "./Order";

export default function Footer() {
  const hour = new Date().getHours();
  console.log(hour);
  const openHour = 12;
  const closeHour = 18;
  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p className="footer-center">
          We're happy to welcome you between {openHour}:00 and {closeHour}:00{" "}
        </p>
      )}
      <hr/>
      <p className="footer-center">© Copyright 2025</p>
    </footer>
  );
}