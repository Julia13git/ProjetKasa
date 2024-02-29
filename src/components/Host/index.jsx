import "./host.scss";

function Host({ src, name }) {
  return (
    <div className="host-block">
      <div className="host-name">
        <p>{name}</p>
      </div>
      <div className="host-image">
        <img src={src} alt="" />
      </div>
    </div>
  );
}
export default Host;
