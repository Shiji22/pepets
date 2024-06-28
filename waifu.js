let container = document.getElementById('pic-container');
let url = 'https://api.nekosapi.com/v3/images/random';
function waifuFetch(){
    return new Promise( async function(resolve, reject){
        try{
            let response = await fetch(url);
            let data = await response.json();
            if(response.ok)
            {
                resolve(data);
                console.log("Successfully fetching Waifu");
            }
            else{
                console.log("Oh noooo");
            }
        }
        catch(e){
            reject('Error Fetching Waifu' + e);
        }

    });
}

async function getWaifu(){
    try{
        let waifuu = await waifuFetch();
        createWaifu(waifuu);
    }
    catch(e){
        console.log(e);
    }
}

function createWaifu(waifuData){
    console.log(waifuData);

    for(let x=0; x < waifuData.items.length; x++)
    {
        let items = waifuData.items[x];
        let img = document.createElement('img');
        img.classList.add('waifu-img');
        img.src = items.image_url;
        container.appendChild(img);
    }
}

getWaifu();