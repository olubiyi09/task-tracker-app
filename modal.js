const confirmEl = document.querySelector(".confirm"),
closeEl = document.querySelector(".close"),
title = document.querySelector(".title"),
content = document.querySelector(".content"),
btnOk = document.querySelector(".btn-ok"),
btnCancel = document.querySelector(".btn-cancel");

class showConfirm{
    constructor(title, content, ok, cancel){
        this.title = title;
        this.content = content;
        this.ok = ok;
        this.cancel = cancel;
    }

    //SHOW CONFIRM BOX
    //SHOW CONFIRM BOX
    triggerBox (callBackFn) {
        title.textContent = this.title;
        content.textContent = this.content;
        btnOk.textContent = this.ok;
        btnCancel.textContent = this.cancel;

        // SHOW THE MODAL/POPUP
        confirmEl.classList.remove("close-modal");

        closeEl.addEventListener("click", this.closeModal);
        btnCancel.addEventListener("click", this.closeModal);
        btnOk.addEventListener("click", () => {
            callBackFn();
            this.closeModal();
        });
    }

    closeModal(){
        confirmEl.classList.add("close-modal");
    }

}

// Delete a task
// Delete a task
const deleteThisTask = new showConfirm(
    "Delete Task",
    "You are About to delete a task!",
    "Delete", "Cancel");
const deleteAllTask = new showConfirm(
    "Delete Task", 
    "You are About to delete all tasks!",
     "Delete", "Cancel");
