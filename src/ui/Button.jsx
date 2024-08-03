import { Link } from "react-router-dom";

function Button({ children, disabled, to, type }) {
  const base =
    "focuse:bg-yellow-300 inline-block rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";

  const styles = {
    primary: base + " md:px-6 md:py-4 px-4 py-3",
    small: base + " md:px-5 md:py-2.5 py-2 px-4 text-xs",
  };

  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;