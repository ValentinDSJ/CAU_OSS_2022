let rank_x = 0;

function storeRanking(){
    let i = 0;
    while(localStorage.getItem("rankData"+i)){
        i++;
    }
    localStorage.setItem("rankData"+i,JSON.stringify({
        name : "jh", 
        score : score, 
        snake : snake, 
        apple : apple, 
        date : start
    }));
    rank_x++;
}

function viewRanking(){
    rankData = [];
    let i = 0;
    while(localStorage.getItem("rankData"+i)){
        rankData.push(JSON.parse(localStorage.getItem("rankData"+i)));
        i++;
    }
    i--;
    let k = 1;
    rankData.sort(sortJson());
    while (i >= 0){
        let rankList = document.querySelector("#rank_list");
        let li = document.createElement("li");
        let spanRank = document.createElement("span");
        let spanName = document.createElement("span");
        let spanScore = document.createElement("span");
        let spanTime = document.createElement("span");
        let spanApple = document.createElement("span");
        let spanDate = document.createElement("span");

        li.id="rankData"+i;
        spanRank.innerText = (k)+"위";
        spanName.innerText = rankData[k-1].name;
        spanScore.innerText = rankData[k-1].score;
        spanTime.innerText = rankData[k-1].time;
        spanApple.innerText = rankData[k-1].apple;
        spanDate.innerText = rankData[k-1].date;

        li.appendChild(spanRank);
        li.appendChild(spanName);
        li.appendChild(spanScore);
        li.appendChild(spanTime);
        li.appendChild(spanApple);
        li.appendChild(spanDate);
        rankList.appendChild(li);

        //test console
        console.log(rankData[k-1]);
        i--;
        k++;
    }
}

function sortJson(){
    return function(a,b){
        if (a.Score < b.Score){
            return 1;
        } else if (a.Score >= b.Score){
            return -1;
        }
    }
}