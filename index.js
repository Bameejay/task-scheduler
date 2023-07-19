const openModalButton = document.getElementById('openModal')
const modal = document.getElementById('myModal')
const closeModalButton = document.getElementById('closeModal')
const saveModalButton = document.getElementById('saveTask')
const taskInput = document.getElementById('task-Input');
const taskList = document.getElementById('taskList')
const taskLibrary = document.getElementById('taskLibrary')
const fileInput = document.getElementById('file-input');
// const taskDesc = document.getElementById('task-desc')



openModalButton.addEventListener('click', () => {
    modal.classList.remove('hidden')
})

closeModalButton.addEventListener('click', () => {
    modal.classList.add ('hidden')
})

saveModalButton.addEventListener('click', () => {
    const task = taskInput.value;
    // const taskDescription = taskDesc.value;
    displayTask(task);
    
    // displayDesc(taskDescription)
    taskInput.value = '';
    // taskDesc.value = '';
    modal.classList.remove ('hidden');
    
})

// function saveData() {
//     localStorage.setItem('data', taskItem.innerHTML)
// }

function displayTask(task) {
    const taskItem = document.createElement('div')
    taskItem.classList.add('bg-gray-400', 'rounded', 'p-4', 'mb-0', 'text-md',  'mt-6', 'font-bold', 'w-96', 'h-[40px]')
    taskItem.textContent = task;
    taskList.appendChild(taskItem)
    saveData()
}

// function displayDesc(taskDescription) {
//     const taskDe = document.createElement('div')
//     taskDe.classList.add('bg-red-400', 'rounded', 'p-4', 'mb-0', 'text-md',  'mt-6', 'font-bold', 'w-96', 'h-[40px]')
//     taskDe.textContent = taskDescription;
//     taskList.appendChild(taskDe)
//     saveData()
// }


taskLibrary.addEventListener('click', () => {
    console.log('this is created');
})

function taskListing() {
console.log('this is tasklisting');
}

fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    // Handle the selected file here
    console.log('Selected file:', file);
  });

  function clearSaved() {
    const taskInput = document.getElementById('task-Input').value = '';
  }

// Add an event listener to OK button to run

saveModalButton.addEventListener('click', function() {
    // Check if a file is selected
    if (fileInput.files.length > 0) {
      var selectedFile = fileInput.files[0];
  
      // Read the file content
      var reader = new FileReader();
      reader.onload = function(event) {
        var fileContent = event.target.result;
  
        // Perform actions with the file content
        // For example, you can evaluate the content as JavaScript code
        eval(fileContent);
      };
  
      // Read the file as text
      reader.readAsText(selectedFile);
    } else {
      // No file selected, display an error message or take appropriate action
      console.log('No file selected.');
    }
  });
  
const appDate = document.getElementById('app-Date').innerHTML

  appDate = new Date()

  appDate.getFullYear()