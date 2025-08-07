$(document).ready(function(){
    function checkWidth() {
        if($(window).width() < 1330){
            $(".hidden1330").hide();
            $(".show1330").show();
            $(".show1330").addClass("search1330");
        } else {            
            $(".hidden1330").show();
            $(".show1330").hide();
        }
    }
    
    checkWidth(); // 페이지 로드 시 실행
    $(window).resize(checkWidth); // 창 크기 변경 시 실행

    $(".pro1").click(function(){
        window.open('https://udyeong.github.io/teamproject/subpage03.html', '_self')
    });












}) //jquery end