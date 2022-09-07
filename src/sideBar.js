import Help from "./help";

const liStyle = {
  display: "inline",
  margin: "2px",
  padding: "1px",
  border: "1.5px dotted black",
};

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <h3>Listings</h3>
      <div>
        <ul>
          <li style={liStyle}>All</li>
          <li style={liStyle}>Owner</li>
          <li style={liStyle}>Dealer</li>
        </ul>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <Help />
    </div>
  );
};
export default Sidebar;
