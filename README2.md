# Cookie MQ
A tiny lib for pushing messages between browser windows.

```javascript
cookiemq.listen('default', function(m){alert(m);});
cookiemq.push('default', "o_O HEY YOU GUUUUUYS!!! o_O");
```

## TODO

* Make it a queue of messages, not just a string
* Keep listen from firing duplicates without having to clear manually
* Create some sort of garbage collection