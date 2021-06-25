import { Props } from "../types";


export function MenuButton(props: Props) {
  return (
    <button className='menu-button' onClick={props.onClick}>
      <i className={props.icon} style={{fontSize:'20px', marginTop:'2.5px', color:'#ffffff'}}></i>
    </button>);
}

export function ModeButton(props: Props) {
  return (
    <button className='mode-button' onClick={props.onClick}>
      {props.value}
    </button>
  )
}

export function ModePanel(_props: Props) {
  return (
    <div className='mode-panel'>
      <ModeButton value='Mind Map' />
      <ModeButton value='Outliner' />
      <ModeButton value='Both' />
    </div>
  );
}

export function UtilityPanel(_props: Props) {
  return (
    <div className='utility-panel'>
      <UtilityButton icon='fas fa-arrow-down' value='Topic' />
      <UtilityButton icon='fas fa-arrow-right' value='Subtopic' />
      <UtilityButton icon='fas fa-project-diagram' value='Relationship' />
      <UtilityButton icon='far fa-square' value='Boundary' />
      <UtilityButton icon='fas fa-plus' value='Insert' />
    </div> 
  );
}

export function StylePanel(_props: Props) {
  return (
    <div className='style-panel'>
      <UtilityButton icon='fas fa-palette' value='Style' />
    </div>
  );
}

function UtilityButton(props: Props) {
  return (
    <button className='utility-button'>
      <i className={props.icon} style={{fontSize:'16px', marginTop:'10px', color:'#ffffff'}}></i>
      <p className='utility-button-text'>{props.value}</p>
    </button>
  );
}