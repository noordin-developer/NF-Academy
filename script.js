  $(document).ready(function() {
            
            // 1. Mobile Menu Open/Close
            $('.menu-toggle').click(function() {
                $('nav').toggleClass('active');
            });

            // 2. Sticky Header (Scroll karne par header fix ho jaye)
            $(window).scroll(function() {
                if ($(this).scrollTop() > 50) {
                    $('header').addClass('scrolled');
                } else {
                    $('header').removeClass('scrolled');
                }
            });

            // 3. Elements ko Fade-in karne ke liye "reveal" class add karna (Bina HTML chere)
            $('.feat-card, .why-card, .gallery-item, .about-content, .about-img, .feat-intro, .section-header').addClass('reveal');

            // 4. Scroll Reveal Logic (Jaise jaise neechay jayenge items pop hongi)
            $(window).scroll(function() {
                var windowHeight = $(window).height();
                var scrollTop = $(window).scrollTop();

                $('.reveal').each(function() {
                    var elementTop = $(this).offset().top;
                    if (elementTop < scrollTop + windowHeight - 80) {
                        $(this).addClass('active');
                    }
                });
            }).scroll(); // Page load par foran check karne ke liye
            
        });
        