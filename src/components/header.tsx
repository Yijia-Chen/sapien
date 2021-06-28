import { ButtonProps, HeaderProps, Mode } from '../types';
import { SetRequired } from 'type-fest';

export function Header(props: HeaderProps): JSX.Element {
  return (
    <header className='App-header'>
      <MenuButton icon='fas fa-bars' onClick={props.onMenuSwitch} isMenuHidden={props.isMenuHidden} />
      <p id='text-logo'>Sapien</p>
      <div className='mode-panel'>
        <ModeButton value={Mode.MINDMAP} onClick={props.onModeSwitch} mode={props.mode} />
        <ModeButton value={Mode.OUTLINER} onClick={props.onModeSwitch} mode={props.mode} />
        <ModeButton value={Mode.BOTH} onClick={props.onModeSwitch} mode={props.mode} />
      </div>
      <div className='utility-panel'>
        <UtilityButton icon='fas fa-arrow-down' value='Topic' onClick={props.onTopicClick} />
        <UtilityButton icon='fas fa-arrow-right' value='Subtopic' onClick={props.onSubtopicClick} />
        <UtilityButton icon='fas fa-project-diagram' value='Relationship' onClick={props.onRelationshipClick} />
        <UtilityButton icon='far fa-square' value='Boundary' onClick={props.onBoundaryClick} />
        <UtilityButton icon='fas fa-plus' value='Insert' onClick={props.OnInsertClick} />
      </div>
      <div className='style-panel'>
        <UtilityButton icon='fas fa-palette' value='Style' onClick={props.onStyleSwitch} />
      </div> 
    </header>
  );
}

function MenuButton(props: SetRequired<ButtonProps, 'icon'> & { isMenuHidden: boolean }): JSX.Element {
  const style = props.isMenuHidden ? 'menu-button' : 'menu-button-selected'

  return (
    <button className={style} onClick={props.onClick}>
      <i className={props.icon} style={{ fontSize:'20px', marginTop:'2.5px', color:'#ffffff' }}></i>
    </button>);
}

function ModeButton(props: SetRequired<ButtonProps, 'value'> & { mode: Mode }): JSX.Element {
  const style = props.mode === props.value ? 'mode-button-selected' : 'mode-button';

  return (
    <button id={props.value} className={style} onClick={props.onClick}>
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