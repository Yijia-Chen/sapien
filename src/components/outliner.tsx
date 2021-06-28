import { OutlinerProps } from "../types";

export function Outliner(props: OutlinerProps): JSX.Element {
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
}