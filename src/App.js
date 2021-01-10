
import Comment from './Comments';
import ApprovalCard from './ApprovalCard';

function App() {
  return (
    <div className="ui container comments">
      <ApprovalCard>
      <Comment 
      author="Rehmat"
      commentText="nice blog post!"
      time="6:45PM"
       />
       </ApprovalCard>
       <ApprovalCard>
      <Comment
      author="Bilal"
      commentText="Amazing!" 
      time="6:00PM" 
      />
      </ApprovalCard>
      <ApprovalCard>
      <Comment 
      author="Huzaifa" 
      commentText="Waiting for the next blog post." 
      time="8:00PM"
      />
      </ApprovalCard>
      
    </div>
  );
}

export default App;
