// Variables and data objects for handling template compilation etc.
//They are made modular to facilitate quick and easy changes to the page 
var headerData= {
          carouselItems:['../assets/images/_yoshida.jpg']
}
var carouselItems = {}
Object.assign(carouselItems,  {carouselItems:
          [
                    {
                              carouselItemFirst:'/assets/images/_yoshida.jpg',
                              carouselItemFirstCaption:'Yoshida does it again!',
                              carouselItemFirstLink:'https://www.judoinside.com/news/2757/Hidehiko_Yoshida_is_an_all_time_legendary_stylist',
          
                              carouselItemSecond:'https://www.judoinside.com/photos/hans/2019/European_Games_Minsk/european_games_minsk_medals.jpg',
                              carouselItemSecondCaption:'Krakow games upcoming!',
                              carouselItemSecondLink:'https://www.judoinside.com/news/4745/2023_European_Games_in_Krakow_Poland',

                              carouselItemThird:'https://www.judoinside.com/photos/hans/2021/Olympic_Games_Tokyo/110_20210724_tokyo_ijf_48kg_bronze_isr_rishony_vs_ukr_bilodid_c_sabaug.jpg',
                              carouselItemThirdCaption:'Will Blodid change category?',
                              carouselItemThirdLink:'/news/articles/article.html',
                    }
          ],})

