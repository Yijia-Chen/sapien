import { ButtonProps, UNIMPLEMENTED_CALLBACK } from '../types';
import { SetRequired } from 'type-fest';

export function Header(_props: any): JSX.Element {
  return (
    <header className='App-header'>
      <MenuButton icon='fas fa-bars' onClick={UNIMPLEMENTED_CALLBACK} />
      <p id='text-logo'>Sapien</p>
      <ModePanel />
      <UtilityPanel />
      <StylePanel />
    </header>
  );
}

function ModePanel(_props: any): JSX.Element {
  return (
    <div className='mode-panel'>
      <ModeButton value='Mind Map' onClick={UNIMPLEMENTED_CALLBACK} />
      <ModeButton value='Outliner' onClick={UNIMPLEMENTED_CALLBACK} />
      <ModeButton value='Both' onClick={UNIMPLEMENTED_CALLBACK} />
    </div>
  );
}

function UtilityPanel(_props: any): JSX.Element {
  return (
    <div className='utility-panel'>
      <UtilityButton icon='fas fa-arrow-down' value='Topic' onClick={UNIMPLEMENTED_CALLBACK} />
      <UtilityButton icon='fas fa-arrow-right' value='Subtopic' onClick={UNIMPLEMENTED_CALLBACK} />
      <UtilityButton icon='fas fa-project-diagram' value='Relationship' onClick={UNIMPLEMENTED_CALLBACK} />
      <UtilityButton icon='far fa-square' value='Boundary' onClick={UNIMPLEMENTED_CALLBACK} />
      <UtilityButton icon='fas fa-plus' value='Insert' onClick={UNIMPLEMENTED_CALLBACK} />
    </div> 
  );
}

function StylePanel(_props: any): JSX.Element {
  return (
    <div className='style-panel'>
      <UtilityButton icon='fas fa-palette' value='Style' onClick={UNIMPLEMENTED_CALLBACK} />
    </div>
  );
}

function MenuButton(props: SetRequired<ButtonProps, 'icon'>): JSX.Element {
  return (
    <button className='menu-button' onClick={props.onClick}>
      <i className={props.icon} style={{ fontSize:'20px', marginTop:'2.5px', color:'#ffffff' }}></i>
    </button>);
}

function ModeButton(props: SetRequired<ButtonProps, 'value'>): JSX.Element {
  return (
    <button className='mode-button' onClick={props.onClick}>
      {props.value}
    </button>
  )
}

function UtilityButton(props: SetRequired<ButtonProps, 'icon' | 'value'>): JSX.Element {
  return (
    <button className='utility-button' onClick={props.onClick}>
      <i className={props.icon} style={{ fontSize:'16px', marginTop:'10px', color:'#ffffff' }}></i>
      <p className='utility-button-text'>{props.value}</p>
    </button>
  );
}