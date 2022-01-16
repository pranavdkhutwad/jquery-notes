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
    const formMethodsContent = getContent(formMethods);
    $('#effects').html(effectsContent);
    $('#html').html(htmlMethodsContent);
    $('#css').html(cssMethodsContent);
    $('#form').html(formMethodsContent);
});