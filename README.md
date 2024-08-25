# HtAct🧨

## Introduction🔵

HtAct is a simple yet efficient library for HTML and JavaScript that allows you to write cleaner code. This library enables you to use files within each other using JavaScript. You might be confused by this statement, but you'll understand better as we continue. Additionally, I would be happy to hear your feedback.

## Features🧰

- **Easy to Use**: you can easily use it
- **One of the best**: uses modern methods to improve performance

## Installation💻

You can install HtAct using npm:

```bash
npm install htact
```


## How to use:💻

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index page</title>
    <HtAct>
        Header -> "Header",
        Footer -> "footer/Footer"
    </HtAct>
</head>
<body>
@[Header]
<h1>main</h1>
@[Footer]

<script type="module">
    import {HtAct} from "./node_modules/htact/HtAct.js";

    HtAct(true, "console", "../components/", ".HTA")
</script>

</body>
</html>
```

### Import:

```html
    <HtAct>
        Header -> "Header",
        Footer -> "footer/Footer"
    </HtAct>
```

### Use:

```html
    @[Header]
<!--    other code-->
    @[Footer]
```



### Start:

```html
<script type="module">
    import {HtAct} from "./node_modules/htact/HtAct.js";

    HtAct(true, "console", "../components/", ".HTA")
</script>
```
