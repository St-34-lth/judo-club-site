
this.headerData= {isHomeActive:'active',isMediaActive:'',isNewsActive:''}
this.mainData = {home:true,}
this.user = {location:'home'}

var self = this;
function form_validation()
{
          var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
          Array.prototype.slice.call(forms)
          .forEach(function (form) 
          {
                    form.addEventListener('submit', function (event) 
                    {
                              if (!form.checkValidity()) 
                              {
                                        event.preventDefault()
                                        event.stopPropagation()
                              }

                              form.classList.add('was-validated')
                    }, 
          false)
          })
}
var resultsData ={results:true,
          eventList:
          [
                    {
                              
                              eventName:'Tokyo Olympics',  
                              eventLocation:'Tokyo',
                              eventLinks:'links here'
                    },
                    {
                               eventName:'Tokyo Olympics',  
                              eventLocation:'Tokyo',
                              eventLinks:'links here'
                    },
                    {
                               eventName:'Tokyo Olympics',  
                              eventLocation:'Tokyo',
                              eventLinks:'links here'
                    },
                    {
                              
                              eventName:'Tokyo Olympics',  
                              eventLocation:'Tokyo',
                              eventLinks:'links here'
                    },
                    {
                              
                              eventName:'Tokyo Olympics',  
                              eventLocation:'Tokyo',
                              eventLinks:'links here'
                    },
                    {
                              
                              eventName:'Tokyo Olympics',  
                              eventLocation:'Tokyo',
                              eventLinks:'links here'
                    },
                    {
                              
                              eventName:'Tokyo Olympics',  
                              eventLocation:'Tokyo',
                              eventLinks:'links here'
                    },{
                              
                              eventName:'Tokyo Olympics',  
                              eventLocation:'Tokyo',
                              eventLinks:'links here'
                    },{
                              
                              eventName:'Tokyo Olympics',  
                              eventLocation:'Tokyo',
                              eventLinks:'links here'
                    },{
                              
                              eventName:'Tokyo Olympics',  
                              eventLocation:'Tokyo',
                              eventLinks:'links here'
                    },
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
function fill_results()
{
          var resultsHeader = Handlebars.templates.header(resultsData)
          document.querySelector('#resultsHeader').innerHTML += resultsHeader

          var resultsFooter = Handlebars.templates.footer()
          document.querySelector('#resultsFooter').innerHTML += resultsFooter

          var resultsMain = Handlebars.templates.main(resultsData)
          document.querySelector('#resultsMain').innerHTML += resultsMain
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
                            
                    },
                    {
                              mainListItem:'<iframe width="80%;" height="85%;" src="https://www.youtube.com/embed/Zy7bRVk5hP0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
                    },
                    {
                              mainListItem:'<iframe width="80%" height="85%" src="https://www.youtube.com/embed/2DQ1lTR1B8Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
                    }
                   
                    

                    
                    
                              
                            
                   
                                       
                             
                    
                    
          ],
          anchorItems:
          [
                    {
                              anchorRef:'https://www.judo-ch.jp/english/knowledge/technique/',
                              anchorUrl:'https://www.judo-ch.jp/english/knowledge/technique/image/img_04.gif',
                              anchorText:'Learn Judo'
                    }
          ],
          
          leftList:
          [
                    {
                              
                              leftItemImg:"https://3yryua3n3eu3i4gih2iopzph-wpengine.netdna-ssl.com/wp-content/uploads/2016/07/kano/kano14.jpg",
                              leftItemimgAltTxt:'',
                              leftItemTitle:'History of Judo',
                              imgHeight:"500px;",
                              imgWidth:"500px;",
                              itemContent:
                              [
                                  {item:'<a href="https://judoinfo.com/jhist4/"class="card-text"> History</a>'}      
                              ]

                    },
                    {
                              
                              leftItemImg:"https://3yryua3n3eu3i4gih2iopzph-wpengine.netdna-ssl.com/wp-content/uploads/2016/07/rules.jpg",
                              leftItemimgAltTxt:'',
                              imgHeight:"300px;",
                              imgWidth:"300px;",
                              leftItemTitle:"Rules of Judo",
                              itemContent:
                              [
                                        {item:'<a href="https://judoinfo.com/rules1/" class="card-text">Rules</a>'}
                              ]

                    },
                    {
                              
                              leftItemImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqW6dQkf13v6eDShG0tQD2oMjrREMPknUZxA&usqp=CAU",
                              leftItemimgAltTxt:'Judo techniques link',
                              leftItemTitle:'Judo Techniques',
                              itemContent:
                              [
                                        {item:'<a href="https://www.judo-ch.jp/english/knowledge/technique/" class="card-text">Techniques</a>'}
                              ]

                    },
                    {
                              
                              leftItemImg:"https://res.cloudinary.com/duu3v9gfg/image/fetch/t_w_640_auto/https://78884ca60822a34fb0e6-082b8fd5551e97bc65e327988b444396.ssl.cf3.rackcdn.com/up/2020/04/courage-03-1587563376-1587563376.jpg",
                              leftItemimgAltTxt:'Judo morals link',
                              leftItemTitle:'Judo morals',
                              itemContent:
                              [
                                        {
                                                  item:'<a href=" https://www.ijf.org/moralcode" class="card-text">Morals</a>'
                                        }
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
                              rightItemTitle:'Recent events',
                              itemContent:
                              [ 
                                       {item:"<table class='table table-striped table-light recentEventsCard'><tbody><tr><td><a href='#'>Tokyo</a></td></tr><tr><td><a href='#'>Masters</a></td></tr><tr><td><a href='#'>Cadet championship</a></td></tr></tbody></table>"}
                              ]
                    },
                    
                   
                    
                    {
                              rightItemImg:'',
                              rightItemImgAltText:'...',
                              rightItemTitle:'World Rankings',
                              itemContent:
                              [ 
                                       {item:"<table class='table table-striped table-light recentEventsCard'><thead><tr><th scope='col'>#</th><th scope='col'>Athlete</th></tr><tbody><tr><th scope='row'>1<td>Abuladze</td></tr><tr><th scope='row'>2<td>AN Baul</td></th></tr><tr><th scope='row'>3<td>Shavdatuashvili</td></th></tr></th></tbody></table>"}
                              ]
                    },
                     {
                              rightItemImg:'',
                              rightItemImgAltText:'...',
                              rightItemTitle:'Calendar',
                              
                              itemContent:
                              [ 
                                       {
                                        calendar:true,
                                        calendarPastEvent:'Tokyo Olympics',
                                        calendarNextEvent:'World championship',
                                        calendarItemDetails:
                                        [
                                                  {
                                                            
                                                            calendarPastEvent:'Tokyo Olympics',
                                                            calendarNextEvent:'World championship',
                                                            calendarItemInformation:'details here',
                                                            calendarItemDate:'20-aug'
                                                           
                                                  },
                                                   {
                                                            
                                                           
                                                            calendarItemInformation:'details here',
                                                            calendarItemDate:'20-aug'
                                                  }
                                        ]
                                        }
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
                              mediaTitle:'Judo Art'
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
