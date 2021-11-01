import { useHistory } from "react-router-dom";

import NewMeetupForm from "../components/meetups/NewMeetupForm";
function NewMeetupPage() {
  const history = useHistory();
  function addMeetupHandler(meetupData) {
    fetch("https://meetup-98005-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      history.replace("/");
      //replace wont allow us to use the back button to go back on page but it will simply take us away.
      //through stringify we can pass data to array which is converted to JSON
    });
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
