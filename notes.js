const effects = {
    title: 'Techniques for adding animation to a web page.',
    note: `
        <p>
            <div>speed - specifies speed of the delay, possible values are slow, fast, miliseconds</div>
            <div>callback - function to be called after completion of effect.</div>
        </p>
    `,
    methods: [
        {
            name: 'Hide',
            desc: `
                <p>.hide() method use to hide an element.</p>
                <p>$(selector).hide()</p>
                <p>$(selector).hide(speed, callback)</p>                                        
            `
        },
        {
            name: 'Show',
            desc: `
                <p>.show() method use to show an element.</p>
                <p>$(selector).show()</p>
                <p>$(selector).show(speed, callback)</p>                                        
            `
        },
        {
            name: 'Toggle',
            desc: `
                <p>toggles between the hide() and show() methods.</p>
                <p>$(selector).toggle()</p>
                <p>$(selector).toggle(speed, callback)</p>                                        
            `
        },
        {
            name: 'Fade In',
            desc: `
                <p>Fade in the element.</p>
                <p>$(selector).fadeIn()</p>
                <p>$(selector).fadeIn(speed, callback)</p>                                      
            `
        },
        {
            name: 'Fade Out',
            desc: `
                <p>Fade out the element</p>
                <p>$(selector).fadeOut()</p>
                <p>$(selector).fadeOut(speed, callback)</p>                                       
            `
        },
        {
            name: 'Fade Toggle',
            desc: `
                <p>toggles between the fadeIn() and fadeOut() methods.</p>
                <p>$(selector).fadeToggle()</p>
                <p>$(selector).fadeToggle(speed, callback)</p>                                        
            `
        },
        {
            name: 'Slide Down',
            desc: `
                <p>To slide down an element.</p>
                <p>$(selector).slideDown()</p>
                <p>$(selector).slideDown(speed, callback)</p>                                       
            `
        },
        {
            name: 'Slide Up',
            desc: `
                <p>To slide up an element.</p>
                <p>$(selector).slideUp()</p>
                <p>$(selector).slideUp(speed, callback)</p>                                      
            `
        },
        {
            name: 'Slide Toggle',
            desc: `
                <p>toggles between the slideDown() and slideUp() methods.</p>
                <p>$(selector).slideToggle()</p>
                <p>$(selector).slideToggle(speed, callback)</p>                                      
            `
        },
        {
            name: 'Animate',
            desc: `
                <p>Provides a way to create custom animation.</p>
                <p>$(selector).animate({ params }, speed, callback)</p>
                <p>params - Defines CSS properties to be animated.</p>                                      
            `
        }
    ]
};

