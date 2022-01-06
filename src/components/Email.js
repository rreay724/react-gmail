import { useLocation } from "react-router-dom";

function Email({ id }) {
  const location = useLocation();
  return <div className="text-white">This is the id: {location.state.id}</div>;
}

export default Email;
