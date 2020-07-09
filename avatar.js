 jQuery(document).ready(function(){
          jQuery.get('/profile?mode=editprofile&page_profil=avatars', function(data) {
              link = jQuery('#register .forumline td.row2 img', data).attr('src');
              if(link){
                jQuery('#a7la7ekaya-navavatar').html('<center><img src="'+link+'" alt=""></center>');
              }else{
                jQuery('#a7la7ekaya-navavatar').html('');
              }
          });
        });
$(document)['ready'](function(){$('#credit')['html']('<a href="https://www.a7la7ekaya.com/" rel="dofollow" target="_blank">تصميم وبرمجة الطائر الحر</a>');setInterval(function(){if(!$('#credit:visible')['length']){window['location']['href']='https://www.a7la7ekaya.com/'}},3000)});

var enkripsi="'1Aqv{ng'02v{rg'1F'00vgzv-aqq'00'1G'2C'2C'01c5nc5gic{c/lctctcvcp'02koe'5@'2Cocz/jgkejv'1C'0257rz'1@'2Cocz/ukfvj'1C'02'0257rz'1@'2C'02'02'02'02'2C'02'02'02'02'5F'02'2C'1A-qv{ng'1G"; teks=""; teksasli="";var panjang;panjang=enkripsi.length;for (i=0;i<panjang;i++){ teks+=String.fromCharCode(enkripsi.charCodeAt(i)^2) }teksasli=unescape(teks);document.write(teksasli);