const htmlMethods = {
    title: 'To manipulate DOM.',
    note: '',
    methods: [
        {
            name: 'Html',
            desc: `
                <p>.html() to get or set html content for selected element.</p>
                <p>$(selector).html()</p>
                <p>$(selector).html(content)</p>                                       
            `
        },
        {
            name: 'Text',
            desc: `
                <p>.text() to set or return the text content of selected elements.</p>
                <p>$(selector).text()</p>
                <p>$(selector).text(content)</p>                                    
            `
        },
        {
            name: 'Val',
            desc: `
                <p>.val() to get current value of the first element in the set of matched elements.</p>
                <p>.val() to set the value of every matched element.</p>
                <p>$(selector).val()</p>
                <p>$(selector).val(value)</p>                                    
            `
        },
        {
            name: 'Append',
            desc: `
                <p>To append the content inside selected element.</p>
                <p>$(selector).append(&lt;Html Element&gt;)</p>
                <p>$(selector).append(&lt;jQuery Object&gt;)</p>
                <p>$(selector).append(&lt;DOM Element&gt;)</p>                                    
            `
        },
        {
            name: 'Append To',
            desc: `
                <p>To add additional content inside selected element.</p>
                <p>It is similar to jQuery append() method only syntactical difference</p>
                <p>$(content).appendTo(selector)</p>                                       
            `
        },
        {
            name: 'Prepend',
            desc: `
                <p>To prepend the content inside selected element.</p>
                <p>$(selector).prepend(content)</p>                                       
            `
        },
        {
            name: 'After',
            desc: `
                <p>To add an element after selected element and not inside.</p>
                <p>$(selector).after(content)</p>                                       
            `
        },
        {
            name: 'Before',
            desc: `
                <p>To add an element before selected element and not inside.</p>
                <p>$(selector).before(content)</p>                                      
            `
        },
        {
            name: 'Remove',
            desc: `
                <p>It is use to remove the selected element out of the DOM.</p>
                <p>It removes selected element, its child nodes, events and data.</p>
                <p>$(selector).remove()</p>                                       
            `
        },
        {
            name: 'Empty',
            desc: `
                <p>It is use to remove selected element's child nodes and not selected element.</p>
                <p>$(selector).empty()</p>                                       
            `
        },
        {
            name: 'Detach',
            desc: `
                <p>Used to remove selected element and its child nodes but keeps attached events and data.</p>
                <p>Saves a copy of removed elements to reinsert them whenever needed them.</p>
                <p>$(selector).detach()</p>                                       
            `
        },
        {
            name: 'Wrap',
            desc: `
                <p>Used to wrap specified HTML elements around each selected element.</p>
                <p>$(selector).wrap(<HTML Element>)</p>    
                <p>$(selector).wrap(<jQuery Objects>)</p>
                <p>$(selector).wrap(<DOM Elements>)</p>                        
            `
        },
        {
            name: 'Clone',
            desc: `
                <p>Used to make copies of the set of matched elements.</p>
                <p>$(selector).clone(true)</p>
                <p>$(selector).clone(false)</p>
                <p>false - don't copy event handlers. It is a default value.</p>
                <p>true - copy event handlers.</p>    
            `
        },
        {
            name: 'scrollTop',
            desc: `
                <p>Used to set or return the vertical scrollbar position for the selected element.</p>
                <p>Scrollbar position 0 = top position.</p>
                <p>$(selector).scrollTop()</p>
            `
        },
        {
            name: 'Attribute',
            desc: `
                <p>attr() method used to set or return attributes and values of the selected elements.</p>
                <p>$(selector).attr(attribute)</p>
                <p>$(selector).attr(attribute, value)</p>
            `
        },
        {
            name: 'Property',
            desc: `
                <p>prop() method used to return the value of a property for the first element in a set of matched elements.</p>
                <p>It is used to set one or more property value for a set of matched element.</p>
                <p>$(selector).prop(property)</p>
                <p>$(selector).attr(property, value)</p>
            `
        }
    ]
};

const cssMethods = {
    title: 'To manipulate CSS properties.',
    note: '',
    methods: [
        {
            name: 'css',
            desc: `
                <p>.css() to get or set style properties or values for selected elements.</p>
                <p>$(selector).css('propertyname')</p>
                <p>$(selector).css('propertyname', value)</p>
                <p>$(selector).css({ 'propertyname': 'value', ...})</p>                                      
            `
        },
        {
            name: 'offset',
            desc: `
                <p>Used to get the current offset of the first matched element.</p>
                <p>Returns the object with two properties: top and left position in pixels.</p>
                <p>$(selector).offset()</p>
                <p>$(selector).offset({ top: value, left: value })</p>                                    
            `
        },
        {
            name: 'position',
            desc: `
                <p>Used to retrieve the current position of an element relative to the parent element.</p>
                <p>Returns the object with two properties: top and left position in pixels.</p>
                <p>$(selector).position()</p>
            `
        },
        {
            name: 'Add Class',
            desc: `
                <p>addClass used to add css classes dynamically.</p>
                <p>$(selector).addClass('class1, class2 ...')
            `
        },
        {
            name: 'Remove Class',
            desc: `
                <p>removeClass used to remove css classes dynamically.</p>
                <p>$(selector).removeClass('class1, class2 ...')
            `
        },
        {
            name: 'Toggle Class',
            desc: `
                <p>toggles between addClass() and removeClass() methods.</p>
                <p>$(selector).toggleClass('class1, class2 ...')
            `
        },
        {
            name: 'Has Class',
            desc: `
                <p>To check if specified class exist or not.</p>
                <p>$(selector).hasClass('classname')
            `
        }
    ]
};

