import Header from "./ui/Header";
import { ThemeProvider } from "@mui/styles";

function App() {
  return (
    <ThemeProvider>
      <Header />
      Hello!
    </ThemeProvider>
  );
}

export default App;
