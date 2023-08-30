import { useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  return <h1>An error occurred! {error}</h1>;
}

export default Error;
