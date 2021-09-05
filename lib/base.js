
this.headerData= {isHomeActive:'active',isMediaActive:'',isNewsActive:''}
this.mainData = {home:true,}
this.user = {location:'home'}

var self = this;
// calendarElmt:'<div id="calendarThis"></div>',calendarScript:"<script src='../../lib/calendar_module/calendar.js'></script>"
var calData ={results:true,
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

          searchParams:
          [
                    
                    {
                              
                              
                              categories:[ '-48','-52','-57','-63','-70','-78','+78'],
                              months:['January','February','March','April','May','June','July','August','September','October','December'],
                              types:['olympics'],
                              years:[2021,2020,2019,2018,2017]
          
                              
                    },
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
// function orderFill(columnLocation)
// {
//           let viewPortWidth=window.innerWidth
//           var order 
//           this.decider = function() {if(columnLocation==='left')
//           {
//                     order = 'order-3'
//           }
//           else if (columnLocation=='right')
//           {
//                     order='order-2'
//           }
//           else 
//           {
//                     order='order-1'
//           }}

          
//           order=`${order}`
//           if(viewPortWidth<=576) return order
//           return order=''
          
// }
var homeData = { 
          
          mainList:[
                    {
                              mainListItem:"<video height='85%;' width='600px;'src='../assets/0-02-0a-975b369384235524651a89e42c1e4add3bed4d33f346a3bbfdbb758d6acf8bf4_3efb72baecf22c51.mp4' controls></video>"
                              // newsTitle:'blabla',
                              // backgroundImgUrl:"https://www.eju.net/wp-content/uploads/2021/08/Gabi-Juan-Masters-2021-197408-1024x683.jpg"
                    },
                    {
                              mainListItem:'<iframe width="80%;" height="85%;" src="https://www.youtube.com/embed/Zy7bRVk5hP0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
                    }
                    

                    
                    
                              
                            
                   
                                       
                             
                    
                    
          ],
          anchorItems:
          [
                    {
                              anchorRef:'https://www.judo-ch.jp/english/knowledge/technique/',
                              anchorUrl:'https://www.judo-ch.jp/english/knowledge/technique/image/img_04.gif',
                              anchorText:'blabla'
                    }
          ],
          
          leftList:
          [
                    {
                              
                              leftItemImg:"https://3yryua3n3eu3i4gih2iopzph-wpengine.netdna-ssl.com/wp-content/uploads/2016/07/kano/kano14.jpg",
                              leftItemimgAltTxt:'',
                              leftItemTitle:'History of Judo',
                              imgHeight:"300px;",
                              imgWidth:"300px;",
                              itemContent:
                              [
                                  {item:'<a href="https://judoinfo.com/jhist4/"class="card-text"> History</a>'}      
                              ]

                    },
                    {
                              
                              leftItemImg:"",
                              leftItemimgAltTxt:'',
                              leftItemTitle:'Rules of Judo',
                              itemContent:
                              [
                                        {item:''}
                              ]

                    },
                    {
                              
                              leftItemImg:"",
                              leftItemimgAltTxt:'',
                              leftItemTitle:'Techniques of Judo',
                              itemContent:
                              [
                                        {item:''}
                              ]

                    },
          ],
          rightList:
          [
                    {
                              
                              
                              rightItemTitle:'Social Media',
                              
                              itemContent:
                              [
                                        {item:`<a href='https://www.instagram.com/'><img alt='social media instagram link'src="./assets/images/bootstrap-icons/instagram.svg" width='24' height='24'></a>`},
                                        {item:`<a href='https://www.facebook.com/'><img alt='social media facebook link' src="./assets/images/bootstrap-icons/facebook.svg" width='24' height='24'></a>`}
                              ]
                    },
                    {
                              rightItemImg:"",
                              rightItemImgAltTxt:'',
                              rightItemTitle:'Featured Event',
                              itemContent:
                              [
                                        {item:'Tokyo Olympics'}
                              ]
                              
                    },
                    {
                             
                              rightItemTitle:'Popular Links',
                              itemContent:
                              [ 
                                        {item:'<a href="https://hjf.gr/"><img alt="Hellenic judo federation icon/link" width="96" height="96"src="../assets/images/greek logo.png"></a>'},
                                        {item:'<a href="https://ijf.com"><img alt="international judo federation icon/link" width="96" height="96" src="../assets/images/AppIcon98x98@2x.png"></a>'},
                                        {item:'<a href="https://www.eju.net/"><img alt="european judo federation icon/link" width="100px;" style="border-radius:50px" src="../assets/images/eju.png"> </a>'},
                                         
                              ]
                    },
                    {
                              rightItemImg:'',
                              rightItemImgAltText:'...',
                              rightItemTitle:'Events',
                              itemContent:
                              [ 
                                       
                              ]
                    },
                    {
                              rightItemImg:'',
                              rightItemImgAltText:'...',
                              rightItemTitle:'Calendar',
                              itemContent:
                              [ 
                                       
                              ] 
                    },
                    {
                              rightItemImg:'',
                              rightItemImgAltText:'...',
                              rightItemTitle:'World Rankings',
                              itemContent:
                              [ 
                                       
                              ]
                    },
                    
                            
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
var newsData=
{
          newsList:
          [
                    {
                              
                              newsImgSrc:'../assets/images/_yoshida.jpg',
                              newsDate:'11/10/21',
                              newsHeadline:'Yoshida does it again!',
                              newsLink:'https://www.judoinside.com/news/2757/Hidehiko_Yoshida_is_an_all_time_legendary_stylist',
                              readMoreImgSrc:'../assets/images/arrow-right-circle-fill.svg'
                    },
                    {newsImgSrc:'../assets/images/_yoshida.jpg',
                     newsDate:'11/10/21',
                              newsHeadline:'Yoshida does it again!',
                              newsLink:'https://www.judoinside.com/news/2757/Hidehiko_Yoshida_is_an_all_time_legendary_stylist',
                              readMoreImgSrc:'../assets/images/arrow-right-circle-fill.svg'},
                    {newsImgSrc:'../assets/images/_yoshida.jpg',
                    newsDate:'11/10/21',
                              newsHeadline:'Yoshida does it again!',
                              newsLink:'https://www.judoinside.com/news/2757/Hidehiko_Yoshida_is_an_all_time_legendary_stylist',
                              readMoreImgSrc:'../assets/images/arrow-right-circle-fill.svg'},
                              {newsImgSrc:'../assets/images/_yoshida.jpg',
                              newsDate:'11/10/21',
                              newsHeadline:'Yoshida does it again!',
                              newsLink:'https://www.judoinside.com/news/2757/Hidehiko_Yoshida_is_an_all_time_legendary_stylist',
                             readMoreImgSrc:'../assets/images/arrow-right-circle-fill.svg'}
                    
                   
          ],
          // rightNewsList:
          // [
          //           {
          //                     rightNewsItem:'lorem10'
          //           }
          // ],
          // centreNewsList:
          // [
          //           {
          //                     centreNewsItem:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, soluta.'
          //           },
          // ],
          news:true
}
function fill_news()
{
          var homeHeader = Handlebars.templates.header()
          document.querySelector('#newsHeader').innerHTML += homeHeader

          var homeFooter = Handlebars.templates.footer()
          document.querySelector('#newsFooter').innerHTML += homeFooter

          var homeMain = Handlebars.templates.main(newsData)
          document.querySelector('#newsMain').innerHTML += homeMain
}
var mediaData = 
     { 
          media: true,
          mediaList: 
          [
                    { mediaItem:'<img class="rounded-3" src="./assets/images/teams.jpg"  alt="">',
                    mediaTitle:'Photographs'
                    },
                    {
                              mediaItem:'<img class="rounded-3"  src="./assets/images/media_example.jpg" ">',
                              mediaTitle:'Videos'
                    },
                    {
                              mediaItem:'<img  class="rounded-3" src="./assets/images/media_3.jpg" >',
                              mediaTitle:'Interviews'
                    },
                    { 
                              mediaItem:'<img class="rounded-3"  src="./assets/images/media_4.jpg" >',
                              mediaTitle:'Sketches'
                    }
          ]
        
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
