var blogpost = document.querySelector('.blogpost-form')
var startNewBlogpost = document.querySelector('.startNewBlogpost')

var startNewBlogpostClicked = true;

function startBlogpost(){
    startNewBlogpost.classList.add('invisible')
    blogpost.classList.remove('invisible')
}

if (startNewBlogpost){
    startNewBlogpost.addEventListener('click', startBlogpost);
}




if(blogpost){
 
    const postBlogpost = async (event) => {
    event.preventDefault();
     
    const title = document.querySelector('#blogpost-title').value.trim();
    const body = document.querySelector('#blogpost-body').value.trim();
    //const username = document.querySelector('#username').value.trim();
    //const userID = document.querySelector('#ID').value.trim();
    
    
    let submitPost = document.querySelector('#submit-post');
    submitPost.addEventListener('click', postBlogpost);

    if (title && body) {
      const response = await fetch('/api/blogpost', {
        method: 'POST',
        body: JSON.stringify({ title, body }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        //document.location.replace('/');
        console.log('posted succesfully!')
      } else {
        alert('Failed to post.');
        console.log('post failed')
      }
    }
  };
};






  