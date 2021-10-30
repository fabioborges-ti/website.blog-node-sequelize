$(document).ready(function() {
  
  tinymce.init({
    selector: "#content",
    plugins: ['autolink link image lists print preview hr  fullscreen media save table paste emoticons advlist searchreplace wordcount'],
    language: 'pt_BR',
  });
  
});

function ConfirmDelete(urlPath)
{
  if (!confirm("Are you sure you want to delete?")) {
     return false;
  }

  window.location.href = urlPath;
}
