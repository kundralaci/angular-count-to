## How to use angular count-to with easing and binded values


Include the javascript file.

```
<script src="angular.count-to.min.js"></script>
```

Inject the `count-to` directive in your app.

```
var myApp = angular.module('myApp', ['count-to']);
```

Apply the directive to a dom element.
```
 <span count-to="newScore" count-from="score" duration="1" easing="2.0">{{score}}</span>
```


### Attributes

The following attributes can be set as numbers on the directive element.

- ```count-to```  the number to count to.
- ```count-from```  the number to start counting from.
- ```duration```  how long the count should take in seconds.
- ```easing```  the curve (below 1.0 its slow at the end, above 1.0 its slow at the beginning).
