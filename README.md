# json-editor

A small javascript script that allows users to edit JSON files.


## Documentation
### Dependencies
Requires Bootstrap and jQuery (loaded by Bootstrap).

```html
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
```

### Usage
Load the script:
```html
<script src="https://raw.githubusercontent.com/rickwierenga/json-editor/master/jsoneditor.js"></script>
```

Tell it where to edit:
```html
<script>
  jsonedit($('#editor'), {
    'json_file': 'https://www.example.com/path/to/json.json',
    'push': 'https://www.example.com/path/to/post'
  });
</script>
```

`'https://www.example.com/path/to/post'` must accept POST requests. The json will be sent in the body.

---
&copy; Rick Wierenga
