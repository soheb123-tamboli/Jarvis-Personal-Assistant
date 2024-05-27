var data= {
    chatinit:{
        title: ["Hello <span class='emoji'> &#128075;</span>","I am Jarvis. Chatbot","How can I help you?"],
        options: ["Movies <span class='emoji'> &#128250;</span>","News ","Shopping <span class='emoji'> &#128090;</span>","Music <span class='emoji'> &#127925;</span>"]
    },
    movies: {
        title:["Please select category"],
        options:['Hollywood','Bollywood','Web Series','Others'],
        url : {
            
        }
    },
    
    news: {
        title:["Today's Top 5 Headlines"],
        options:["Tamil Nadu moves Supreme Court, accuses Kerala of obstructing work on Mullaperiyar dam while ‘crying foul’ about its safety","PIL filed in Delhi High Court against use of deepfake technologies in political campaign for Lok Sabha, Assembly elections","The rare green comet will make its closest pass of Earth between February 1 and February 2, according to NASA."],
        url : {
            more:"https://www.thehindu.com/",
            link:["https://timesofindia.indiatimes.com/","https://www.hindustantimes.com/","https://www.business-standard.com/todays-paper","https://www.hindustantimes.com/"]
        }
    },
    shopping: {
        title:["Thanks for your response","Welcome to shopping zone <span class='emoji'> &#128090;</span>","Please select one of the below options to proceed further"],
        options:['Electronics','Beauty products','Mobiles','Men Fashion','Women fashion'],
        url : {
            
        }
    },
    electronics: {
        title:["Thanks for your response","Here are some electronic items for you","Click on it to know more"],
        options:['Televisions','Cameras','Gaming Consoles','Headphones','Speakers'],
        url : {
            more:"https://www.flipkart.com/",
            link:["https://www.amazon.in/s?k=television&crid=2TML58PQ742CQ&sprefix=televis%2Caps%2C265&ref=nb_sb_ss_ts-doa-p_2_7","https://www.amazon.in/s?k=cameras&crid=3BJF84IY7MVOZ&sprefix=cameras%2Caps%2C277&ref=nb_sb_ss_ts-doa-p_2_7","https://www.amazon.in/s?k=Gaming+Consoles&crid=X578503R6KAE&sprefix=gaming+consoles%2Caps%2C253&ref=nb_sb_noss_1","https://www.amazon.in/s?k=headphones&crid=TPF9M0PO3SSJ&sprefix=Headphones%2Caps%2C232&ref=nb_sb_ss_ts-doa-p_1_10","https://www.amazon.in/s?k=Speakers&crid=2H97TABQTCE81&sprefix=speakers%2Caps%2C257&ref=nb_sb_noss_1"]
        }
    },
    beauty: {
        title:["Thanks for your response","Here are some beauty products for you","Click on it to know more"],
        options:['Make-up & Nails','Skin Care','Fragrance','Hair care'],
        url : {
            more:"https://www.flipkart.com/",
            link:["https://www.amazon.in/s?k=Make-up+%26+Nails&crid=HQACKA4RC9EV&sprefix=make-up+%26+nails%2Caps%2C385&ref=nb_sb_noss_2","https://www.amazon.in/s?k=Skin+Care&crid=2WCXMXN5Z2L7U&sprefix=skin+care%2Caps%2C249&ref=nb_sb_noss_1","https://www.amazon.in/s?k=Fragrance&crid=46424E8GJJ80&sprefix=fragrance%2Caps%2C181&ref=nb_sb_noss_1","https://www.amazon.in/s?k=Hair+care&ref=nb_sb_noss"]
        }
    },
    mobiles: {
        title:["Thanks for your response","These are some results based on your input","Click on it to know more"],
        options:['Mobile Phones','Cases & Covers','Power Banks','Tablets'],
        url : {
            more:"https://www.flipkart.com/",
            link:["https://www.amazon.in/s?k=mobile+phones&crid=2NF887Q4OLJ1X&sprefix=mobile+phone%2Caps%2C261&ref=nb_sb_noss_1","https://www.amazon.in/s?k=Cases+%26+Covers&crid=6UOP1FRXV7GS&sprefix=cases+%26+covers%2Caps%2C335&ref=nb_sb_noss_1","https://www.amazon.in/s?k=Power+Banks&crid=1KC35ZUZ5T28U&sprefix=power+banks%2Caps%2C327&ref=nb_sb_noss_1","https://www.amazon.in/s?k=Tablets&crid=24UKIS57P4FW0&sprefix=tablets%2Caps%2C261&ref=nb_sb_noss_2"]
        }
    },
    men: {
        title:["Thanks for your response","These are some results based on your input","Click on it to know more"],
        options:['Clothing','Shirts','T-shirts','Innerwear','Jeans'],
        url : {
            more:"https://www.flipkart.com/",
            link:["https://www.amazon.in/s?k=Clothing+for+men&crid=30SP5TC3RIXNB&sprefix=clothing+for+me%2Caps%2C345&ref=nb_sb_noss_2","https://www.amazon.in/s?k=shirts+for+men&crid=B8TUUUZZOLN3&sprefix=Shirts%2Caps%2C339&ref=nb_sb_ss_ts-doa-p_2_6","https://www.amazon.in/s?k=t-shirts+for+men&crid=1USY3XYEWH10C&sprefix=T-shirts+%2Caps%2C235&ref=nb_sb_ss_ts-doa-p_1_9","https://www.amazon.in/s?k=innerwear+men&crid=34AGUHYLXLQW9&sprefix=Innerwear%2Caps%2C373&ref=nb_sb_ss_ts-doa-p_1_9","https://www.amazon.in/s?k=jeans+for+men&crid=QOSUM2KSS7B6&sprefix=Jeans+%2Caps%2C317&ref=nb_sb_ss_ts-doa-p_1_6"]
        }
    },
    women: {
        title:["Thanks for your response","These are some results based on your input","Click on it to know more"],
        options:['Clothing','Western Wear','Ethnic Wear','Top Brands'],
        url : {
            more:"https://www.flipkart.com/",
            link:["https://www.amazon.in/s?k=clothing+set+for+women&crid=3DQPSOT85514P&sprefix=Clothing%2Caps%2C267&ref=nb_sb_ss_ts-doa-p_3_8","https://www.amazon.in/s?k=Western+Wear&crid=3CP7AEDIFWZQJ&sprefix=western+wear%2Caps%2C336&ref=nb_sb_noss_1","https://www.amazon.in/s?k=Ethnic+Wear&crid=12O2LJ7XU7REZ&sprefix=ethnic+wear%2Caps%2C281&ref=nb_sb_noss_1","https://www.amazon.in/s?k=Top+Brands+women+clothes&crid=3CYPEIMX4JN64&sprefix=top+brands+women+clothes%2Caps%2C336&ref=nb_sb_noss_2"]
        }
    },
    music: {
        title:["These are some latest songs <span class='emoji'> &#127925;</span>"],
        options: ["song 1","song 2","song 3","song 4","song 5"],
        url : {
            more:"https://www.youtube.com/channel/UCGzzga499Hr2AB1btQ3XtoQ",
            link:["https://www.youtube.com/channel/UCq-Fj5jknLsUf-MWSy4_brA","#","#","#"]
        }
    },
    hollywood: {
        title: ["Thanks for your response","Here are some genre based movies"],
        options: ["Comedy","Horror","Sci-Fi","Romance","Action"],
        url: {
            more:"https://www.youtube.com/@webhub/videos",
            link:["#","#","#","#","#"]
        }
    },
    bollywood: {
        title: ["Thanks for your response","Here are some genre based movies"],
        options: ["Comedy","Horror","Sci-Fi","Romance","Action"],
        url: {
            more:"https://www.youtube.com/@webhub/videos",
            link:["#","#","#","#","#"]
        }
    },
    web: {
        title: ["Thanks for your response","Here are some genre based web series"],
        options: ["Comedy","Horror","Sci-Fi","Romance","Action"],
        url: {
            more:"https://www.youtube.com/@webhub/videos",
            link:["#","#","#","#","#"]
        }
    },
    others: {
        title: ["Here are some more options for you"],
        options: ["YouTube","Netflix","Amazon Prime","Hot Star"],
        url: {
            more:"https://www.youtube.com/",
            link:["#","#","#","#","#"]
        }
    },

}

