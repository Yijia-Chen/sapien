import { Mode, OutlinerProps } from "../types";

export function Outliner(props: OutlinerProps): JSX.Element | null {
  if (props.mode === Mode.OUTLINER || props.mode === Mode.BOTH) {
    return (
      <div className={props.mode === Mode.OUTLINER ? 'App-outliner-full' : 'App-outliner'}>
        <textarea 
          className={props.mode === Mode.OUTLINER ? 'outliner-title-full' : 'outliner-title'}
          onChange={props.onTitleChange}
          value={props.mapState.title}
        ></textarea>
        <textarea 
          className={props.mode === Mode.OUTLINER ? 'outliner-body-full' : 'outliner-body'}
          onChange={props.onBodyChange}
          value={props.mapState.body}
        ></textarea>
      </div>
    );
  } else {
    return null;
  }
}