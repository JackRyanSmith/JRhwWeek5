$(function(){
    $(".saveBtn").on("click",function(){
        var note = $(this).siblings("textarea").val()
        var noteId = $(this).siblings("textarea").attr("id")
        localStorage.setItem(noteId, note)

    })
    $("textarea").each(function(){
        var noteId = $(this).attr("id")
        $(this).val(localStorage.getItem(noteId))
    })

})
