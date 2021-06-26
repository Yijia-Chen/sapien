import { Props } from "../types";

export function Outliner(props: Props): React.ReactElement {
  return (
    <div className='App-outliner'>
      <textarea 
        className='outliner-title'
        onChange={props.onTitleChange}
      ></textarea>
      <textarea 
        className='outliner-body'
        onChange={props.onBodyChange}
      ></textarea>
    </div>
  );
}