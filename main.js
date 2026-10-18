var boxes = document.querySelectorAll('.box-1');
boxes.forEach(function(box) {
    box.addEventListener('click', function() {
        var isActive = this.classList.contains('active');
        if (isActive) {
            this.classList.remove('active');
        } else {
            var currentActive = document.querySelector('.active');
            if (currentActive) {
                currentActive.classList.remove('active');
            }
            this.classList.add('active');
        }
    });
});

var boxes = document.querySelectorAll('.box-2');
boxes.forEach(function(box) {
    box.addEventListener('click', function() {
        var isActive = this.classList.contains('active');
        if (isActive) {
            this.classList.remove('active');
        } else {
            var currentActive = document.querySelector('.active');
            if (currentActive) {
                currentActive.classList.remove('active');
            }
            this.classList.add('active');
        }
    });
});

var boxes = document.querySelectorAll('.box-3');
boxes.forEach(function(box) {
    box.addEventListener('click', function() {
        var isActive = this.classList.contains('active');
        if (isActive) {
            this.classList.remove('active');
        } else {
            var currentActive = document.querySelector('.active');
            if (currentActive) {
                currentActive.classList.remove('active');
            }
            this.classList.add('active');
        }
    });
});

var boxes = document.querySelectorAll('.box-4');
boxes.forEach(function(box) {
    box.addEventListener('click', function() {
        var isActive = this.classList.contains('active');
        if (isActive) {
            this.classList.remove('active');
        } else {
            var currentActive = document.querySelector('.active');
            if (currentActive) {
                currentActive.classList.remove('active');
            }
            this.classList.add('active');
        }
    });
});


var boxes = document.querySelectorAll('.box-5');
boxes.forEach(function(box) {
    box.addEventListener('click', function() {
        var isActive = this.classList.contains('active');
        if (isActive) {
            this.classList.remove('active');
        } else {
            var currentActive = document.querySelector('.active');
            if (currentActive) {
                currentActive.classList.remove('active');
            }
            this.classList.add('active');
        }
    });
});

var boxes = document.querySelectorAll('.box-6');
boxes.forEach(function(box) {
    box.addEventListener('click', function() {
        var isActive = this.classList.contains('active');
        if (isActive) {
            this.classList.remove('active');
        } else {
            var currentActive = document.querySelector('.active');
            if (currentActive) {
                currentActive.classList.remove('active');
            }
            this.classList.add('active');
        }
    });
});


var boxes = document.querySelectorAll('.box-7');
boxes.forEach(function(box) {
    box.addEventListener('click', function() {
        var isActive = this.classList.contains('active');
        if (isActive) {
            this.classList.remove('active');
        } else {
            var currentActive = document.querySelector('.active');
            if (currentActive) {
                currentActive.classList.remove('active');
            }
            this.classList.add('active');
        }
    });
});

var boxes = document.querySelectorAll('.box-8');
boxes.forEach(function(box) {
    box.addEventListener('click', function() {
        var isActive = this.classList.contains('active');
        if (isActive) {
            this.classList.remove('active');
        } else {
            var currentActive = document.querySelector('.active');
            if (currentActive) {
                currentActive.classList.remove('active');
            }
            this.classList.add('active');
        }
    });
});

var boxes = document.querySelectorAll('.box-9');
boxes.forEach(function(box) {
    box.addEventListener('click', function() {
        var isActive = this.classList.contains('active');
        if (isActive) {
            this.classList.remove('active');
        } else {
            var currentActive = document.querySelector('.active');
            if (currentActive) {
                currentActive.classList.remove('active');
            }
            this.classList.add('active');
        }
    });
});

var boxes = document.querySelectorAll('.box-10');
boxes.forEach(function(box) {
    box.addEventListener('click', function() {
        var isActive = this.classList.contains('active');
        if (isActive) {
            this.classList.remove('active');
        } else {
            var currentActive = document.querySelector('.active');
            if (currentActive) {
                currentActive.classList.remove('active');
            }
            this.classList.add('active');
        }
    });
});




