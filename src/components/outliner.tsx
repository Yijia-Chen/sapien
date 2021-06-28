import { Mode, OutlinerProps } from "../types";

export function Outliner(props: OutlinerProps): JSX.Element | null {
  if (props.mode === Mode.OUTLINER || props.mode === Mode.BOTH) {
    return (
      <div className='App-outliner'>
        <textarea 
          className='outliner-title'
          onChange={props.onTitleChange}
          value={props.mapState.title}
        ></textarea>
        <textarea 
          className='outliner-body'
          onChange={props.onBodyChange}
          value={props.mapState.body}
        ></textarea>
      </div>
    );
  } else {
    return null;
  }
}