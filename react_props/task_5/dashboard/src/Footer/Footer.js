import { getFooterCopy, getFullYear } from "../utils";

const Footer = () => {
  return (
    <footer className="App-footer">
      <p>
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </p>
    </footer>
  );
};

export default Footer;
