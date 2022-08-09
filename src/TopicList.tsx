import React, {useState, useEffect} from "react";
import Topic from './Topic';
import TopicForm from './TopicForm';

interface TopicListProps{
  topics: Array<Props>,
}
type Topic = {
  title: string,
  timeEstimate: string,
  description: string,
  topicsCount: number
  deleteTopic:any
}


const TopicList = () => {
  const [topics, setTopics] = useState<Array<Topic>>([]);
  const [topicsCount, setTopicsCount] = useState<number>(0);
  const deleteTopic = (id: number) => {
    let newList = [...topics].filter((topic: Topic) => {
      return topic.topicsCount !== id;
    });

    setTopics([...newList]);
  }
  const addTopic: AddTopic = newTopic => {
    setTopics([...topics, newTopic])
    setTopicsCount(topicsCount + 1);
  }
  useEffect(() => {
    console.log(topics);
  },[topics])
  return(
    <div>
      <TopicForm addTopic={addTopic} deleteTopic={deleteTopic} topicsCount={topicsCount}/>
      {topics.map((topic:Topic) => (
        <Topic topicsCount={topic.topicsCount} title={topic.title} timeEstimate=
        {topic.timeEstimate} description={topic.description} deleteTopic=
        {deleteTopic}/>
      )
      )}
    </div>
  )
}
export default TopicList;
