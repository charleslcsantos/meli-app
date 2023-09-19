import meliLogo from "../../assets/images/Logo_ML.png";
import meliLogo2x from "../../assets/images/Logo_ML@2x.png";

export default function Logo() {
  return (
    <img
      src={meliLogo}
      alt="Mercado Livre Brasil - Onde comprar e vender de Tudo"
      className="logo"
      srcSet={`${meliLogo} 1x, ${meliLogo2x} 2x`}
    />
  );
}
