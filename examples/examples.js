
class DisplayEffect {
    // Hide Effect Selectors
    hideBtn = '.hide-btn';
    hideParagraph = '.hide-paragraph';
    viewHideExampleIcon = '.view-hide-example-icon';
    viewHideSourceCodeIcon = '.view-hide-source-code-icon';
    hideSourceCodeContainer = '.hide-source-code-container';
    hideDemoContainer = '.hide-demo-container';

    // Show Effect Selectors
    showBtn = '.show-btn';
    showParagraph = '.show-paragraph';
    viewShowExampleIcon = '.view-show-example-icon';
    viewShowSourceCodeIcon = '.view-show-source-code-icon';
    showSourceCodeContainer = '.show-source-code-container';
    showDemoContainer = '.show-demo-container';

    // Toggle Effect Selectors
    toggleBtn = '.toggle-btn';
    toggleParagraph = '.toggle-paragraph';
    viewToggleExampleIcon = '.view-toggle-example-icon';
    viewToggleSourceCodeIcon = '.view-toggle-source-code-icon';
    toggleSourceCodeContainer = '.toggle-source-code-container';
    toggleDemoContainer = '.toggle-demo-container';

    hideEffect() {
        $(this.hideBtn).click(() => {
            $(this.hideParagraph).hide();
        });
    
        $(this.viewHideExampleIcon).on('click', () => {
            // show demo example.
            $(this.hideParagraph).show();
            $(this.hideSourceCodeContainer).hide();
            $(this.hideDemoContainer).fadeIn(1000);
        });
    
        $(this.viewHideSourceCodeIcon).on('click', () => {
            const html = `
                $('.btn').click(function() {
                    $('.paragraph').hide();
                });
            `;
        
            $(this.hideSourceCodeContainer).html(hljs.highlightAuto(html).value);
            // show source code.
            $(this.hideDemoContainer).hide();
            $(this.hideSourceCodeContainer).fadeIn(1000);
        });
    }

    showEffect() {
        $(this.showBtn).click(() => {
            $(this.showParagraph).show();
        });
    
        $(this.viewShowExampleIcon).on('click', () => {
            // show demo example.
            $(this.showParagraph).hide();
            $(this.showSourceCodeContainer).hide();
            $(this.showDemoContainer).fadeIn(1000);
        });
    
        $(this.viewShowSourceCodeIcon).on('click', () => {
            const html = `
                $('.btn').click(function() {
                    $('.paragraph').show();
                });
            `;
        
            $(this.showSourceCodeContainer).html(hljs.highlightAuto(html).value);
            // show source code.
            $(this.showDemoContainer).hide();
            $(this.showSourceCodeContainer).fadeIn(1000);
        });
    }

    toggleEffect() {
        $(this.toggleBtn).click(() => {
            $(this.toggleParagraph).toggle();
        });
    
        $(this.viewToggleExampleIcon).on('click', () => {
            $(this.toggleSourceCodeContainer).hide();
            $(this.toggleDemoContainer).fadeIn(1000);
        });
    
        $(this.viewToggleSourceCodeIcon).on('click', () => {
            const html = `
                $('.btn').click(function() {
                    $('.paragraph').toggle();
                });
            `;
        
            $(this.toggleSourceCodeContainer).html(hljs.highlightAuto(html).value);
            // show source code.
            $(this.toggleDemoContainer).hide();
            $(this.toggleSourceCodeContainer).fadeIn(1000);
        });
    }
}

class FadingEffect {
    // Fade In Effect Selectors
    fadeInBtn = '.fadein-btn';
    fadeInParagraph = '.fadein-paragraph';
    viewFadeInExampleIcon = '.view-fadein-example-icon';
    viewFadeInSourceCodeIcon = '.view-fadein-source-code-icon';
    fadeInSourceCodeContainer = '.fadein-source-code-container';
    fadeInDemoContainer = '.fadein-demo-container';