document.getElementById("init").addEventListener("click",showChatBot);
var cbot= document.getElementById("chat-box");

var len1= data.chatinit.title.length;

function showChatBot(){
    console.log(this.innerText);
    if(this.innerText=='START CHAT'){
        document.getElementById('test').style.display='block';
        document.getElementById('init').innerText='CLOSE CHAT';
        initChat();
    }
    else{
        location.reload();
    }
}

function initChat(){
    j=0;
    cbot.innerHTML='';
    for(var i=0;i<len1;i++){
        setTimeout(handleChat,(i*500));
    }
    setTimeout(function(){
        showOptions(data.chatinit.options)
    },((len1+1)*500))
}

var j=0;
function handleChat(){
    console.log(j);
    var elm= document.createElement("p");
    elm.innerHTML= data.chatinit.title[j];
    elm.setAttribute("class","msg");
    cbot.appendChild(elm);
    j++;
    handleScroll();
}

function showOptions(options){
    for(var i=0;i<options.length;i++){
        var opt= document.createElement("span");
        var inp= '<div>'+options[i]+'</div>';
        opt.innerHTML=inp;
        opt.setAttribute("class","opt");
        opt.addEventListener("click", handleOpt);
        cbot.appendChild(opt);
        handleScroll();
    }
}

function handleOpt(){
    console.log(this);
    var str= this.innerText;
    var textArr= str.split(" ");
    var findText= textArr[0];
    
    document.querySelectorAll(".opt").forEach(el=>{
        el.remove();
    })
    var elm= document.createElement("p");
    elm.setAttribute("class","test");
    var sp= '<span class="rep">'+this.innerText+'</span>';
    elm.innerHTML= sp;
    cbot.appendChild(elm);

    console.log(findText.toLowerCase());
    var tempObj= data[findText.toLowerCase()];
    handleResults(tempObj.title,tempObj.options,tempObj.url);
}

