
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');
  const task_list = document.getElementById('tasks');

  task_list.addEventListener('click', removeTask);//deleting task once clicked

form.addEventListener('submit', add_task); //adding an eventlistener to my submit to listen for click
  
  function add_task(event){ //passing the eventlistener using the call back function
    event.preventDefault(); //preventing html default

   
    const new_description = document.querySelector('#new-task-description').value;
    //console.log(new_description);

    const li = document.createElement('li'); //creating a list item

    
    li.appendChild(document.createTextNode(new_description)); // Adding text node with input value

    const delete_btn = document.createElement('button'); //creating a delete button element

    delete_btn.appendChild(document.createTextNode('Remove'));//appending the text node to my delete button

    li.appendChild(delete_btn); // appending button to list item tag

    task_list.appendChild(li);  // Appending list item tag to list

    form.reset()// resets  the form after submiting task

  }

  function removeTask(event) {
    if (event.target.nodeName === 'BUTTON') {
      if(confirm('Confirm delete!')) {
        let li = event.target.parentElement;
        task_list.removeChild(li);
      }
    }

  }


})

