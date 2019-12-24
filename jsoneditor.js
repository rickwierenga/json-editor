function jsonedit(object, info) {
    $.getJSON(info['jsonFile'], function(json) {
        var template = Handlebars.compile($("#keyvalue").html());
        $.map(json, function(value, key) {
            add(key, value, 0, $('#editor'))
        })
    });

    function add(key, value, indent, parent) {
        // TODO: add lines like sublime has.

        let extra = 20;

        if (typeof value === 'string' || value instanceof String || typeof value === 'number' || value instanceof Number) {
            if (key === undefined || key === '') {
                var template = Handlebars.compile($("#value").html());
                parent.append(template({value: value, indent: indent}));
            } else {
                var template = Handlebars.compile($("#keyvalue").html());
                parent.append(template({key: key, value: value, indent: indent}));
            }
        } else if (Array.isArray(value)) {
            let template = Handlebars.compile($("#listkey").html());
            let newRow = $(template({key: key, indent: indent}));
            parent.append(newRow);

            for (var i = 0; i < value.length; i++) {
                add('', value[i], indent+extra, newRow);
            }
            // TODO: add add button.
            // TODO: add delete button.

        } else {
            let template = Handlebars.compile($("#dictkey").html());
            let newRow = $(template({key: key, indent: indent}));
            parent.append(newRow);

            $.map(value, function(value, key) {
                add(key, value, indent+extra, newRow);
            });
        }
    }
}

function save(object, info) {
    let data = loadJSON(object);
    $.ajax({
        url: info['url'],
        type: 'POST',
        contentType:'application/json',
        data: JSON.stringify(data),
        success: info['success'],
        error: info['error']
    });

    function loadJSON(object) {
        var built = {};
        if (object.hasClass('dictkey')) {
            let elements = object.children(':not(span)')
            for (var i = 0; i < elements.length; i++) {
                let element = $(elements[i]);
                let key = element.attr('key');
                built[key] = loadJSON(element);
            }
        } else if (object.hasClass('listkey')) {
            let key = object.attr('key');
            var items = object.children(':not(span)');
            var parsedItems = [];
            items.each(function(index){
                let t = $(this);
                let load = loadJSON($(this));
                parsedItems.push(load);
            });
            built = parsedItems;
        } else if (object.hasClass('keyvalue')) {
            let value = object.children('textarea:first')[0].value;
            built = value;
        } else if (object.hasClass('value')) {
            let value = object.children('textarea:first')[0].value;
            built = value;
        }
        return built;
    }
}
