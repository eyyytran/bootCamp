Where should you put the link in the html file? - if you put the styles link in the head, the colors and shapes will load before the actual content. - if you put the link in the end, the ugly content will load before the styling. it's all depends on what you want to see first. - you could use 'defer' in the link if you put it in the head to defer it's implementation.

```
<link defer rel="stylesheet" href="style.css" />
```
