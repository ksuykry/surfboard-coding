import Topic from './Topic';
import TopicList from './TopicList';
import React from 'react';
import { listenerCount } from 'ws';


const Agenda = () => {

  return(
    <>
    <div>
      <TopicList />
    </div>
    </>
  )
}

export default Agenda;
