import { Props } from "../types";

export function Mindmap(props: Props): React.ReactElement {
  return (
    <div className='App-mindmap'>
      <div style={{textAlign: 'left'}}>
        <p>{props.title!}</p>
        <p>{props.body!}</p>
      </div>
    </div>
  );
}