const addTaskDiv = document.querySelector(".add-btn"),
    plusIcon = document.querySelector(".fa-plus"),
    closeIcon = document.querySelector(".fa-times"),
    taskFormDiv = document.querySelector(".task-form"),
    taskForm = document.querySelector("form"),
    tasksEl = document.querySelector(".tasks"),
    totalTask = document.querySelector(".total-task");


    const taskDate = document.getElementById("task-date"),
        tasktext = document.getElementById("task-txt"),
        addTaskBtn = document.getElementById("add-task"),
        clearBtn = document.getElementById("clear-btn");


        //display form when the plus icon is clicked
        //display form when the plus icon is clicked
        //display form when the plus icon is clicked

        addTaskDiv.addEventListener("click", formDisplay);

        function formDisplay(e){
            if(e.target.classList.contains("fa-plus")){
                showForm();
            }

            if(e.target.classList.contains("fa-times")){
                hideForm();
                taskForm.reset();
            }
        }

        //to show form
        function showForm() {
            taskFormDiv.style.top = 0;
            plusIcon.style.display = "none";
            closeIcon.style.display = "block";
        }

        //to hide the form
        function hideForm() {
            taskFormDiv.style.top = "-100%";
            plusIcon.style.display = "block";
            closeIcon.style.display = "none";
        }


        //to get item from the local storage
        function getTasks() {
            let tasks = localStorage.getItem("tasks");
            if(tasks == null){
                tasksObj = [];
            } else {
                tasksObj = JSON.parse(tasks);
            }
        }


        //FORM VALIDATION
        //FORM VALIDATION
        //FORM VALIDATION
        addTaskBtn.addEventListener("click", (e) => {
            e.preventDefault();

            if(taskDate.value == "" || tasktext.value == ""){
                return alert("Please add task date and text!!!");
            }

            //Get task from the local storge
            getTasks();

            let myObj = {
                date: taskDate.value,
                text: tasktext.value,
                completed: false,
            }

            tasksObj.push(myObj);

            localStorage.setItem("tasks", JSON.stringify(tasksObj));


            showTask();
            hideForm();
            taskForm.reset();

        })

        function showTask(){
            tasksEl.innerHTML = "";
            getTasks();
            if(tasksObj.length == 0){
                tasksEl.innerHTML = "<p>No task added, please add some task...</p>";
            }


            tasksObj.forEach(function(task, index) {
                let taskItem = document.createElement("div");
                let taskContent = document.createElement("div");
                let taskIcons = document.createElement("div");
                taskItem.classList.add("task");
                taskContent.classList.add("task-content");
                taskIcons.classList.add("task-icons");


                taskContent.innerHTML = `
                <p class="task-date">${task.date}</p>
                <span class="task-index">${index + 1}</span>
                <p class="task-text">${task.text}</p>
                <p class="hidden">${task.completed}</p>
              `;

              taskIcons.innerHTML = `    
              <i class="fas fa-check" id="${index}" onclick="compeleteTask(this.id)"></i>
              <i class="fas fa-edit" id="${index}" onclick="editTask(this.id)"></i>
              <i class="fas fa-trash-alt" id="${index}" onclick="deleteTask(this.id)"></i>`;
           
              taskItem.appendChild(taskContent);
              taskItem.appendChild(taskIcons);

              
              if(tasksObj.length != 0){
                tasksEl.appendChild(taskItem);

                
            }
            });


            // console.log(tasksEl);

            
            
            tasksObj.length > 1 ? totalTask.innerHTML = `${tasksObj.length} tasks`:
            totalTask.innerHTML = `${tasksObj.length} task`;


        }

        


        function deleteTask(index){
            const confirmDel = confirm("Delete this Task");
            if(confirmDel){
                getTasks();
                tasksObj.splice(index, 1);
                localStorage.setItem("tasks", JSON.stringify(tasksObj));
                showTask();
            }
        }


        showTask();
        

     