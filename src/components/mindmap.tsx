import { Props } from "../types";

export function Mindmap(props: Props): React.ReactElement {
  return (
    <div className='App-mindmap'>
      <div
        style={{textAlign: 'left'}}
        dangerouslySetInnerHTML={{__html: props.dangerouslySetInnerHTML!}}
      ></div>
    </div>
  );
}