import React, {useState, ChangeEvent, FormEvent} from 'react';
interface TopicFormProps{
  addTopic: AddTopic,
  topicsCount: number,
  deleteTopic: RemoveTopic
}
const TopicForm: React.FC<TopicFormProps> = ({addTopic, topicsCount, deleteTopic}) => {
  const [title, setTitle] = useState<string>('');
  const [timeEstimate, setTimeEstimate] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }
  const handleTimeEstimate = (e: ChangeEvent<HTMLInputElement>) => {
    setTimeEstimate(e.target.value);
  }
  const handleDescription = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  }
  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let newTopic:Props = {
      topicsCount: topicsCount,
      title: title,
      timeEstimate: timeEstimate,
      description: description,
      deleteTopic: deleteTopic
    }
    addTopic(newTopic);

    setTitle('');
    setTimeEstimate('');
    setDescription('');
  }
  return(
    <form className="topic-form">
      <input type="text" value={title} placeholder="Add Title" onChange={handleTitle}></input>
      <input type="text" value={timeEstimate} placeholder="Add Time Estimate" onChange={handleTimeEstimate}></input>
      <input type="text" value={description} placeholder="Add Description" onChange={handleDescription}></input>
      <button type="submit" onClick={handleSubmit}>Add Topic</button>
    </form>
  )

}
export default TopicForm;
