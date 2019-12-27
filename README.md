# json-editor

A small javascript script that allows users to edit JSON files. This library is built to let clients who don't know JSON edit JSON which you load on their website.

This library does not style the content it builds.

## Documentation
### Dependencies
jQuery:

```html
<script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
```

handlebars:
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/2.0.0/handlebars.js"></script>
```

### Usage
Load the script:
```html
<script src="https://cdn.jsdelivr.net/gh/rickwierenga/json-editor@master/jsoneditor.js"></script>
```

#### Creating an editor
Add the following [handlebars](https://handlebarsjs.com/) templates:
```html
<script id="dictkey" type="text/x-handlebars-template">
    <div class="dictkey" key="{{ key }}" style="margin-left: {{ indent }}px;">
        <span>{{ key }}</span>
    </div>
</script>

<script id="listkey" type="text/x-handlebars-template">
    <div class="listkey" key="{{ key }}" style="margin-left: {{ indent }}px;">
        <span>{{ key }}</span>
    </div>
</script>

<script id="value" type="text/x-handlebars-template">
    <div class="value" style="margin-left: {{ indent }}px;">
        <textarea style="width: 500px; height: 50px;">{{ value }}</textarea>
        <a id="delete" class="btn btn-danger">Delete</a>
    </div>
</script>

<script id="keyvalue" type="text/x-handlebars-template">
    <div class="keyvalue" key="{{ key }}" style="margin-left: {{ indent }}px;">
        <span>{{ key }}</span> <textarea style="width: 500px; height: 50px;">{{ value }}</textarea>
    </div>
</script>


<script id="add-button-template" type="text/x-handlebars-template">
    <a id="add" class="btn btn-primary">Add</a>
</script>
```

Then add a placeholder for your editor:
```html
<h1>Editor</h1>
<div class="alert alert-warning" role="alert">
  Do not edit <b>id</b>!
</div>
<a id="save">save</a>
<div id="editor" class="dictkey"></div>
```

If you json file starts with a dictionary use `dictkey`. Use `listkey` for lists.

You can style these however you like as long as you keep the attributes.

```html
<script>
jsonedit($('#editor'), {
  'jsonFile': 'https://www.example.com/path/to/json.json'
});
</script>
```

#### Saving
```html
<script>
$('#save').click(function(){
  save($('#editor'), {
    'url': 'https://www.example.com/path/to/post',
    'success': function(data){
      alert('Saved successfully.');
    },
    'error': function(){
      alert('An error occured while saving.');
    }
  });
});
</script>
```

`'https://www.example.com/path/to/post'` must accept POST requests. The json will be sent in the body.

### Customization
Fork this repo.

---
&copy; Rick Wierenga
