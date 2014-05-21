RandomUser-as-a-Service
===

This is simple clone of <http://randomuser.me>.

The seeds work the same way, but won't match up with randomuser.me.
Currently there are some gender-identity issues
(i.e. Mr. Sally and Mrs. Joseph), but aside from that it's pretty
much the same thing.

  * <http://randomuser.coolaj86.com/api>
  * <http://randomuser.coolaj86.com/api?seed=foobar>
  * <http://randomuser.coolaj86.com/api?gender=male&results=5>
  * <http://randomuser.coolaj86.com/api?lego>

Install & Usage
===

```bash
git clone git@github.com:coolaj86/randomuser-as-a-service.git
pushd randomuser-as-a-service
vim config.js # change host and port to your host and port

node runner 3000
```

How it works
===

  * Uses [ChanceJS](http://chancejs.com/) for all the random data and formats.
  * Seeds are converted to integers from strings by adding charCodeAt multiplied by the index
  * When a gender is selected the outcomes that don't match that gender are skipped

Copyright and license
===

Code and documentation copyright 2014 AJ ONeal Tech, LLC.

Code released under the [Apache license](https://github.com/coolaj86/randomuser-as-a-service/blob/master/LICENSE).

Docs released under [Creative Commons](https://github.com/coolaj86/randomuser-as-a-service/blob/master/LICENSE.DOCS).