function handleDelay(title){
    var elm= document.createElement("p");
        elm.innerHTML= title;
        elm.setAttribute("class","msg");
        cbot.appendChild(elm);
}


function handleResults(title,options,url){
    for(let i=0;i<title.length;i++){
        setTimeout(function(){
            handleDelay(title[i]);
        },i*500)
        
    }

    const isObjectEmpty= (url)=>{
        return JSON.stringify(url)=== "{}";
    }

    if(isObjectEmpty(url)==true){
        console.log("having more options");
        setTimeout(function(){
            showOptions(options);
        },title.length*500)
        
    }
    else{
        console.log("end result");
        setTimeout(function(){
            handleOptions(options,url);
        },title.length*500)
        
    }
}

function handleOptions(options,url){
    for(var i=0;i<options.length;i++){
        var opt= document.createElement("span");
        var inp= '<a class="m-link" href="'+url.link[i]+'">'+options[i]+'</a>';
        opt.innerHTML=inp;
        opt.setAttribute("class","opt");
        cbot.appendChild(opt);
    }
    var opt= document.createElement("span");
    var inp= '<a class="m-link" href="'+url.more+'">'+'See more</a>';

    const isObjectEmpty= (url)=>{
        return JSON.stringify(url)=== "{}";
    }

    console.log(isObjectEmpty(url));
    console.log(url);
    opt.innerHTML=inp;
    opt.setAttribute("class","opt link");
    cbot.appendChild(opt);
    handleScroll();
}

function handleScroll(){
    var elem= document.getElementById('chat-box');
    elem.scrollTop= elem.scrollHeight;
}