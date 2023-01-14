const functionApi = '';

const getVisitCount = () =>{
        let count = 30;
        fetch(functionApi).then(resonse =>{
            return Response.json()
        }).then(response =>{
            console.log("website called fucntion API.");
            count = response.count;
            document.getElementById("counter").innerText = count;
        }
            )

}