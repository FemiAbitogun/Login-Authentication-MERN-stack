  

  fetch('http://localhost:9000/user/reg/fetchData', {
  method: "GET",
  headers: {"Content-type": "application/json;charset=UTF-8"}
})
.then(response => response.json()) 
.then(data =>{

 
    fetch('http://localhost:9000/user/reg/register', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      })
      .then(response => response.json()) 
      .then(json => console.log(data));
    

}); 
