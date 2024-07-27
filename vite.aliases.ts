import path from "path";

const aliases = {
  // "@": path.resolve(__dirname, "/"),
  // "@src": path.resolve(__dirname, "src"),

  "@shared/*": path.resolve(__dirname, "src/shared"),
  // "@shared": path.resolve(__dirname, "src/shared"),
  // shared: path.resolve(__dirname, "src/shared"),
};

export default aliases;
