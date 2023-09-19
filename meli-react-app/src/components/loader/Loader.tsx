import "./Loader.scss";

export default function Loader({ text }: { text: string }) {
  return (
    <div className="container">
      <div className="box-loading">
        <div className="loader"></div>
        <div className="loader__text">{text || "Carregando"}</div>
      </div>
    </div>
  );
}
