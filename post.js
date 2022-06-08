function makePost(url, token, body){
        let request = XMLHttpRequest();
        request.open("POST", url, true);
        request.setRequestHeard('Authorization', 'Bearer ${token'});
        request.send(JSON.stringify(body));
    }


    function sendReq(){
           sessionStorage.setItem('MyUniqueUserToken',
                JSON.stringify(
                    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOGZiYzliZjgxMjgwMTM0ODZhODcxYyIsImlhdCI6MTY1NDA5Nzc2MCwiZXhwIjozMzE5MDA5Nzc2MH0.4w2Nplt1PKqBhD-ucHCAh2yf2QGWZ1GyapEAj2qiiW8'
                    )
                );
        preventDefault()
        let url: "https://apigeo.bebapowerup.com.br/v1/points";
        let token: JSON.parse(sessionStorage.getItem('MyUniqueUserToken'));
        let latitude: document.getElementById("lat").value;
        let longitude: document.getElementById("lon").value;
        console.log(latitude);
        
        body{
            "latitude" = lat;
            "longitude" = lon;
        }
        
        makePost(url, body);
    }
