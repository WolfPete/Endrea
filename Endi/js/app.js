// App logic.


window.fn = {};

window.fn.toggleMenu = function () {
  document.getElementById('appSplitter').right.toggle();
};

window.fn.loadView = function (index) {
  document.getElementById('appTabbar').setActiveTab(index);
  document.getElementById('sidemenu').close();
};

window.fn.loadLink = function (url) {
  window.open(url, '_blank');
};

window.fn.pushPage = function (page, year, month, day, title) {
	  datum = new Date();
	  var hday = datum.getDate();
	  var hmonth = datum.getMonth() + 1 ;
    var hyear = datum.getFullYear();
/*if( hyear == '2017'  && hmonth == '11' || hyear == '2017'  && hmonth == '12' && day > hday )
{
  play('msg');
ons.notification.alert({
	message: 'Ned so neugierig Endi. Isch noned so weit',
	title: 'Allooooo'
	}
	);
}
else {*/
if (title){
    play(title);
  }
    document.getElementById('appNavigator').pushPage(page.id, { data: { title: page.title }});
  }
//}
  var audio1 = new Audio('lib/onsen/mp3/m5.mp3');

  function play(title)
  {
    audio1 = new Audio('lib/onsen/mp3/'+ title + '.mp3');
    audio1.id = 'audiomp3'
    audio1.play();
  };

  function mute(title){
   audio1.muted = true;

   }