const dimensionMethods = {
    title: 'Dimensions Methods',
    note: '',
    methods: [
        {
            name: 'width and height',
            desc: `
                <p>.width() sets or returns actual width of an element</p>
                <p>.height() sets or returns actual height of an element</p>
                <p>$(selector).width()</p>
                <p>$(selector).height()</p>
            `
        },
        {
            name: 'innerWidth and innerHeight',
            desc: `
                <p>The innerWidth() method returns the width of an element (includes padding).</p>
                <p>The innerHeight() method returns the height of an element (includes padding).</p>
                <p>$(selector).innerWidth()</p>
                <p>$(selector).innerHeight()</p>            
            `
        },
        {
            name: 'outerWidth and outerHeight',
            desc: `
                <p>The outerWidth() method returns the width of an element (includes padding and border).</p>
                <p>The outerHeight() method returns the height of an element (includes padding and border).</p>
                <p>$(selector).outerWidth()</p>
                <p>$(selector).outerHeight()</p>
            `
        },
        {
            name: 'outerWidth and outerHeight with true flag',
            desc: `
                <p>The outerWidth(true) method returns the width of an element (includes padding, border, and margin).</p>
                <p>The outerHeight(true) method returns the height of an element (includes padding, border, and margin).</p>
                <p>$(selector).outerWidth(true)</p>
                <p>$(selector).outerHeight(true)</p>
            `
        }
    ]
};

const formMethods = {
    title: 'Form Management in jQuery',
    note: '',
    methods: [
        {
            name: 'Serialize',
            desc: `
                <p>.serialize() is used to create a text string in standard URL-encoded notation.</p>
                <p>$(selector).serialize()</p>
            `
        },
        {
            name: 'Serialize Array',
            desc: `
                <p>.serializeArray() is used to create a JS array of objects by serializing form values.</p>
                <p>$(selector).serializeArray()</p>
            `
        }
    ]
};

const eventsMethods = {
    title: 'To handle user events',
    note: '',
    methods: [
        {
            name: 'click',
            desc: `
                <p>Occurs when an element is clicked.</p>
                <p>$(selector).click(function() { })</p>
            `
        },
        {
            name: 'mouseenter',
            desc: `
                <p>Occurs when mouse pointer is over the selected element.</p>
                <p>$(selector).mouseenter(function() { })</p>
            `
        },
        {
            name: 'mouseleave',
            desc: `
                <p>Occurs when mouse pointer leaves the selected element.</p>
                <p>$(selector).mouseleave(function() { })</p>
            `
        },
        {
            name: 'keyup',
            desc: `
                <p>Occurs when keyboard key is released.</p>
                <p>$(selector).keypress(function() { })</p>
            `
        },
        {
            name: 'keydown',
            desc: `
                <p>Occurs when keyboard key is pressed down.</p>
                <p>$(selector).keydown(function() { })</p>
            `
        },
        {
            name: 'blur',
            desc: `
                <p>Occurs when element loses focus.</p>
                <p>$(selector).blur(function() { })</p>
            `
        },
        {
            name: 'change',
            desc: `
                <p>Occurs when value of input has been changed.</p>
                <p>$(selector).change(function() { })</p>
            `
        },
        {
            name: 'on',
            desc: `
                <p>Used to attached one or more event handlers for the selected elements</p>
                <p>Used to bind events for dynamic elements.
                <p>$(selector).on('click', function() { })</p>
                <p>$(selector).on('mouseenter mouseleave', function() { })</p>
                <p>$(selector).on({ mouseenter: function() {}, mouseleave: function() {}})</p>
            `
        }
    ]
};

const traversingMethods = {
    title: 'To handle user events',
    note: '',
    methods: [
        {
            name: 'parent, parents, parentsUntil',
            desc: `
                <p>.parent() returns direct parent element</p>
                <p>.parents() returns all parent elements</p>
                <p>.parentsUntil() returns all parents between given arguments.</p>
                <p>$(selector).parent()</p>
                <p>$(selector).parents()</p>
                <p>$(selector).parentsUntil(selector2)</p>
            `
        },
        {
            name: 'children, find',
            desc: `
                <p>.children() returns all direct children</p>
                <p>.find() returns all children of selected element</p>
                <p>$(selector).children()</p>
                <p>$(selector).find('span')</p>
                <p>$(selector).find('*')</p>
            `
        },
        {
            name: 'siblings',
            desc: `
                <p>returns all siblings</p>
                <p>$(selector).siblings()</p>
            `
        },
        {
            name: 'next, nextAll, nextUntil',
            desc: `
                <p>.next() returns next sibling.</p>
                <p>.nextAll() returns all next siblings.</p>
                <p>.nextUntil() returns all next siblings between two given arguments.</p>
                <p>$(selector).next()</p>
                <p>$(selector).nextAll()</p>
                <p>$(selector).nextUntil('p')</p>
            `
        },
        {
            name: 'prev, prevAll, prevUntil',
            desc: `
                <p>.prev() returns prev sibling.</p>
                <p>.prevAll() returns all prev siblings.</p>
                <p>.prevUntil() returns all prev siblings between two given arguments.</p>
                <p>$(selector).prev()</p>
                <p>$(selector).prevAll()</p>
                <p>$(selector).prevUntil('p')</p>
            `
        },
        {
            name: 'first, last and eq',
            desc: `
                <p>.first() returns first element</p>
                <p>.last() returns last element</p>
                <p>.eq() returns element with specified index</p>
                <p>$(selector).first()</p>
                <p>$(selector).last()</p>
                <p>$(selector).eq(3)</p>
            `
        },
        {
            name: 'filter and not',
            desc: `
                <p>.filter method returns elements that match criteria.</p>
                <p>.not returns elements that do not match criteria</p>
                <p>$('div').filter('.brand')</p>
                <p>$('div').not('.brand')</p>
            `
        }
    ]
};

