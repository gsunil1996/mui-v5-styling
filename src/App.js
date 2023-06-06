import './App.css';
import InlineStyling from './components/InlineStyling';
import MuiBreakPoints from './components/MuiBreakPoints';
import StylesInSamePage from './components/StylesInSamePage';
import MuiStyling from './components/muiStyling/MuiStyling';
import StylesInDifferentPage from './components/stylesInDifferentPage/StylesInDifferentPage';

function App() {
  return (
    <div className="App">
      {/* <InlineStyling /> */}
      {/* <StylesInSamePage /> */}
      {/* <MuiBreakPoints /> */}
      {/* <StylesInDifferentPage /> */}
      <MuiStyling />
    </div>
  );
}

export default App;