document.addEventListener("DOMContentLoaded", function() {
    const reactiveNonmetals = document.getElementById("reactive-nonmetals");
    const transitionMetals = document.getElementById("transition-metals");
    const noblegases = document.getElementById("noble-gases");
    const alkalimetals = document.getElementById("alkali-metals");
    const metalloid = document.getElementById("metalloid");
    const lanthenides = document.getElementById("lanthenides");
    const alkalineearth = document.getElementById("alkaline-earth");
    const posttransitionmetals = document.getElementById("post-transition-metals");
    const actinides = document.getElementById("actinides");
    const transactinide = document.getElementById("transactinide");


    reactiveNonmetals.addEventListener("click", function() {
        document.body.classList.toggle("darken-elements");
        document.body.classList.remove("darken-elements1");
        document.body.classList.remove("darken-elements3");
        document.body.classList.remove("darken-elements4");
        document.body.classList.remove("darken-elements5");
        document.body.classList.remove("darken-elements6");
        document.body.classList.remove("darken-elements7");
        document.body.classList.remove("darken-elements8");
        document.body.classList.remove("darken-elements9");
        document.body.classList.remove("darken-elements10");
    });

    transitionMetals.addEventListener("click", function() {
        document.body.classList.toggle("darken-elements1");
        document.body.classList.remove("darken-elements");
        document.body.classList.remove("darken-elements3");
        document.body.classList.remove("darken-elements4");
        document.body.classList.remove("darken-elements5");
        document.body.classList.remove("darken-elements6");
        document.body.classList.remove("darken-elements7");
        document.body.classList.remove("darken-elements8");
        document.body.classList.remove("darken-elements9");
        document.body.classList.remove("darken-elements10");
    });

    noblegases.addEventListener("click", function() {
        document.body.classList.toggle("darken-elements3");
        document.body.classList.remove("darken-elements");
        document.body.classList.remove("darken-elements1");
        document.body.classList.remove("darken-elements4");
        document.body.classList.remove("darken-elements5");
        document.body.classList.remove("darken-elements6");
        document.body.classList.remove("darken-elements7");
        document.body.classList.remove("darken-elements8");
        document.body.classList.remove("darken-elements9");
        document.body.classList.remove("darken-elements10");
    });

    alkalimetals.addEventListener("click", function() {
        document.body.classList.toggle("darken-elements4");
        document.body.classList.remove("darken-elements");
        document.body.classList.remove("darken-elements1");
        document.body.classList.remove("darken-elements3");
        document.body.classList.remove("darken-elements5");
        document.body.classList.remove("darken-elements6");
        document.body.classList.remove("darken-elements7");
        document.body.classList.remove("darken-elements8");
        document.body.classList.remove("darken-elements9");
        document.body.classList.remove("darken-elements10");
    });

    metalloid.addEventListener("click", function() {
        document.body.classList.toggle("darken-elements5");
        document.body.classList.remove("darken-elements");
        document.body.classList.remove("darken-elements1");
        document.body.classList.remove("darken-elements3");
        document.body.classList.remove("darken-elements4");
        document.body.classList.remove("darken-elements6");
        document.body.classList.remove("darken-elements7");
        document.body.classList.remove("darken-elements8");
        document.body.classList.remove("darken-elements9");
        document.body.classList.remove("darken-elements10");
    });

    lanthenides.addEventListener("click", function() {
        document.body.classList.toggle("darken-elements6");
        document.body.classList.remove("darken-elements");
        document.body.classList.remove("darken-elements1");
        document.body.classList.remove("darken-elements3");
        document.body.classList.remove("darken-elements4");
        document.body.classList.remove("darken-elements5");
        document.body.classList.remove("darken-elements7");
        document.body.classList.remove("darken-elements8");
        document.body.classList.remove("darken-elements9");
        document.body.classList.remove("darken-elements10");
    });

    alkalineearth.addEventListener("click", function() {
        document.body.classList.toggle("darken-elements7");
        document.body.classList.remove("darken-elements");
        document.body.classList.remove("darken-elements1");
        document.body.classList.remove("darken-elements3");
        document.body.classList.remove("darken-elements4");
        document.body.classList.remove("darken-elements5");
        document.body.classList.remove("darken-elements6");
        document.body.classList.remove("darken-elements8");
        document.body.classList.remove("darken-elements9");
        document.body.classList.remove("darken-elements10");
    });

    posttransitionmetals.addEventListener("click", function() {
        document.body.classList.toggle("darken-elements8");
        document.body.classList.remove("darken-elements");
        document.body.classList.remove("darken-elements1");
        document.body.classList.remove("darken-elements3");
        document.body.classList.remove("darken-elements4");
        document.body.classList.remove("darken-elements5");
        document.body.classList.remove("darken-elements6");
        document.body.classList.remove("darken-elements7");
        document.body.classList.remove("darken-elements9");
        document.body.classList.remove("darken-elements10");
    });

    actinides.addEventListener("click", function() {
        document.body.classList.toggle("darken-elements9");
        document.body.classList.remove("darken-elements");
        document.body.classList.remove("darken-elements1");
        document.body.classList.remove("darken-elements3");
        document.body.classList.remove("darken-elements4");
        document.body.classList.remove("darken-elements5");
        document.body.classList.remove("darken-elements6");
        document.body.classList.remove("darken-elements7");
        document.body.classList.remove("darken-elements8");
        document.body.classList.remove("darken-elements10");
    });

    transactinide.addEventListener("click", function() {
        document.body.classList.toggle("darken-elements10");
        document.body.classList.remove("darken-elements");
        document.body.classList.remove("darken-elements1");
        document.body.classList.remove("darken-elements3");
        document.body.classList.remove("darken-elements4");
        document.body.classList.remove("darken-elements5");
        document.body.classList.remove("darken-elements6");
        document.body.classList.remove("darken-elements7");
        document.body.classList.remove("darken-elements8");
        document.body.classList.remove("darken-elements9");
    });

    
});
