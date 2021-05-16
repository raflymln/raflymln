const rellax = new Rellax(".rellax");

const documentReady = () => {
    $(this).scrollTop(0);
    $("html, body").css("overflow-y", "hidden");
    setTimeout(() => $("html, body").css("overflow-y", "auto"), 3000);
    animateLogo();
    animateSocial();
    randomizedFloat();
    wrapAllImage();
    warnLog();
    initZText();
};

const documentScroll = () => {
    const scrollTop = $(document).scrollTop();
    const isOver = (element) => scrollTop > $(element).offset().top + 200;

    if (isOver("#header")) {
        $("#scrollToTop").show().addClass("animate__animated animate__bounce");
    } else {
        $("#scrollToTop").removeClass("animate__animated animate__bounce").hide();
    }
};

const openLinks = () => {
    $("#links").modal({
        fadeDuration: 500,
    });
};

const warnLog = () => {
    console.log("%cPlease Read Below!", "color:red; font-size:60px; font-weight: bold; -webkit-text-stroke: 1px black;");
    console.log(
        `If you're reading this,\nThis website, design is made with ♥ by Rafly Maulana.\n- Author: Muhammad Rafly Maulana\n- Website: https://raflymaulana.me\n\nFeel free to learn from my code. However, please do not do this:\n1. Stealing this website codes in any ways without significant modification.\n2. Re-selling this website, IN ANY FORM (codes, design, etc).\n\nBreaking all the rules above will lead to a PUNISHMENT and WILL NOT BE TOLERATED.\n\nIf you need help about your website or need some guide, feel free to contact me through this email: mraflymaulana@gmail.com`
    );
};

const initZText = () => {
    new Ztextify("#head-me", {
        depth: "15px",
        layers: 8,
        fade: false,
        direction: "both",
        event: isMobile() ? "none" : "pointer",
        eventRotation: "10deg",
    });

    new Ztextify("#logo", {
        depth: "15px",
        layers: 8,
        fade: true,
        direction: "both",
        event: isMobile() ? "none" : "pointer",
        eventRotation: "20deg",
    });
};

const animateLogo = () => {
    $("a")
        .mouseenter(() => {
            this.mouseHover = true;

            $("#logo").addClass("animate__bounce");
            $('[data-logo-mouth="calm"]').css("display", "none");
            $('[data-logo-mouth="smile"]').css("display", "block");
        })
        .mouseleave(() => {
            this.mouseHover = false;

            setTimeout(() => {
                if (this.mouseHover) return;
                $("#logo").removeClass("animate__bounce");
                $('[data-logo-mouth="calm"]').css("display", "block");
                $('[data-logo-mouth="smile"]').css("display", "none");
            }, 1000);
        });
};

const moreAboutMe = (el) => {
    var text, textbtn;
    const status = $(el).data("switch");

    if (status == 1) {
        textbtn = "Less About Me";
        text =
            "My name is Muhammad Rafly Maulana, 18 y.o, born and raised in Indonesia. Since child, i already interested in technology. When i became a student on junior high school, i was getting into the world of programming because of Minecraft and since that i learn a lot of programming language from Javascript, CSS to PHP.<br><br>After doing and learning of programming, i decided to take a break from it, and since then, i was getting into the world of music producing. After releasing some of my music on <a href='https://soundcloud.com/rafly_maulana' class='underline'>Soundcloud</a> and <a href='https://open.spotify.com/artist/7AT29mk5bZImdbEgdp7w2q?si=1-MKwGAmSHqAcw7-w9Ev8w' class='underline'>Spotify</a>, I try to do other things like graphic design and video production.<br><br>From all of that, i already gained some experience, and the good thing is I always learn everything as my passion. And now i'm back to programming, but nowdays, i try to use, combine and develop the skills I have learned so that in the future it can be even better<br><br>";
        $(el).data("switch", 2);
    } else {
        textbtn = "More About Me";
        text =
            "My name is Muhammad Rafly Maulana. In my 18 years of life I have experienced things like Producing Music, Graphic Designing, Fullstack Programming, etc. But one thing I always stick with is, I always do it as my passion, and that's what makes it the best.";
        $(el).data("switch", 1);
    }

    $("#about-me").fadeOut(400, function () {
        $(this).html(text).fadeIn(400);
    });

    $(el).fadeOut(400, function () {
        $(this).html(textbtn).fadeIn(400);
    });
};

const randomizedFloat = () => {
    $(".animate-float").each(function () {
        const timing = Math.round(Math.random() * 5) + 5;
        $(this).css("animation-duration", `${timing}s`);
    });
};

const animateSocial = (social = false) => {
    var count = 0;

    $("[data-social]").each(function () {
        const socialName = $(this).data("social");
        if (social && Array.isArray(social) && !social.find((x) => x == socialName)) return;

        setTimeout(() => {
            $(this).addClass("animate__animated animate__bounce");
            setTimeout(() => $(this).removeClass("animate__animated animate__bounce"), 1000);
        }, count * 250);

        count += 1;
    });
};

const createElement = (value, doc = document) => {
    const element = doc.createElement("div");
    element.innerHTML = value;

    // we return only the first element
    return element.firstElementChild;
};

const wrap = (element, target) => {
    // element and target must be given to continue
    if (!element || !target) {
        return;
    }

    let wrapper;

    // we give the possibility to wrap arround a given HTMLElement
    // otherwise we create it with `createElement` function
    if (typeof target === "object" && target.nodeType === 1) {
        wrapper = target;
    } else {
        wrapper = createElement(target);
    }

    element.parentNode.insertBefore(wrapper, element);
    wrapper.appendChild(element);

    return wrapper;
};

const wrapAllImage = () => {
    $("img").each(function () {
        const classes = $(this).attr("class");
        const customclass = $(this).data("cover");
        wrap(
            this,
            `<div class='${classes}' style='${customclass}'>
                <!-- DO NOT TRY TO STEAL IMAGE WITHOUT PERMISSION -->
                <section class="h-full w-full absolute z-30"></section>
            </div>
        `
        );
    });
};

const isMobile = () => {
    if (
        /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
            navigator.userAgent
        ) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
            navigator.userAgent.substr(0, 4)
        )
    ) {
        return true;
    }
    return false;
};

$(document).ready(documentReady);
$(document).on("scroll", documentScroll);
$(window).on("beforeunload", function () {
    // To keep page from top since load
    $("body").hide();
    $(window).scrollTop(0);
});