var homeData = 
{ 
          carouselItems:carouselItems.carouselItems ,
          mainList:[
                    {
                              mainListItem:"<video height='85%;' width='60%;'src='/assets/videos/0-02-0a-975b369384235524651a89e42c1e4add3bed4d33f346a3bbfdbb758d6acf8bf4_3efb72baecf22c51.mp4' controls aria-label='Judo-techniques-demonstration-video '></video>",
                              mainListItemText:'<p>A demonstration of Judo basic techniques from Caio Terra academy</p>'
                            
                    },
                    {
                              mainListItem:'<iframe width="600px;" height="100%;" src="https://www.youtube.com/embed/Zy7bRVk5hP0" title="YouTube video player" aria-label="top-20-ippons-youtube-video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                              mainListItemText:"<p>The world's best 20 ippons of 2019</p>"
                    },
                    {
                              mainListItem:'<iframe width="600px" height="85%" src="https://www.youtube.com/embed/2DQ1lTR1B8Q" title="YouTube video player" aria-label="top-6-ippons-youtube-video"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                              mainListItemText:"<p>Favorite judo moves of world champions!</p>"
                    }
                   
          ],
          anchorItems:
          [
                    {
                              anchorRef:'https://www.judo-ch.jp/english/knowledge/technique/',
                              anchorUrl:'https://www.judo-ch.jp/english/knowledge/technique/image/img_04.gif',
                              anchorText:'Learn Judo',
                              anchorAltText:'link-to-judo-basics'
                    }
          ],
          
          leftList:
          [
                    {
                              
                              leftItemImg:"https://3yryua3n3eu3i4gih2iopzph-wpengine.netdna-ssl.com/wp-content/uploads/2016/07/kano/kano14.jpg",
                              leftItemImgAltTxt:"History of judo",
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
                              rightItemImgAltText:"social-media-quick-links",
                              itemContent:
                              [
                                        {item:`<a href='https://www.instagram.com/'><img alt='social media instagram link'src="../assets/images/instagram.svg" width='24' height='24'></a>`},
                                        {item:`<a href='https://www.facebook.com/'><img alt='social media facebook link' src="../assets/images/facebook.svg" width='24' height='24'></a>`}
                              ]
                    },
                    {
                             
                              rightItemTitle:'Popular Links',
                              rightItemImgAltText:"judo-federation-quick-links",
                              itemContent:
                              [ 
                                        {item:'<a href="https://hjf.gr/"><img alt="Hellenic judo federation icon/link" width="96" height="96"src="/assets/images/greek logo.png"></a>'},
                                        {item:'<a href="https://ijf.com"><img alt="international judo federation icon/link" width="96" height="96" src="/assets/images/AppIcon98x98@2x.png"></a>'},
                                        {item:'<a href="https://www.eju.net/"><img alt="european judo federation icon/link" width="100px;" style="border-radius:50px" src="/assets/images/eju.png"> </a>'},
                                         
                              ]
                    },
                   
                    {
                              rightItemImg:'',
                              rightItemImgAltText:"recent-events-quick-links",
                              rightItemTitle:'Recent events',
                              itemContent:
                              [ 
                                       {item:"<table class='table table-striped table-light recentEventsCard'><tbody><tr><td><a href='#'>Tokyo</a></td></tr><tr><td><a href='#'>Masters</a></td></tr><tr><td><a href='#'>Cadet championship</a></td></tr></tbody></table>"}
                              ]
                    },
                    
                   
                    
                    {
                              rightItemImg:'',
                              rightItemImgAltText:'world-rankings-card',
                              rightItemTitle:'World Rankings',
                              itemContent:
                              [ 
                                       {item:"<table class='table table-striped table-light recentEventsCard'><thead><tr><th scope='col'>#</th><th scope='col'>Athlete</th></tr><tbody><tr><th scope='row'>1<td>Abuladze</td></tr><tr><th scope='row'>2<td>AN Baul</td></th></tr><tr><th scope='row'>3<td>Shavdatuashvili</td></th></tr></th></tbody></table>"}
                              ]
                    },
                     {
                              rightItemImg:'',
                              rightItemImgAltText:'calendar-events',
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
          home:true,title:'Athens Dojo Club',welcomeText:"Welcome to the most exclusive Judo Dojo club in the city of Athens! All Judo lovers will feel like their own dojo here.", newsLink:'https://www.eju.net/paralympic-referees-2021-vasiliy-smolin/', newsImage:'https://www.eju.net/wp-content/uploads/2021/08/Gabi-Juan-Masters-2021-197408-1024x683.jpg',dojoImage:'/assets/images/dicky-dojo.jpg'
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
          carouselItems:carouselItems.carouselItems
          

}
var mediaData = 
     { 
          media: true,
          news:false,
         carouselItems:carouselItems.carouselItems,
          mediaList: 
          [
                    { 
                              mediaItem:'<img class="rounded-3" src="/assets/images/teams.jpg"  alt="media-gallery-photos">',
                              mediaTitle:'Photographs'
                    },
                    {
                              mediaItem:'<img class="rounded-3"  src="/assets/images/media_example.jpg" alt="media-gallery-videos">',
                              mediaTitle:'Videos'
                    },
                    {
                              mediaItem:'<img  class="rounded-3" src="/assets/images/media_3.jpg"alt="media-gallery-interviews" >',
                              mediaTitle:'Interviews'
                    },
                    { 
                              mediaItem:'<img class="rounded-3"  src="/assets/images/media_4.jpg" alt="media-gallery-art" >',
                              mediaTitle:'Judo Art'
                    }
          ]
        
          }
var newsData=
{
          newsList:
          [
                    {
                              
                              newsImgSrc:'https://www.judoinside.com/photos/hans/judoka/4951__Brian_Jacks/19790925a0317_jacks.jpg',
                              newsDate:'11/10/21',
                              newsHeadline:'A history of judo video games',
                              newsLink:'https://www.judoinside.com/news/4739/Video_games_that_released_the_inner_judoka',
                              readMoreImgSrc:'/assets/images/arrow-right-circle-fill.svg',
                              articleIndex:0,
                              newsImgAltText:"Link-to-article"
                    },
                    {  
                              newsImgSrc:'https://www.judoinside.com/photos/hans/2019/European_Games_Minsk/european_games_minsk_medals.jpg',
                              newsDate:'11/10/21',
                              newsHeadline:'Krakow games upcoming!',
                              newsLink:'https://www.judoinside.com/news/4745/2023_European_Games_in_Krakow_Poland',
                              readMoreImgSrc:'/assets/images/arrow-right-circle-fill.svg',
                              articleIndex:1,
                              newsImgAltText:"Link-to-article"
                    },
                    {
                              
                              newsImgSrc:'/assets/images/_yoshida.jpg',
                              newsDate:'11/10/21',
                              newsHeadline:'Yoshida does it again!',
                              newsLink:'https://www.judoinside.com/news/2757/Hidehiko_Yoshida_is_an_all_time_legendary_stylist',
                              readMoreImgSrc:'/assets/images/arrow-right-circle-fill.svg',
                              articleIndex:2,
                              newsImgAltText:"Link-to-article"
                    },
                    {
                              newsImgSrc:'https://www.judoinside.com/photos/hans/2021/Olympic_Games_Tokyo/110_20210724_tokyo_ijf_48kg_bronze_isr_rishony_vs_ukr_bilodid_c_sabaug.jpg',
                              newsDate:'11/10/21',
                              newsHeadline:'Will Blodid change category?',
                              newsLink:'https://www.judoinside.com/news/4748/Will_Daria_Bilodid_move_up_to_U52kg',
                              readMoreImgSrc:'/assets/images/arrow-right-circle-fill.svg',
                              articleIndex:3,
                              newsImgAltText:"Link-to-article"
                    },
                   
                    
                   
          ],
         
          news:true,
          carouselItems:carouselItems.carouselItems
          
}
let article1={}
let article2={}
let article3={}
let article4=

{
          
          article:true,          
          articleParts:
                    [
                              {
                                        articlePart:"In August 2017, Daria Bilodid (UKR) lost to Otgontsetseg Galbadrakh (KAZ) in the preliminary rounds of the 2017 Budapest World Championships. After that defeat, she had an incredible winning streak that last until March 2019, when she unexpectedly lost to Melanie Clement of France in the 2019 Tbilisi Grand Prix.",
                                       
                                        
                                        
                              },
                              {
                                        articlePart: "Bilodid showed that this was an anomaly by defeating Clement a few months later at the 2019 Minsk European Games, and continued her winning streak until Oct 2020 when she competed at U52kg in the Budapest Grand Slam. There, she lost in the quarterfinal against Andreea Chitu of Romania.",
                              },
                              { 
                                        articlePart: "Despite having lost three consecutive international competitions leading up to the Olympics, Bilodid was still considered the favorite for gold. Right from the very start she did not seem her usual self. She was sluggish, tentative in her attacks, seemed to lack confidence. One can’t help but wonder whether it was the intense dieting that she had to go through to make weight or just the pressure of expectations that wore on her. Everyone had expected her first fight to be against Boukli of France. This would have been a great rematch of the Tel Aviv Grand Slam final but it wasn’t to be. Boukli, who also didn’t seem her usual self, lost her first match after receiving her third penalty (and thus, hansoku-make).There might have been some slight relief on the part of Bilodid knowing she didn’t have to face Boukli but Milica Nikolic (SRB) didn’t make life easy for Bilodid. In fact, Bilodid was down by two shidos, with the match fast heading into Golden Score when she managed to whip out a harai-goshi at the edge of the mat. The Serbian player largely fell on her front but it was just enough to warrant a waza-ari. And so, Bilodid managed to scrape through. Her second match was equally lackluster and she wasn’t able to throw Catarina Costa (POR) a considerably smaller player, with her usual ouchi-gari or uchimata. In the end, Bilodid managed to catch Costa on the ground with her favorite sankaku hold-down. But it was only after a very intense battle.In the semifinal, Bilodid faced up against her old rival Tonaki, who had by then clearly figured out how to fight her. The match went into Golden Score where Tonaki pinned Bilodid for ippon."} ,
                              {articlePart:"A clearly disheartened Bilodid wasn’t performing her best in the bronze medal match and Israel’s Shira Rishony almost took her to time. In the dying seconds of the match, Rishony decided to go for broke and came in with a big uchimata."},
                              {articlePart:"Bilodid had enough presence of mind to sidestep it. Once Rishony hit the ground, Bilodid rolled her over and pinned her for ippon. Upon winning the match, Bilodid broke out in tears, probably due to a mix of relief, at getting the bronze; and regret, at the way she fought throughout the day."},
                              {articlePart:"For some time now, judo watchers have been wondering how long the 1.72m Bilodid could stay on at U48kg. Who knows how much the dieting she has to go through to maintain that weight had affected her competition performance over the past year but the other important factor to consider is that her tall and lanky stature no longer seems to confer any advantage." }
          ],
          articleTitle:'Will Blodid change category?',
          articleImage:"https://www.judoinside.com/photos/hans/2021/Olympic_Games_Tokyo/110_20210724_tokyo_ijf_48kg_bronze_isr_rishony_vs_ukr_bilodid_c_sabaug.jpg",
                    articleCaption:'Date here',
          articleIndex:4,
          carouselItems:carouselItems.carouselItems,
          }
var articles = [ article1,article2,article3,article4]
var joinData = 
{
          join:true,
          title:'',
          moreText:"Welcome to the most exclusive Dojo in Athens for Judo lovers! Our club includes not only persons but also Dojo's as members! If you are interested in finding us, visit one of them!",
          welcomeText: 'If you are a Judo lover and wish to join us, click below. If you represent a Dojo in the area, please send us a message in the form below.',
          dojoList:
          [
                    
                              
                    {
                              dojoMembers:
                              [
                              'Haidari',
                              'Kalithea',
                              'Peristeri',
                              ]
                    }
                              
                    
                    
          ],
          carouselItems: carouselItems.carouselItems
          
}

// Handlebars compiler functions for each website 
//each function 'fills' the target page

function fill_results()
{
          var resultsHeader = Handlebars.templates.header(resultsData)
          document.querySelector('#resultsHeader').innerHTML += resultsHeader

          var resultsFooter = Handlebars.templates.footer()
          document.querySelector('#resultsFooter').innerHTML += resultsFooter

          var resultsMain = Handlebars.templates.main(resultsData)
          document.querySelector('#resultsMain').innerHTML += resultsMain
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
          var homeHeader = Handlebars.templates.header(newsData)
          document.querySelector('#newsHeader').innerHTML += homeHeader

          var homeFooter = Handlebars.templates.footer()
          document.querySelector('#newsFooter').innerHTML += homeFooter

          var homeMain = Handlebars.templates.main(newsData)
          document.querySelector('#newsMain').innerHTML += homeMain
}

function fill_media()
{
          
          let mediaHeader = Handlebars.templates.header(mediaData)
          document.querySelector('#mediaHeader').innerHTML += mediaHeader

          let mediaMain = Handlebars.templates.main(mediaData)
          document.querySelector('#mediaMain').innerHTML += mediaMain

          let mediaFooter = Handlebars.templates.footer()
          document.querySelector('#mediaFooter').innerHTML += mediaFooter
}

function fill_join()
{
          let joinHeader = Handlebars.templates.header(joinData)
          document.querySelector('#joinHeader').innerHTML += joinHeader

          let joinMain = Handlebars.templates.main(joinData)
          document.querySelector('#joinMain').innerHTML += joinMain

          let joinFooter = Handlebars.templates.footer()
          document.querySelector('#joinFooter').innerHTML += joinFooter   
}
//have used only articles[3] for the sake of demonstrating the articles page itself
function fill_article()
{
          
          
          let artHeader = Handlebars.templates.header(articles[3])
          document.querySelector('#articleHeader').innerHTML += artHeader

          let artMain = Handlebars.templates.main(articles[3])
          document.querySelector('#articleMain').innerHTML += artMain

          let artFooter = Handlebars.templates.footer()
          document.querySelector('#articleFooter').innerHTML +=  artFooter
}

// Site functionality // 
var month =0  
var months = ['January', 'February','March', 'April', 'May', 'June', 'July','August', 'September','October', 'November', 'December']
// functions needed to change age/year/month in the calendar card at the home page 
function nextMonth()
{
 
          month += 1 
          month = month % 12 
          if(month<0)
          {
                    document.querySelector('#calMonthValue').innerHTML = months[month+12]
          }
          else
          {
                    document.querySelector('#calMonthValue').innerHTML = months[month]
          }
}
function prevMonth()
{
          month = month -1 
          month = month % 12
          if(month<0)
          {
                    document.querySelector('#calMonthValue').innerHTML = months[month+12]
          }
          else 
          {
                    document.querySelector('#calMonthValue').innerHTML = months[month]
          }
         
}
var years = [2019,2020,2021,2022]
var year = 0 
function nextYear()
{
          year += 1 
          year = year % years.length
          document.querySelector('#calYearValue').innerHTML = years[year]
          
}
function prevYear()
{
         year = year == 0  ? years.length-1 : (year-1) % years.length
          document.querySelector('#calYearValue').innerHTML = years[year]
}
var ages = [20,30,40]
var age= 0

function nextAge()
{
         
          age +=1
          age = age  % ages.length
          document.querySelector('#calAgeValue').innerHTML = ages[age] 
            
}
function prevAge()
{
         
          age = age ==0 ? ages.length-1 : (age-1) % ages.length
          document.querySelector('#calAgeValue').innerHTML = ages[age]
           
}

//Function needed to validate any element that includes the 'needs-validation' in its class name
function form_validation()
{
          var forms = document.querySelectorAll('.needs-validation')

  
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



          
