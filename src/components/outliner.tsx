import { Props } from "../types";

export function Outliner(props: Props) {
  return (
    <div className='App-outliner'>
      <textarea className='outliner-title'></textarea>
      <textarea 
        className='outliner-body'
        onChange={props.onChange}
      ></textarea>
    </div>
  );
}