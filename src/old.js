axios.get("https://s3.amazonaws.com/v-school/data/hitlist.json").then(response=>{
    console.log(response.data);
    for(let i = 0; i < response.data.length; i++){
        createTodo(response.data[i])
    }
})