    // Fade Out Effect Selectors
    fadeOutBtn = '.fadeout-btn';
    fadeOutParagraph = '.fadeout-paragraph';
    viewFadeOutExampleIcon = '.view-fadeout-example-icon';
    viewFadeOutSourceCodeIcon = '.view-fadeout-source-code-icon';
    fadeOutSourceCodeContainer = '.fadeout-source-code-container';
    fadeOutDemoContainer = '.fadeout-demo-container';

    // Fade Toggle Effect Selectors
    fadeToggleBtn = '.fade-toggle-btn';
    fadeToggleParagraph = '.fade-toggle-paragraph';
    viewFadeToggleExampleIcon = '.view-fade-toggle-example-icon';
    viewFadeToggleSourceCodeIcon = '.view-fade-toggle-source-code-icon';
    fadeToggleSourceCodeContainer = '.fade-toggle-source-code-container';
    fadeToggleDemoContainer = '.fade-toggle-demo-container';

    fadeInEffect() {
        $(this.fadeInBtn).click(() => {
            $(this.fadeInParagraph).fadeIn(1000);
        });
    
        $(this.viewFadeInExampleIcon).on('click', () => {
            $(this.fadeInParagraph).fadeOut();
            $(this.fadeInSourceCodeContainer).hide();
            $(this.fadeInDemoContainer).fadeIn(1000);
        });
    
        $(this.viewFadeInSourceCodeIcon).on('click', () => {
            $(this.fadeInParagraph).fadeOut();
            const html = `
                $('.btn').click(function() {
                    $('.paragraph').fadeIn(1000);
                });
            `;
        
            $(this.fadeInSourceCodeContainer).html(hljs.highlightAuto(html).value);
            // show source code.
            $(this.fadeInDemoContainer).hide();
            $(this.fadeInSourceCodeContainer).fadeIn(1000);
        });
    }

    fadeOutEffect() {
        $(this.fadeOutBtn).click(() => {
            $(this.fadeOutParagraph).fadeOut(1000);
        });
    
        $(this.viewFadeOutExampleIcon).on('click', () => {
            $(this.fadeOutSourceCodeContainer).hide();
            $(this.fadeOutParagraph).fadeIn();
            $(this.fadeOutDemoContainer).fadeIn(1000);
        });
    
        $(this.viewFadeOutSourceCodeIcon).on('click', () => {
            $(this.fadeOutParagraph).fadeIn();
            const html = `
                $('.btn').click(function() {
                    $('.paragraph').fadeOut(1000);
                });
            `;
        
            $(this.fadeOutSourceCodeContainer).html(hljs.highlightAuto(html).value);
            // show source code.
            $(this.fadeOutDemoContainer).hide();
            $(this.fadeOutSourceCodeContainer).fadeIn(1000);
        });
    }

    fadeToggleEffect() {
        $(this.fadeToggleBtn).click(() => {
            $(this.fadeToggleParagraph).fadeToggle(1000);
        });
    
        $(this.viewFadeToggleExampleIcon).on('click', () => {
            $(this.fadeToggleSourceCodeContainer).hide();
            $(this.fadeToggleDemoContainer).fadeIn(1000);
        });
    
        $(this.viewFadeToggleSourceCodeIcon).on('click', () => {
            const html = `
                $('.btn').click(function() {
                    $('.paragraph').fadeToggle(1000);
                });
            `;
        
            $(this.fadeToggleSourceCodeContainer).html(hljs.highlightAuto(html).value);
            // show source code.
            $(this.fadeToggleDemoContainer).hide();
            $(this.fadeToggleSourceCodeContainer).fadeIn(1000);
        });
    }
}

class SlidingEffect {
    // Slide Down Effect Selectors
    slideDownBtn = '.slide-down-btn';
    slideDownParagraph = '.slide-down-paragraph';
    viewSlideDownExampleIcon = '.view-slide-down-example-icon';
    viewSlideDownSourceCodeIcon = '.view-slide-down-source-code-icon';
    slideDownSourceCodeContainer = '.slide-down-source-code-container';
    slideDownDemoContainer = '.slide-down-demo-container';

