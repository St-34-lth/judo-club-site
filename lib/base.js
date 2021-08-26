
this.headerData= {isHomeActive:'active',isMediaActive:'',isNewsActive:''}
this.mainData = {home:true,}
this.user = {location:'home'}

var self = this;
// calendarElmt:'<div id="calendarThis"></div>',calendarScript:"<script src='../../lib/calendar_module/calendar.js'></script>"
var calData ={calendar:true,
          eventList:
          [
                    {
                              resultOutcome:'win',
                              resultName:'Tokyo Olympics',  
                              resultLocation:'Tokyo',
                              resultProps:'links here'
                    },
                    {
                              resultOutcome:'win',
                              resultName:'Tokyo Olympics',  
                              resultLocation:'Tokyo',
                              resultProps:'links here'
                    },
                    {
                              resultOutcome:'win',
                              resultName:'Tokyo Olympics',  
                              resultLocation:'Tokyo',
                              resultProps:'links here'
                    }
          ],

}
function fill_cal()
{
          var calHeader = Handlebars.templates.header(calData)
          document.querySelector('#calHeader').innerHTML += calHeader

          var calFooter = Handlebars.templates.footer()
          document.querySelector('#calFooter').innerHTML += calFooter

          var calMain = Handlebars.templates.main(calData)
          document.querySelector('#calMain').innerHTML += calMain
}

function fill_header(){
          

          var header = Handlebars.compile(document.querySelector('#header').innerHTML);
          headerPartial= Handlebars.registerPartial('headerPartial', header);
          
          var filledHeader = header(self.headerData)
          document.querySelector("#headerTarget").innerHTML = filledHeader;
}

function fill_main()
{
         
          var main = Handlebars.compile(document.querySelector('#main').innerHTML);
          let filledMain = main(self.mainData)
          document.querySelector("#mainTarget").innerHTML = filledMain;
}
 
function fill_footer()
{
          
          var footer = Handlebars.compile(document.querySelector('#footer').innerHTML);
           let filledFooter = footer()
          document.querySelector("#footerTarget").innerHTML = filledFooter;
}

var homeData = { 
          mainList:[
                    {
                              newsUrl:'www.blabla.com',
                              newsTitle:'blabla',
                              backgroundImgUrl:"https://www.eju.net/wp-content/uploads/2021/08/Gabi-Juan-Masters-2021-197408-1024x683.jpg"
                    },
                    {
                              newsUrl:'www.blabla.com',
                              newsTitle:'blabla',
                              backgroundImgUrl:"https://www.eju.net/wp-content/uploads/2021/08/Gabi-Juan-Masters-2021-197408-1024x683.jpg"
                    },
                    {
                              newsUrl:'www.blabla.com',
                              newsTitle:'blabla',
                              backgroundImgUrl:"https://www.eju.net/wp-content/uploads/2021/08/Gabi-Juan-Masters-2021-197408-1024x683.jpg"
                    },
                    {
                              newsUrl:'www.blabla.com',
                              newsTitle:'blabla',
                              backgroundImgUrl:"https://www.eju.net/wp-content/uploads/2021/08/Gabi-Juan-Masters-2021-197408-1024x683.jpg"
                    }
          ],
          leftList:
          [
                 {}   
          ],
          rightList:
          [
                    {}
          ],
          home:true,title:'Athens Dojo Club',welcomeText:"Welcome to the most exclusive Judo Dojo club in the city of Athens! All Judo lovers will feel like their own dojo here.", newsLink:'https://www.eju.net/paralympic-referees-2021-vasiliy-smolin/', newsImage:'https://www.eju.net/wp-content/uploads/2021/08/Gabi-Juan-Masters-2021-197408-1024x683.jpg',dojoImage:'../../assets/images/dicky-dojo.jpg'
}
function fill_home()
{
          var homeHeader = Handlebars.templates.header(homeData)
          document.querySelector('#homeHeader').innerHTML += homeHeader

          var homeFooter = Handlebars.templates.footer()
          document.querySelector('#homeFooter').innerHTML += homeFooter

          var homeMain = Handlebars.templates.main(homeData)
          document.querySelector('#homeMain').innerHTML += homeMain

}

function fill_news()
{
          var homeHeader = Handlebars.templates.header()
          document.querySelector('#newsHeader').innerHTML += homeHeader

          var homeFooter = Handlebars.templates.footer()
          document.querySelector('#newsFooter').innerHTML += homeFooter

          var homeMain = Handlebars.templates.main({ news: true })
          document.querySelector('#newsMain').innerHTML += homeMain
}
var mediaData = 
     { 
          media: true,
          media1:'<img src="./assets/images/teams.jpg" width="500" height="350" alt="">',
          media2:'<img src="./assets/images/media_example.jpg" width="500" height="350">',
          media3:'<img src="./assets/images/media_3.jpg" width="500" height="350">',
          media4:'<img src="./assets/images/media_4.jpg" width="500" height="350">'
          }
function fill_media()
{
          
          let mediaHeader = Handlebars.templates.header()
          document.querySelector('#mediaHeader').innerHTML += mediaHeader

          let mediaMain = Handlebars.templates.main(mediaData)
          document.querySelector('#mediaMain').innerHTML += mediaMain

          let mediaFooter = Handlebars.templates.footer()
          document.querySelector('#mediaFooter').innerHTML += mediaFooter
}

var joinData = 
{
          join:true,
          title:'',
          welcomeText: 'Welcome to the most exclusive Dojo in Athens for Judo lovers! If you wish to join us, click below.'
}
function fill_join()
{
          let joinHeader = Handlebars.templates.header()
          document.querySelector('#joinHeader').innerHTML += joinHeader

          let joinMain = Handlebars.templates.main(joinData)
          document.querySelector('#joinMain').innerHTML += joinMain

          let joinFooter = Handlebars.templates.footer()
          document.querySelector('#joinFooter').innerHTML += joinFooter   
}

//  <img id='main-image' src='./assets/images/Home_intro.jpg' class='img-fluid'></img>

function playHomeVideo(url)
{
          let container = document.querySelector('#main-image-container')
          let vidElmnt = document.createElement('video')
          let vid='../assets/0-02-0a-975b369384235524651a89e42c1e4add3bed4d33f346a3bbfdbb758d6acf8bf4_3efb72baecf22c51.mp4'
          vidElmnt.setAttribute('src',vid)
          container.appendChild(vidElmnt)
          
}

// const scrollElements = document.querySelectorAll(".news-col");
// console.log(scrollElements);
// const elementInView = (el, scrollOffset = 0) => {
//   const elementTop = el.getBoundingClientRect().top;
//   return (
//     elementTop <=
//     (window.innerHeight || document.documentElement.clientHeight) - scrollOffset
//   );
// };
// const handleScrollAnimation = () => {
//   scrollElements.forEach((el) => {
//     if (elementInView(el, 300)) {
//       console.log("Element in view");
//       displayScrollElement(el);
//     }
//   });
// };
// const displayScrollElement = (element) => {
//   element.classList.add("scrolled");
// };
// window.addEventListener("scroll", () => {
//   handleScrollAnimation();
// });
