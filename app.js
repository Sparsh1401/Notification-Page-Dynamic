const res = await fetch("data.json");
const data = await res.json();
let number=0;

    for(let i=0; i<data.length; i++){
        //Card
        const card = document.createElement("div");
        card.setAttribute("class","notificationCard");
        //Avatar
        const avatar = document.createElement("img");
        avatar.setAttribute("src",data[i].avatar);
        avatar.setAttribute("alt","avatar");
        avatar.setAttribute("class","user");
    
        //Content
        const content = document.createElement("div");
        content.setAttribute("class","content");
        
    
        //Whole Content
        const span = document.createElement("span");
        span.setAttribute("class","spanContent");
        // span.append(avatar);
    
        //Name
        const name = document.createElement("span");
        name.setAttribute("class","userName");
        name.innerText = data[i].name;
        span.appendChild(name);
    
        //Activity
        const activity = document.createElement("span");
        activity.setAttribute("class","activity");
        activity.innerText = data[i].info;
        span.appendChild(activity);
    
        //NameInfo
        const nameInfo = document.createElement("span");
        nameInfo.setAttribute("class","nameInfo");
    
        if(data[i].nameInfo)
        {
            nameInfo.innerText=data[i].nameInfo;
            span.appendChild(nameInfo);
        }
        const ball = document.createElement("div")
        ball.setAttribute("class", "ball")

        if(data[i].type)
        {
            number++;
            card.setAttribute("id","unread");
            span.appendChild(ball);
        }
        

        const pCreatedAt = document.createElement("p");
        pCreatedAt.setAttribute("class","time"); 
        pCreatedAt.innerText=data[i].createdAt;
        span.appendChild(pCreatedAt);

        content.appendChild(span);
        card.appendChild(avatar);
        card.appendChild(content);

        if(data[i].picture)
        {
            const secondAvatar = document.createElement("img");
            secondAvatar.setAttribute("src",data[i].picture);
            secondAvatar.setAttribute("alt","secondAvatar");
            secondAvatar.setAttribute("class","secondAvatar");
            card.appendChild(secondAvatar);
        }

         //  message(some cases)
         if(data[i].message){
            const message = document.createElement("section");
            message.setAttribute("class","message");
            message.innerText=data[i].message;
            span.appendChild(message);
        }

        

        document.querySelector("main").appendChild(card);

        if(data[i].nameInfo == " Chess Club"){
            nameInfo.setAttribute("class","chess");
        }   
    }
    const arr = document.querySelectorAll("#unread");
    console.log(arr);
    document.querySelector(".tick").addEventListener("click",() => {
        arr.forEach(element => {
            element.style="background-color:#ffffff";
        })
        const allBalls = document.querySelectorAll('.ball');
        allBalls.forEach(element => {
            element.remove();
        })
    })
    

    document.querySelector(".tick").addEventListener("click",() => {
        document.querySelector(".number").innerText=0;
    })

    document.querySelector(".number").innerText=number;