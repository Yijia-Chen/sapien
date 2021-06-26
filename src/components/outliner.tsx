import { Props } from "../types";

export function Outliner(props: Props) {
  return (
    <div className='App-outliner'>
      <textarea 
        className='outliner-title'
        onChange={props.onTitleChange}
      >Central Topic</textarea>
      <textarea 
        className='outliner-body'
        onChange={props.onBodyChange}
      ></textarea>
    </div>
  );
}