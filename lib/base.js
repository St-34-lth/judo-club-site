
this.headerData= {isHomeActive:'active',isMediaActive:'',isNewsActive:''}
this.mainData = {home:true,}
this.user = {location:'home'}

var self = this;


function fill_base(){
          
          fill_header()
          fill_main()
          fill_footer()
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
var homeData = {home:true,title:'Athens Dojo Club',welcomeText:"Welcome to the most exclusive Judo Dojo club in the city of Athens! All Judo lovers will feel like their own dojo here."}
function fill_home()
{
          var homeHeader = Handlebars.templates.header()
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
          
          var mediaHeader = Handlebars.templates.header()
          document.querySelector('#mediaHeader').innerHTML += mediaHeader

          var mediaMain = Handlebars.templates.main(mediaData)
          document.querySelector('#mediaMain').innerHTML += mediaMain

          var mediaFooter = Handlebars.templates.footer()
          document.querySelector('#mediaFooter').innerHTML += mediaFooter
}



