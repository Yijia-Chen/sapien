import './App.css';

function MenuButton(props) {
  return (
    <button className='menu-button' onClick={props.onClick}>
      <i className={props.icon} style={{fontSize:'20px', marginTop:'2.5px', color:'#ffffff'}}></i>
    </button>);
}

function ModeButton(props) {
  return (
    <button className='mode-button' onClick={props.onClick}>
      {props.text}
    </button>
  )
}

function ModePanel(props) {
  return (
    <div className='mode-panel'>
      <ModeButton text='Mind Map' />
      <ModeButton text='Outliner' />
      <ModeButton text='Both' />
    </div>
  );
}

function UtilityPanel(props) {
  return (
    <p className='utility-panel'>
      <StyleButton icon='fas fa-palette' value='Topic' />
      <StyleButton icon='fas fa-palette' value='Subtopic' />
      <StyleButton icon='fas fa-palette' value='Relationship' />
      <StyleButton icon='fas fa-palette' value='Boundary' />
      <StyleButton icon='fas fa-palette' value='Insert' />
    </p> 
  );
}

function StylePanel(props) {
  return (
    <div className='style-panel'>
      <StyleButton icon='fas fa-palette' value='Style' />
    </div>
  );
}

function StyleButton(props) {
  return (
    <button className='utility-button'>
      <i className={props.icon} style={{fontSize:'16px', marginTop:'10px', color:'#ffffff'}}></i>
      <p className='utility-button-text'>{props.value}</p>
    </button>
  );
}

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <MenuButton icon='fas fa-bars' />
        <p className='sapien'>Sapien</p>
        <ModePanel />
        <UtilityPanel />
        <StylePanel />
      </header>
    </div>
  );
}

export default App;
