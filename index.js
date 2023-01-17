import { app } from "./app.js";
import { PORT, NODE_ENV } from "./utils/config.js";
import { services } from "./utils/services.js";

services();

const port = PORT || 4000;

app.listen(port, () => {
  console.log(
    NODE_ENV === "production"
      ? `server live`
      : `server live on http://localhost:${port}`
  );
});
