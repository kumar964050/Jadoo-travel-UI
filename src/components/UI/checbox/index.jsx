import { v4 as uuidV4 } from "uuid";

import "./index.css";

const Checkbox = ({ value, setTheme }) => {
  const id = uuidV4();

  return (
    <label htmlFor={id} className="switch">
      <input
        // checked={value}
        onChange={(e) => setTheme(e.target.checked)}
        id={id}
        type="checkbox"
      />
      <span className="slider round"></span>
    </label>
  );
};

export default Checkbox;
