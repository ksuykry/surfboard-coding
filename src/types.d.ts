
type Props ={
  topicsCount: number;
  title: string,
  timeEstimate: string,
  description: string,
  deleteTopic: any;
}

type AddTopic = (newTopic: Props) => void;
type RemoveTopic = (topicToRemove: number) => void;
type EditTopic = (topicToEdit: Props) => void;
