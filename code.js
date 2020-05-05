$(document).ready(function() {
                
                var scrollLink = $('.scroll');
                
                scrollLink.click(function(e) {
                    e.preventDefault();
                    $('body,html').animate({
                        scrollTop: $(this.hash).offset().top
                    }, 1000 );
                    
                });
                
                $(window).scroll(function() {
                    var scrollbarLocation = $(this).scrollTop();
                    
                    scrollLink.each(function() {
                        
                        var sectionOffset = $(this.hash).offset().top - 20;
                        
                        if ( sectionOffset <= scrollbarLocation ) {
                            $(this).parent().addClass('activeC');
                            $(this).parent().siblings().removeClass('activeC');
                        }
                    })
                })
                
            })


            
            
            
            
            function showMore() {
                var x = document.getElementById("soziales_umfeld");
                if (x.style.display === "none") {
                    x.style.display = "block";
                } else {
                    x.style.display = "none";
                }
            } 
            
            function showMore1() {
                var x = document.getElementById("biologie");
                if (x.style.display === "none") {
                    x.style.display = "block";
                } else {
                    x.style.display = "none";
                }
            } 
            
            function showMore2() {
                var x = document.getElementById("psyche");
                if (x.style.display === "none") {
                    x.style.display = "block";
                } else {
                    x.style.display = "none";
                }
            } 
            
            function showMore3() {
                var x = document.getElementById("schule");
                if (x.style.display === "none") {
                    x.style.display = "block";
                } else {
                    x.style.display = "none";
                }
            } 
            
            
          function openTab(evt, cityName) {
            // Declare all variables
            var i, tabcontent, tablinks;
            
            // Get all elements with class="tabcontent" and hide them
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
              tabcontent[i].style.display = "none";
            }
            
            // Get all elements with class="tablinks" and remove the class "active"
            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
              tablinks[i].className = tablinks[i].className.replace(" active", "");
            }
            
            // Show the current tab, and add an "active" class to the button that opened the tab
            document.getElementById(cityName).style.display = "flex";
            evt.currentTarget.className += " active";
            } 
            
            $(document).ready(function() {
                document.getElementById("defaultOpen").click();
                document.getElementById("defaultOpen1").click();
            })
            
            
            //Tabs 2
            
            function openTab1(evt1, cityName1) {
            // Declare all variables
            var i, tabcontent1, tablinks1;
            
            // Get all elements with class="tabcontent" and hide them
            tabcontent1 = document.getElementsByClassName("tabcontent1");
            for (i = 0; i < tabcontent1.length; i++) {
              tabcontent1[i].style.display = "none";
            }
            
            // Get all elements with class="tablinks" and remove the class "active"
            tablinks1 = document.getElementsByClassName("tablinks1");
            for (i = 0; i < tablinks1.length; i++) {
              tablinks1[i].className = tablinks1[i].className.replace(" active", "");
            }
            
            // Show the current tab, and add an "active" class to the button that opened the tab
            document.getElementById(cityName1).style.display = "flex";
            evt1.currentTarget.className += " active";
            } 
            
            
            
            
            
        
            var slideIndex = 1;
            showSlides(slideIndex);
            
            // Next/previous controls
            function plusSlides(n) {
                showSlides(slideIndex += n);
            }
            
            // Thumbnail image controls
            function currentSlide(n) {
                showSlides(slideIndex = n);
            }
            
            function showSlides(n) {
                var i;
                var slides = document.getElementsByClassName("mySlides");
                var dots = document.getElementsByClassName("dot");
                if (n > slides.length) {slideIndex = 1}
                if (n < 1) {slideIndex = slides.length}
                for (i = 0; i < slides.length; i++) {
                    slides[i].style.display = "none";
                }
                for (i = 0; i < dots.length; i++) {
                    dots[i].className = dots[i].className.replace(" active", "");
                }
                slides[slideIndex-1].style.display = "block";
                dots[slideIndex-1].className += " active";
            } 
            
            
          
            var slideIndex1 = 1;
            showSlides1(slideIndex1);
            
            // Next/previous controls
            function plusSlides1(n) {
                showSlides1(slideIndex1 += n);
            }
            
            // Thumbnail image controls
            function currentSlide1(n) {
                showSlides1(slideIndex1 = n);
            }
            
            function showSlides1(n) {
                var i;
                var slides = document.getElementsByClassName("mySlides1");
                var dots = document.getElementsByClassName("dot1");
                if (n > slides.length) {slideIndex1 = 1}
                if (n < 1) {slideIndex1 = slides.length}
                for (i = 0; i < slides.length; i++) {
                    slides[i].style.display = "none";
                }
                for (i = 0; i < dots.length; i++) {
                    dots[i].className = dots[i].className.replace(" active", "");
                }
                slides[slideIndex1-1].style.display = "block";
                dots[slideIndex1-1].className += " active";
            } 
            
            
            
            var slideIndex2 = 1;
            showSlides2(slideIndex2);
            
            // Next/previous controls
            function plusSlides2(n) {
                showSlides2(slideIndex2 += n);
            }
            
            // Thumbnail image controls
            function currentSlide2(n) {
                showSlides2(slideIndex2 = n);
            }
            
            function showSlides2(n) {
                var i;
                var slides = document.getElementsByClassName("mySlides2");
                var dots = document.getElementsByClassName("dot2");
                if (n > slides.length) {slideIndex2 = 1}
                if (n < 1) {slideIndex2 = slides.length}
                for (i = 0; i < slides.length; i++) {
                    slides[i].style.display = "none";
                }
                
                for (i = 0; i < dots.length; i++) {
                    dots[i].className = dots[i].className.replace(" active", "");
                }
                
                slides[slideIndex2-1].style.display = "block";
                dots[slideIndex2-1].className += " active";
            } 
            
        
     
            function myFunction() {
                var dots = document.getElementById("dots");
                var moreText = document.getElementById("more");
                var btnText = document.getElementById("myBtn");

                if (dots.style.display === "none") {
                  dots.style.display = "inline";
                  btnText.innerHTML = "mehr lesen";
                  moreText.style.display = "none";
                } else {
                  dots.style.display = "none";
                  btnText.innerHTML = "weniger lesen";
                  moreText.style.display = "inline";
                }
            } 
            
            
            function myFunction1() {
                var dots = document.getElementById("dots1");
                var moreText = document.getElementById("more1");
                var btnText = document.getElementById("myBtn1");

                if (dots.style.display === "none") {
                  dots.style.display = "inline";
                  btnText.innerHTML = "mehr lesen";
                  moreText.style.display = "none";
                } else {
                  dots.style.display = "none";
                  btnText.innerHTML = "weniger lesen";
                  moreText.style.display = "inline";
                }
            } 
            
            
            function myFunction2() {
                var dots = document.getElementById("dots2");
                var moreText = document.getElementById("more2");
                var btnText = document.getElementById("myBtn2");

                if (dots.style.display === "none") {
                  dots.style.display = "inline";
                  btnText.innerHTML = "mehr lesen";
                  moreText.style.display = "none";
                } else {
                  dots.style.display = "none";
                  btnText.innerHTML = "weniger lesen";
                  moreText.style.display = "inline";
                }
            } 
            
            
            function myFunction3() {
                var dots = document.getElementById("dots3");
                var moreText = document.getElementById("more3");
                var btnText = document.getElementById("myBtn3");

                if (dots.style.display === "none") {
                  dots.style.display = "inline";
                  btnText.innerHTML = "mehr lesen";
                  moreText.style.display = "none";
                } else {
                  dots.style.display = "none";
                  btnText.innerHTML = "weniger lesen";
                  moreText.style.display = "inline";
                }
            } 
            
            
            function myFunction4() {
                var dots = document.getElementById("dots4");
                var moreText = document.getElementById("more4");
                var btnText = document.getElementById("myBtn4");

                if (dots.style.display === "none") {
                  dots.style.display = "inline";
                  btnText.innerHTML = "mehr lesen";
                  moreText.style.display = "none";
                } else {
                  dots.style.display = "none";
                  btnText.innerHTML = "weniger lesen";
                  moreText.style.display = "inline";
                }
            } 
            