    // Slide Up Effect Selectors
    slideUpBtn = '.slide-up-btn';
    slideUpParagraph = '.slide-up-paragraph';
    viewSlideUpExampleIcon = '.view-slide-up-example-icon';
    viewSlideUpSourceCodeIcon = '.view-slide-up-source-code-icon';
    slideUpSourceCodeContainer = '.slide-up-source-code-container';
    slideUpDemoContainer = '.slide-up-demo-container';

    // Slide Toggle Effect Selectors
    slideToggleBtn = '.slide-toggle-btn';
    slideToggleParagraph = '.slide-toggle-paragraph';
    viewSlideToggleExampleIcon = '.view-slide-toggle-example-icon';
    viewSlideToggleSourceCodeIcon = '.view-slide-toggle-source-code-icon';
    slideToggleSourceCodeContainer = '.slide-toggle-source-code-container';
    slideToggleDemoContainer = '.slide-toggle-demo-container';

    slideDownEffect() {
        $(this.slideDownBtn).click(() => {
            $(this.slideDownParagraph).hide();
        });
    
        $(this.viewSlideDownExampleIcon).on('click', () => {
            // show demo example.
            $(this.slideDownParagraph).show();
            $(this.slideDownSourceCodeContainer).hide();
            $(this.slideDownDemoContainer).fadeIn(1000);
        });
    
        $(this.viewSlideDownSourceCodeIcon).on('click', () => {
            const html = `
                $('.hide-btn').click(function() {
                    $('.hide-paragraph').hide();
                });
            `;
        
            $(this.slideDownSourceCodeContainer).html(hljs.highlightAuto(html).value);
            // show source code.
            $(this.slideDownDemoContainer).hide();
            $(this.slideDownSourceCodeContainer).fadeIn(1000);
        });
    }

    slideUpEffect() {
        $(this.slideUpBtn).click(() => {
            $(this.slideUpParagraph).show();
        });
    
        $(this.viewSlideUpExampleIcon).on('click', () => {
            $(this.slideUpParagraph).hide();
            $(this.slideUpSourceCodeContainer).hide();
            $(this.slideUpDemoContainer).fadeIn(1000);
        });
    
        $(this.viewSlideUpSourceCodeIcon).on('click', () => {
            const html = `
                $('.show-btn').click(function() {
                    $('.show-paragraph').show();
                });
            `;
        
            $(this.slideUpSourceCodeContainer).html(hljs.highlightAuto(html).value);
            $(this.slideUpDemoContainer).hide();
            $(this.slideUpSourceCodeContainer).fadeIn(1000);
        });
    }

    slideToggleEffect() {
        $(this.slideToggleBtn).click(() => {
            $(this.slideToggleParagraph).toggle();
        });
    
        $(this.viewSlideToggleExampleIcon).on('click', () => {
            $(this.slideToggleSourceCodeContainer).hide();
            $(this.slideToggleDemoContainer).fadeIn(1000);
        });
    
        $(this.viewSlideToggleSourceCodeIcon).on('click', () => {
            const html = `
                $('.toggle-btn').click(function() {
                    $('.toggle-paragraph').toggle();
                });
            `;
        
            $(this.slideToggleSourceCodeContainer).html(hljs.highlightAuto(html).value);
            // show source code.
            $(this.slideToggleDemoContainer).hide();
            $(this.slideToggleSourceCodeContainer).fadeIn(1000);
        });
    }
}

$(function() {
    $('pre').hide();
    const displayEffect = new DisplayEffect();
    const fadingEffect = new FadingEffect();

    displayEffect.hideEffect();
    displayEffect.showEffect();
    displayEffect.toggleEffect();
    
    fadingEffect.fadeInEffect();
    fadingEffect.fadeOutEffect();
    fadingEffect.fadeToggleEffect();
})