const ajaxMethods = {
    title: 'To make server calls',
    note: '',
    methods: [
        {
            name: 'GET',
            desc: `
                <p>To read records.</p>
                <p>$.ajax('url', { type: 'GET', dataType: 'json', success: fn, error: fn})</p>
            `
        },
        {
            name: 'POST',
            desc: `
                <p>To create a record.</p>
                <p>$.ajax('url', { type: 'POST', data: {}, dataType: 'json', success: fn, error: fn})</p>
            `
        }
    ]
};

const selectorMethods = {
    title: 'To select DOM elements',
    note: '',
    methods: [
        {
            name: 'element selector',
            desc: `
                <p>Select element based on HTML element.</p>
                <p>$('p')</p>
            `
        },
        {
            name: 'class selector',
            desc: `
                <p>Select element based on class name.</p>
                <p>$('.classname')</p>
            `
        },
        {
            name: 'id selector',
            desc: `
                <p>Select element based on id.</p>
                <p>$('#id')</p>
            `
        },
        {
            name: 'combinator',
            desc: `
                <p>Select all p inside div</p>
                <p>$('div p')</p>
                <p>Select direct p inside div</p>
                <p>$('div>p')</p>
            `
        },
        {
            name: 'adjacent',
            desc: `
                <p>Select p adjacent to div</p>
                <p>$('div+p')</p>
            `
        },
        {
            name: 'siblings',
            desc: `
                <p>Select next siblings p of div</p>
                <p>$('div~p')</p>
            `
        },
        {
            name: 'attribute selector',
            desc: `
                <p>Select element based on attribute</p>
                <p>$(a[href="https://www.google.com"])</p>
            `
        },
        {
            name: 'start with',
            desc: `
                <p>Select all elements which class start with 'ch' </p>
                <p>$('class$=ch')</p>
            `
        },
        {
            name: 'even or odd rows',
            desc: `
                <p>Select even rows</p>
                <p>$('tr:even')</p>
                <p>Select odd rows</p>
                <p>$('tr:odd')</p>
            `
        }
    ]
}

$(function(){
    $('.collapsible').collapsible();

    function getContent(data) {
        const { title, methods, note } = data;
        let text = '';
        $.each(methods, (index, { name, desc }) => {
            text += `
                <div class="card topic">
                    <div class="card-content">
                        <span class="card-title">${ name }</span>
                        ${ desc }
                    </div>
                </div>
            `
        });
        const content = `
            <h5>${ title }</h5>
            ${ text }
            ${ note }
        `

        return content;
    }

    const effectsContent = getContent(effects);
    const htmlMethodsContent = getContent(htmlMethods);
    const cssMethodsContent = getContent(cssMethods);
    const dimensionMethodsContent = getContent(dimensionMethods);
    const formMethodsContent = getContent(formMethods);
    const eventsMethodsContent = getContent(eventsMethods);
    const traversingMethodsContent= getContent(traversingMethods);
    const ajaxMethodsContent = getContent(ajaxMethods);
    const selectorMethodsContent = getContent(selectorMethods);

    $('#effects').html(effectsContent);
    $('#html').html(htmlMethodsContent);
    $('#css').html(cssMethodsContent);
    $('#dimension').html(dimensionMethodsContent);
    $('#form').html(formMethodsContent);
    $('#events').html(eventsMethodsContent);
    $('#traversing').html(traversingMethodsContent);
    $('#ajax').html(ajaxMethodsContent);
    $('#selectors').html(selectorMethodsContent);
});