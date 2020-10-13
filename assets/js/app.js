var taskNo = 0
$(document).ready(function () {
    
    $("#addTask").click(function (e) { 
        e.preventDefault();
        let taskDetail = $("#task").val();
        if(taskDetail !== "")
        {
            let template = $("#template").html();
            let rendered = Mustache.render(template, { taskNo: ++taskNo , taskDetail: taskDetail});
            $("#to-do").prepend(rendered); 
            $("#task").val("");
        }
        else{
            Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'please provide a task detail'
                // footer: '<a href>Why do I have this issue?</a>'
            })
        }

    });
});

function deleteTask(target)
{
    --taskNo;
    $('#'+$(target).data("id")).addClass("d-none");
}

function taskDone(target)
{
    let checkIcon  =  '#'+$(target).data("id")+ " .fa-check-square"
    $(checkIcon).toggleClass("d-none");
}