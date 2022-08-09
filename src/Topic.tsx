import React, {useState, ChangeEvent} from 'react';
import { AnyAaaaRecord } from 'dns';
interface Props{
  topicsCount: number;
  title:string,
  timeEstimate: string,
  description: string,
  deleteTopic: any
}
const Topic: React.FC<Props> = ({topicsCount, title, timeEstimate, description, deleteTopic}) => {
  const [topicTitle, setTopicTitle] = useState<string>(title);
  const [topicTimeEstimate, setTopicTimeEstimate] = useState<string>(timeEstimate);
  const [topicDescription, setTopicDescription] = useState<string>(description);
  const [isEditOn, setIsEditOn] = useState<boolean>(false);
  const [editTitle, setEditTitle] = useState<string>(title);
  const [editTimeEstimate, setEditTimeEstimate] = useState<string>(timeEstimate);
  const [editDescription, setEditDescription] = useState<string>(description);
  const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setEditTitle(e.target.value);
  }
  const handleTimeEstimate = (e: ChangeEvent<HTMLInputElement>) => {
    setEditTimeEstimate(e.target.value);
  }
  const handleDescription = (e: ChangeEvent<HTMLInputElement>) => {
    setEditDescription(e.target.value);
  }
  const editToggle = () =>{
    if(isEditOn === true){
      setIsEditOn(false);
    }
    else{
      setIsEditOn(true);
    }

  }
  const handleDelete = () => {
    deleteTopic(topicsCount);
  }
  const cancelEdit = () => {
    setIsEditOn(false);
    setEditTitle(topicTitle);
    setEditTimeEstimate(topicTimeEstimate);
    setEditDescription(topicDescription);
  }
  const saveEdit = () => {
    setIsEditOn(false);
    setTopicTitle(editTitle);
    setTopicTimeEstimate(editTimeEstimate);
    setTopicDescription(editDescription);
  }
  return (
    <div>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={editToggle}>Edit</button>
      {isEditOn &&<div> <button onClick={saveEdit}>Save</button>
      <button onClick={cancelEdit}>Cancel</button>
      </div>}
      {isEditOn &&<div>
        <h1><input type="text" value={editTitle} onChange={handleTitle}></input></h1>
        <p><input type="text" value={editTimeEstimate} onChange={handleTimeEstimate}></input></p>
        <p><input type="text" value={editDescription} onChange={handleDescription}></input></p>
      </div>}
      {!isEditOn && <div>
        <h1>{topicTitle}</h1>
        <p>{topicTimeEstimate}</p>
        <p>{topicDescription}</p>
        </div>}

    </div>
  )
}
export default Topic;
